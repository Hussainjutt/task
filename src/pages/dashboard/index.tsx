import { Card, Grid, SxProps } from "@mui/material";
import CardHeader from "./components/cardHeader";
import InfoCards from "./components/infoCards";
import EmployeesGrid from "./components/employeesGrid";
import Projects from "./components/projects";

const Index = () => {
  const styles: SxProps = {
    py: "42px",
    px: "12px",
  };
  return (
    <Card sx={styles}>
      <CardHeader />
      <InfoCards />
      <Grid container pt={"50px"} px="22px" spacing={2}>
        <EmployeesGrid />
        <Projects />
      </Grid>
    </Card>
  );
};

export default Index;
