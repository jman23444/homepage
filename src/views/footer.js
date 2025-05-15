
export function createContactFooter() {
  const footer = document.createElement('footer');
  footer.className = 'contact-section';

  const content = document.createElement('div');
  content.className = 'contact-content';

  // Info Block
  const info = document.createElement('div');
  info.className = 'contact-info';

  const h2 = document.createElement('h2');
  h2.textContent = 'Contact me';

  const intro = document.createElement('p');
  intro.textContent = 'Please get in touch if you think our work could be mutually beneficial!';

  const address = document.createElement('address');

  const location = document.createElement('p');
  location.innerHTML = '1234 Random Road<br>Random Town, California 12345';

  const phone = document.createElement('p');
  phone.innerHTML = `
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.2 1.53.65 2.99 1.34 4.35a2 2 0 0 1-.45 2.18l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.18-.45c1.36.69 2.82 1.14 4.35 1.34a2 2 0 0 1 1.72 2V21"/>
    </svg>
    555-555-5555`;

  const email = document.createElement('p');
  email.innerHTML = `
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M4 4h16v16H4z" />
      <path d="M22,4 L12,13 L2,4" />
    </svg>
    <a href="mailto:ashleywilliams.is.not.real@gmail.com">ashleywilliams.is.not.real@gmail.com</a>`;

  address.appendChild(location);
  address.appendChild(phone);
  address.appendChild(email);

  const socials = document.createElement('div');
  socials.className = 'contact-socials';
  socials.innerHTML = `
    <a href="#"><i class="fa-brands fa-github" aria-label="GitHub"></i></a>
    <a href="#"><i class="fa-brands fa-linkedin" aria-label="LinkedIn"></i></a>
    <a href="#"><i class="fa-brands fa-twitter" aria-label="Twitter"></i></a>
  `;

  info.appendChild(h2);
  info.appendChild(intro);
  info.appendChild(address);
  info.appendChild(socials);

  // Image Block
  const imageContainer = document.createElement('div');
  imageContainer.className = 'contact-image';

  const img = document.createElement('img');
  img.src = './assets/footerImage.jpg';
  img.alt = 'Professional woman smiling while working on laptop';

  imageContainer.appendChild(img);

  content.appendChild(info);
  content.appendChild(imageContainer);
  footer.appendChild(content);

  return footer;
}
