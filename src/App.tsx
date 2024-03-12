import { Box } from "@mui/material";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import error_404 from "./assets/404-error.gif";
const Dasboard = lazy(() => import("./pages/dashboard"));
const Attendance = lazy(() => import("./pages/attendance"));
const DefaultLayout = lazy(() => import("./layouts/default"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Dasboard />
            </DefaultLayout>
          }
        />
        <Route
          path="/attendance"
          element={
            <DefaultLayout>
              <Attendance />
            </DefaultLayout>
          }
        />
        <Route
          path="*"
          element={
            <DefaultLayout>
              <Box
                component={"img"}
                src={error_404}
                textAlign={"center"}
                width={"100%"}
                maxWidth={"500px"}
                m={"auto"}
                display={"block"}
              />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
