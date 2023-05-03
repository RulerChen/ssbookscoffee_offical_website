import { Link } from 'react-router-dom';

import Header from '../components/Header';

import Banner from '../assets/banner.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className='home' style={{ backgroundImage: `url(${Banner})` }}>
        <div className='headerContainer'>
          <h1>三夏 好食書坊</h1>
          <p>溫沙拉、農產品、空間出租</p>
          <Link to='/menu'>
            <button>立即訂購</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
