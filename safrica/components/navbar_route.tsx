"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";


export const NavbarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter")
    return (
        <div className=" flex space-x-12">
            <div className="flex gap-x-2 mr-auto">
                Safrica
            </div>
            <div className="flex gap-x-2 ml-auto">
                
                <Button size="sm" className="text-yellow-200">
                    Home
                </Button>
                <Button size="sm">
                    Home
                </Button>
                <Button size="sm">
                    Home
                </Button>
                <Button size="sm">
                    carts
                </Button>




                {isTeacherPage || isPlayerPage ? (
                <Link href="/">
                    <Button size="sm" variant="ghost">
                        <LogOut className="h-4 w-4 mr-1" />
                        Exit
                    </Button>
                </Link>
                ) : (
                    <Link href="/teacher/courses">
                        <Button size="sm" variant="ghost">
                            Teacher Mode
                        </Button>
                    </Link>
                )}


                
            </div>
        </div>
    )
}