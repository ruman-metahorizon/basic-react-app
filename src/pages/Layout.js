import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/">Signup</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/carousel">Carousel</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;