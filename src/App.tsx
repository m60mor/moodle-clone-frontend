import "./App.scss";
// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from "./pages/studentPage/StudentPage.tsx";
import TeacherPage from "./pages/teacherPage/TeacherPage.tsx";
import LoginPage from "./pages/loginPage/LoginPage.tsx";
import TeacherRepoPage from "./pages/teacherRepoPage/TeacherRepoPage.tsx";
import StudentRepoPage from "./pages/studentRepoPage/StudentRepoPage.tsx";
import SignUpPage from "./pages/signUpPage/SignUpPage.tsx";
import AdminPage from "./pages/adminPage/AdminPage.tsx";
import ResetPasswordPage from "./pages/resetPasswordPage/ResetPasswordPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/teacher/repo" element={<TeacherRepoPage />} />
        <Route path="/student/repo" element={<StudentRepoPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
