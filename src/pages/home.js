import React, { useState } from 'react'
import Navbar from '../components/layout/navbar'
import TopicScroller from '../components/layout/topicScroller'
import HomeSearch from '../components/home/homeSearch'
import HomeCourses from '../components/home/homeCourses'
import Sidebar from '../components/layout/sidebar'
import Footer from '../components/layout/footer'

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <div className='bg-[#f4f6fa]'>
      <Navbar />
      <TopicScroller />
      <div className='flex w-full'>
        <Sidebar active={active} setActive={setActive} />
        <div className='w-full'>
          <HomeSearch />
          <HomeCourses />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
