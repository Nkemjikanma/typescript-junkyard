import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} /> {/**not found page */}
        </Routes>
    );
}

// Just CJ's prefered way of exporting the App.
// Good for testing
export function WrappedApp() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}
