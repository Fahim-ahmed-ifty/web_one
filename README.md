# NextGen Shop - E-commerce Platform

A modern e-commerce platform built with Next.js 15, featuring authentication, product management, and a beautiful UI.

## Features

- 🔐 **Authentication System** - Secure login/register with JWT tokens
- 🛍️ **Product Catalog** - Browse and filter products
- 🎨 **Modern UI** - Beautiful gradient design with animations
- 📱 **Responsive Design** - Works on all devices
- 🚀 **Server-Side Actions** - No client-side API calls
- 🐳 **Docker Support** - Easy database setup
- 🗄️ **PostgreSQL** - Robust database with Prisma ORM

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js Server Actions, Prisma ORM
- **Database**: PostgreSQL (Docker)
- **Authentication**: JWT tokens with bcrypt password hashing
- **UI**: Framer Motion, Lucide React icons

## Prerequisites

- Node.js 18+
- Docker and Docker Compose
- pnpm (recommended) or npm

## Quick Start

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd webone
pnpm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://webone_user:webone_password@localhost:5432/webone_db"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
NEXTAUTH_SECRET="your-nextauth-secret-change-this-in-production"
```

### 3. Start PostgreSQL Database

```bash
docker-compose up -d
```

This will start a PostgreSQL database with the following credentials:

- **Database**: webone_db
- **Username**: webone_user
- **Password**: webone_password
- **Port**: 5432

### 4. Set Up Database Schema

```bash
# Generate Prisma client
pnpm db:generate

# Push schema to database
pnpm db:push
```

### 5. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Database Management

### Prisma Commands

```bash
# Generate Prisma client
pnpm db:generate

# Push schema changes to database
pnpm db:push

# Create and run migrations
pnpm db:migrate

# Open Prisma Studio (database GUI)
pnpm db:studio
```

### Docker Commands

```bash
# Start database
docker-compose up -d

# Stop database
docker-compose down

# View logs
docker-compose logs postgres

# Reset database (removes all data)
docker-compose down -v
docker-compose up -d
```

## Authentication System

The authentication system uses:

- **JWT Tokens** for session management
- **bcrypt** for password hashing
- **HttpOnly Cookies** for secure token storage
- **Server Actions** for all authentication operations

### Features

- ✅ User registration with validation
- ✅ Secure login with password verification
- ✅ JWT token-based sessions
- ✅ Automatic logout functionality
- ✅ Protected routes
- ✅ Form validation with Zod

### API Endpoints

All authentication is handled through server actions:

- `registerUser(data)` - Register new user
- `loginUser(data)` - Login existing user
- `logoutUser()` - Logout and clear session
- `getCurrentUser()` - Get current authenticated user

## Project Structure

```
webone/
├── app/
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utilities and configurations
│   │   ├── actions.ts       # Server actions
│   │   ├── auth.ts          # Authentication utilities
│   │   └── db.ts           # Database configuration
│   ├── login/              # Login page and form
│   ├── register/           # Register page and form
│   └── ...
├── prisma/
│   └── schema.prisma       # Database schema
├── docker-compose.yml      # Database setup
└── package.json
```

## Development

### Adding New Features

1. **Database Changes**: Update `prisma/schema.prisma` and run `pnpm db:push`
2. **Server Actions**: Add new actions in `app/lib/actions.ts`
3. **UI Components**: Create components in `app/components/`
4. **Pages**: Add new pages in `app/` directory

### Code Style

- Use TypeScript for all files
- Follow Next.js 15 App Router conventions
- Use server actions instead of API routes
- Implement proper error handling
- Add loading states for better UX

## Deployment

### Environment Variables

Make sure to set these in production:

```env
DATABASE_URL="your-production-database-url"
JWT_SECRET="your-production-jwt-secret"
NEXTAUTH_SECRET="your-production-nextauth-secret"
```

### Build and Deploy

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## Security Considerations

- ✅ Passwords are hashed with bcrypt
- ✅ JWT tokens are stored in HttpOnly cookies
- ✅ Input validation with Zod schemas
- ✅ SQL injection protection via Prisma
- ✅ CSRF protection with SameSite cookies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
