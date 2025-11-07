"use client";
import { useState } from "react"

export default function Login(){
    const [email,setEmail]=useState("")
    const [password,setpassword] = useState("")
    return(
        <div>
            <h1>LOGIN PAGE</h1>
            <form >
                <input type="email" 
                placeholder="Email"
                className=" border p-2 rounded"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            <input type="password"
            placeholder="Password"
            className=" border p-2 rounded"
            value={password}
            onChange={(e)=> setpassword(e.target.value)}
            />
            <button className="bg-primary text-white py-2 rounded">Login</button>

            </form>
        </div>
    )
}