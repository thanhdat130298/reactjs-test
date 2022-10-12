import { FC } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
export const Layout: FC<any> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
