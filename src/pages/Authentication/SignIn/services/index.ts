import { SignInPayload } from '../types';

export const signIn = async (data: SignInPayload) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/auth/signin`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to post data');
  }

  return response.json();
};
