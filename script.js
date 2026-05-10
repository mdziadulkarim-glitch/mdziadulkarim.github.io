async function loadData() {

  const profile = await fetch('data/profile.json').then(res => res.json());
  const education = await fetch('data/education.json').then(res => res.json());
  const experience = await fetch('data/experience.json').then(res => res.json());
  const publications = await fetch('data/publications.json').then(res => res.json());
  const projects = await fetch('data/projects.json').then(res => res.json());
  const skills = await fetch('data/skills.json').then(res => res.json());

  document.getElementById('about-text').innerText = profile.about;
  document.getElementById('about-description').innerText = profile.about;
  document.getElementById('email').innerText = profile.email;
  document.getElementById('phone').innerText = profile.phone;

  document.getElementById('linkedin-link').href = profile.linkedin;
  document.getElementById('github-link').href = profile.github;
  document.getElementById('researchgate-link').href = profile.researchgate;
  document.getElementById('scholar-link').href = profile.googlescholar;

  education.forEach(item => {
    document.getElementById('education-container').innerHTML += `
      <div class="card">
        <h3>${item.degree}</h3>
        <p>${item.institution}</p>
        <p>${item.year}</p>
      </div>
    `;
  });

  experience.forEach(item => {
    document.getElementById('experience-container').innerHTML += `
      <div class="card">
        <h3>${item.position}</h3>
        <p>${item.organization}</p>
        <p>${item.duration}</p>
      </div>
    `;
  });

  publications.forEach(item => {
    document.getElementById('publications-container').innerHTML += `
      <div class="card">
        <h3>${item.title}</h3>
        <p>${item.publisher} | ${item.conference} | ${item.year}</p>
        <a href="${item.doi}" target="_blank">View Publication</a>
      </div>
    `;
  });

  projects.forEach(item => {
    document.getElementById('projects-container').innerHTML += `
      <div class="card">
        <h3>${item.title}</h3>
        <p>${item.technology}</p>
        <p>${item.description}</p>
      </div>
    `;
  });

  Object.entries(skills).forEach(([category, values]) => {

    let skillHTML = '';

    values.forEach(skill => {
      skillHTML += `<li>${skill}</li>`;
    });

    document.getElementById('skills-container').innerHTML += `
      <div class="card">
        <h3>${category}</h3>
        <ul>${skillHTML}</ul>
      </div>
    `;
  });

}

loadData();
