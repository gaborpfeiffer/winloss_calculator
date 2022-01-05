import { Row, Col } from 'react-bootstrap'
import WinrateCalculator from '../components/WinrateCalculator'

const WinratePage = () => {
	return (
		<Row>
			<Col lg="12">
				<WinrateCalculator />
			</Col>
		</Row>
	)
}

export default WinratePage
