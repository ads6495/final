import React from 'react';

const Navbar = () => {
  return (
    <body>
      <nav className="navbar navbar-dark bg-dark fixed-top flex-md-nowrap p-0 shadow">
        <a href="" className="navbar-brand col-sm-3 col-md-2 mr-0">Hello, Admin.</a>
        <input className="form-control form-control-dark w-25" type="text" placeholder='Search' aria-label='Search'></input>
        <ul className='navbar-nav px-5'>
          <li className='nav-item text-nowrap'>
            <a className='nav-link' href="#">Leave Admin Page</a>
          </li>
        </ul>
      </nav>

    </body>
  )
}

export default Navbar;
