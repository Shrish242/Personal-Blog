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


const Contact = () => {

  return (
    <div className={styles.container}>
     <p className={styles.title}>Want to Contact Me?</p>
     <br /><p className={styles.subtitle}>I am one click away</p>
      <div className={styles.contact}>
        <Image src={Facebook} alt='' className={styles.socials} />
        <Image src={Instagram} alt='' className={styles.socials}/>
        <Image src={Github} alt='' className={styles.socials}/>
        <Image src={Linkedin} alt='' className={styles.socials}/>
        <Image src={Discord} alt='' className={styles.socials}/>
        <Image src={Reddit} alt='' className={styles.socials}/>
        <Image src={Spotify} alt='' className={styles.socials}/>
        <Image src={X} alt='' className={styles.socials}/>
      </div>
    </div>
  );
};

export default Contact;
