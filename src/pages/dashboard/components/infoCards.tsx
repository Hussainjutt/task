import clients from "../../../assets/icons/clients-icon.png";
import projects from "../../../assets/icons/projects-icon.png";
import employees from "../../../assets/icons/employees-icon.png";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Each } from "../../../utils/render";
import { StyledCard } from "./style";

const data = [
  {
    title: "Clients",
    subTitle: "New Clients",
    count: 107,
    icon: clients,
    pallete: "#4365D0",
  },
  {
    title: "Clients",
    subTitle: "Old Clients",
    count: 893,
    icon: clients,
    pallete: "#1897F3",
  },
  {
    title: "Employees",
    subTitle: "Total Employees",
    count: 310,
    icon: employees,
    pallete: "#0A1629",
  },
  {
    title: "Projects",
    subTitle: "New Clients",
    count: 107,
    icon: projects,
    pallete: "#E34320",
  },
];

const InfoCards = () => {
  return (
    <Grid container spacing={1}>
      <Each
        of={data}
        render={(item) => (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <StyledCard pallete={item.pallete}>
              <Stack
                direction={"row"}
                alignItems={"end"}
                justifyContent={"space-between"}
                mb={"9px"}
              >
                <Typography fontSize={24} fontWeight={"bold"} color={"white"}>
                  {item.title}
                </Typography>
                <Box component={"img"} src={item.icon} width={32} height={32} />
              </Stack>
              <Typography fontSize={14.66} color={"white"}>
                {item.subTitle}
              </Typography>
              <Typography fontSize={21.98} color={"white"} fontWeight={"bold"}>
                {item.count}
              </Typography>
            </StyledCard>
          </Grid>
        )}
      />
    </Grid>
  );
};

export default InfoCards;
