import React from 'react'
import {Text} from 'react-native'
import PropTypes from 'prop-types'

import {styles} from './styles'


export const Amount = ({value}) => {
  Amount.propTypes = {
    value: PropTypes.number.isRequired,
  }

  const ZERO = 0
  const isPositive = Math.sign(value) >= ZERO
  const color = isPositive ? 'green' : 'red'

  return (
    <Text
      style={[styles.text, {color}]}
    >
      {isPositive ? '+' : '-'}{Math.abs(value)}
    </Text>
  )
}
