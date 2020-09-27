import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href="/">
          <a>Home</a>
        </Link>
      </menu>
    </nav>
  )
}

export default Navbar
