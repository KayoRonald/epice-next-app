import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'https://api-sa-east-1.graphcms.com/v2/ckzzurydi8ab401xn3nly1r4j/master' }),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState = {}) {
  // serve para verificar se já existe uma instância, para não criar outra.
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // se ja existe um estado inicial ele restaura para dentro do global (recupera os dados de cache)
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }
  // se estiver no ssr retornar o apolloClientGlobal direto (sempre inicializando no SSR com cache limpo)
  if (typeof window === 'undefined') return apolloClientGlobal

  // se não estiver no SSR verifica e pega o apolloClient que tinha antes ou o apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  // por fim retorna o objeto do apolloClient
  return apolloClient
}
// utilizano um memorize para caso o initialState não mudar, e não ficar reinicializando
export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}