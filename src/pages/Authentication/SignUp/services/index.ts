import { SignUpPayload } from '../types';

export const signUp = async (data: SignUpPayload) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/auth/signup`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  console.log(response);

  if (!response.ok) {
    throw new Error('Failed to post data');
  }

  return response.json();
};
