
// import { MobileSidebar } from "./mobile-sidebar"

import { NavbarRoutes } from "@/components/navbar_route";

export const Navbar = () => {
    return (
        <div className="p-4 border-b h-full flex item-center bg-green-950 shadow-sm">
            {/* <MobileSidebar /> */}
            <NavbarRoutes />
            
        </div>
    )
}