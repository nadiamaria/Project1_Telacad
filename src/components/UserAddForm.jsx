import React from 'react';
import './UserAddForm.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            salary: '',
            imag: '',
            isGoldClient: false
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateSalary(event) {
        this.setState({salary: event.target.value});
    }

    updateImag(event) {
        this.setState({imag: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    render() {
        const {name, email, salary, imag, isGoldClient} = this.state;

        return (
            <div className="col-6 offset-sm-3 pt-5">
                <div className="titleForm text-center pt-2 bg-info">REGISTRATION</div>
                <Form 
                    className="user-add-form p-4"
                    onSubmit={(event) => this.props.submitAddForm(event, name, email, salary, imag, isGoldClient)}>
                    <Form.Group controlId="name">
                        <Form.Label>Name:<span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control 
                            type="text" 
                            name="name"
                            onChange={(event) => this.updateName(event)}
                            placeholder="Enter name" 
                            required/>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email:<span style={{color: "red"}}>*</span></Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email"
                            onChange={(event) => this.updateEmail(event)}
                            placeholder="Enter email" 
                            pattern="[a-z0-9._]+@[a-z0-9.-_]+\.[a-z]{2,4}$"
                            required/>
                        <small id="emailHelp" className="form-text text-muted">Exemple: abc@pqr.com</small>
                    </Form.Group>

                    <Form.Group controlId="salary">
                        <Form.Label>Salary:</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="salary"
                            onChange={(event) => this.updateSalary(event)}
                            placeholder="Enter salary"
                            />
                    </Form.Group>
                

                    <Form.Group controlId="imag">
                        <Form.Label>Image:</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="imag"
                            onChange={(event) => this.updateImag(event)}
                            placeholder="Enter image path" />
                    </Form.Group>

                    <Form.Group controlId="is-gold-client">
                        <Form.Check 
                            type="checkbox" 
                            name="is-gold-client"
                            label="Gold Client" 
                            value="true"
                            onChange={(event) => this.updateIsGoldClient(event)}/>
                    </Form.Group>

                    <Button variant="info" type="submit"  value="Add User" block>
                        Add User
                    </Button>
                </Form>
        </div>
        )
    }
}

export default UserAddForm;