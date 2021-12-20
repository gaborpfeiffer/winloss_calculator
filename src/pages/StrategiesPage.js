import { Row, Col } from 'react-bootstrap'
import AddStrategyForm from '../components/AddStrategyForm'
import StrategyList from '../components/StrategyList'

const StrategiesPage = () => {

	return (
		<>
			<Row>
				<Col lg="12">
					<AddStrategyForm />
				</Col>
			</Row>

			<Row>
				<Col lg="12">
					<StrategyList />
				</Col>
			</Row>

		</>
	)
}

export default StrategiesPage 
