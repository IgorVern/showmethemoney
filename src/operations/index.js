import React from 'react'
import PropTypes from 'prop-types'
import {FlatList, View} from 'react-native'

import {Item} from './item'
import {styles} from './styles'


export const Operations = (props) => {
  Operations.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })).isRequired,
  }

  const operations = props.data.map((item) => ({key: item.title, ...item}))

  return (
    <View style={styles.container}>
      <FlatList
        data={operations}
        renderItem={({item}) => <Item operation={item} />}
      />
    </View>
  )
}
