import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

var buildDate = process.env.BUILD_DATE;

// These props are injected by the shell app.
// TODO: Publish this type in an npm package so all remotes can reference it (or, even simpler, put remotes and shell in a monorepo)
type RemoteProps = {
  baseUrl: string;
  parentCount: number;
  account: string;
  urls: Record<"about" | "home", string>;
  user: { id: number; name: string };
};

export default function RemoteTwo({
  baseUrl,
  urls,
  user,
  parentCount,
  account,
}: RemoteProps) {
  const [count, setCount] = useState(0);

  const location = useLocation();

  return (
    <>
      <h2>Remote 2</h2>

      <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to={baseUrl + "/page1"}>Remote 2 page 1</Link>
          </li>
          <li>
            <Link to={baseUrl + "/page2"}>Remote 2 page 2</Link>
          </li>
          <li>
            <Link to={urls.about}>About</Link>
          </li>
          {location.pathname !== "/" && (
            <li>
              <Link to="/">Back to shell</Link>
            </li>
          )}
        </ul>
      </nav>

      <p>Build date: {buildDate}</p>
      <p>Hi {user.name}</p>
      <p>Account: {account}</p>
      <p>Local count: {count} </p>
      <p>Shell count: {parentCount} </p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment local count
      </button>

      <Routes>
        <Route path="/" element={<h2>Remote 2 home</h2>} />
        <Route path="page1" element={<h2>Remote 2 page 1</h2>} />
        <Route path="page2" element={<h2>Remote 2 page 2</h2>} />
        <Route path="*" element={<h2>404 - Remote 2 Page Not Found</h2>} />
      </Routes>
    </>
  );
}
