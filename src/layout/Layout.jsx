import { Link, Outlet } from "react-router-dom"

const Layout = () =>{
    return (
      <div className="content--layout">
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav--link">
                Github portfolio
              </Link>
            </li>
            <li>
              <Link to="/test" className="nav--link cta">
                Test error boundary
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />

        <footer>&copy; 2023 Altschool second semester Examination</footer>
      </div>
    );
}

export default Layout