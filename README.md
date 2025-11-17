# Greesh Portfolio
## Interactive 3D Aerospace Portfolio

This is a personal portfolio website for an aerospace engineering student, featuring an interactive 3D satellite model built with React, Three.js, and Tailwind CSS.

## Features

-   **Interactive 3D Satellite**: A central 3D model of a satellite that users can rotate and click on to navigate the site.
-   **Dynamic Content Panels**: Information about skills, experience, and projects is displayed in sleek, animated panels.
-   **Detailed Projects Page**: A separate, themed page provides in-depth descriptions and images for each project.
-   **Responsive Design**: The layout is fully responsive and works on devices of all sizes.
-   -   **Dual Views**: Main interactive 3D satellite view and a complete 2D static site.
-   **Themed Animations**: Custom globe transition animation between main and static views.
-   **Fully Responsive**: Includes mobile-friendly layouts for both the static and projects pages.

## Getting Started

### Prerequisites

-   Node.js and npm (or yarn)
    ```bash
    node -v # check node version
    npm -v # check npm version
    ```

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/greesh-portfolio.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd greeshvarthan_portfolio
    ```
3. Navigate to the react app directory:
    ```bash
    cd app
    ```
3.  Install dependencies:
    ```bash
    npm install # or npm i
    ```

### Running the Application

To start the development server, run:

```bash
npm start
```

## Deployment

This project uses the `gh-pages` package to deploy the React application to GitHub Pages.

### Deployment Steps

1. **Verify the homepage URL** in `app/package.json` is correct for the deployment target:
   ```json
   "homepage": "https://yourusername.github.io/greesh-portfolio"
   ```

2. **Navigate to the app directory**:
   ```bash
   cd app
   ```

3. **Run the deployment command**:
   ```bash
   npm run deploy
   ```

4. **What happens during deployment**:
   - The command automatically builds the static files from your React application
   - These files are then pushed to the `gh-pages` branch of your repository
   - GitHub Pages serves your site from this branch

5. **Access your deployed site**:
   - After deployment completes, your portfolio will be live at the URL specified in the `homepage` field
   - Changes may take a few minutes to appear

### Troubleshooting

- If deployment fails, ensure you have the correct repository permissions
- Verify that the `gh-pages` package is installed: `npm install gh-pages --save-dev`
- Check that your `package.json` includes the deploy script: `"deploy": "gh-pages -d build"`
