import React, { useEffect, ReactNode } from 'react';
import { Benefits } from '../components/Benefits';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Questions } from '../components/Questions';
import { Steps } from '../components/Steps';

type Props = {
  children: ReactNode;
  isHomePage?: boolean;
  isBlockAdvantages?: boolean;
};

function Page({
  children,
  isHomePage,
  isBlockAdvantages
}: Props) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <>
      <Header isHomePage={isHomePage || false} />

      <main className="background background--bland">
        {children}

        {isBlockAdvantages && (
          <>
            <Benefits />

            <Steps />

            <Questions />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Page;
