import { Outlet } from '@remix-run/react'

export default function Blog() {
  return (
    <>
      <h1>Blog Posts</h1>
      <Outlet />
    </>
  )
}