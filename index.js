const contactsContainer = document.querySelector('.contacts');

const contactsContent = contacts.map(c => {
  return `
  <li class="contact">
    <img class="contact-logo" src="${c.icon}" />
    <p>${c.contact}</p>
  </li>
  `;
}).join('');

contactsContainer.innerHTML = contactsContent;

const skillsContainer = document.querySelector('.skills');

const skillsContent = skills.map(s => {
  return `
  <li class="skill">
    <img class="skill-logo" src="${s.icon}" alt="${s.id}" />
    <p>${s.id}</p>
  </li>
  `;
}).join('');

skillsContainer.innerHTML = skillsContent;

const aboutContainer = document.querySelector('ul.about');

aboutContainer.innerHTML = `
  ${mainContent[0].content.map(s => `<li><p>${s}</p></li>`).join('')}
`;