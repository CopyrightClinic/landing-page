# Check User Feature Setup

## Overview
A new page has been added to check if a user exists in the database.

## Route
- **URL**: `/check-user`
- **Component**: `CheckUser.tsx`

## API Configuration

### Environment Variable
The page uses the `REACT_APP_BASE_URL` environment variable to configure the API endpoint.

**Create a `.env` file in the project root:**

```env
REACT_APP_BASE_URL=http://localhost:3000
```

Or for production:

```env
REACT_APP_BASE_URL=https://your-production-api.com
```

**Note:** After creating or modifying the `.env` file, restart the development server for changes to take effect.

### API Endpoint
- **URL**: `${VITE_BASE_URL}/auth/check-user`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "email": "user@example.com"
}
```

### API Response
```json
{
  "exists": true,
  "message": "User with this email exists"
}
```

or

```json
{
  "exists": false,
  "message": "No user found with this email"
}
```

## Usage

1. Navigate to `/check-user` in your browser
2. Enter an email address
3. Click "Check Account"
4. View the result showing whether the account exists

## Files Created/Modified

### New Files:
- `src/LandingPage/CheckUser.tsx` - Main component for the check user page
- `src/LandingPage/CheckUser.css` - Styles for the check user page
- `CHECK_USER_SETUP.md` - This documentation file

### Modified Files:
- `src/App.js` - Added route for `/check-user`

## Features

- ✅ Email input validation
- ✅ Loading state during API call
- ✅ Success/info/error result display
- ✅ Responsive design (mobile-first)
- ✅ Follows existing UI patterns and color scheme
- ✅ Accessible form controls
- ✅ Smooth animations for results

## Styling

The page follows the existing design system:
- Dark theme with `#1F232B` background
- Primary color: `#5b6cf5`
- Text colors: `#ffffff`, `#b8c5d6`, `#8892a6`
- Consistent with Terms and Privacy pages layout
- Mobile-first responsive design
