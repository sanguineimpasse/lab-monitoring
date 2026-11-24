import { Outlet } from "react-router";
import NavBar from "./NavBar";

function ProtectedLayout(){
	return(
		<>
			<NavBar/>
			<Outlet/>
		</>
	)
}

export default ProtectedLayout;