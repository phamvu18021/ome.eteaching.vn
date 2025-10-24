import { gql } from "@apollo/client";

export const GET_FOOTER = gql`
  query NewQuery {
    allFooter {
      nodes {
        footerContent {
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
          col1 {
            contact {
              content
              link
              title
            }
            content
            logo {
              node {
                mediaItemUrl
              }
            }
          }
          col2 {
            sub {
              link
              title
            }
            title
          }
          col3 {
            title
            page {
              link
              title
            }
          }
          col4 {
            sub {
              link
              title
            }
            title
          }
          col5 {
            title
            sub {
              link
              title
            }
          }
          col6 {
            appleStore
            ggplay
            title
          }
          foooterEnd {
            center {
              content
              link
              phone
            }
            left
            right {
              title
              icon {
                icon
                link
              }
            }
          }
        }
      }
    }
  }
`;
