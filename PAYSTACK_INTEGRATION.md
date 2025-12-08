# Paystack Integration Guide

This project now includes Paystack payment integration for the rugby ticket booking system.

## Setup Instructions

### 1. Get Paystack API Keys

1. Visit [Paystack Dashboard](https://dashboard.paystack.com/)
2. Create an account or log in
3. Go to Settings > API Keys & Webhooks
4. Copy your **Public Key** and **Secret Key**

### 2. Configure Environment Variables

Add the following to your `.env.local` file:

```bash
# Paystack Configuration
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_public_key_here
PAYSTACK_SECRET_KEY=sk_test_your_secret_key_here
```

**Important:** 
- Use `pk_test_` keys for testing
- Use `pk_live_` keys for production
- Never commit your secret key to version control

### 3. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your app and try purchasing a ticket
3. Use Paystack's test card numbers:
   - **Successful payment:** 4084084084084081
   - **Insufficient funds:** 4084084084084081 (with CVV 408)

### 4. Features Included

- ✅ Secure payment processing with Paystack
- ✅ Transaction verification on the backend
- ✅ User authentication integration
- ✅ Success page with transaction details
- ✅ Error handling and user feedback
- ✅ Mobile-responsive payment flow

### 5. Payment Flow

1. User clicks "Buy Ticket"
2. If not logged in, redirected to sign in
3. Paystack payment modal opens
4. User enters payment details
5. Payment is processed by Paystack
6. Transaction is verified on your backend
7. User sees success confirmation

### 6. Files Created/Modified

- `src/components/PaystackPayment.tsx` - Payment component
- `src/app/api/verify-payment/route.ts` - Payment verification API
- `src/app/payment/success/page.tsx` - Success page
- `src/app/page.tsx` - Updated with payment integration
- `.env.example` - Added Paystack environment variables

### 7. Next Steps

1. **Customize the payment flow** - Add more fields, different ticket types
2. **Add database integration** - Store transaction records
3. **Set up webhooks** - Handle payment status updates
4. **Add email notifications** - Send ticket confirmations
5. **Create admin dashboard** - Manage tickets and payments

### 8. Security Notes

- All payments are processed securely by Paystack
- Transaction verification happens on your backend
- User emails are protected by NextAuth session
- Environment variables keep API keys secure

### 9. Support

For Paystack-specific issues, check their [documentation](https://paystack.com/docs/) or contact their support team.
