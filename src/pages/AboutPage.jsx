import Card from "../components/share/Card";
import {Link} from'react-router-dom'

function AboutPage() {
	
	return <Card>
		<div className="about">
			<h1>About This Project</h1>
			<p>This is React app created by Yvonne to leave feedback for a product or service</p>
			<p>Version: 1.0.0</p>
			<p>
				<Link to='/'>Back to Home</Link>
			</p>
		</div>
	</Card>;
}

export default AboutPage;
