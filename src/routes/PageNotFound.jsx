import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="error--page">
      <h1>404 page not found</h1>
      <Link to="/" className="back-home--link">
        Go back home
      </Link>
    </section>
  );
};

export default PageNotFound;
