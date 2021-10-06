import { Navbar_header } from "./Navbar_header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar_header />

      {children}
    </>
  );
};
