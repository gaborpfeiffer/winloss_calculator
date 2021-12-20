import { useContext } from 'react'
import { AppContext } from '../AppContext'

const StrategyInfo = () => {
	const { state } = useContext(AppContext)
	const { selectedStrategy } = state

	return (
		<div className="strategyInfo">
			<span>Take profit:</span>
			<span className="text-success">{selectedStrategy.takeProfit} %</span>

			<span>Stop loss:</span>
			<span className="text-danger">{selectedStrategy.stopLoss} %</span>
		</div>
	)
}

export default StrategyInfo
