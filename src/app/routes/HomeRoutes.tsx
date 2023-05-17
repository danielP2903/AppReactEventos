import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { EventDetailPage } from '../pages/EventDetail';
import { Navbar } from '../components/Navbar';
import { Cotizador } from '../pages/Cotizador';
export const HomeRoutes = () => {
    const drawerWidt = 240;

return(
    <>
    <Navbar drawerWidth={drawerWidt}/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="event/:id" element={<EventDetailPage/>}/>
        <Route path="/cotizador" element={<Cotizador/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
    </>
)
}