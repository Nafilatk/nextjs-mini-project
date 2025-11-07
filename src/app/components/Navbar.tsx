"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){
    const [isOpen,setIsOpen]= useState(false)


    return(
        <nav className="bg-primary text-white bg-black px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-wide">prjct</Link>

            <div>
                <Link href = "/" className="hover:text-secondary">Home</Link>
                <Link href ="/products" className="hover:text-secondary">Products</Link>
                <Link href="/login" className="hover:text-secondary">Login</Link>
            </div>

            <button
           className="md:hidden border border-white rounded p-1"
           onClick={()=> setIsOpen(!isOpen)}>
            ≡
            </button>

            {isOpen &&(
                <div className="absolute top-16 left-0 w-full bg-primary flex flex-col items-center space-y-4 py-4 md:hidden">
                    <Link href="/" onClick={()=>setIsOpen(false)}>Home</Link>
                    <Link href="/products" onClick={()=>setIsOpen(false)}>Products</Link>
                    <Link href="/cart" onClick={()=>setIsOpen(false)}>Cart</Link>
                    <Link href="/login" onClick={()=>setIsOpen(false)}>Login</Link>
                </div>
            )}
        </nav>
    )
}