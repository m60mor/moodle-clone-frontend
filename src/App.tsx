import './App.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import StudentPage from './pages/studentPage/StudentPage.tsx'
import TeacherPage from './pages/teacherPage/TeacherPage.tsx'
import LoginPage from './pages/loginPage/LoginPage.tsx'
import TeacherRepoPage from './pages/teacherRepoPage/TeacherRepoPage.tsx'
import StudentRepoPage from './pages/studentRepoPage/StudentRepoPage.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/teacher/repo" element={<TeacherRepoPage />} />
        <Route path="/student/repo" element={<StudentRepoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
