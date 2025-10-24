import { gql } from "@apollo/client";

export const GET_LOGIN = gql`
query NewQuery {
  pageBy(uri: "dang-ky") {
    content {
      feature {
        card {
          img {
            node {
              mediaItemUrl
            }
          }
          sub
          title
        }
      }
      newsletter {
        hightline
        img {
          node {
            mediaItemUrl
          }
        }
        sub
        title
      }
    }
    seo {
      fullHead
    }
  }
}`