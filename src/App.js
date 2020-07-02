import React from 'react';
import './App.css';
/*===============================================
                  Bootstrap
================================================*/
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function App() {
	return (
		<div className="App">
			<Container>
				<h1>This is Form</h1>
				<Form.Group className="col-6">
					<Form.Control type="email" placeholder="Type your email" />
					<Form.Text className="text-muted">
						We will never share your email
					</Form.Text>
				</Form.Group>
			</Container>
		</div>
	);
}

export default App;
