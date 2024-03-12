import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Avatar, Card, Stack, SxProps, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import { BiSearch } from "react-icons/bi";
import { StyledSearchInput } from "./style";

const TodayAttendance = () => {
  return (
    <Card>
      <Stack
        bgcolor={"#4365D0"}
        direction={"row"}
        justifyContent={"start"}
        width={"100%"}
        py="13px"
        px="26px"
        gap="16px"
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Typography fontSize={18} color={"white"} fontWeight={"bold"}>
          Attendance
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"start"}
          gap={0.3}
          alignItems={"center"}
          px={"18px"}
          py={"5px"}
          borderRadius={"20px"}
          bgcolor={"white"}
          maxWidth={265}
          width={"100%"}
        >
          <BiSearch size={20} />
          <StyledSearchInput type="text" placeholder="Search" />
        </Stack>
      </Stack>
      <DataGrid
        rows={attendance}
        columns={columns}
        disableRowSelectionOnClick
        hideFooterPagination
        sx={styled}
      />
    </Card>
  );
};
const styled: SxProps = {
  border: "none !important",
  "& .MuiDataGrid-row": {
    border: "none !important",
  },
  "& .MuiDataGrid-cell": {
    border: "none !important",
    outline: "none !important",
  },
};
const columns: GridColDef[] = [
  {
    field: "image",
    headerName: "Image",
    width: 120,
    renderCell: (params) => <Avatar src={params.value} alt="avatar" />,
  },
  { field: "name", headerName: "Name", width: 180 },

  { field: "first_in", headerName: "First In", width: 120 },

  { field: "break", headerName: "Break", width: 120 },

  { field: "last_out", headerName: "Last Out", width: 120 },
  { field: "total", headerName: "Total", width: 120 },

  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell(params) {
      return (
        <Typography color={params.value === "Present" ? "#1897F3" : "#4464CA"}>
          {params.value}
        </Typography>
      );
    },
  },
  { field: "shift", headerName: "Shift", width: 120 },
];

function createRandomAttendance() {
  return {
    id: faker.string.uuid(),
    shift: faker.helpers.arrayElement(["Night", "Day"]),
    image: faker.image.avatar(),
    name: faker.person.fullName(),
    first_in: "10:38",
    break: "01:15",
    last_out: "19:37",
    total: "08:00",
    status: faker.helpers.arrayElement(["Present", "Absent"]),
  };
}

const attendance = faker.helpers.multiple(createRandomAttendance, {
  count: 24,
});
export default TodayAttendance;
