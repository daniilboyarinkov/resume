const contactsContainer = document.querySelector('.contacts');

const contactsContent = contacts.map(c => {
  return `
  <div class="contact">
    <img class="contact-logo" src="${c.icon}" />
    <span>${c.contact}</span>
  </div>
  `;
}).join('');

contactsContainer.innerHTML = contactsContent;

const skillsContainer = document.querySelector('.skills');

const skillsContent =  skills.map(s => {
  return `
  <div class="skill">
    <img class="skill-logo" src="${s.icon}" />
    <span>${s.id}</span>
  </div>
  `;
}).join('');

skillsContainer.innerHTML = skillsContent;


const educationContainer = document.querySelector('.education');

educationContainer.innerHTML = `
  <ul class="block">
    ${mainContent[0].content.map(s => `<li>${s}</li>`).join('')}
  </ul>
`;


const personalContainer = document.querySelector('.personal');

personalContainer.innerHTML = `
  <ul class="block">
    ${mainContent[1].content.map(s => `<li>${s}</li>`).join('')}
  </ul
`;