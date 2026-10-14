# Mohamed Emira — Angular Portfolio

A responsive bilingual (English/Arabic) portfolio built with Angular 19, TypeScript, and SCSS, styled around the dark emerald/neon reference and using the supplied portrait.

## Run locally

Requirements: Node.js 20 LTS (or Node 18.19.1+) and npm.

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Production build

```bash
npm run build
```

Angular outputs the production site to `dist/mohamed-emira-portfolio/browser`.

## Deploy on Netlify (recommended)

1. Push this project folder to a new GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project** and select the repository.
3. Set the build command to `npm run build` and publish directory to `dist/mohamed-emira-portfolio/browser` (also configured in `netlify.toml`).
4. Deploy; Netlify will provide a public URL you can send to recruiters. You can connect a custom domain later.

You can also deploy to Firebase Hosting after installing/configuring Firebase CLI and signing in:

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

During `firebase init hosting`, select `dist/mohamed-emira-portfolio/browser` as the public directory and configure it as a single-page app. Do not deploy into an existing Firebase project/site unless you intend to replace that site's hosted content.

## Contact form setup (important)

The contact form uses FormSubmit and submits to `mohamedemira2525@gmail.com`. On the **first submission**, FormSubmit sends an activation email to that inbox; open it and confirm the form before expecting later messages. After activation, test the form from the published URL. FormSubmit is a third-party service; if you prefer a backend or EmailJS, replace the form endpoint and configure that service before launch.

## Before sending to employers

- Check that your CV PDF is the latest version at `public/documents/mohamed-emira-cv.pdf`.
- Verify that the project descriptions reflect your actual contribution and that your employer permits public mention of the projects.
- The project thumbnails are CSS illustrations, not copied screenshots from private company dashboards.
- Test the EN/AR switch, mobile layout, all links, CV download, and contact form after deployment.
