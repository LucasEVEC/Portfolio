"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: `Accueil`,
        path: `/`
    },
    {
        name: `services`,
        path: `/services`
    },
    {
        name: `CV`,
        path: `/resume`
    },
    {
        name: `Mon travail`,
        path: `/work`
    },
    {
        name: `contact`,
        path: `/contact`
    }
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="text-black flex gap-8">
            {links.map((link, index)=> {
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`${
                            link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav