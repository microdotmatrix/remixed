import { Suspense, lazy } from 'react'
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node'
import { API_URL, ACCESS_TOKEN, GET_PRODUCTS } from '@api/shopify';

const ProductList = lazy(() => import('@comp/shop/list'))

export let loader = async () => {
  // let data = await graphql.request(GET_PRODUCTS, {});
  // return json(data.products);
  const shop = API_URL;
  const accessToken = ACCESS_TOKEN;

  try {
    const response = await fetch(
      `https://${shop}/admin/api/2022-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/graphql",
          "X-Shopify-Access-Token": accessToken,
        },
        body: JSON.stringify(GET_PRODUCTS),
      }
    );
    const data = await response.json();
    const {
      data: {
        products: { edges },
      },
    } = data;
    return edges;
  } catch (e) {
    return {};
  }
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