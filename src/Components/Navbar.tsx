"use client"

import Link from "next/link";
import { useState } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";


export function Navbar() {

  const [options, setOptions] = useState(false)

  return (<>
    <nav >
      <div className="flex justify-between m-8 text-lg">
        <Link href='/'>
          <p>DEV - THREADS</p>
        </Link>
        <div className="flex gap-5">
          <Link href='/cart'>
            <FaShoppingCart />
          </Link>
          <Link href='/wishlist'>
            <FaRegHeart />
          </Link>
          <div onClick={() => setOptions(!options)}>
            {options ?
              <IoClose /> :
              <SlOptionsVertical />
            }
          </div>
        </div>
      </div >
    </nav>
    {options ? (
      <div className="absolute right-8 w-40 text-center top-16 rounded-xl  bg-slate-500 p-3 text-lg z-10 ">
        <p className="hover:text-black"><Link href='/'>Home</Link></p>
        <p className="hover:text-black"><Link href='/shop'>Shop</Link></p>
        <p className="hover:text-black"><Link href='/contact'>Contact</Link></p>
        <p className="hover:text-black"><Link href='/about'>About</Link></p>
        <p className="hover:text-black"><Link href='/log-in'>Log In</Link></p>
        <p className="hover:text-black"><Link href='/sign-up'>Sign Up</Link></p>
      </div>
    ) : null}

  </>)
}
