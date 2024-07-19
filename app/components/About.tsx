import React from 'react'
import { Grid } from './Grid'

const About = () => {
  return (
    <section className='w-full p-2' id='about'>
        <h1 className='text-center md:text-5xl text-3xl'>What We <span className='text-emerald-500'>Offer</span></h1>
      <Grid />
    </section>
  )
}

export default About