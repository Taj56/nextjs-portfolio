import React from 'react'
import { Grid } from './Grid'
import Grid2 from './Grid2'

const About = () => {
  return (
    <section className='w-full p-2' id='about'>
        <h1 className='text-center md:text-5xl text-3xl mb-5'>A little <span className='text-emerald-500'>About</span></h1>
      {/* <Grid /> */}
      <Grid2 />
    </section>
  )
}

export default About