// pages/redirect.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Replace with the URL you want to redirect to
    window.location.href = 'https://t.me/Rockship_Chatbot';
  }, [router]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}
