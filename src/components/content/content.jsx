"use client"
import React from 'react';
import styles from '../content/content.module.css';
import Image from 'next/image';
import bg from '../Image/jjk.png';

const PDF_URL = "/CV.pdf"; // Update the path to your PDF file

const Content = () => {
  const download = () => {
    const link = document.createElement('a');
    link.href = PDF_URL;
    link.download = 'Your_CV_File_Name.pdf'; // Change the filename as desired
    link.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Welcome to the domain of Shrish.
        <p className={styles.desc}>
          Welcome to my side of the Internet. Computer enthusiast with the eagerness to learn everything possible. This site mainly focuses on my skills and how I learned them and how I am using them.
        </p>
        <p className={styles.cv} onClick={download}>
        Download CV
      </p>
      </div>
      <div className={styles.imagebox}>
        <Image src={bg} className={styles.bg} alt='' />
      </div>
      
    </div>
  );
};

export default Content;
