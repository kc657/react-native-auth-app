import React, {Component} from 'react'
import {Button, Card, CardSection, Input} from './common'

class LogInForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      emailInput: '',
      passwordInput: ''
    }
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.emailInput}
            onChangeText={(emailInput) => this.setState({emailInput})}
            label='Email'
            placeholder='user@example.com'
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.passwordInput}
            onChangeText={(passwordInput) => this.setState({passwordInput})}
            label='Password'
            placeholder='password'
            isPassword
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LogInForm
