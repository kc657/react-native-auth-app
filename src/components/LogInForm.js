import React, {Component} from 'react'
import {Text} from 'react-native'
import firebase from 'firebase'
import {Button, Card, CardSection, Input} from './common'

class LogInForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      emailInput: '',
      passwordInput: '',
      error: ''
    }
  }

  onButtonPress = () => {
    const {emailInput, passwordInput} = this.state
    this.setState({error:''})
    firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
      .catch( () => {
        firebase.auth().createUserWithEmailAndPassword(emailInput,passwordInput)
          .catch( () => {
            this.setState({error:'Authentication Failed'})
          })
      })
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

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LogInForm
