import React from 'react';
import { IoIosSend } from 'react-icons/io';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => (
  <div className="main__wrap" >
    <header className="header__home">
      <h2>quest</h2>
      <Link to="/registration">
        <button>
          get started
        </button>
      </Link>
    </header>

    <main>
      <aside className="left">
        <h1>Express &bull; Inspire <span className="white">&bull; Share</span>
        </h1>

        <section className="wrap">
          <p className="info">
            Quest enhances your social health by taking away the worries of keeping up with every trend on every social platform.
          </p>

          <p className="description">
            One post, one message, one compose...
            <span> multiple share <IoIosSend /></span>
          </p>

          <section className="action">
            <Link to='/login'>Let's Go</Link>
          </section>
        </section>
      </aside>

      <aside className="right overlay"></aside>
    </main>

  </div>
)

export default Home