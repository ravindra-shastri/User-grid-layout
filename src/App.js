import { useState } from 'react';
import Navbar from './components/Navbar';
import UserData from './components/UserData';
import axios from 'axios';
import './style.css';


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nodata, setNoData] = useState(true);

  const getUserData = () => {
    setNoData(false);
    setLoading(true);
    axios.get('https://reqres.in/api/users?page=1').then(({ data: { data } }) => {
      setLoading(false);
      setData(data);
    });
  }
  return (
    <div>
      <Navbar getUserData={getUserData} />
      {
        !nodata ? (
          <UserData data={data} loading={loading} />
        ) : (
          <h2 className='no-data'>
            Click on Get user button to get UserData
          </h2>
        )
      }


    </div>
  );
}

export default App;
