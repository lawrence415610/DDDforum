import { Header } from "./Header";
import { ReactNode } from "react";


export const Content = ({ children }: { children: ReactNode }) => (
  <div className="content-container">{children}</div>
);

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <Content>{children}</Content>
  </>
);
