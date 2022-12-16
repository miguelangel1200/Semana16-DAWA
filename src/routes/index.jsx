import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomeView, RegisterView, ListProductView } from "../pages"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/list" element={<ListProductView />} />
                <Route path="/register" element={<RegisterView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router