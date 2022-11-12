import React from 'react'
import { formatDate } from '@util/date'

export default function PostView({ post }) {
  let { title, date, content, featuredImage, author, tags, categories } = post;
  return (
    <article>
      <h1>{title}</h1>
      <span>{formatDate(date)}</span>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}
