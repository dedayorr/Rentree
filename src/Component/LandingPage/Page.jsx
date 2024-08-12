import React from 'react'
import { SectionOne } from './Sections/SectionOne'
import "./Page.css"
import SectionTwo from './Sections/SectionTwo'
import SectionThree from './Sections/SectionThree'

function Page() {
  return (
    <div className=''>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
    </div>
  )
}

export default Page