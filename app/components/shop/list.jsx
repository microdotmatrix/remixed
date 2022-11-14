import { Link } from '@remix-run/react';

export default function ProductList({ products }) {
  return (
    <>
      {products?.edges.map((node, index) => (
        <div className="product-card" key={index}>
          <h3>{ node.title }</h3>
          <div dangerouslySetInnerHTML={{ __html: node.description }} />
        </div>
      ))}
    </>
  )
}