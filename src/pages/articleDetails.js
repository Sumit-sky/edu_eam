import React, { useState } from 'react'
import Navbar from '../components/layout/navbar'
import TopicScroller from '../components/layout/topicScroller'
import Banner from '../components/articleDetails/banner'
import Sidebar from '../components/layout/sidebar'
import Index from '../components/articleDetails/index'
import IndexContent from '../components/articleDetails/indexContent'
import ListOfTopics from '../components/articleDetails/listOfTopics'
import CommentSection from '../components/articleDetails/commentSection'
import { contentArray, comments } from "../components/staticData";

export default function ArticleDetails() {
  const [active, setActive] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='font-sans bg-[#f4f6fa]'>
      <Navbar />
      <TopicScroller />
      <div className='flex w-full'>
        <Sidebar active={active} setActive={setActive} />
        <div className='flex flex-col w-full'>
          <Banner title={"Data Structures and Algorithms"} price={"69.99"} />
          <div className='flex justify-evenly'>
            <Index activeIndex={activeIndex} setActiveIndex={setActiveIndex} contentArray={contentArray} />
            <div className='flex flex-col w-6/12'>
              <IndexContent activeIndex={activeIndex} contentArray={contentArray} />
              <ListOfTopics contentArray={contentArray} />
              <CommentSection commentData={comments} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
