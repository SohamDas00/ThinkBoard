import React from 'react'
import { Plus } from 'lucide-react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar bg-base-300  ">
        <div className='mx-auto max-w-4xl lg:max-w-6xl p-4'>
            <div className='w-[335px] lg:w-[1100px] flex justify-between items-center'>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">ThinkBoard</a>
                </div>
                <div className='flex items-center gap-4'>
                    <Link to={"/create"} className="btn btn-primary rounded-lg">
                        <Plus />
                        <span>New Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
