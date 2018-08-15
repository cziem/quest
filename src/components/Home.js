import React from 'react';
import { IoIosSend } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={styles.body}>
    <header>
      <h2>quest</h2>
      <button>get started</button>
    </header>

    <main>
      <h1>Express &bull; Inspire &bull; Share</h1>

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
    </main>

    <aside className="overlay"></aside>
  </div>
)

export default Home

const styles = {
  body: {
    background: 'white',
    width: '100%',
    height: '100%'
  }
}