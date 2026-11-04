# Salient Fausta Makia — Robotics Portfolio

A responsive, pastel-pink/lavender portfolio website made with plain **HTML, CSS, and JavaScript**. It works on **GitHub Pages** without a build step, package manager, or paid hosting.

## Preview locally

Open `index.html` in your browser. The site uses Google Fonts if internet is available; it will still display with fallback fonts offline.

## Publish to GitHub Pages

1. Create a new GitHub repository, for example `robotics-portfolio`.
2. Upload the **contents of this folder** to the repository root: `index.html`, `styles.css`, `script.js`, `README.md`, `.nojekyll`, and the `assets` folder. Do not upload only the ZIP file.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, and click **Save**.
5. Your public URL will generally be `https://YOUR-USERNAME.github.io/robotics-portfolio/` (use your actual username and repository name).
6. Optional: if the repository is named `YOUR-USERNAME.github.io`, your GitHub Pages homepage can use the shorter `https://YOUR-USERNAME.github.io/` address.

## Personalize in a few minutes

### 1. Replace the portrait

- Put your own photo in `assets`, such as `assets/my-photo.jpg`.
- In `index.html`, find `assets/profile-placeholder.svg` and change it to `assets/my-photo.jpg`.
- Recommended: portrait crop at least 800 × 1000 pixels. The picture will crop automatically using `object-fit: cover`.
- Change the portrait `alt` text to a description of your real photo.
- Delete or customize `<span class="photo-caption">your future photo here ✨</span>` below it.

### 2. Replace project images

The project illustrations are original SVG placeholders, not photos of actual robots. Find the following filenames in `index.html` and replace their `src` paths with your own photos:

- `assets/wheelchair-placeholder.svg`
- `assets/auv-placeholder.svg`
- `assets/firefighting-placeholder.svg`
- `assets/ai-placeholder.svg`

Use JPG, PNG, WebP, or SVG. Replace the `alt` text with accurate descriptions. Remove `<span class="image-placeholder-note">REPLACE WITH PROJECT PHOTO</span>` when finished.

### 3. Add LinkedIn

In `script.js`, replace `linkedinUrl: ''` with your public LinkedIn profile URL. The link is hidden until you do this. The LinkedIn link inside your supplied resume pointed to a **settings page**, so the site does not use it.

### 4. Check the facts and links

- The GitHub link currently points to `https://github.com/makiafausta-netizen` from the hyperlink in your uploaded resume.
- The email address is `sfmakiankonghoenoh@widener.edu` from your resume. Change it in **both `index.html` and `script.js`** if needed.
- Your undergraduate graduation is presented as **May 2027**, and graduate study as **planned for August 2027**; this avoids claiming admission/registration is already confirmed.
- The Isaac Sim description refers to simulation with real sensor input; only describe the work as full **hardware-in-the-loop (HIL)** if physical hardware actually participated in a closed control loop.
- Review any SharkNinja information for confidentiality/NDA obligations before posting. The site uses general technical descriptions, not internal source code or proprietary diagrams.

### 5. Add a downloadable resume (optional)

If you want a public resume PDF, export a version that is safe to share online and place it in `assets/resume.pdf`. Add this link in the hero CTA area of `index.html`:

```html
<a class="button button-outline" href="assets/resume.pdf" download>Download resume</a>
```

**Privacy note:** Your uploaded resume contains a telephone number. This site intentionally doesn't publish it. Carefully review the PDF before posting it online.

## Site features

- Responsive mobile menu
- Accessible navigation and labels
- Project filters (All / Robotics / AI)
- Subtle scroll-in animations, disabled when reduced motion is preferred
- Email contact button and copy-to-clipboard control
- No backend, login, tracking, or private credentials

## Files

```
index.html           Main page and all portfolio content
styles.css           Site design and responsive layout
script.js            Navigation, filters, links, interactions
assets/              Portrait and project illustration placeholders
.nojekyll            Lets GitHub Pages serve static files directly
README.md            This guide
```

Feel free to edit the wording, colors, and project details as your experience grows.
