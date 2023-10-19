import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import { Link } from "react-router-dom";

const Repo = () => {
  const { id } = useParams();
  const octokit = new Octokit({});

  const [repo, setRepo] = useState({});
  const [date, setDate] = useState(null);

  const fetchRepoData = async () => {
    const response = await octokit.request(`GET /repos/Majoralter/${id}`),
      data = await response.data;

    setRepo(data);

    let date = data?.created_at.split("T");

    setDate(date[0]);

    // console.log(response);
  };

  useEffect(() => {
    fetchRepoData();

    return () => {};
  }, []);

  return (
    <section className="repo--data">
      <h1>{repo.name}</h1>
      <h2>Language: {repo.language}</h2>

      <div className="tabs">
        <p>Forks: {repo.forks}</p>
        <p>Stars: {repo.stargazers_count}</p>
        <p>Visibility: {repo.visibility}</p>
        <p>Created at: {date}</p>
      </div>

      <Link className="back--link" to="/public_repos">Go back</Link>
    </section>
  );
};

export default Repo;
