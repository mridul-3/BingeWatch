import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5';
import { PiTelevisionFill } from 'react-icons/pi';
import { BiSolidMoviePlay } from 'react-icons/bi';

const Header = () => {

    const [searchInput, setSearchInput] = useState('')

    const navigate = useNavigate()

    const navigation = [
        {
            label: "TV Shows",
            href: "tv",
            icon:<PiTelevisionFill/>
        },
        {
            label: "Movies",
            href: "movie",
            icon:<BiSolidMoviePlay/>
             
        }
    ]

    useEffect(() => {
        navigate("/"); 
    }, []);


    useEffect(()=>{
        if(searchInput){
            navigate(`/search?q=${searchInput}`)
        }

    }, [searchInput])

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    
    return (
        <header className='fixed top-0 w-screen h-16 bg-neutral-600 bg-opacity-90 shadow-lg z-50'>
            <div className='px-15 flex items-center h-full'>
            <button onClick={() => navigate("/")}>
                    <div className='text-amber-400 text-3xl'>
                        BingeWatch
                    </div>
                </button>

                <nav className='flex items-end gap-8 ml-8'>
                    {
                        navigation.map((nav, index) => {
                            return (
                                <div>
                                    <NavLink key={nav.label} to={nav.href} className={({ isActive }) => `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                                        {nav.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </nav>

                <div className='ml-auto flex items-center gap-4'>
                    <form className='gap-5 flex items-center' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search here...'
                            className='bg-transparent outline-none'
                            onChange={(e)=>setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='text-2xl text-white '>
                            <IoSearchOutline />
                        </button>
                    </form>
                    <div className='w-17 h-17 overflow-hidden cursor-pointer active:scale-90 transition-all'>
                        <img
                            src='src/assets/ user.png'
                            width='w-full h-full rounded'
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header