import { gql } from "@apollo/client";

export const GET_SEARCH = gql`
  query NewQuery {
    allSearchModal {
      nodes {
        search {
          banner {
            img {
              node {
                mediaItemUrl
              }
            }
            link
          }
          list {
            left
            link
            right
          }
        }
      }
    }
  }
`;
