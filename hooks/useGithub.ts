import { Repo, Repository, RepositoryDetails } from '@/types'
import { useCallback, useState } from 'react'

const GITHUB_API_URL = 'https://api.github.com'

const useGithub = () => {
  const [results, setResults] = useState<Repository[] | null>(null)
  const [repo, setRepo] = useState<RepositoryDetails>(null)
  const [error, setError] = useState<unknown>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getRepo = useCallback((id: number) => {
    setIsLoading(true)
    fetch(`${GITHUB_API_URL}/repositories/${id.toString()}`)
      .then((response) => response.json())
      .then((data) => {
        setRepo({
          name: data?.name,
          description: data?.description,
          id: data?.id,
          stargazers_count: data?.stargazers_count,
          forks_count: data?.forks_count,
          watchers_count: data?.watchers_count,
          owner_avatar_url: data?.owner?.avatar_url,
        })
      })
      .catch((error) => {
        console.error('Error fetching repository info: ', error)
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const searchRepos = useCallback((query: string) => {
    setIsLoading(true)
    fetch(`${GITHUB_API_URL}/search/repositories?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(
          data.items.map((item: Repo) => ({
            name: item?.name,
            description: item?.description,
            id: item?.id,
            owner_avatar_url: item?.owner?.avatar_url,
          }))
        )
      })
      .catch((error) => {
        console.error('Error fetching data: ', error)
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return {
    results,
    repo,
    isLoading,
    searchRepos,
    getRepo,
    error,
  }
}

export default useGithub
