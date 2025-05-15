import './styles/main.css';
import './styles/reset.css';

import { createHeaderSection } from './views/header.js';
import { createProjectGallery } from './views/projectGallery.js';
import { createContactFooter } from './views/footer.js';



document.addEventListener('DOMContentLoaded', () => {
    const headerSection = createHeaderSection();
    const mainSection = createProjectGallery();
    const footerSection = createContactFooter();
    const app = document.getElementById('app');
    if (app) {
        app.appendChild(headerSection);
        app.appendChild(mainSection);
        app.appendChild(footerSection);
    } else {
        console.error('App element not found');
    }
});
