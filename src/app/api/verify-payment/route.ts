import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { reference } = await request.json();

    if (!reference) {
      return NextResponse.json(
        { error: 'Payment reference is required' },
        { status: 400 }
      );
    }

    // Verify the transaction with Paystack
    const paystackResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const paystackData = await paystackResponse.json();

    if (paystackData.status && paystackData.data.status === 'success') {
      // Payment was successful
      const paymentData = {
        reference: paystackData.data.reference,
        amount: paystackData.data.amount / 100, // Convert from kobo to KES
        email: paystackData.data.customer.email,
        gameId: paystackData.data.metadata.gameId,
        gameTitle: paystackData.data.metadata.gameTitle,
        paidAt: paystackData.data.paid_at,
      };

      // Here you would typically save the transaction to your database
      console.log('Payment verified:', paymentData);

      // You can also send confirmation email to the customer here

      return NextResponse.json({
        status: 'success',
        message: 'Payment verified successfully',
        data: paymentData,
      });
    } else {
      return NextResponse.json(
        { error: 'Payment verification failed', details: paystackData },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error during payment verification' },
      { status: 500 }
    );
  }
}
