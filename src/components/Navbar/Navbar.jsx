import React from 'react'
import styles from './Navbar.module.css'
import Facebook from '../Image/Facebook.png'
import Instagram from '../Image/Insta.png'
import X from '../Image/X.png'
import Discord from '../Image/Discord.png'
import Image from 'next/image'
import Themetoggle from '../Themetoggle/Themefile.jsx'
import Link from 'next/link'
import Authlinks from '../Authlinks/Authlinks.jsx'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
      <Link href="https://www.facebook.com/shrish.dhakal.35?mibextid=ZbWKwL"><Image src={Facebook} alt='facebook' width={24} height={24}/></Link>
      <Link href="https://www.instagram.com/_srs242?igsh=OXpmNmZjemhscTE="> <Image src={Instagram} alt='Instagram' width={24} height={24}/></Link>
      <Link href="https://x.com/ShrishDhakal?t=aHOv8ZBQLiMwLze5d8EWMw&s=09">  <Image src={X} alt='X' width={25} height={24}/></Link>
        <Image src={Discord} alt='Discord' width={26} height={24}/>

      </div>
      <div className={styles.logo}>Shrish Blog</div>
      <div className={styles.links}>
        <Themetoggle/>
        <Link href='/' className={styles.link}>Homepage</Link>
        <Link href='/about' className={styles.link}>About</Link>
        <Link href='/contact' className={styles.link}>Contact</Link>
        <Authlinks/>
      </div>



    </div>
  )
}

export default Navbar