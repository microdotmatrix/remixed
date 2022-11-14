import { useRef } from "react";
import { NavLink } from '@remix-run/react';
import { modularScale } from 'polished';
import { motion, useCycle } from 'framer-motion';
import { Icon } from '@iconify/react';

import { useDimensions } from '@hooks/useDimensions';

const linkCss = {
  'fontSize': modularScale(2),
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="absolute top-6 right-6"
    >
      <motion.div className="absolute top-0 left-0 w-80" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

const Navigation = () => {
  return (
    <motion.ul variants={navVariants} className='site-menu' style={linkCss}>
      <motion.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <NavLink to="/about">
          <span>About</span> <Icon icon="carbon:information" inline={true} />
        </NavLink>
      </motion.li>
      <motion.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <NavLink to="/blog">
          <span>Blog</span> <Icon icon="carbon:blog" inline={true} />
        </NavLink>
      </motion.li>
      <motion.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <NavLink to="/shop">
          <span>Shop</span> <Icon icon="carbon:shopping-cart" inline={true} />
        </NavLink>
      </motion.li>
      <motion.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <NavLink to="/some-other-shit">
          <span>Contact</span> <Icon icon="carbon:chat" inline={true} />
        </NavLink>
      </motion.li>
    </motion.ul>
  )
}

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="52" height="52" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

export default Nav
