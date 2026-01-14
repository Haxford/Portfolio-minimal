# Harry Axford - Portfolio

A personal portfolio, CV, and blog website built with Next.js. This project showcases my journey from IT Technician to Linux Sysadmin and Cloud Engineer, alongside my technical projects and homelab documentation.

## Key Features

### 📄 Digital CV
An interactive, responsive curriculum vitae detailing my professional experience with:
-   **Microsoft Intune & Active Directory**
-   **Microsoft 365 Administration**
-   **Educational IT Support**

### 🔍 SearXNG Meta-Search Proxy
A privacy-focused search interface that demonstrates backend resilience:
-   **Smart Proxy Architecture:** Uses Next.js API routes (`app/api/search`) to act as a proxy between the client and public SearXNG instances.
-   **High Availability:** Implements a failover strategy that automatically rotates through a list of public instances if one fails or times out.
-   **Serverless Compatible:** Designed to run on Vercel without requiring a Docker container for the engine itself.

### ✍️ Technical Blog
A Markdown-based blogging platform for sharing insights on:
-   **Homelab Infrastructure** (Proxmox, Unraid, UniFi)
-   **Linux Customization** (Neovim, Arch Linux)
-   **Career Roadmaps**
-   *Built with MDX, remark-gfm, and Tailwind Typography.*

## Tech Stack

-   **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
-   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Content:** MDX & React Markdown
-   **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

To run this project locally:

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment

This application is optimized for deployment on the [Vercel Platform](https://vercel.com).
