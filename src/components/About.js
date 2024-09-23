import React from 'react'
import Title from './Title'
import aboutImg from '../images/about.jpeg'

const About = () => {
  return (
    <section>
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            At Treasure Global, we specialize in bringing your boldest ideas to
            life. Our cutting-edge technology and expert team help businesses of
            all sizes innovate, grow, and stand out. Whether you're looking for
            bespoke software solutions, creative design, or data-driven
            insights, we’ve got you covered.
          </p>
          <p>
            Join the hundreds of companies that trust Treasure Global to
            ensure a beautiful event that will afford a long lasting experience and memory.
          </p>
          <a href='#about' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
}

export default About