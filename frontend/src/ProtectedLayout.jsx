import { Outlet } from "react-router";

function NavBar() {
    return(
      <div className="flex flex-row bg-red-500">
        
      </div>
    )
}

function ProtectedLayout(){
	return(
		<div className="
			flex 
			flex-col 
			w-dvw 
			h-dvh
		">
			<NavBar/>
			<Outlet/>
		</div>
	)
}

export default ProtectedLayout;