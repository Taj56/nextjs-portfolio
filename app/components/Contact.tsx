import { IconBrandLinkedin } from "@tabler/icons-react"

const Contact = () => {
  return (
    <section className="w-full h-screen p-2 flex justify-evenly items-center md:flex-row flex-col">
        <h1 className="text-center md:text-9xl text-6xl" id="contact">Get In <br /> <span className="text-emerald-500">Contact</span></h1>

        <div className=" w-[500px] h-[500px] flex flex-col justify-center place-items-start p-10">
            <h2 className="text-3xl">Email: <a href="" className="text-emerald-500 underline">87kO4@example.com</a></h2>
            <h2 className="text-3xl">Tel: <a href="" className="text-emerald-500 underline">+44 123 456 789</a></h2>

            <div className="flex mt-5">
                <a href="" className="text-emerald-500 w-[60px] h-[60px]"><img src="/brand-linkedin.svg" alt="" className="w-full h-[100%]"/></a>
            </div>
        </div>
    </section>
  )
}

export default Contact