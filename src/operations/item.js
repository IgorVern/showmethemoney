import React from 'react'
import {Text, View} from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'

import {styles} from './styles'


export const Item = (props) => {
  Item.propTypes = {
    operation: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
  }

  const {title, amount, date} = props.operation
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{moment(date).format('DD.MM.YYYY')}</Text>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{amount}</Text>
    </View>
  )
}
