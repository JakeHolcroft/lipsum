import Head from 'next/head'
import Image from 'next/image'
import { Rubik } from '@next/font/google'

import { motion as m } from "framer-motion"

import { GiDinosaurRex } from "react-icons/gi";
import { useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';
const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {





  return (
    <>

    
<Head>
  <title>Lipsum.One | One Paragraph Lorem Ipsum Generator</title>
  <meta name="description" content="Generate one clean paragraph of Lorem Ipsum instantly. Perfect for designers, developers, and layout testing." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="canonical" href="https://lipsum.one" />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lipsum.one" />
  <meta property="og:title" content="Lipsum.One | One Paragraph Lorem Ipsum Generator" />
  <meta property="og:description" content="Generate one clean paragraph of Lorem Ipsum instantly. Perfect for designers, developers, and layout testing." />
  <meta property="og:image" content="https://lipsum.one/og-image.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://lipsum.one" />
  <meta name="twitter:title" content="Lipsum.One | One Paragraph Lorem Ipsum Generator" />
  <meta name="twitter:description" content="Generate one clean paragraph of Lorem Ipsum instantly. Perfect for designers, developers, and layout testing." />
  <meta name="twitter:image" content="https://lipsum.one/og-image.png" />

  {/* Keywords (optional but can help slightly) */}
  <meta name="keywords" content="Lorem Ipsum, lipsum generator, placeholder text, dummy text, HTML layout, text for wireframes" />

  {/* Author */}
  <meta name="author" content="Lipsum.One" />
</Head>
<Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lipsum.One",
    "url": "https://lipsum.one",
    "description": "Generate one clean paragraph of Lorem Ipsum instantly. Perfect for designers, developers, and layout testing.",
    "publisher": {
      "@type": "Organization",
      "name": "Lipsum.One"
    }
  })}
</Script>

 {/* Google Analytics Script (loads gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X8F4DP5C06"
        strategy="afterInteractive"
      />

      {/* Google Analytics Configuration */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X8F4DP5C06');
        `}
      </Script>
<div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 1000 }}>
      <Link href="https://www.buymeacoffee.com/jakeholcr" passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            style={{ height: '60px', width: '217px' }}
          />
        </a>
      </Link>
    </div>
      <main
  className={rubik.className + " w-[100%] h-[100vh] overflow-hidden flex justify-center items-center"}>
       
       <m.span initial={{opacity:0, y:150, x: "-50%"}} animate={{opacity:1, y:0, x:"-50%"}} transition={{duration: 0.4}}  className='flex flex-row absolute top-[20px] left-[50%] translate-x-[-50%] text-xl md:text-2xl text-[#303030]'><GiDinosaurRex size={30} className="mr-[5px]" color={"#eb4d4b"}></GiDinosaurRex> lipsum.one</m.span>
       <m.span initial={{opacity:0, y:150, x: "-50%"}} animate={{opacity:1, y:0, x:"-50%"}} transition={{duration: 0.4, delay:0.1}} className='hidden sm:flex absolute top-[70px] left-[50%] translate-x-[-50%] opacity-75 text-lg italic'>Simply one paragraph of Lorem Ipsum.</m.span>

       <m.p id="text" initial={{opacity:0, y:150, }} animate={{opacity:1, y:0}} transition={{duration: 0.4, delay:0.4}}  className={rubik.className + " text-[#303030] mt-[20px] opacity-75 w-[75%] text-center md:w-[50%] text-[15px] md:text-2xl"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat vehicula malesuada. Sed quam arcu, sodales non eros et, euismod pretium turpis. Curabitur et mauris a magna cursus molestie eget sit amet nibh. Cras aliquet euismod metus a gravida. Cras vulputate augue eget rhoncus maximus. Morbi et sollicitudin odio. Fusce ut lorem luctus, aliquam mi eget, maximus felis. Maecenas auctor odio quis elementum auctor. Integer ante lectus, egestas eu auctor sit amet, pulvinar a tortor. In ut leo massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus justo dolor, suscipit a libero id, porttitor rhoncus mi. Quisque lobortis sapien ipsum, eget consequat nisl consequat quis. Nulla facilisi.</m.p>
      
      </main>
    </>
  )
}
