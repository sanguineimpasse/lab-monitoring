import { Button } from "#components/ui/button"
import { LayoutDashboard, MonitorDot, Wrench } from "lucide-react";
import { NavLink } from "react-router";

function NavButton({ to, icon: Icon, children, buttonVariant = "outline" }){ 
    return ( 
        <NavLink to={to} end> 
            {({ isActive }) => ( 
                <Button variant={isActive ? "default" : buttonVariant} asChild={false}> 
                    <Icon /> 
                    {children} 
                </Button> 
            )} 
        </NavLink> 
    ); 
}

function NavBar() {
    return(
        <div className="flex flex-row p-4 gap-2 items-center">
            {/* <h1 className="text-2xl p-4">{"lab-monitoring"}</h1> */}
            <NavButton to="/dashboard" icon={LayoutDashboard}>
                Dashboard
            </NavButton>
            <NavButton to="/monitoring" icon={MonitorDot}> 
                Computer Monitoring 
            </NavButton> 
            <NavButton to="/repairs" icon={Wrench}> 
                Maintenance Tracking 
            </NavButton>
        </div>
    )
}

export default NavBar;