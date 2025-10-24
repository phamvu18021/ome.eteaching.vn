import { gql } from "@apollo/client";

export const GET_CONTACT = gql`
query NewQuery {
  pageBy(uri: "lien-he") {
    contact {
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
      section1 {
        listSub {
          color
          name
          sub
        }
        sub
        title
        title2
      }
      section2 {
        contacts {
          content
          link
          nameContact
        }
        name
        sub
        link
      }
      section3 {
        content
        img {
          node {
            mediaItemUrl
          }
        }
        title1
        title2
      }
    }
    seo {
      fullHead
    }
  }
}
`