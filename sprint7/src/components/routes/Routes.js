import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Home } from '../Home';
import { ServicesForm } from '../ServicesForm';

export function RoutesApp () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ServicesForm/" element={<ServicesForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}   