import { Link } from '@remix-run/react';
import { formatDate } from '@util/date'

export default function PostList({ posts }) {
  return (
    <>
      {posts.nodes?.map(({ title, slug, excerpt, date }, index) => (
        <article key={index}>
          <Link to={slug}>
            <h3>{title}</h3>
          </Link>
          <span>{formatDate(date)}</span>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </article>
      ))}
    </>
  )
}
