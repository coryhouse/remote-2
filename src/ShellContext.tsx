// TODO: Publish this as an npm package so remotes can run in isolation with the shell's context.
import React from "react";
import { BrowserRouter } from "react-router-dom";

type ShellContextProps = {
  children: React.ReactNode;
};

export function ShellContext({ children }: ShellContextProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
