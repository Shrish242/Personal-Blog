import styles from "./homepage.module.css";
import React from "react";
import Content from "../components/content/content.jsx";
import Skills from "../components/skills/skills.jsx";
import Pallettes from "../components/pallettes/pallettes.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Blog from "../components/BlogPosts/Blog";
import Contact from "../components/contact/Contact.jsx";

export default function Home() {
  return <div className={styles.container}>
    <Content/>
    <Pallettes/>
    <Skills/>
    <Projects/>
    <Blog/>
    <Contact/>
  </div>;
}