import React, {Component} from 'react'
import {TextInput} from 'react-native'
import {Button, Card, CardSection} from './common'

class LogInForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  componentWillMount(){
    console.log(this.state.text);
  }

  render () {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={(text) => this.setState({text: text})}
            style={{height: 20, width: 100}}
          />
        </CardSection>

        <CardSection />

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
