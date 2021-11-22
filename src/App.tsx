import React, { useState } from 'react'
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
import { TicketData, Types } from './assets/globalVariables'

function App() {
    const [openTicket, setOpenTicket] = useState(false)
    const [ticket, setTicket] = useState({
        time: '',
        date: '',
        type: Types.unset,
        placeId: [0],
        placeRow: [0],
    })

    const renderTicket = (data: TicketData) => {
        setOpenTicket(true)
        setTicket(data)
    }

    const closePayment = () => {
        setOpenTicket(false)
    }

    return (
        <div className="App">
            <MainLayout
                isOpenTicket={openTicket}
                ticket={ticket}
                close={closePayment}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="session" element={<Session />} />

                    <Route
                        path="session/:invoiceId"
                        element={
                            <ChooseTime
                                renderTicket={(data) => renderTicket(data)}
                            />
                        }
                    />
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