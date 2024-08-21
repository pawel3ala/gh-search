import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const EmptyResults = ({ searchInput }: { searchInput: string }) => {
  if (!searchInput) return null
  return (
    <View style={styles.container}>
      <Text>We couldn't find anything </Text>
      <Text>for "{searchInput}" </Text>
      <Image
        source={require('@/assets/images/objects.png')}
        style={styles.image}
      />
    </View>
  )
}

export default EmptyResults

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 100,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    marginTop: 100,
  },
})
