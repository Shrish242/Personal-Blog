import React from 'react';
import styles from '../skills/skills.module.css';
import reactlogo from '../Image/react.png';
import js from '../Image/Js.png';
import csslogo from '../Image/css.png';
import nextlogo from '../Image/nextjs.svg';
import c from '../Image/c.png';
import cpp from '../Image/x++.png';
import Image from 'next/image';
import figma from '../Image/figma.png';
import tailwind from '../Image/tailwind.png';
import node from '../Image/node.png';

const Skills = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Skills</p>
      <div className={styles.skills}>
        <div className={styles.row}>
          <Image src={csslogo} className={styles.css} alt='' />
          <Image src={js} className={styles.js} alt='' />
          <Image src={c} className={styles.c} alt='' />
        </div>
        <br />
        <div className={styles.row}>
          <Image src={cpp} className={styles.cpp} alt='' />
          <Image src={nextlogo} className={styles.next} alt='' />
          <Image src={reactlogo} className={styles.react} alt='' />
        </div>
        <div className={styles.row}>
          <Image src={node} className={styles.node} alt='' />
          <Image src={tailwind} className={styles.tailwind} alt='' />
          <Image src={figma} className={styles.figma} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
