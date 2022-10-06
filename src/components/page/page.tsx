import { PropsWithChildren } from "react";

const Page = ({ children, name }: PropsWithChildren<{ name: string }>) => {
  return <div data-testid={`page-${name}`}>{children}</div>;
};

export default Page;
