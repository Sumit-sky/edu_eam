import React, { useState } from 'react'
import Navbar from '../components/layout/navbar'
import ProfileSideBar from '../components/profilePages/profileSidebar/profileSideBar'
import ProfileContent from '../components/profilePages/profileContent';

export default function Profile() {
    const [active, setActive] = useState(0);
    return (
        <div className='bg-[#f4f6fa]'>
            <Navbar />
            <div className='flex w-full fixed top-[64px]'>
                <ProfileSideBar active={active} setActive={setActive} />
                <ProfileContent active={active} />
            </div>
        </div >
    )
}
