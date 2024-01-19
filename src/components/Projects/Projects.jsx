import React from 'react';
import styles from '../Projects/Projects.module.css';
import Image from 'next/image';
import Discord from '../Image/Discord.png';
import Reactlogo from '../Image/react.png';
import C from '../Image/c.png';
import Next from '../Image/nextjs.svg';
import python from '../Image/python.png'

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Projects</div>
      <div className={styles.platesContainer}>
        {/* First set of plates */}
        <div className={styles.column}>
          <div className={styles.subplates}>
            <Image src={Discord} alt='' className={styles.Discord} />
            <p className={styles.subdesc}>
              Discord Bot with the theme of the game as a pirate where it stores
              data and achievements and location. It uses technology of Node.js,
              JavaScript, Mongodb, Postman
            </p>
          </div>
          <div className={styles.subplates}>
            <Image src={Reactlogo} alt='' className={styles.Reactlogo} />
            <p className={styles.subdesc}>
              It is a website created using React which includes technology of
              Router and tailwind. It includes data of college in Kathmandu in
              different fields.
            </p>
          </div>
          <div className={styles.subplates}>
            <Image src={C} alt='' className={styles.C} />
            <p className={styles.subdesc}>
              It is a restaurant billing system that saves the bill of the
              customer and gets when needed using the name of the customer. It
              was a simple system developed using C language.
            </p>
          </div>
          <div className={styles.subplates}>
            <Image src={Next} alt='' className={styles.next} />
            <p className={styles.subdesc}>
              It is a blog website designed using Next.js and its component with
              tailwind css using root folders as routers. It is just a sample
              which will be used as a framework for upcoming projects
            </p>
          </div>
        </div>

        {/* Second set of empty plates */}
        <div className={styles.column}>
          <div className={styles.subplates}>
            <Image src={python} alt='' className={styles.python}/>
            <p className={styles.subdesc}>It was created to know the basic of machine learning with the use of python and its library like numpy, pandas,tensorflow. It is basically the just learn project rather than skill development project.</p>
          </div>
          <div className={styles.subplates}>
            <p className={styles.subundesc}>Coming soon...</p>
          </div>
          <div className={styles.subplates}>
          <p className={styles.subundesc}>Coming soon...</p>
          </div>
          <div className={styles.subplates}>
          <p className={styles.subundesc}>Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
