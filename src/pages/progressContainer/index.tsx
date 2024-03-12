import { CircularProgress, Stack } from "@mui/material";

const Index = () => {
  return (
    <Stack
      minHeight={"100vh"}
      width={"100%"}
      alignItems={"center"}
      justifyContent="center"
    >
      <CircularProgress size={45} />
    </Stack>
  );
};

export default Index;
