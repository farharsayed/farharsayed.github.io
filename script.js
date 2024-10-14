// JavaScript for dynamically adding projects
const projects = [
  { title: "Project 1", description: "This is a cool project." },
  { title: "Project 2", description: "Another awesome project." },
  { title: "Project 3", description: "Yet another project!" }
];

const workexp = [
  { title: "BGC Group/ Cantor Fitzgerald", description: "I completed a DevOps-oriented internship here this summer as a technology (infrastructure) intern in the UNIX team."},
  { title: "Quantum Ventura", description: "la"}
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  const projectTitle = document.createElement('h3');
  projectTitle.textContent = project.title;
  
  const projectDesc = document.createElement('p');
  projectDesc.textContent = project.description;

  projectCard.appendChild(projectTitle);
  projectCard.appendChild(projectDesc);

  projectsContainer.appendChild(projectCard);
});

// Handling contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Thank you for your message!");
});

