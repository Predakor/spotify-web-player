import { ReactElement } from 'react';
import { OAuthProvider } from 'next-auth/providers';
import { getProviders, signIn } from 'next-auth/react';

const Login = ({ providers }: { providers: OAuthProvider }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-black to-primary-900">
      <h1 className="text-2xl">Log in to continue</h1>
      {Object.values(providers).map((provider) => {
        const { id, name } = provider;
        const login = () => signIn(id, { callbackUrl: '/' });
        return (
          <button
            className="text-secondary-200 p-2 hover:bg-primary-100"
            onClick={login}
            key={name}
          >
            Loggin with {name}
          </button>
        );
      })}
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
