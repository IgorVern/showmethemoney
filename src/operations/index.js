import React from 'react'
import PropTypes from 'prop-types'
import {FlatList, View, KeyboardAvoidingView} from 'react-native'

import {Item} from './item'
import {AddItem} from './add-item'
import {styles} from './styles'


export const Operations = (props) => {
  Operations.propTypes = {
    addOperation: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })).isRequired,
  }

  const operations = props.data.map((item) => ({key: item.title, ...item}))

  return (
    <KeyboardAvoidingView style={styles.container} enabled>
      <View style={styles.list}>
        <FlatList
          data={operations}
          renderItem={({item}) => <Item operation={item} />}
        />
      </View>
      <AddItem add={props.addOperation} />
    </KeyboardAvoidingView>
  )
}
