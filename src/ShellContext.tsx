// TODO: Publish this as an npm package so remotes can run in isolation with the shell's context.
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

type ShellContextProps = {
  children: ReactNode;
};

export function ShellContext({ children }: ShellContextProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
