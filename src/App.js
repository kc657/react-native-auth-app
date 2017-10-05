import React, {Component} from 'react'
import {View, Text} from 'react-native'
import firebase from 'firebase'
import {Header, Button, Spinner, CardSection} from './components/common'
import LogInForm from './components/LogInForm'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: null
    }
  }

  componentWillMount = () => {
    firebase.initializeApp({
      apiKey: 'AIzaSyDeKuhe0J3CUUdB5S49Q1x5nwhiaMiBVOQ',
      authDomain: 'auth-reactnative-b0d11.firebaseapp.com',
      databaseURL: 'https://auth-reactnative-b0d11.firebaseio.com',
      projectId: 'auth-reactnative-b0d11',
      storageBucket: 'auth-reactnative-b0d11.appspot.com',
      messagingSenderId: '186955592850'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => {firebase.auth().signOut()}}>
              Log Out
            </Button>
          </CardSection>
        )
      case false:
        return <LogInForm />
      default:
        return <Spinner size='large' />
    }
  }

  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
