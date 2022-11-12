import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node'
import { graphql, GET_PAGE } from '@api/wp'

export let loader = async ({ params }) => {
  let uri = '/about/'
  let data = await graphql.request(GET_PAGE, { uri })
  return json(data.page)
}

export default function About() {
  let page = useLoaderData()
  if (!page) {
    throw new Response("Not Found", { status: 404 })
  }
  return (
    <>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </>
  )
}