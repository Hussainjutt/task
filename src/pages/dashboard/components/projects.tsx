import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Each } from "../../../utils/render";
import { faker } from "@faker-js/faker";
import { StyledProjectCard } from "./style";
import { FaCalendar } from "react-icons/fa6";
import useWindowWidth from "../../../hooks/user-window-width";

function formatDate(date: Date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formattedDate = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
  return formattedDate;
}

function createRandomProject() {
  const randomDate = faker.date.recent();
  const formattedDate = formatDate(randomDate);
  return {
    status: faker.helpers.arrayElement(["isPending", "inProgress"]),
    project_name: faker.lorem.words(),
    image: faker.image.avatarLegacy(),
    date: `Created ${formattedDate}`,
  };
}
const projects = faker.helpers.multiple(createRandomProject, {
  count: 4,
});
const Projects = () => {
  const width = useWindowWidth();
  return (
    <Grid
      xs={12}
      sm={4}
      pl={"25px"}
      item
      sx={{
        position: "relative",
      }}
    >
      <Divider
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "12px",
        }}
        orientation="vertical"
      />
      <Box mb={"26px"}>
        <Typography fontSize={22} fontWeight={"bold"}>
          Projects
        </Typography>
      </Box>
      <Grid container spacing={1}>
        <Each
          of={projects}
          render={(item) => (
            <Grid item xs={width < 450 ? 12 : 6} sm={12}>
              <StyledProjectCard>
                <Stack
                  direction={"row"}
                  justifyContent={"start"}
                  alignItems={"center"}
                  gap={1}
                  flexWrap={"wrap"}
                >
                  <Box
                    component={"img"}
                    src={item.image}
                    width={50}
                    height={50}
                    borderRadius={"10px"}
                  />
                  <Box>
                    <Typography fontSize={14} color={"#91929E"}>
                      {item.status}
                    </Typography>
                    <Typography
                      fontSize={18}
                      fontWeight={"bold"}
                      color={"#0A1629"}
                      textTransform={"capitalize"}
                      noWrap
                    >
                      {item.project_name}
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"start"}
                  alignItems={"center"}
                  gap={1}
                  mt={1}
                >
                  <FaCalendar color="#7D8592" />
                  <Typography color={"#7D8592"} fontSize={14}>
                    {" "}
                    {item.date}
                  </Typography>
                </Stack>
              </StyledProjectCard>
            </Grid>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default Projects;
