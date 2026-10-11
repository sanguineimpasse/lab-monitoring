import { BrowserRouter, Routes, Route, Navigate } from "react-router"

import ProtectedLayout from "./components/layout/ProtectedLayout"
import NotFound from "./pages/NotFound"
import LoginPage from "./pages/LoginPage"

import DashboardPage from "./pages/protected/DashboardPage"
import ComputerMonPage from "./pages/protected/ComputerMonPage"
import RepairsTrackPage from "./pages/protected/RepairsTrackPage"

function AppRouter(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/login" element={<LoginPage/>}/>

            <Route element={<ProtectedLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/monitoring" element={<ComputerMonPage/>} />
              <Route path="/repairs" element={<RepairsTrackPage/>} />
              {/* <Route path="/blocks" element={<BlocksPage />} /> */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;