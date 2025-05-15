
export function createHeaderSection() {
  const header = document.createElement('header');
  header.className = 'about-section';

  const skewedBg = document.createElement('div');
  skewedBg.className = 'skewed-bg';
  skewedBg.setAttribute('aria-hidden', 'true');
  header.appendChild(skewedBg);

  const section = document.createElement('section');
  section.className = 'about-card';
  section.setAttribute('aria-label', 'Personal profile card');

  // Profile Image Figure
  const figure = document.createElement('figure');
  figure.className = 'profile-image';

  const img = document.createElement('img');
  img.src = './assets/profilePicture.jpg';
  img.alt = 'Professional photo of Danika Patrick';
  
  const overlay = document.createElement('div');
  overlay.className = 'image-overlay';

  const caption = document.createElement('figcaption');
  caption.textContent = 'Danika Patrick';

  figure.appendChild(img);
  figure.appendChild(overlay);
  figure.appendChild(caption);

  // Profile Info
  const info = document.createElement('div');
  info.className = 'profile-info';

  const heading = document.createElement('h1');
  heading.textContent = 'About Me';

  const paragraph = document.createElement('p');
  paragraph.textContent = `I’m Danika, a creative problem solver and full-stack developer focused on building intuitive, performant user experiences. I thrive at the intersection of design, accessibility, and technology.`;

  const nav = document.createElement('nav');
  nav.className = 'social-links';
  nav.setAttribute('aria-label', 'Social media links');

  const links = [
    {
      href: 'https://github.com/',
      label: 'GitHub profile',
      svg: `<svg id="github-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`
    },
    {
      href: 'https://linkedin.com/',
      label: 'LinkedIn profile',
      svg: `<svg id="linkedin-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`
    },
    {
      href: 'https://twitter.com/',
      label: 'Twitter profile',
      svg: `<svg id="twitter-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`
    }
  ];

  links.forEach(({ href, label, svg }) => {
    const anchor = document.createElement('a');
    anchor.href = href;
    anchor.target = '_blank';
    anchor.rel = 'noopener';
    anchor.setAttribute('aria-label', label);
    anchor.innerHTML = svg;
    nav.appendChild(anchor);
  });

  info.appendChild(heading);
  info.appendChild(paragraph);
  info.appendChild(nav);

  section.appendChild(figure);
  section.appendChild(info);
  header.appendChild(section);

  return header;
}
