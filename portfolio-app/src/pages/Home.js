import React from 'react';
import Header from '../components/header/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
