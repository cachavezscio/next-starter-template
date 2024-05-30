# Next.js Starter Template 
This Next.js starter template provides a solid foundation for building web applications. It includes the following features:

- [Shadcn](https://github.com/shadcn): A powerful CSS framework that helps you create beautiful and responsive designs.
- [Auth.js](https://github.com/authjs): A library for handling authentication and authorization in Next.js applications.
- [Prisma](https://github.com/prisma): A modern database toolkit that simplifies database access and management.
- [Tailwind CSS](https://github.com/tailwindcss): A utility-first CSS framework that enables rapid UI development.

To get started with this template, follow these steps:

1. Clone the repository:
  ```bash
  git clone https://github.com/your-username/your-repo.git
  ```

2. Install the dependencies:
  ```bash
  nvm use
  cd your-repo
  sudo npm run i
  ```

3. Configure the environment variables:
   1. Create a mongo instance to add to the .env file
   2. Get google oAuth secrets
  ```bash
  cp .env.example .env
  ```

  Open the `.env` file and update the necessary variables.

1. Start the development server:
  ```bash
  npm run dev
  ```

  This will start the Next.js development server and you can access your application at `http://localhost:3000`.

Feel free to customize this template according to your project requirements. Happy coding!