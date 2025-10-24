import { gql } from "@apollo/client";

export const GET_ABOUT = gql`
query NewQuery {
  pageBy(uri: "ve-ome") {
    id
    about {
      feature {
        card {
          sub
          title
          img {
            node {
              mediaItemUrl
            }
          }
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
        img {
          node {
            mediaItemUrl
          }
        }
        listImg {
          img {
            node {
              mediaItemUrl
            }
          }
        }
        listsub {
          sub
        }
        name
      }
      section2 {
        cards {
          content
          img {
            node {
              mediaItemUrl
            }
          }
          link
          name
        }
        title
      }
      section3 {
        img {
          node {
            mediaItemUrl
          }
        }
        listDescription {
          content
          title
        }
        listsub {
          sub
        }
        title1
        title2
      }
      section4 {
        content
        number
        text
      }
      section5 {
        cardTeachers {
          img {
            node {
              mediaItemUrl
            }
          }
          major
          name
          social {
            icon
            link
          }
        }
        content
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