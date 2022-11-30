import Home from './Pages/Home/Home.jsx';
import { BrowserRouter as Routes, Route} from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path='/' component={Home} />
        </Routes>
    );
}
