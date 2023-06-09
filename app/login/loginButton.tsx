'use client';
import { signIn } from 'next-auth/react';

type providers = Record<string, { id: string; name: string }>;

function LoginButton({ providers }: { providers: providers | null }) {
  if (!providers) return null;
  return (
    <>
      {Object.values(providers).map(({ id, name }) => (
        <div key={name}>
          <button
            className="btn-primary btn-lg btn"
            onClick={() => signIn(id, { callbackUrl: '/' })}
          >
            Sign in with {name}
          </button>
        </div>
      ))}
    </>
  );
}

export default LoginButton;
