"use client"
import React from 'react';
import styles from '../pallettes/pallettes.module.css';
import Link from 'next/link';

const Pallettes = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projectsSection');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const scrollToBlog = () => {
    const blogSection = document.getElementById('blogSection');
    if (blogSection) {
      window.scrollTo({
        top: blogSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const scrollToSocial = () => {
    const socialSection = document.getElementById('socialSection');
    if (socialSection) {
      window.scrollTo({
        top: socialSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const scrollToCulture = () => {
    const cultureSection = document.getElementById('skillSection');
    if (cultureSection) {
      window.scrollTo({
        top: cultureSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const scrollToCoding = () => {
    const codingSection = document.getElementById('codingSection');
    if (codingSection) {
      window.scrollTo({
        top: codingSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Easy to access</div>
      <div className={styles.categories}>
        <button
          onClick={scrollToProjects}
          className={`${styles.category} ${styles.Projects}`}
        >
          Projects
        </button>
        <button
          onClick={scrollToBlog}
          className={`${styles.category} ${styles.Blog}`}
        >
          Blog Posts
        </button>
        <button
          onClick={scrollToSocial}
          className={`${styles.category} ${styles.Social}`}
        >
          Social
        </button>
        <button
          onClick={scrollToCulture}
          className={`${styles.category} ${styles.Culture}`}
        >
          Skills
        </button>
        <button
          onClick={scrollToCoding}
          className={`${styles.category} ${styles.Coding}`}
        >
          Coding
        </button>
      </div>
    </div>
  );
};

export default Pallettes;
