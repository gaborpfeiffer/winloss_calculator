import { useState, useContext } from 'react'
import { AppContext } from '../AppContext'
import { Form, Button } from 'react-bootstrap'


const action = 'ADD_STRATEGY'

const AddStrategyForm = () => {

	const { dispatch } = useContext(AppContext)

	const [form, setForm] = useState({
		takeProfit: '',
		stopLoss: ''
	})

	const handleChange = e => {
		const name = e.target.name
		const value = e.target.value
		setForm({
			...form,
			[name]: value
		})
	}

	const handleClick = () => {
		dispatch({ type: action, payload: form })
		setForm({ takeProfit: '', stopLoss: '' })
	}

	return (
		<>
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>Take profit</Form.Label>
					<Form.Control onChange={handleChange} type="number" name="takeProfit" value={form.takeProfit} placeholder="Enter take profit percent"></Form.Control>
				</Form.Group>


				<Form.Group className="mb-3">
					<Form.Label>Stop loss</Form.Label>
					<Form.Control onChange={handleChange} type="number" name="stopLoss" value={form.stopLoss} placeholder="Enter stop loss percent"></Form.Control>
				</Form.Group>
			</Form>
			<div className="d-grid gap-2">
				<Button onClick={handleClick} variant="outline-success">ADD STRATEGY</Button>
			</div>
		</>
	)
}

export default AddStrategyForm
