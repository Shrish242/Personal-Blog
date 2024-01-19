import React from 'react'
import styles from '../pallettes/pallettes.module.css'
import Link from 'next/link'

const pallettes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Easy to access</div>
     <div className={styles.categories}>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.Projects}`}>Projects</Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.Blog}`}>Blog Posts</Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.Social}`}>Social</Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.culture}`}>Culture</Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.coding}`}>Coding</Link>
        </div>
    </div>
  )
}

export default pallettes