import { BrowserRouter, Routes, Route } from "react-router"

import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/protected/DashboardPage"

import ProtectedLayout from "./components/ProtectedLayout"

function AppRouter(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage/>}/>

            <Route element={<ProtectedLayout />}>
              <Route path="/" element={<DashboardPage />} />
              {/* <Route path="/blocks" element={<BlocksPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;