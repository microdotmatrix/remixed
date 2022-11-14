import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node'
import { graphql, GET_PAGE } from '@api/wp'

export let loader = async ({ params }) => {
  let uri = '/home/'
  let data = await graphql.request(GET_PAGE, { uri })
  return json(data.page)
}

export default function Index() {
  let page = useLoaderData()

  if (!page) {
    throw new Response("Not Found", { status: 404 })
  }

  return (
    <div className="flex flex-col md:flex-row flex-nowrap">
      <article className='md:w-2/3'>
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </article>

      <aside className='md:w-1/3'>
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
          <h3>Welcome to Remix</h3>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://remix.run/tutorials/blog"
                rel="noreferrer"
                >
                15m Quickstart Blog Tutorial
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://remix.run/tutorials/jokes"
                rel="noreferrer"
                >
                Deep Dive Jokes App Tutorial
              </a>
            </li>
            <li>
              <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
                Remix Docs
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
