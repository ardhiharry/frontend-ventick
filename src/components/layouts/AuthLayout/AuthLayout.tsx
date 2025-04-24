import PageHead from '@/components/commons/PageHead';
import { ReactNode } from 'react';

interface PropTypes {
  children: ReactNode;
  title?: string;
}

function AuthLayout(props: PropTypes) {
  const { children, title } = props;

  return (
    <>
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container p-6">
        {children}
      </section>
    </>
  );
}

export default AuthLayout;
