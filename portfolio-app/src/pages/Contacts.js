import React from 'react';

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Kyiv, Ukraine</p>
          </li>
          <li className="content-list__item">
            <div className="title-2"></div>
            <p>
              <a href="#"></a>
            </p>
          </li>
          <li className="content-list__item">
            <div className="title-2"></div>
            <p>
              <a href="mailto:crosskyiv@gmail.com">crosskyiv@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
