import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { HomeRoutes } from "../app/routes/HomeRoutes"

export const AppRouter = () => {
    return (
        <>
        <Routes>

            <Route path="/*" element={<AuthRoutes/>} />
            <Route path="/home/*" element={<HomeRoutes/>} />

        </Routes>
        </>
    )
}