import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
query NewQuery {
  pageBy(uri: "san-pham") {
    seo {
      fullHead
    }
    products {
      breacrumb {
        tag {
          name
          type
        }
        tittle
      }
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
  }
}
`