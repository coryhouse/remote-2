import { createRoot } from "react-dom/client";
import RemoteTwo from "./RemoteTwo";
import { ShellContext } from "./ShellContext";

// This root is used for running the remote by itself.
// The shell wraps all remotes in a BrowserRouter, so we must do the same here.
// The shell also passes props to the remotes, so we must do the same here.
createRoot(document.getElementById("root") as HTMLElement).render(
  <ShellContext>
    <RemoteTwo
      baseUrl=""
      shellCount={0}
      account="fake-account"
      user={{ id: 2, name: "Bobby" }}
      urls={{ about: "/about", home: "/" }}
    />
  </ShellContext>
);
