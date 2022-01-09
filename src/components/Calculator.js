import { useContext, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { AppContext } from '../AppContext'

const Calculator = () => {

	const { state } = useContext(AppContext)
	const { selectedStrategy } = state
	const [entryPrice, setEntryPrice] = useState('')
	const [slTp, setSlTp] = useState({ stopLoss: '', takeProfit: '' })

	const getCalcNumbers = () => {
		return {
			entryPriceNumber: parseFloat(entryPrice),
			takeProfitNumber: parseFloat(selectedStrategy.takeProfit) / 100,
			stopLossNumber: parseFloat(selectedStrategy.stopLoss) / 100
		}
	}

	const handleChange = e => {
		setEntryPrice(e.target.value.replace(',', ''))
	}

	const calcLong = () => {
		const numbers = getCalcNumbers()
		const slMulti = 1 - numbers.stopLossNumber
		const tpMulti = 1 + numbers.takeProfitNumber
		setSlTp({
			stopLoss: (numbers.entryPriceNumber * slMulti).toFixed(3),
			takeProfit: (numbers.entryPriceNumber * tpMulti).toFixed(3)
		})

	}

	const calcShort = () => {
		const numbers = getCalcNumbers()
		const slMulti = 1 + numbers.stopLossNumber
		const tpMulti = 1 - numbers.takeProfitNumber
		setSlTp({
			stopLoss: (numbers.entryPriceNumber * slMulti).toFixed(3),
			takeProfit: (numbers.entryPriceNumber * tpMulti).toFixed(3)
		})

	}

	const copyToClipBoard = (value) => {
		navigator.clipboard.writeText(value)
	}

	return (
		<>
			<Row>
				<Col lg="12">
					<Form>
						<Form.Group>
							<Form.Label>Entry price</Form.Label>
							<Form.Control onChange={handleChange} type="text" placeholder="Enter entry price"></Form.Control>
						</Form.Group>
					</Form>
					<div className="mt-3 mb-3 d-flex justify-content-around">
						<Button onClick={calcLong} variant="outline-success" size="lg">Calc Long</Button>
						<Button onClick={calcShort} variant="outline-danger" size="lg">Calc Short</Button>
					</div>
					<hr />
					<div className="d-flex justify-content-around  mt-5">
						<div className="calcResultItem">
							<span className="text-danger">{slTp.stopLoss}</span>
							<Button onClick={() => { copyToClipBoard(slTp.stopLoss) }} variant="outline-warning" size="lg">Copy</Button>
						</div>

						<div className="calcResultItem">
							<span className="text-success">{slTp.takeProfit}</span>
							<Button onClick={() => { copyToClipBoard(slTp.takeProfit) }} variant="outline-warning" size="lg">Copy</Button>
						</div>
					</div>
				</Col>
			</Row>
		</>
	)

}

export default Calculator
