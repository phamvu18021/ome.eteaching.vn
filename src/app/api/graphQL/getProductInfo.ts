import { gql } from "@apollo/client";

export const GET_PRODUCT_INFO = gql`
  query GetPostBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      slug
      date
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      categories {
        nodes {
          slug
        }
      }
      author {
        node {
          name
        }
      }
      seo {
        fullHead
      }
      productInfo {
        description
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
        info {
          content
          title
        }
        listimg {
          img {
            node {
              mediaItemUrl
            }
          }
        }
        newsletter {
          hightline
          sub
          title
          img {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;
