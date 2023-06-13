import { Box } from "@chakra-ui/react";
import RemoteTwo from "./components/RemoteTwo";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <Box margin="1.2rem">
      <Box>REMOTE-2</Box>
      <Box>
        <RemoteTwo parentCount={0} nav={navigate} />
      </Box>
    </Box>
  );
}
