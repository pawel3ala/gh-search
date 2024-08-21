import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { router, useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import BackArrowIcon from '@/svg/backArrowIcon'
import useGithub from '@/hooks/useGithub'
import VisibilityIcon from '@/svg/visibilityIcon'
import DetailsRow from '@/components/DetailsRow'
import StarIcon from '@/svg/starIcon'
import Branch from '@/svg/branchIcon'

const BackButton = () => {
  return (
    <Pressable onPress={router.back}>
      <BackArrowIcon />
    </Pressable>
  )
}

export default function Details() {
  const navigation = useNavigation()
  const { id } = useLocalSearchParams()
  const { getRepo, isLoading, repo } = useGithub()

  const {
    name,
    owner_avatar_url,
    description,
    stargazers_count,
    forks_count,
    watchers_count,
  } = repo ?? {}

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name ?? '',
      headerLeft: BackButton,
    })
  }, [id, navigation, name])

  useEffect(() => {
    getRepo(id)
  }, [getRepo, id])

  if (isLoading) {
    return <ActivityIndicator size={'large'} style={styles.activityIndicator} />
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: owner_avatar_url }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text>About</Text>
        <Text>{description}</Text>
        <DetailsRow title="Forks" count={forks_count || 0} icon={<Branch />} />
        <View style={styles.separator} />
        <DetailsRow
          title="Stars"
          count={stargazers_count || 0}
          icon={<StarIcon />}
        />
        <View style={styles.separator} />
        <DetailsRow
          title="Watchers"
          count={watchers_count || 0}
          icon={<VisibilityIcon />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: 10,
    gap: 10,
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
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    marginBottom: 20,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'grey',
    alignSelf: 'center',
  },
})
