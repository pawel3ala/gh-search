import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Repository } from '@/types'

const RepoCard = ({
  repo,
  onPress,
}: {
  repo: Repository
  onPress: (id: number) => void
}) => {
  if (!repo) return null
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(repo.id)}>
      <View style={styles.titleContainer}>
        <Text numberOfLines={1}>{repo.name}</Text>
        <Text numberOfLines={1}>{repo.description}</Text>
      </View>
      <Image source={{ uri: repo.owner_avatar_url }} style={styles.image} />
    </TouchableOpacity>
  )
}

export default RepoCard

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
    padding: 10,
  },
  image: {
    width: 100,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
})
