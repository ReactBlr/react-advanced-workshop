export const getRepos = username => {
  return fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    .then(response => response.json())
    .then(data => {
      let repos = data.map(repo => {
        return {
          id: repo.id,
          name: repo.name,
          stars: repo.stargazers_count,
          description: repo.description,
          url: repo.html_url
        };
      });
      repos = repos.sort((a, b) => b.stars - a.stars).slice(0, 5);
      return repos;
    })
    .catch(error => {
      /* Error handling */
      return {
        error
      };
    });
};
