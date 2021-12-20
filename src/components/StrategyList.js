import { useContext } from 'react'
import { AppContext } from '../AppContext'
import { Table, Button } from 'react-bootstrap'

const deleteAction = 'DELETE_STRATEGY'
const selectAction = 'SELECT_STRATEGY'
const StrategyList = () => {

	const { state, dispatch } = useContext(AppContext)
	const { strategies } = state

	const deleteStrategy = key => {
		dispatch({ type: deleteAction, payload: key })
	}

	const selectStrategy = strategy => {
		dispatch({ type: selectAction, payload: strategy })
	}

	return (
		<Table variant="dark" className="mt-5">
			<thead>
				<tr>
					<th>Take profit</th>
					<th>Stop loss</th>
					<th></th>
				</tr>
			</thead>

			<tbody>
				{strategies.map((value, key) => {
					return (
						<tr key={key}>
							<td className="text-success">{value.takeProfit} %</td>
							<td className="text-danger">{value.stopLoss} %</td>
							<td>
								<div className="d-flex justify-content-around">
									<Button onClick={() => selectStrategy(value)} variant="outline-success">Set as default</Button>
									<Button onClick={() => deleteStrategy(key)} variant="outline-danger">Delete</Button>
								</div>
							</td>
						</tr>

					)
				})}
			</tbody>
		</Table>
	)
}

export default StrategyList
