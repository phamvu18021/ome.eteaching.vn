import { gql } from "@apollo/client";

export const GET_TEACHER_INFO = gql`
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
      teacherInfo {
        contact {
          icon
          sub
          title
        }
        img {
          node {
            mediaItemUrl
          }
        }
        link
        name
        rating
        socials {
          icon
          link
        }
        sub
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
      }
      seo {
        fullHead
      }
    }
  }
`;
