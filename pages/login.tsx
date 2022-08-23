import LoginButton from '@components/Button/LoginButton';
import { OAuthProvider } from 'next-auth/providers';
import { getProviders, signIn } from 'next-auth/react';

function Login({ providers }: { providers: OAuthProvider }) {
  return (
    <div>
      <h1>This is login page</h1>

      {Object.values(providers).map((provider) => {
        const { id, name } = provider;
        const login = () => signIn(id, { callbackUrl: '/' });
        return (
          <button onClick={login} className="text-green-600" key={name}>
            Loggin with {provider.name}
          </button>
        );
      })}
    </div>
  );
}
export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
