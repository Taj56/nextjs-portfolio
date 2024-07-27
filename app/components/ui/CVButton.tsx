import { IconDownload } from '@tabler/icons-react'
import React from 'react'

const CVButton = ({text}: { text: string }) => {
  return (
    
    // Button code
    <a href='/Tajay_Robertson_CV.pdf' download={'/Tajay_Robertson_CV.pdf'} className="inline-flex ml-3 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-8">{text} {' '} <IconDownload className='ml-1'/> </a>

    //     <button className="relative inline-flex h-12 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-5 ml-5">
    // <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    // <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    //     {text}
    // </span>
    // </button>
      
  )
}

export default CVButton