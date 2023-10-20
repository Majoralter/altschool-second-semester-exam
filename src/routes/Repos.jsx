import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import { Link } from "react-router-dom";
const Repos = () => {
  const ockotkit = new Octokit({});
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRepos = async () => {
    setIsLoading(true);
    try {
      const response = await ockotkit.request("GET /users/Majoralter/repos"),
        data = await response.data;

      setRepos([...data]);

      setIsLoading(false);
    //   console.log(data);
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
    fetchRepos();

    return () => {};
  }, []);

  const repo = repos.map((item, index) => {
    return (
      <div className="repo" key={index}>
        <h2>{item.name}</h2>

        <Link to={`/public_repos/${item.name}`} className="link">
          View Repo
        </Link>
      </div>
    );
  });

  return (
    <section className="repos">
      <h1>My Repositories</h1>
      {isLoading && <p>Loading...</p>}
      {repo}
    </section>
  );
};

export default Repos;
