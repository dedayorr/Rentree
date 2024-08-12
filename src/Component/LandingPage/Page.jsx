import React from 'react'
import { SectionOne } from './Sections/SectionOne'
import "./Page.css"
import SectionTwo from './Sections/SectionTwo'
import SectionThree from './Sections/SectionThree'
import SectionFour from './Sections/SectionFour'

function Page() {
  return (
    <div className=''>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
    </div>
  )
}

export default Page