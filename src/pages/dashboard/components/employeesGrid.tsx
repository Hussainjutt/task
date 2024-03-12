import {
  Avatar,
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { BiChevronRight } from "react-icons/bi";
import { Each } from "../../../utils/render";
import { faker } from "@faker-js/faker";
import { StyledEmployeeCard } from "./style";
import useWindowWidth from "../../../hooks/user-window-width";
function createRandomUser() {
  return {
    username: faker.person.fullName(),
    work: faker.person.jobTitle(),
    avatar: faker.image.avatar(),
    progress: Math.floor(Math.random() * 100) + 1,
  };
}
const users = faker.helpers.multiple(createRandomUser, {
  count: 8,
});
const EmployeesGrid = () => {
  const width = useWindowWidth();
  return (
    <Grid xs={12} sm={8} item>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={1}
        mb={"26px"}
      >
        <Typography fontSize={22} fontWeight={"bold"}>
          Our Employees
        </Typography>
        <Button color="secondary" endIcon={<BiChevronRight />}>
          View all
        </Button>
      </Stack>
      <Grid container spacing={1}>
        <Each
          of={users}
          render={(render) => (
            <Grid item lg={4} xs={width < 400 ? 12 : 6}>
              <StyledEmployeeCard>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  position={"relative"}
                  mb={"10px"}
                >
                  <CircularProgress
                    size={63}
                    variant="determinate"
                    value={render.progress}
                    thickness={2}
                  />
                  <Avatar
                    src={render.avatar}
                    sx={{
                      position: "absolute",
                      width: 50,
                      height: 50,
                    }}
                  />
                </Stack>
                <Typography fontWeight={"bold"}>{render.username}</Typography>
                <Typography fontSize={14}>{render.work}</Typography>
              </StyledEmployeeCard>
            </Grid>
          )}
        ></Each>
      </Grid>
    </Grid>
  );
};

export default EmployeesGrid;
