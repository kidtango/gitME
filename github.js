class GitHub {
  constructor() {
    this.client_id = "20f9b30aca6f2667e058";
    this.client_secret = "134c89496308e178cda37f9be0d407e05211c999";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  //added

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
      this.client_id
      }&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
      this.repos_count
      }&sort=${this.repos_count_sort}&client_id=${
      this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
