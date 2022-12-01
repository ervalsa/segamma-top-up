import Home from './Pages/Home/Home.jsx';
import Games from './Pages/Games/Games.jsx';
import Promo from "./Pages/Promo/Promo.jsx";
import TentangKami from "./Pages/Tentang/Tentang";
import Bantuan from "./Pages/Bantuan/Bantuan.jsx";
import { Routes, Route} from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/games' element={ <Games /> } />
            <Route path='/promo' element={ <Promo /> } />
            <Route path='/bantuan' element={ <TentangKami /> } />
            <Route path='/tentang-kami' element={ <Bantuan /> } />
        </Routes>
    );
}
