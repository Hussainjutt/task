import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Dasboard = lazy(() => import("./pages/dashboard"));
const DefaultLayout = lazy(() => import("./layouts/default"));
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <DefaultLayout>
              <Dasboard />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
