import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AuthFormPage from "./pages/AuthFormPage";
import Layout from "./components/Layout";
import NeedAuth from "./components/NeedAuth";
import useAutoLogout from "./hooks/useAutoLogout";
import StudentPage from "./pages/StudentPage";

const App = () => {
  useAutoLogout();

  return (
    <div>
      <Layout>
        <Routes>
          <Route path={"/"} element={<HomePage />}></Route>
          <Route
            path={"/profile"}
            element={
              <NeedAuth>
                <ProfilePage />
              </NeedAuth>
            }
          ></Route>
          <Route path={"/auth-form"} element={<AuthFormPage />}></Route>
          <Route
            path={"/student"}
            element={
              <NeedAuth>
                <StudentPage />
              </NeedAuth>
            }
          ></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
