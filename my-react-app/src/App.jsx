import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landpage from '../Pages/Landpage'
import ResumeCard from './Component/ASAP.JSX'

 
function App() {
  return (
    <>
    <Landpage/>
    <ResumeCard title="Resume Builder" description="Project Overview: Resumely is a web-based platform that uses AI to help users create professional resumes tailored to specific job roles. It offers recommendations, templates, and real-time feedback to improve the content and formatting of resumes."/>
    <ResumeCard title="Resume Builder" description="Project Overview: Resumely is a web-based platform that uses AI to help users create professional resumes tailored to specific job roles. It offers recommendations, templates, and real-time feedback to improve the content and formatting of resumes."/>
    </>
  )
}

export default App
