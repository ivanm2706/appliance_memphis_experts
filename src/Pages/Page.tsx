import React, { useEffect, ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
// import Benefits from '../components/Benefits/Benefits';
// import Questions from '../components/Questions/Questions';
// import Steps from '../components/Steps/Steps';

type Props = {
  children: ReactNode,
  isHomePage?: boolean,
};

function Page({ children, isHomePage }: Props) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <>
      <Header isHomePage={isHomePage || false} />

      <main className="page__main">
        { children }

        {/* <Benefits />

        <Steps />

        <Questions /> */}
      </main>

      <Footer />
    </>
  );
}

export default Page;
