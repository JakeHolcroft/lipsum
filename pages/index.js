import Head from 'next/head'
import Image from 'next/image'
import { Rubik } from '@next/font/google'

import { motion as m } from "framer-motion"

import { GiDinosaurRex } from "react-icons/gi";
import { useEffect } from 'react';

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {




  return (
    <>
      <Head>
        <title>Lipsum.One</title>
        <meta name="description" content="Simply one paragraph of Lorem Ipsum." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
  className={rubik.className + " w-[100%] h-[100vh] overflow-hidden flex justify-center items-center"}>
       
       <m.span initial={{opacity:0, y:50, x: "-50%"}} animate={{opacity:1, y:0, x:"-50%"}} transition={{duration: 0.4}}  className='flex flex-row absolute top-[20px] left-[50%] translate-x-[-50%] text-xl md:text-2xl text-[#303030]'><GiDinosaurRex size={30} className="mr-[5px]" color={"#eb4d4b"}></GiDinosaurRex> Lipsum.One</m.span>
       <m.span initial={{opacity:0, y:50, x: "-50%"}} animate={{opacity:1, y:0, x:"-50%"}} transition={{duration: 0.4, delay:0.3}} className='absolute top-[70px] left-[50%] translate-x-[-50%] opacity-75 text-lg italic'>Simply one paragraph of Lorem Ipsum.</m.span>

       <m.p id="text" initial={{opacity:0, y:50, }} animate={{opacity:1, y:0}} transition={{duration: 0.4, delay:0.6}}  className={rubik.className + " text-[#303030] mt-[20px] opacity-75 w-[75%] text-center md:w-[50%] text-md md:text-2xl"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat vehicula malesuada. Sed quam arcu, sodales non eros et, euismod pretium turpis. Curabitur et mauris a magna cursus molestie eget sit amet nibh. Cras aliquet euismod metus a gravida. Cras vulputate augue eget rhoncus maximus. Morbi et sollicitudin odio. Fusce ut lorem luctus, aliquam mi eget, maximus felis. Maecenas auctor odio quis elementum auctor. Integer ante lectus, egestas eu auctor sit amet, pulvinar a tortor. In ut leo massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus justo dolor, suscipit a libero id, porttitor rhoncus mi. Quisque lobortis sapien ipsum, eget consequat nisl consequat quis. Nulla facilisi.</m.p>
      
      </main>
    </>
  )
}
