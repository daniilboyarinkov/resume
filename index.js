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
skillsContainer.innerHTML = skills.map(s => {
  return `
  <li class="skill">
    <img class="skill-logo" src="${s.icon}" alt="${s.id}" />
    <p>${s.id}</p>
  </li>
  `;
});

/* About me section. */

const aboutContainer = document.querySelector('ul.about');
aboutContainer.innerHTML = createLiList(mainContent[0].content);

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
