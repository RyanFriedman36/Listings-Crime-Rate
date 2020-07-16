import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormText, FormFeedback,
  } from 'reactstrap';
import './LoginForm.css'

  export class LoginForm extends Component {
      constructor(props)  {
          super(props);
          this.state = {
              'email': '',
              'password': '',
              validate: {
                  emailState: '',
              },
          }
          this.handleChange = this.handleChange.bind(this);
      }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const{ name } = target;
        await this.setState({
            [ name ]: value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${ this.state.email }`)
    }

    render() {
        const { email, password } = this.state;
        return (
            <Container className="App">
                <h2>Log In</h2>
                <Form className="form">
                <Col>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                            value={ email }
                            // valid={ this.state.validate.emailState === 'has-success' }
                            // invalid={ this.state.validate.emailState === 'has-danger' }
                            onChange={ (e) => {
                                // this.validateEmail(e)
                                this.handleChange(e)
                                }
                            }
                        />
                        {/* <FormFeedback valid>
                            Your email looks good.
                        </FormFeedback>
                        <FormFeedback>
                            Looks like there's something wrong with your email.
                        </FormFeedback> */}
                        <FormText>Your username is probably your email.</FormText>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                            value={ password }
                            onChange={ (e) => this.handleChange(e) }
                        />
                    </FormGroup>
                </Col>
                <Button>Submit</Button>
            </Form>
        </Container>
        );
    }
}

export default LoginForm;