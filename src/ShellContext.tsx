// TODO: Publish this as an npm package so remotes can run in isolation with the shell's context.
import React from "react";
import { BrowserRouter } from "react-router-dom";

type RemoteProps = {
  children: React.ReactNode;
};

export function ShellContext({ children }: RemoteProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
