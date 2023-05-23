import { ReactNode } from "react";

interface ChildrenProps {
  children?: ReactNode;
}

export default function Main({ children }: ChildrenProps) {
  return (
    <main>
      {children}
    </main>
  );
}
