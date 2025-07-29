# AIM Dashboard

A modern, feature-rich dashboard application built with React and TypeScript for managing various platform operations including sessions, assessments, team management, and more.

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom theming support
- **UI Components**: Custom components built with Radix UI primitives
- **Icons**: Lucide React
- **Date Handling**: Custom date picker and range components
- **State Management**: React Hooks and Context
- **Routing**: React Router

## Features

- 🌓 Dark/Light mode support
- 📊 Interactive data tables and statistics
- 🔍 Advanced filtering system
- 📅 Session management with status tracking
- 👥 Team member management
- 🔐 Role-based access control
- 📋 Assessment management
- 💰 Finance and payment tracking
- 📱 Responsive design

## Project Structure

```
client/
├── src/
│   ├── api/          # API integration
│   ├── assets/       # Static assets and images
│   ├── auth/         # Authentication components
│   ├── commons/      # Shared components
│   ├── components/   # UI components
│   ├── constants/    # Application constants
│   ├── data/         # Data models and mock data
│   ├── hooks/        # Custom React hooks
│   ├── layout/       # Layout components
│   ├── lib/          # Utility functions
│   ├── pages/        # Page components
│   ├── routes/       # Routing configuration
│   └── types/        # TypeScript type definitions
```

## Key Components

- **Session Management**: Complete session lifecycle management from creation to completion
- **Assessment System**: Comprehensive assessment creation and management
- **Team Management**: Role-based team member management with permissions
- **Finance Module**: Payment tracking and financial reporting
- **Digital Desk**: Content management and digital asset handling
- **Platform IAM**: Identity and Access Management system

## Getting Started

1. **Installation**

   ```bash
   cd client
   npm install
   ```

2. **Development**

   ```bash
   npm run dev
   ```

3. **Build**
   ```bash
   npm run build
   ```

## Environment Setup

Create a `.env` file in the client directory with necessary environment variables:

```env
VITE_API_URL=your_api_url
VITE_AUTH_TOKEN=your_auth_token
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Component Library

The project uses a custom component library built with:

- Radix UI primitives
- Tailwind CSS
- Custom theming system

Key components include:

- Buttons
- Cards
- Tables
- Forms
- Modals
- Date pickers
- Navigation elements

## Theming

The application supports dynamic theming with:

- Light/Dark mode toggle
- Custom color variables
- Consistent styling across components
- Responsive design patterns


## License

This project is proprietary and confidential. All rights reserved.
