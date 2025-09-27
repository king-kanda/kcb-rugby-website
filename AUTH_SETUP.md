# NextAuth.js Setup Guide

This project includes a complete NextAuth.js v5 authentication setup with Google OAuth and credentials providers.

## Features

✅ **NextAuth.js v5** with App Router support  
✅ **Google OAuth** authentication  
✅ **Credentials-based** authentication  
✅ **Custom sign-in** and error pages  
✅ **Protected routes** component  
✅ **Session management**  
✅ **TypeScript** types extension  
✅ **Responsive design** with Tailwind CSS  

## Getting Started

### 1. Environment Variables

Copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

The `AUTH_SECRET` is already generated. You need to add your Google OAuth credentials:

```env
# Get these from Google Cloud Console
GOOGLE_CLIENT_ID=your-google-client-id-from-google-cloud-console
GOOGLE_CLIENT_SECRET=your-google-client-secret-from-google-cloud-console
```

### 2. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth client ID"
5. Configure OAuth consent screen
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

### 3. Demo Credentials

For testing the credentials provider, use these demo accounts:

**Admin Account:**
- Email: `admin@kcb.com`
- Password: `password123`

**User Account:**
- Email: `user@kcb.com`
- Password: `user123`

## File Structure

```
├── auth.ts                           # NextAuth configuration
├── src/
│   ├── app/
│   │   ├── api/auth/[...nextauth]/   # NextAuth API routes
│   │   ├── auth/
│   │   │   ├── signin/               # Custom sign-in page
│   │   │   └── error/                # Custom error page
│   │   ├── dashboard/                # Protected dashboard example
│   │   ├── layout.tsx                # Root layout with SessionProvider
│   │   └── page.tsx                  # Main page with auth integration
│   └── components/
│       ├── Providers.tsx             # SessionProvider wrapper
│       └── ProtectedRoute.tsx        # Protected route component
├── types/
│   └── next-auth.d.ts               # NextAuth TypeScript extensions
└── .env.local                       # Environment variables
```

## Authentication Flow

### Sign In Options
1. **Google OAuth** - Click "Continue with Google"
2. **Credentials** - Use email/password with demo accounts

### Protected Routes
- Use the `<ProtectedRoute>` component to protect pages
- Automatically redirects unauthenticated users to sign-in page
- Shows loading state during session verification

### Session Access
```tsx
import { useSession } from "next-auth/react"

const { data: session, status } = useSession()

// Check if user is authenticated
if (session) {
  console.log('User:', session.user)
  console.log('Role:', session.user.role)
}
```

## API Routes

- `GET/POST /api/auth/[...nextauth]` - NextAuth API endpoints
- Handles all authentication providers and callbacks

## Pages

- `/auth/signin` - Custom sign-in page with Google OAuth and credentials
- `/auth/error` - Custom error page for authentication failures  
- `/dashboard` - Protected dashboard page (requires authentication)

## Features Demonstrated

### Main Page (`/`)
- Header shows different content based on auth state
- "Buy Tickets" buttons require authentication
- Sign in/out functionality

### Dashboard (`/dashboard`)
- Protected route requiring authentication
- Displays user information and session data
- Example of authenticated content

## Customization

### Adding New Providers
Edit `auth.ts` to add more providers:

```typescript
providers: [
  Google({ /* config */ }),
  Credentials({ /* config */ }),
  // Add more providers here
]
```

### Custom Pages
Customize the authentication pages in:
- `src/app/auth/signin/page.tsx`
- `src/app/auth/error/page.tsx`

### Database Integration
Currently using hardcoded credentials. To integrate with a database:

1. Install a database adapter (e.g., Prisma)
2. Update the credentials provider in `auth.ts`
3. Add user validation logic

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Production Deployment

1. Update `NEXTAUTH_URL` in `.env.local` to your production domain
2. Add production redirect URIs to your Google OAuth configuration
3. Ensure `AUTH_SECRET` is set in production environment

## Security Notes

- Always use HTTPS in production
- Keep your `AUTH_SECRET` secure and regenerate it regularly
- Use environment variables for all sensitive configuration
- Validate and sanitize all user inputs
- Consider implementing rate limiting for auth endpoints

## Troubleshooting

### Common Issues

**"Configuration" Error:**
- Check that all environment variables are set correctly
- Ensure `AUTH_SECRET` is generated and not empty

**Google OAuth Not Working:**
- Verify Google client ID and secret
- Check redirect URIs in Google Cloud Console
- Ensure Google+ API is enabled

**Session Not Persisting:**
- Check that SessionProvider wraps your app in layout.tsx
- Verify cookies are enabled in browser

## Next Steps

- [ ] Add password reset functionality
- [ ] Implement email verification
- [ ] Add role-based access control
- [ ] Integrate with database
- [ ] Add user profile management
- [ ] Implement session security features
