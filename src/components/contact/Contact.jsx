import React from 'react'
import styles from '../contact/Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
        <p className={styles.title}>Want to Contact me?</p>
        <p className={styles.subtitle}>Now more easier access. Just send me your queries here and I am one click away</p>
        <div className={styles.textarea}>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className={styles.button}>Send</button>
        </div>
    </div>
  )
}

export default Contact