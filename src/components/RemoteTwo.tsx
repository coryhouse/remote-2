import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

var buildDate = process.env.BUILD_DATE;

// These props are injected by the shell app.
// TODO: Publish this type in an npm package so all remotes can reference it (or, even simpler, put remotes and shell in a monorepo)
type RemoteProps = {
  baseUrl: string;
  parentCount: number;
  urls: Record<"about" | "home", string>;
  user: { id: number; name: string };
};

export default function RemoteTwo({
  baseUrl,
  urls,
  user,
  parentCount,
}: RemoteProps) {
  const [count, setCount] = useState(1);

  const location = useLocation();

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <p>Build date: {buildDate}</p>
      <p>Hi {user.name}</p>
      <Text>Click count : {count} </Text>
      <Text>Shell count: {parentCount} </Text>
      <Button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment local count
      </Button>
      <Link to={urls.about}>About</Link>
      {location.pathname !== "/" && (
        <Button as={Link} to="/">
          Back to shell
        </Button>
      )}

      <nav>
        <ul>
          <li>
            <Link style={{ color: "blue" }} to={baseUrl + "/page1"}>
              Remote page 1
            </Link>
          </li>
          <li>
            <Link style={{ color: "blue" }} to={baseUrl + "/page2"}>
              Remote page 2
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Remote 1 home page</h1>} />
        <Route path="page1" element={<h1>Remote page 1</h1>} />
        <Route path="page2" element={<h1>Remote page 2</h1>} />
        <Route path="*" element={<h1>404 - Remote 1 page Not Found</h1>} />
      </Routes>
    </Flex>
  );
}
