import { Box } from "@chakra-ui/react";
import RemoteAppTwo from "./components/RemoteAppTwo";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <Box margin="1.2rem">
      <Box>APP-2</Box>
      <Box>
        <RemoteAppTwo parentCount={0} nav={navigate} />
      </Box>
    </Box>
  );
}
