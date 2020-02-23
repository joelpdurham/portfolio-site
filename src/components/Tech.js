import React from 'react';
import styles from './Tech.css';

export const Tech = () => {

  return (
    <section className={styles.tech}>
      <h2>Tech</h2>
      <div>
        <div className={styles.cats}>
          <div className={styles.items}>
            <p>HTML 5</p>
            <p>CSS 3</p>
            <p>Javascript</p>
          </div>
        </div>
        <div className={styles.cats}>
          <div className={styles.items}>
            <p>React</p>
            <p>Redux</p>
          </div>
        </div>
        <div className={styles.cats}>
          <div className={styles.items}>
            <p>Node.js</p>
            <p>Express</p>
          </div>
        </div>
        <div className={styles.cats}>
          <div className={styles.items}>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>PostgreSQL</p>
          </div>
        </div>
        <div className={styles.cats}>
          <div className={styles.items}>
            <p>Jest</p>
            <p>Qunit</p>
            <p>Travis CI</p>
          </div>
        </div>
        <div className={styles.cats}>
          <div className={styles.items}>
            <p>Github</p>
            <p>VScode</p>
            <p>Heroku</p>
            <p>Slack</p>
            <p>Trello</p>
          </div>
        </div>
      </div>
    </section>
  )};