import Home from './Pages/Home/Home.jsx';
import Games from './Pages/Games/Games.jsx';
import { Routes, Route} from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='games' element={ <Games /> } />
        </Routes>
    );
}
