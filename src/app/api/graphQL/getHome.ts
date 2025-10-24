import { gql } from "@apollo/client";

export const GET_HOME = gql`
  query NewQuery {
  pageBy(uri: "trang-chu") {
    id
    home {
      sliders {
        content
        title
        img {
          node {
            mediaItemUrl
          }
        }
      }
      bestSellers {
        content
        img {
          node {
            mediaItemUrl
          }
        }
        link
        title
      }
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
        img {
          node {
            mediaItemUrl
          }
        }
        hightline
        sub
        title
      }
      popularProducts {
        title
        tags {
          title
          type
        }
      }
      section2 {
        categorycards {
          img {
            node {
              mediaItemUrl
            }
          }
          sub
          title
        }
        promoCards {
          img {
            node {
              mediaItemUrl
            }
          }
          link
          title
        }
        tags {
          link
          title
        }
        title
      }
      section3 {
        banners {
          img1 {
            node {
              mediaItemUrl
            }
          }
          img2 {
            node {
              mediaItemUrl
            }
          }
        }
        tabs {
          banner {
            node {
              mediaItemUrl
            }
          }
          link
          title
          type
        }
        title
      }
      toptrend {
        title
        products {
          cost
          costSale
          img {
            node {
              mediaItemUrl
            }
          }
          name
          rating
        }
      }
    }
    seo {
      fullHead
      title
    }
  }
}
`;
