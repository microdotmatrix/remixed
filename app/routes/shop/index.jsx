import { Suspense, lazy } from 'react'
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node'
import { graphql, GET_PRODUCTS } from '@api/shopify';

const ProductList = lazy(() => import('@comp/shop/list'))

export let loader = async () => {
  let data = await graphql.request(GET_PRODUCTS, {});
  return json(data.products);
}

export default function Shop() {
  let products = useLoaderData()
  
  if (!products) {
    throw new Response("Not Found", { status: 404 })
  }
  return (
    <Suspense fallback={"Loading..."}>
      <ProductList posts={products} />
    </Suspense>
  )
}