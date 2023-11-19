# Fullstack Blog Application using Astro 3.0 & Strapi CMS

Welcome to our Fullstack Blog Application! This project is built with [Astro 3.0](https://astro.build/) on the front-end and [Strapi CMS](https://strapi.io/) on the back-end. It allows you to create, manage, and publish blog content with ease.

## Features

- **Astro 3.0 Frontend:** Utilize the power of Astro 3.0 to build a fast, static site with dynamic features.
- **Strapi CMS Backend:** Manage your blog's content, users, and more with the user-friendly Strapi CMS.
- **Blog Posts:** Create, edit, and delete blog posts with ease. Categorize and tag posts for easy navigation.
- **Responsive Design:** The application is designed to work seamlessly on both desktop and mobile devices.

## Getting Started

### 1. Clone the Repository:

```bash
git clone https://github.com/nidhish-nayak/strapi-blog.git
cd strapi-blog
```

### 2. Setup Strapi CMS:

Navigate to the `server` folder:

```bash
cd server
```

Install dependencies and run Strapi:

```bash
npm install
npm run develop
```

Follow the on-screen instructions to set up your Strapi CMS. Once done, you can access the Strapi admin panel at `http://localhost:1337/admin`.

### 3. Configure Astro Frontend:

Navigate to the `client` folder:

```bash
cd ../client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the `client` directory and add the following:

```env
VITE_STRAPI_API_URL=http://localhost:1337
```

Update the URL if your Strapi instance is running on a different port or domain.

### 4. Run Astro Application:

Start the Astro development server:

```bash
npm run dev
```

Open your browser and go to `http://localhost:3000` to view the blog application.

### 5. Explore and Customize:

- Explore the Strapi admin panel to create blog posts, categories, and manage users.
- Customize the Astro frontend by modifying components in the `src` directory.

## Project Structure

- **backend:** Contains the Strapi CMS configuration and models.
  - `config/`: Strapi configuration files.
  - `api/`: API configurations and routes.
  - ...

- **frontend:** Houses the Astro 3.0 frontend code and components.
  - `src/`: Main source code.
    - `layouts/`: Layout components.
    - `components/`: Reusable components.
    - `pages/`: Individual page components.
    - ...

- **shared:** Shared code or utilities that may be used by both the frontend and backend.

## Available Scripts

In the project directory, you can run:

- **Backend:**

  ```bash
  cd server
  npm install       # Install backend dependencies
  npm run develop   # Run Strapi in development mode
  ```

- **Frontend:**

  ```bash
  cd client
  npm install       # Install frontend dependencies
  npm run dev       # Run Astro in development mode
  ```

## Deployment

To deploy your Fullstack Blog Application, follow the deployment instructions for both Strapi CMS and Astro. You can use platforms like Vercel, Netlify, or others for the frontend, and platforms like Heroku or AWS for the backend.

Feel free to explore the capabilities of Astro and Strapi to enhance and extend the features of your blog application. Happy coding!
