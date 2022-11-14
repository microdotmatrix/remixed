import React, { Suspense, lazy } from 'react'
import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { graphql, GET_POST } from '@api/wp'

const PostView = lazy(() => import('@comp/blog/view'))

export let loader = async ({ params }) => {
  // const res = await fetch('https://wp.slayley.com/graphql')
  // return json(await res.json());
  let slug = params.slug
  let data = await graphql.request(GET_POST, { slug });
  return json(data.postBy);
}

export const meta = ({ data }) => ({
  title: `${data.seo.title} - Blog Posts from WordPress`,
  description: `${data.seo.metaDesc}`
});

export default function Post() {
  let post = useLoaderData()
  
  if (!post) {
    throw new Response("Not Found", { status: 404 })
  }
  return (
    <Suspense fallback="Loading...">
      <PostView post={post} />
    </Suspense>
  )
}