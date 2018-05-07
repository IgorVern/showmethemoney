import React from 'react'
import PropTypes from 'prop-types'
import {View, TextInput, Button} from 'react-native'

import {styles} from './styles'

export class AddItem extends React.Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
  }

  state = {}

  onChange = (fieldName) => (text) => {
    const newState = {}
    newState[fieldName] = text
    this.setState(newState)
  }

  render() {
    const {title, amount} = this.state
    return (
      <View style={styles.input}>
        <TextInput
          style={styles.inputItem}
          placeholder="Title"
          onChangeText={this.onChange('title')}
        />
        <TextInput
          style={styles.inputItem}
          placeholder="Amount"
          keyboardType="numeric"
          onChangeText={this.onChange('amount')}
        />
        <Button title="Add expense" onPress={() => this.props.add({title, amount})} />
      </View>
    )
  }
}
