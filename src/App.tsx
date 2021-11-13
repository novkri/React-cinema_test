import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import MainLayout from './components/Layouts/MainLayout'
import Session from './components/Session'
import Trailer from './components/Trailer'
import Contacts from './components/Contacts'
import News from './components/News'
import ChooseTime from './components/ChooseTime/ChooseTime'

function App() {
    return (
        <div className="App">
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="session" element={<Session />} />

                    <Route path="session/:invoiceId" element={<ChooseTime />} />
                    <Route path="trailers" element={<Trailer />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="news" element={<News />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </MainLayout>
        </div>
    )
}

export default App