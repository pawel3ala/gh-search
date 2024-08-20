import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsRow = ({
  title,
  count,
  icon,
}: {
  title: string
  count: number
  icon: React.ReactNode
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.rightElement}>
        <Text>{count}</Text>
        {icon}
      </View>
    </View>
  )
}

export default DetailsRow

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  rightElement: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
})
