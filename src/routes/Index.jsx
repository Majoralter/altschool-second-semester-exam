import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import { Link } from "react-router-dom";

const Index = () => {
  // window.location.reload();

  const octokit = new Octokit({});
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const response = await octokit.request("GET /users/Majoralter"),
        data = await response.data;

      setUser(data);

      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        console.error(
          `Error! Status: ${error.response.status}. Message: ${error.response.data.message}`
        );
      }
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();

    return () => {};
  }, []);

  // console.log(user);

  return (
    <section className="index--section">
      <h1>Welcome to my Github Profile 👋🏾</h1>

      {isLoading && <p>Loading...</p>}

      {!isLoading && (
        <div className="wrapper">
          <div className="details">
            <img src={user.avatar_url} alt="" />
            <h2>Name: {user.name}</h2>
          </div>

          <div className="add--info">
            <h3>Bio: {user.bio}</h3>
            <h3>Followers: {user.followers}</h3>
            <h3>Following: {user.following}</h3>
            <h3>Repos: {user.public_repos}</h3>
          </div>
        </div>
      )}

      <Link to="/public_repos" className="link">
        View Repositories
      </Link>
    </section>
  );
};

export default Index;
