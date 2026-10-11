import { Outlet } from "react-router";
import NavBar from "../NavBar";

function ProtectedLayout(){
	return(
		<div className="h-screen flex flex-col bg-secondary">
			<NavBar/>
			{/* 
				<parentDiv>
					<childDiv>
						{}
					</childDiv>
				</parentDiv> 

			parentDiv is designed to eat into the Outlet, basically
				becoming its border

			*/}
			<div className="px-4 pb-2 flex-1 min-h-0">
				<div className="rounded-2xl bg-background p-8 h-full">
					<Outlet/>
				</div>
			</div>
		</div>
	)
}

export default ProtectedLayout;