project = {
    link: String,
    image: String,
    alt: String,
    githubLink: String,
}

newProject = `
<div class="item">
<a href="${project.link}">
  <img src="${project.image}" alt="${project.alt}" />
</a>
<a href="${project.link}" class="btn-light"> <i class="fas fa-eye"></i> Project </a>
<a
  href="${project.githubLink}"
  class="btn-dark"
>
  <i class="fab fa-github"></i> Github
</a>
</div>
`;