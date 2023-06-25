import RemoteTwo from "./components/RemoteTwo";

export default function App() {
  return (
    // Hard coding these props for local dev of this remote in isolation. These props are provided by the shell in the production app. */
    <RemoteTwo
      baseUrl=""
      parentCount={0}
      user={{ id: 2, name: "Bobby" }}
      urls={{ about: "/about", home: "/" }}
    />
  );
}
