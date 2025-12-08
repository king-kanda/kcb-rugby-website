"use client"

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface PaystackResponse {
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  trxref: string;
  message: string;
}

interface PaystackPopup {
  setup: (config: PaystackConfig) => {
    openIframe: () => void;
  };
}

interface PaystackConfig {
  key: string | undefined;
  email: string;
  amount: number;
  currency: string;
  ref: string;
  metadata: {
    gameTitle: string;
    gameId: number;
    ticketType: string;
  };
  callback: (response: PaystackResponse) => void;
  onClose: () => void;
}

declare global {
  interface Window {
    PaystackPop: PaystackPopup;
  }
}

interface PaystackPaymentProps {
  amount: number;
  email: string;
  gameTitle: string;
  gameId: number;
  onSuccess?: (reference: string) => void;
  onClose?: () => void;
}

export const PaystackPayment = ({ 
  amount, 
  email, 
  gameTitle, 
  gameId, 
  onSuccess, 
  onClose 
}: PaystackPaymentProps) => {
  
  useEffect(() => {
    // Load Paystack script
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializePayment = () => {
    if (!window.PaystackPop) {
      alert('Payment system is loading, please try again in a moment.');
      return;
    }

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY, // Add your Paystack public key
      email: email,
      amount: amount * 100, // Paystack expects amount in kobo (multiply by 100)
      currency: 'KES',
      ref: `ticket_${gameId}_${Date.now()}`, // Generate unique reference
      metadata: {
        gameTitle: gameTitle,
        gameId: gameId,
        ticketType: 'standard'
      },
      callback: function(response: PaystackResponse) {
        // Payment successful
        console.log('Payment successful:', response);
        if (onSuccess) {
          onSuccess(response.reference);
        }
        // You can verify the transaction on your backend here
        verifyTransaction(response.reference);
      },
      onClose: function() {
        // Payment closed
        console.log('Payment window closed');
        if (onClose) {
          onClose();
        }
      }
    });
    
    handler.openIframe();
  };

  const verifyTransaction = async (reference: string) => {
    try {
      // Call your backend API to verify the transaction
      const response = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reference }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 'success') {
          alert(`Payment successful! Your ticket for "${gameTitle}" has been confirmed.`);
        }
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
    }
  };

  return { initializePayment };
};

// Hook to use Paystack payment
export const usePaystackPayment = (config: PaystackPaymentProps) => {

    
  const { data: session } = useSession();

  const payWithPaystack = () => {
    if (!session?.user?.email) {
      alert('Please log in to purchase tickets');
      return;
    }

    const payment = PaystackPayment({
      ...config,
      email: session.user.email,
    });

    payment.initializePayment();
  };

  return { payWithPaystack };
};
