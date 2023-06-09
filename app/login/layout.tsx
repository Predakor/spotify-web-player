'use client';
import { ReactNode } from 'react';

function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>{children}</div>
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
    </>
  );
}

export default LoginLayout;
