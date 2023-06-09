import { getProviders } from 'next-auth/react';
import LoginButton from './loginButton';

async function Login() {
  const providers = await getProviders();

  return (
    <div className="relative grid h-screen w-full place-items-end justify-items-center p-4">
      <span className="absolute inset-0 aspect-square w-full -translate-y-1/2 rounded-full bg-primary blur-3xl md:hidden" />
      <main className="grid gap-12 text-center">
        <header>
          <h1 className="text-6xl font-semibold text-neutral-content">
            Log in
          </h1>
          <h2 className="text-xl">Sign in to continue</h2>
        </header>

        <LoginButton providers={providers} />
        <div className="text-lg">
          <p>login: discofytest@interia.pl</p>
          <p>password: DiscofyTestAccount </p>
        </div>
      </main>
    </div>
  );
}

export default Login;
