import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Home'
import About from './About'
import Vans from './pages/vans/Vans'
import VanDetail from './pages/vans/VanDetail'
import "./server"
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Reviews from './pages/Host/Reviews'
import Income from './pages/Host/Income'
import HostLayout from './components/HostLayout'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />

                    <Route path='vans' element={<Vans />} />
                    <Route path='vans/:id' element={<VanDetail />} />

                    <Route path='host' element={<HostLayout />}>
                        <Route index element={<Dashboard />}/>
                        <Route path='income' element={<Income />} />
                        <Route path='reviews' element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
