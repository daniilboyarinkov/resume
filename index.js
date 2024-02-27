/* Dangerous! Never repeat it at home. */
const originalJoin = Array.prototype.join;
Array.prototype.join = function (separator = '') {
  return originalJoin.call(this, separator);
};

/* Utils. */

const createLiList = (array) => array.map((value) => `<li><p>${value}</p></li>`);

/* Header data. */

const contactsContainer = document.querySelector('#contacts');
contactsContainer.innerHTML = contacts.map(c => {
  return `
  <li class="contact">
    <img class="contact-logo" src="${c.icon}" />
    <p>${c.contact}</p>
  </li>
  `;
});

const skillsContainer = document.querySelector('#skills');
skillsContainer.innerHTML = `
<h2>Технологии</h2>
<ul class="keywords">${createLiList(skills)}</ul>
`;

/* About me section. */

const aboutContainer = document.querySelector('#about');
aboutContainer.innerHTML = `
<h2>О себе</h2>
<div>
  ${aboutDescription.split('\n').map((part) => `<p>${part}</p>`)}
</div>
`;

/* Work experience. */

const worksContainer = document.querySelector('#work-experience');
worksContainer.innerHTML = `
  <h2>Опыт работы</h2>
  ${works.map((work) => `
    <section class="work">
      <header>
        <h3>${work.name}</h3>
        <p class="work__position">${work.position}</p>
        <p class="work__period">${work.period}</p>
      </header>
      ${work.description ? `<p class="work__description">${work.description}</p>` : ''}
       <ul class="work__responsibilities">
        ${createLiList(work.responsibilities)}
      </ul>
      <ul class="work__stack">
        <p>Стек:</p>
        ${createLiList(work.stack)}
      </ul>
    </section>
  `)}
`;

/* Education. */

const educationContainer = document.querySelector('#education');
educationContainer.innerHTML = `
  <h2>Образование</h2>
  ${educations.map((education) => `
    <section class="education">
      <header>
        <h3>${education.name}</h3>
        <p class="education__position">${education.position}</p>
        <p class="education__period">${education.period}</p>
      </header>
    </section>
  `)}
`;

const languagesContainer = document.querySelector('#languages');
languagesContainer.innerHTML = `
<h2>Языки</h2>
<ul class="languages">${createLiList(languages)}</ul>
`;

const achievementsContainer = document.querySelector('#achievements');
achievementsContainer.innerHTML = `
<h2>Достижения 2023-2024</h2>
<ul class="achievements">${createLiList(achievements)}</ul>
`;
