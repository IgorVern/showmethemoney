import React from 'react'
import {FlatList, View} from 'react-native'
import {Item} from './item'
import {styles} from './styles'


const renderItem = ({item}) => <Item operation={item} />

export const Operations = (props) => {
  const operations = props.data.map((item) => ({key: item.title, ...item}))

  return (
    <View style={styles.container}>
      <FlatList
        data={operations}
        renderItem={renderItem}
      />
    </View>
  )
}
