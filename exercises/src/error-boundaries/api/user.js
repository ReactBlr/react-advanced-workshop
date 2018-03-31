export const getUser = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      return {
        username: data.login,
        name: data.name,
        photo: data.avatar_url,
        bio: data.bio || "no description",
        url: data.html_url
      };
    })
    .catch(error => {
      return { error };
    });
};
