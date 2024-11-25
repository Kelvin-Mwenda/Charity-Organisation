import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'

//layouts
import HeaderLayout from './components/pages/HeaderLayout'

//pages
import Home from './Home.jsx'
import About from './components/pages/About.jsx'
import Projects, { projectsLoader } from './components/pages/Projects.jsx'
import News, { newsLoader } from './components/pages/News.jsx'
import FutureProjects, { futureProjectsLoader } from './components/pages/FutureProjects.jsx'
import Contact, { contactAction } from './components/pages/Contact.jsx'
import NotFound from './components/pages/NotFound.jsx'
import ProjectsDetails, { ProjectDetailsLoader } from './components/pages/ProjectsDetails.jsx'

import './index.css'
import ProjectsError from './components/pages/ProjectsError.jsx'
import Donate from './components/pages/Donate.jsx'
import MonthlyPayment from './components/pages/MonthlyPayment.jsx'
import OneTime from './components/pages/OneTime.jsx'
import Signup from './components/pages/Signup.jsx'
import Login from './components/pages/Login.jsx'
import Profile from './components/pages/Profile.jsx'


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<HeaderLayout/>} errorElement={<ProjectsError/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="projects" element={<Projects/>} loader = {projectsLoader} errorElement={<ProjectsError/>}/>
        <Route path="projects/:id" element={<ProjectsDetails/>} loader = {ProjectDetailsLoader} errorElement={<ProjectsError/>}/>
        <Route path="news" element={<News/>} loader={newsLoader} />
        <Route path="plans" element={<FutureProjects/>} loader = {futureProjectsLoader} errorElement={<ProjectsError/>}/>
        <Route path="contact" element={<Contact/>} action={contactAction} errorElement={<ProjectsError/>}/>
        <Route path="donate" element={<Donate/>} errorElement={<ProjectsError/>}>
          <Route path="monthly" element={<MonthlyPayment/>}/>
          <Route path="onetime" element={<OneTime/>}/>
        </Route>
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
      
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

