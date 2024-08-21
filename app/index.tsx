import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  View,
  ListRenderItem,
} from 'react-native'

import useGithub from '@/hooks/useGithub'
import { Repository } from '@/types'
import { router } from 'expo-router'
import { useCallback, useState } from 'react'
import RepoCard from '@/components/RepoCard'
import EmptyResults from '@/components/EmptyResults'
import SearchTextInput from '@/components/SearchTextInput'

export default function HomeScreen() {
  const [input, setInput] = useState('')
  const { results, isLoading, searchRepos } = useGithub()

  const onPress = useCallback((id: number) => {
    router.push({ pathname: `/details`, params: { id } })
  }, [])

  const renderItem: ListRenderItem<Repository> = useCallback(
    ({ item }) => {
      return <RepoCard repo={item} onPress={onPress} />
    },
    [onPress]
  )

  return (
    <View style={styles.container}>
      <SearchTextInput
        input={input}
        setInput={setInput}
        onSubmitEditing={() => searchRepos(input)}
        style={styles.textInput}
      />
      {isLoading ? (
        <ActivityIndicator size={'large'} style={styles.activityIndicator} />
      ) : (
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={results}
          renderItem={renderItem}
          ListEmptyComponent={results && <EmptyResults searchInput={input} />}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    gap: 10,
  },
  textInput: {
    marginBottom: 30,
  },
})
