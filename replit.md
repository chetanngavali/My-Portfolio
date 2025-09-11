# Overview

This is a modern full-stack personal portfolio website for Alex Chen, showcasing expertise in cybersecurity, photography, design, and web development. The application features a React frontend with Three.js 3D graphics, an Express.js backend API, and a contact form system with database integration.

The portfolio presents Alex's work across multiple disciplines through interactive sections including a hero with 3D particle effects, cybersecurity expertise showcase, photography gallery with lightbox functionality, design portfolio, project showcase with filtering, activities and events section highlighting professional engagements, and a contact form for client inquiries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18 with TypeScript**: Modern component-based architecture using functional components and hooks
- **Vite**: Build tool and development server for fast compilation and hot module replacement
- **Three.js with React Three Fiber**: 3D graphics rendering for interactive particle systems and floating elements
- **Framer Motion**: Animation library for smooth transitions and micro-interactions
- **shadcn/ui**: Pre-built component library using Radix UI primitives with Tailwind CSS styling
- **React Hook Form with Zod**: Form handling with TypeScript-first schema validation
- **TanStack React Query**: Data fetching, caching, and synchronization for API calls
- **Wouter**: Lightweight client-side routing

## Styling and Design
- **Tailwind CSS**: Utility-first CSS framework with custom cyberpunk-themed color palette
- **CSS Custom Properties**: Centralized theme system with dark mode support
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Custom Animations**: CSS keyframes for floating elements and cyber-themed effects

## Backend Architecture
- **Express.js**: RESTful API server with middleware for JSON parsing and logging
- **TypeScript**: Type-safe server-side development
- **In-Memory Storage**: Temporary storage solution using Map data structure for contact submissions
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions

## API Design
- **RESTful Endpoints**: Standard HTTP methods for contact form operations
- **Validation**: Server-side validation using Zod schemas shared between frontend and backend
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request monitoring and debugging

## Development Architecture
- **Monorepo Structure**: Client, server, and shared code in organized directories
- **Shared Schema**: Common TypeScript types and Zod schemas between frontend and backend
- **Path Aliases**: TypeScript path mapping for clean imports and better developer experience
- **Development Tooling**: Hot reload, TypeScript checking, and runtime error overlays

## Component Architecture
- **Section-Based Layout**: Modular sections for different portfolio areas (Hero, About, Cybersecurity, etc.)
- **Reusable UI Components**: Consistent component library following design system principles
- **Custom Hooks**: Intersection observer, scroll progress, mobile detection, and toast notifications
- **Three.js Components**: Isolated 3D components for particle systems and floating elements

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for component architecture and form handling
- **Build Tools**: Vite for development and building, ESBuild for server bundling
- **TypeScript**: Full TypeScript support across frontend and backend

## UI and Animation Libraries
- **Radix UI**: Comprehensive component primitives for accessibility and functionality
- **Three.js**: 3D graphics rendering with React Three Fiber and Drei helpers
- **Framer Motion**: Animation library for smooth transitions and gestures
- **Tailwind CSS**: Utility-first styling with PostCSS processing

## Backend and Database
- **Express.js**: Web framework for API development
- **Drizzle ORM**: Type-safe ORM configured for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database integration
- **Connect PG Simple**: PostgreSQL session store for Express

## Development and Quality Tools
- **TanStack React Query**: Data fetching and state management
- **Zod**: Runtime type validation and schema definition
- **Wouter**: Lightweight routing solution
- **Date-fns**: Date manipulation utilities

## Specialized Libraries
- **Embla Carousel**: Carousel/slider functionality
- **CMDK**: Command menu component
- **Lucide React**: Icon library with consistent design
- **Class Variance Authority**: Component variant management

The application is structured to support easy migration from in-memory storage to PostgreSQL when database provisioning is complete, with all necessary schema and ORM configurations already in place.