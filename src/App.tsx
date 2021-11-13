import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import MainLayout from './components/Layouts/MainLayout'

function App() {
    return (
        <div className="App">
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </MainLayout>
        </div>
    )
}

export default App