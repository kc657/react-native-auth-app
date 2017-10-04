import React, {Component} from 'react'
import {View, Text} from 'react-native'
import firebase from 'firebase'
import {Header} from './components/common'
import LogInForm from './components/LogInForm'

class App extends Component {
  componentWillMount = () => {
    firebase.initializeApp({
      apiKey: 'AIzaSyDeKuhe0J3CUUdB5S49Q1x5nwhiaMiBVOQ',
      authDomain: 'auth-reactnative-b0d11.firebaseapp.com',
      databaseURL: 'https://auth-reactnative-b0d11.firebaseio.com',
      projectId: 'auth-reactnative-b0d11',
      storageBucket: 'auth-reactnative-b0d11.appspot.com',
      messagingSenderId: '186955592850'
    })
  }

  render () {
    return (
      <View>
        <Header headerText='Hello World' />
        <LogInForm />
      </View>
    )
  }
}

export default App
