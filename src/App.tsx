import { Box } from "@chakra-ui/react";
import RemoteTwo from "./components/RemoteTwo";

export default function App() {
  return (
    <Box margin="1.2rem">
      <Box>REMOTE-2</Box>
      <Box>
        <RemoteTwo
          baseUrl=""
          parentCount={0}
          user={{ id: 2, name: "Bobby" }}
          urls={{ about: "/about", home: "/" }}
        />
      </Box>
    </Box>
  );
}
