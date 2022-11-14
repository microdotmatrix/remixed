import { Suspense, lazy } from 'react'
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node'
import { graphql, GET_POSTS } from '@api/wp';

const PostList = lazy(() => import('@comp/blog/list'))

export let loader = async () => { 
  let data = await graphql.request(GET_POSTS, {});
  return json(data.posts);
}

export default function Blog() {
  let posts = useLoaderData()

  if (!posts) {
    throw new Response("Not Found", { status: 404 })
  }
  return (
    <Suspense fallback={"Loading..."}>
      <PostList posts={posts} />
    </Suspense>
  )
}