export const showContent = (sectionId) => {
  const sections = document.getElementsByClassName('content');

  for (let i = 0; i < sections.length; i += 1) {
    sections[i].style.display = 'none';
  }

  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = 'block';
};

export const setupNavigation = () => {
  const links = document.querySelectorAll('.navbar a');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      showContent(sectionId);
    });
  });
};
