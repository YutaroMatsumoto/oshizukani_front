import React from "react";
import { Footer } from "src/components/organisms/Footer";
import { Header } from "src/components/organisms/Header";

interface Props {
  test?: string;
}

export const BaseTemplate = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <div className="h-full bg-gray-100">
      <Header />
      <div className="pt-16 h-full">{children}</div>
      <Footer />
    </div>
  );
};
