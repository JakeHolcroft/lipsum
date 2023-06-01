import Head from 'next/head'
import Image from 'next/image'
import { Rubik } from '@next/font/google'
import { FaBeer } from 'react-icons/fa';

import { GiDinosaurRex } from "react-icons/gi";

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
      <main className={rubik.className + " w-[100%] h-[100vh] overflow-hidden flex justify-center items-center"}>
       
       <span  className='flex flex-row absolute top-[20px] left-[20px] text-xl text-[#303030]'><GiDinosaurRex size={30} color={"#eb4d4b"}></GiDinosaurRex> Lipsum.One</span>

       <p className={rubik.className + " w-[50%] text-2xl"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat vehicula malesuada. Sed quam arcu, sodales non eros et, euismod pretium turpis. Curabitur et mauris a magna cursus molestie eget sit amet nibh. Cras aliquet euismod metus a gravida. Cras vulputate augue eget rhoncus maximus. Morbi et sollicitudin odio. Fusce ut lorem luctus, aliquam mi eget, maximus felis. Maecenas auctor odio quis elementum auctor. Integer ante lectus, egestas eu auctor sit amet, pulvinar a tortor. In ut leo massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus justo dolor, suscipit a libero id, porttitor rhoncus mi. Quisque lobortis sapien ipsum, eget consequat nisl consequat quis. Nulla facilisi.</p>
      </main>
    </>
  )
}
