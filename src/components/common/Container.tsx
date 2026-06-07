import type { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-4  xl:mx-auto max-w-7xl">{children}</div>;
};

export default Container;
