import { ReactElement } from 'react';
import { OAuthProvider } from 'next-auth/providers';
import { getProviders, signIn } from 'next-auth/react';

const Login = ({ providers }: { providers: OAuthProvider }) => {
  const loginButton = Object.values(providers).map((provider) => {
    const { id, name } = provider;
    const login = () => signIn(id, { callbackUrl: '/' });
    return (
      <button className="btn-primary btn-lg btn" onClick={login} key={name}>
        Loggin with {name}
      </button>
    );
  });

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
        {loginButton}
        <div className="text-lg">
          <p>login: discofytest@interia.pl</p>
          <p>password: DiscofyTestAccount </p>
        </div>
      </main>
      <footer>
        <nav className="flex gap-4">
          <a
            className="link-hover duration-100 hover:text-primary"
            href="http://github"
          >
            Github Icon
          </a>
          <a
            className="link-hover duration-100 hover:text-primary"
            href="http://github"
          >
            Email Icon
          </a>
          <a
            className="link-hover duration-100 hover:text-primary"
            href="http://github.io/Predakor"
          >
            My page Icon
          </a>
        </nav>
      </footer>
    </div>
  );
};

Login.getLayout = (page: ReactElement) => page;
export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
