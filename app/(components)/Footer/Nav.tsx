import React from 'react'
import Link from "next/link"

const Nav = () => {
  return (
    <div className='flex flex-row w-screen bg-blue-200 h-12'>
        <div> 
            <Link href="/Home" className ="logo">Xplore
                <i className ="fab fa-staylinked"></i>kill
            </Link>
        </div>
        <div className ="flex flex-row gap-6 text-black uppercase text-left w-screen mr-10 justify-end font-bold text-1.5xl">
                {/* <i className ="fa fa-times"></i> */}
                {/* <ul> */}
            <div><Link href="/Home"> Home </Link> </div>
            <div><Link href="/Course">Course </Link></div>
            <div><Link href="/Blog"> Blog </Link></div>
            <div><Link href="/About">About </Link></div>
            <div><Link href="/Contact"> Contact </Link></div>
                {/* </ul> */}
        </div>
            {/* <i className ="fa fa-bars" ></i> */}
    </div>
  )
}

export default Nav;