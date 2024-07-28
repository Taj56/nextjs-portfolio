import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconMailOpened, IconSend2 } from "@tabler/icons-react"

const Footer = () => {
  return (
    <footer className="w-full h-60 p-2 flex flex-col items-center justify-center">
      <h1 className="text-center md:text-5xl text-3xl mb-2">Ready to make <span className="text-emerald-500">your</span> dream a reality?</h1>

      <div className="w-full items-center flex flex-col">

      <p className="text-center text-slate-500 text-md mb-2">Reach out to me and lets create something amazing</p>

      <a href="mailto:tajayrobertson2@gmail.com" className="relative inline-flex h-12 overflow-hidden rounded-sm-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">Let's get in touch <IconMailOpened className="ml-1"/></span>
        
      </a>
      </div>


      <div className="w-full h-[85px] flex flex-col md:flex-row justify-between items-center flex-wrap mt-5">
        <p className="text-center text-slate-500 text-md mb-2">© 2024 - Tajay Robertson</p>

        <div>
          <a href="#" target="_blank" className="relative inline-flex h-12 overflow-hidden rounded-sm-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"><IconBrandGithub className="ml-1"/></span>
          
          </a>
          <a href="#" target="_blank" className="relative inline-flex h-12 overflow-hidden rounded-sm-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-1">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"><IconBrandInstagram className="ml-1"/></span>
          
          </a>
          <a href="#" target="_blank" className="relative inline-flex h-12 overflow-hidden rounded-sm-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-1">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"><IconBrandLinkedin className="ml-1"/></span>
          
          </a>
        </div>

      </div>

    </footer>
  )
}

export default Footer