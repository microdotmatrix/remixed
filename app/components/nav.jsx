import { NavLink } from '@remix-run/react';
import { modularScale } from 'polished';

const linkCss = {
  'fontSize': modularScale(2),
}

const Nav = () => {
  return (
    <nav className='site-menu' style={linkCss}>
      <div>
        <NavLink to="/about">About</NavLink>
      </div>
      <div>
        <NavLink to="/blog">Blog</NavLink>
      </div>
      <div>
        <NavLink to="/some-other-shit">Other</NavLink>
      </div>
    </nav>
  )
}

export default Nav
