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
    }
  }
`