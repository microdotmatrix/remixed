import { GraphQLClient, gql } from 'graphql-request'

const API_URL = 'https://wp.slayley.com/graphql';

export const graphql = new GraphQLClient(API_URL, {
  headers: {
    "Content-Type": "application/json"
  }
});

export const GET_POSTS = gql`
  query getPosts {
    posts (first: 100, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        postId
        date
        slug
        uri
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
            title
            sizes
            description
            caption
            altText
          }
        }
        tags(first: 10) {
          nodes {
            name
          }
        }
        categories(first: 5) {
          nodes {
            name
          }
        }
        author {
          node {
            name
            slug
            firstName
            lastName
            email
            url
            avatar {
              url
            }
          }
        }
      } 
    }
  }
`;
  
export const GET_POST = gql`
  query getPost($slug: String!) {
    postBy(slug: $slug) {
      id
      slug
      ...PostFragment
    }
  }
  fragment PostFragment on Post {
    date
    title
    excerpt
    content
    seo {
      title
      metaDesc
      opengraphTitle
      opengraphDescription
    }
    featuredImage {
      node {
        sourceUrl
        title
        sizes
        description
        caption
        altText
      }
    }
    tags(first: 10) {
      nodes {
        name
      }
    }
    categories(first: 5) {
      nodes {
        name
      }
    }
    author {
      node {
        name
        firstName
        lastName
        email
        nickname
        slug
        avatar {
          url
        }
      }
    }
  }
`;

export const GET_PAGE = gql`
  query getPage($uri: ID!) {
    page(idType: URI, id: $uri) {
      date
      title
      featuredImage {
        node {
          sourceUrl
          altText
          caption
          description
        }
      }
      slug
      uri
      content
      id
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
      }
    }
  }
`

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 5) {
      nodes {
        name
        slug
        description
        
        ... on SimpleProduct {
          price
          salePrice
          regularPrice
        }
        ... on VariableProduct {
          price
          salePrice
          regularPrice
        }
        ... on ExternalProduct {
          price
          salePrice
          regularPrice
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      name
      slug
      description
      image {
        altText
        sourceUrl
        mediaDetails {
          height
          width
        }
      }
      ... on SimpleProduct {
        price
        salePrice
        regularPrice
      }
      ... on VariableProduct {
        price
        salePrice
        regularPrice
      }
      ... on ExternalProduct {
        price
        salePrice
        regularPrice
      }
    }
  }
`