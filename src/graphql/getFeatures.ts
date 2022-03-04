import { gql } from '@apollo/client'

export const GET_FEATURES = gql`
  query {
      features(orderBy: publishedAt_DESC){
      title
      content
      updatedBy {
        name
        picture
      }
    }
  }
`