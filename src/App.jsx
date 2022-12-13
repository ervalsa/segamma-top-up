import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const GamesPc = lazy(() => import("./Pages/Games/GamesPc.jsx"));
const GamesMobile = lazy(() => import("./Pages/Games/GamesMobile.jsx"));
const Promo = lazy(() => import("./Pages/Promo/Promo.jsx"));
const TentangKami = lazy(() => import("./Pages/Tentang/Tentang.jsx"));
const Bantuan = lazy(() => import("./Pages/Bantuan/Bantuan.jsx"));
const Login = lazy(() => import("./Pages/Auth/Login.jsx"));
const Register = lazy(() => import("./Pages/Auth/Register.jsx"));

export default function App() {

    return (
        <Router>
            <Suspense fallback={ <p>Loading...</p> }>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/games-mobile' element={<GamesPc />} />
                    <Route path='/games-pc' element={<GamesMobile />} />
                    <Route path='/promo' element={<Promo />} />
                    <Route path='/bantuan' element={<Bantuan />} />
                    <Route path='/tentang-kami' element={<TentangKami />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </Suspense>
        </Router>
    );
}
