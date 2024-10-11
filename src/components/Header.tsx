'use client'

import React, {useState} from 'react'
import { BiSearch } from "react-icons/bi";
import SearchBox from './SearchBox';
import { MdOutlineCancel } from "react-icons/md";


const Header = () => {
    const [toggleView, setToggleView] = useState(false);

  return (
    <div>
        <section>
            <nav className="flex justify-between">
                <h3>Djoux</h3>
                <div className="flex [&>p]:pr-12 text-sm items-center ">
                    <p>Home</p>
                    <p>About</p>
                    <p>Shop</p>
                    <p>Portfolio</p>
                    <p>Custom</p>
                    {toggleView
                        ? <div 
                            className='inline-flex border-solid border-2 border-[#FBEBBC]'
                        >
                            <SearchBox />
                            <a onClick={() => setToggleView(false)}>
                                <MdOutlineCancel 
                                    className='border-solid bg-[#FBEBBC] h-8 w-8 p-1'
                                />
                            </a>
                        </div>
                        :<a onClick={() => setToggleView(true)}>
                            <BiSearch size={20} />
                        </a>
                    }
                </div>
            </nav>
        </section>
    </div>
  )
}

export default Header