import { formatDate } from '@util/date'

export default function PostView({ post }) {
  let { title, date, content, featuredImage, author, tags, categories } = post;
  return (
    <>
      <article>
        <header className='w-full overflow-hidden relative z-10'>
          <img src={featuredImage?.node.sourceUrl} alt={featuredImage?.node.altText} className="w-full h-full object-cover object-center absolute z-0" />
          <div className='relative z-10'>
            <h1>{title}</h1>
          </div>
        </header>
        <span>{formatDate(date)}</span>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </>
  )
}
