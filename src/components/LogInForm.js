import React, {Component} from 'react'
import {Text} from 'react-native'
import firebase from 'firebase'
import {Button, Card, CardSection, Input, Spinner} from './common'

class LogInForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      emailInput: '',
      passwordInput: '',
      error: '',
      loading: false
    }
  }

  onButtonPress = () => {
    const {emailInput, passwordInput} = this.state
    this.setState({
      error:'',
      loading: true
    },()=>{
      firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
        .then(this.onLoginSuccess())
        .catch( () => {
          firebase.auth().createUserWithEmailAndPassword(emailInput, passwordInput)
            .then(this.onLoginSuccess())
            .catch(this.onLoginFail())
        })
    })
  }

  onLoginSuccess = () => {
    this.setState({
      emailInput: '',
      passwordInput: '',
      loading:false,
      error: ''
    })
  }

  onLoginFail = () => {
    this.setState({
      error:'Authentication Failed',
      loading: false,
    })
  }

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size='small'/>
    }
    return(
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    )
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
          {this.renderButton()}
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
