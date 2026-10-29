# Arsene Shimwa — Digital Magazine Portfolio

A responsive React + TypeScript + Vite portfolio with an editorial layout, technical visual language, and evidence-led project case studies.

## Run locally

1. Install Node.js LTS.
2. Extract this folder and open a terminal inside it.
3. Run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

For a production build, run `npm run build`, then `npm run preview`.

## Personalize before publishing

In `src/App.tsx`, update the `profile` object:
- Contact email is set to `shimwaarsene@gmail.com`. The CV links open an email request because no CV PDF was supplied for this package.
- Replace the LinkedIn placeholder with your actual profile URL.
- If you want a direct CV download, add your final CV as `public/resume.pdf` and change the two CV links in `src/App.tsx` to `/resume.pdf`.
- Review every project detail, contribution, and metric against your records and repository before publishing.
- Language labels now read Kinyarwanda — Native, English — Advanced, and German — Intermediate. Confirm they reflect your preferred wording before publishing.

## About the case studies

- **SmartPark:** Describes the final-year project architecture. The 92% plate-recognition accuracy, 2.8-second update latency, and 98% billing accuracy are explicitly labeled as project-reported figures, not independently audited results. Keep them only if your report supports them.
- **Inventory Management System:** Listed as a project; verify the repository details and feature set before expanding the case study.
- **Kigali Pulse — Backend:** Listed as a Django backend project; add its direct public repository URL and verify feature details before publishing.
- **SOPAD — Backend APIs:** Covers public contact/partnership endpoints, validation, scoped throttling, and tests from the development work. Verify the current repository state before describing it as production software.
- **Infrastructure & networks:** Separates BNR internship exposure from the two-campus academic networking project and clearly notes that firewall work was a demonstration.
- **Offensive security:** Describes interests and practice in authorized environments; do not imply real-world engagements or certifications that you have not completed.
- **DevOps:** Describes working knowledge and learning areas, not expert-level proficiency.
- **AI/ML:** Presented as a current learning track, not a completed project. Add a full case study only after there is a reproducible project, evaluation, and repository to demonstrate.

The photo at `public/arsene-original.png` is the exact original uploaded photograph; it has not been edited. CSS controls only how it is displayed/cropped on the page.

## Design & accessibility

- Editorial typography, warm ivory, charcoal, and cobalt accents.
- Responsive navigation and layouts.
- Motion respects the user's reduced-motion preference.
- Project case studies expand inline to keep the page readable while exposing technical detail.
# portifolio-final
