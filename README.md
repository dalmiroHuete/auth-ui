# Auth UI

A modern authentication system built with Next.js, featuring user registration, login, and protected routes. This application provides a clean and responsive user interface for managing user authentication with a robust backend integration.

## Features

- **User Authentication** - Secure login and registration system
- **User Registration** - Complete signup flow with form validation
- **Protected Routes** - Automatic redirection for authenticated/unauthenticated users
- **Modern UI** - Beautiful interface built with Chakra UI
- **Performance** - Optimized with React Query for data fetching
- **Responsive** - Works perfectly on desktop and mobile devices
- **Testing** - Comprehensive test coverage with Jest and React Testing Library

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Chakra UI](https://chakra-ui.com/) - Component library
- [React Query](https://tanstack.com/query) - Data fetching and caching
- [React Hook Form](https://react-hook-form.com/) - Form handling and validation
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Jest](https://jestjs.io/) - Testing framework
- [React Testing Library](https://testing-library.com/) - Component testing

## Project Structure

```
auth-ui/
├── src/
│   └── app/
│       ├── components/
│       │   ├── feedback/
│       │   │   ├── __tests__/
│       │   │   │   └── feedback.test.tsx
│       │   │   └── feedback.tsx
│       │   └── form/
│       │       ├── __tests__/
│       │       │   └── form.test.tsx
│       │       └── form.tsx
│       ├── context/
│       │   ├── auth-context.tsx
│       │   └── auth-provider.tsx
│       ├── home/
│       │   ├── components/
│       │   ├── page.tsx
│       │   └── style.ts
│       ├── hooks/
│       │   ├── auth-api/
│       │   │   └── mutations/
│       │   │       ├── use-login.ts
│       │   │       └── use-signup.ts
│       │   └── use-auth.ts
│       ├── layout.tsx
│       ├── page.tsx
│       ├── providers/
│       │   └── index.tsx
│       ├── services/
│       │   └── auth.service.ts
│       ├── signup/
│       │   └── page.tsx
│       └── utils/
│           ├── constants/
│           │   └── constants.ts
│           └── types/
│               ├── auth.type.ts
│               ├── form-field.type.ts
│               └── user.type.ts
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── coverage/
├── .env.example
├── jest.config.js
├── jest.setup.js
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Authentication Flow

The application implements a complete authentication system with the following features:

### Login Page (`/`)
- Email and password authentication
- Form validation and error handling
- Automatic redirection to home page on successful login
- Link to signup page for new users

### Signup Page (`/signup`)
- User registration with first name, last name, email, and password
- Form validation and error handling
- Success message with automatic redirect to login
- Link back to login page for existing users

### Home Page (`/home`)
- Protected route accessible only to authenticated users
- Displays welcome message with user email
- Logout functionality with automatic redirect to login
- Automatic redirect to login if user is not authenticated

## UI Components

### Form Component
A reusable form component that:
- Accepts dynamic field definitions
- Handles form validation
- Supports different form types (login/signup)
- Provides loading states during submission
- Displays error messages

### Feedback Component
A versatile feedback component that:
- Displays success and error messages
- Supports different message types
- Provides consistent styling across the app

## Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

Test files are co-located with their components:
- `src/app/components/feedback/__tests__/feedback.test.tsx`
- `src/app/components/form/__tests__/form.test.tsx`

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd auth-ui
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. **Start the development server:**
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## How to Use

1. **Access the application** - Navigate to `http://localhost:3000`
2. **Sign Up** - Click "Sign Up" to create a new account
3. **Login** - Use your credentials to sign in
4. **Access Protected Content** - View the home page with your user information
5. **Logout** - Click the logout button to sign out

## API Integration

The application integrates with authentication API endpoints:

- `POST /auth/login` - User authentication
- `POST /auth/signup` - User registration

## Styling

The application uses Chakra UI for consistent styling and theming:
- Responsive design that works on all devices
- Dark/light theme support
- Accessible components
- Modern UI patterns

## Deployment

### Production Build

```bash
npm run build
npm run start
```

### Environment Variables

Make sure to set the correct API URL for your production environment:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.


