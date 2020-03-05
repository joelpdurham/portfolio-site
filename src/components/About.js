import React, { useState } from 'react';
import styles from './About.css';
import { useDotAnimation } from '../hooks/useDotAnimation';

export const About = () => {
  const { display, animate, dots, handleClick } = useDotAnimation(21);

  const arrow = display && animate ? '<' : (<span className={styles.dots}>{dots}</span>); 

  const content = display ? 
    (<div>
      <p>
      I&apos;m a full stack developer who likes seeing projects through from inception to completion. I have 12 years professional experience working in highly collaborative environments, leading diverse teams, and building projects from the ground up.
      </p>
      < br/>
      <p>I have a soft spot in my heart for redux, I enjoy wrestling with regex, and I google CSS solutions, like, a lot.
      </p>
    </div>) : (<></>);

  
  return (
    <section className={styles.about}>
      <h2 onClick={handleClick}>About <span className={styles.arrow}>{arrow}</span></h2>
      {content}
    </section>
  );
};

