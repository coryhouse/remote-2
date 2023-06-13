import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type RemoteProps = {
  parentCount: number;
  nav: (url: string) => void;
};

export default function CounterAppTwo({ nav, parentCount }: RemoteProps) {
  const [count, setCount] = useState(1);

  const location = useLocation();

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>Click count : {count} </Text>
      <Text>Parent count: {parentCount} </Text>
      <Button onClick={() => setCount((prevState) => prevState + 1)}>
        Click me
      </Button>
      {location.pathname !== "/" && (
        <Button as={Link} to="/">
          Back to shell
        </Button>
      )}
    </Flex>
  );
}
