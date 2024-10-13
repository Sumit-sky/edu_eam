import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home';
import ArticleDetails from '../pages/articleDetails';
import Profile from '../pages/profile';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/ArticleDetails"} element={<ArticleDetails />}></Route>
                <Route path={"/Profile"} element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
