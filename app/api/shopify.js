import { GraphQLClient, gql } from 'graphql-request'

const API_URL = 'https://shadow-work-dev.myshopify.com/api/2022-10/graphql.json';
const ACCESS_TOKEN = '848d24de823edfb8703e15a747bf8132'

export const graphql = new GraphQLClient(API_URL, {
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": ACCESS_TOKEN
  }
});

export function sleep(n = 500) {
  return new Promise((r) => setTimeout(r, n));
}

export const GET_PRODUCTS = gql`
  query getProducts {
    products(first: 20) {
      edges {
        node {
          title
          handle
          id
          description
        }
      }
    }
  }
`