import { Link } from 'react-router-dom'

const AppNavigation = () => {

	return (
		<div className="navigation">
			<span className="bottom-left-radius">
				<Link to="#/winloss_calculator/calculator" >TP/SL calculator</Link>
			</span>
			<span className="bottom-right-radius">
				<Link to="#/winloss_calculator/strategies">Strategies</Link>
			</span>
		</div>
	)
}

export default AppNavigation
