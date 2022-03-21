import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppFrame from './components/AppFrame';
import Home from './routes/Home';

export default function AppRouter() {
    return (
        <AppFrame>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </AppFrame>
    );
}
