import { m, LazyMotion, domAnimation } from "framer-motion";
import { Link } from '@remix-run/react';
import { formatDate } from '@util/date'
import { modularScale } from 'polished';

import Section from '@comp/section'

const articleStyle = {
  padding: modularScale(3)
}

export default function PostList({ posts }) {

  return (
    <>
      {posts.nodes?.map(({ title, slug, excerpt, date, featuredImage }, index) => (
        <Section key={index} className="flex flex-col md:flex-row flex-nowrap post-view">
          <LazyMotion features={domAnimation}>
            <m.figure initial={{ opacity: 0, x: '-50px' }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, staggerChildren: 0.5 }} className='relative overflow-hidden w-full my-6 h-[80vh] md:w-1/2 xl:w-5/12'>
              <Link to={slug}>
                <img src={featuredImage?.node.sourceUrl} alt={featuredImage?.node.altText} className="absolute w-full h-full object-cover object-center" />
              </Link>
              <m.span
                initial={{ opacity: 0, x: '-100px' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute z-10 top-20 right-16 text-4xl"
              >
                {formatDate(date)}
              </m.span>
            </m.figure>
            <m.article initial={{ opacity: 0, x: '50px' }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, staggerChildren: 0.5 }} className='w-full md:w-1/2 xl:w-2/3' style={articleStyle}>
              <Link to={slug}>
                <h2>{title}</h2>
              </Link>
              
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </m.article>
          </LazyMotion>
        </Section>
      ))}
    </>
  )
}