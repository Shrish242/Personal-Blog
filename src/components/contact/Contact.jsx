"use client"

import React, { useState } from 'react';
import styles from '../contact/Contact.module.css';
import contact from '../../app/api/Contact.js'

const Contact = () => {

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <p className={styles.title}>Want to Contact me?</p>
        <p className={styles.subtitle}>
          Now more easier access. Just send me your queries here and I am one
          click away
        </p>
        <div className={styles.textarea}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className={styles.button}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
