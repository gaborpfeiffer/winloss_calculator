import { Row, Col } from 'react-bootstrap'
import StrategyInfo from '../components/StrategyInfo'
import Calculator from '../components/Calculator'

const CalculatorPage = () => {

	return (
		<>
			<Row>
				<Col lg="12">
					<StrategyInfo />
				</Col>
			</Row>
			<hr />
			<Row>
				<Col lg="12">
					<Calculator />
				</Col>
			</Row>
		</>
	)
}

export default CalculatorPage
