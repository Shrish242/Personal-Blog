"use client"

import React, { useState } from 'react';
import styles from '../contact/Contact.module.css';
import Facebook from '../Image/Facebook.png'
import Instagram from '../Image/Insta.png'
import X from '../Image/X.png'
import Github from '../Image/Github.png'
import Linkedin from '../Image/Linkedin.png'
import Discord from '../Image/Discord.png'
import Reddit from '../Image/Reddit.png'
import Spotify from '../Image/Spotify.jpg'
import Image from 'next/image';
import Link from 'next/link';


// Use the React fragment to wrap the social icons
// Use the React fragment to wrap the social icons
const Contact = () => {
  return (
    <div id="socialSection" className={styles.container}>
      <p className={styles.title}>Want to Contact Me?</p>
      <br />
      <p className={styles.subtitle}>I am one click away</p>
      <div className={styles.contact}>
        <div className={styles.socialsContainer1}>
          {/* First Row of Social Icons */}
          <Link href="https://www.facebook.com/shrish.dhakal.35?mibextid=ZbWKwL"><Image src={Facebook} alt='' className={styles.socials} /></Link>
          <Link href="https://www.instagram.com/_srs242?igsh=OXpmNmZjemhscTE="><Image src={Instagram} alt='' className={styles.socials} /></Link>
          <Link href="https://github.com/Shrish242"><Image src={Github} alt='' className={styles.socials} /></Link>
          <Link href="https://www.linkedin.com/in/shrish-dhakal-16277a20b/"><Image src={Linkedin} alt='' className={styles.socials} /></Link>
        </div>
        <div className={styles.socialsContainer2}>
          {/* Second Row of Social Icons */}
         <Link href="/"> <Image src={Discord} alt='' className={styles.socials} /></Link>
         <Link href="/"> <Image src={Reddit} alt='' className={styles.socials} /></Link>
         <Link href="https://open.spotify.com/user/31a5j7gkse3n6toj254pgj2pxp4m?si=ad2983c3c56f4fe9"> <Image src={Spotify} alt='' className={styles.socials} /></Link>
         <Link href="https://x.com/ShrishDhakal?t=aHOv8ZBQLiMwLze5d8EWMw&s=09"> <Image src={X} alt='' className={styles.socials} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;


