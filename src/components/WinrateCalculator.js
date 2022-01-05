import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const WinrateCalculator = () => {

	const [value, setValue] = useState({ wins: 0, loses: 0 })
	const [winrate, setWinrate] = useState(0)

	const handleChange = (e) => {
		const targetName = e.target.name
		const targetValue = e.target.value
		setValue({ ...value, [targetName]: parseInt(targetValue) })
	}

	const handleClick = () => {
		const winrate = parseFloat(value.wins / (value.wins + value.loses) * 100).toFixed(2)
		setWinrate(winrate)
	}

	return (
		<>
			<Form.Group className="mb-3">
				<Form.Label>Wins</Form.Label>
				<Form.Control onChange={handleChange} type="number" name="wins" value={value.wins} placeholder="Enter number of wins"></Form.Control>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Loses</Form.Label>
				<Form.Control onChange={handleChange} type="number" name="loses" value={value.loses} placeholder="Enter number of loses"></Form.Control>
			</Form.Group>



			<div className="d-grid gap-2">
				<Button onClick={handleClick} variant="outline-success">Calculate winrate</Button>
			</div>

			<div className={`mt-3 winrateResult d-flex justify-content-center ${winrate >= 66 ? 'text-success' : 'text-danger'}`}>
				{winrate} %
			</div>
		</>
	)
}

export default WinrateCalculator
