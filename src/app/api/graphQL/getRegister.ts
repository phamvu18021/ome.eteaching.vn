import { gql } from "@apollo/client";

export const GET_REGISTER = gql`
query NewQuery {
  pageBy(uri: "dang-nhap") {
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