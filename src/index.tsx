import { createRoot } from "react-dom/client";
import { ShellContext } from "./ShellContext";
import RemoteTwoBoundary from "./RemoteTwoBoundary";

// This root is used for running the remote by itself.
// The shell provides a context, so we wrap our remote in the shell's context to run it alone.
// The shell also passes props to the remotes, so we must do the same here.
createRoot(document.getElementById("root") as HTMLElement).render(
  <ShellContext>
    <RemoteTwoBoundary
      baseUrl=""
      shellCount={0}
      account="fake-account"
      user={{ id: 2, name: "Bobby" }}
      urls={{ about: "/about", home: "/" }}
    />
  </ShellContext>
);
