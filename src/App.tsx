import './App.css';
import { useEffect, useState } from 'react';
import callApi from './services/callApi';
import LaunchCard from './components/LaunchCard';
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * 
 *  Fetch endpoints and merge arrays (we need to populate the rocket data of the
launches with the rockets array)
  2. Display launches
  3. Favorite functionality (persist them on local storage)
  4. Search by mission name
  5. Inspect a specific launch detail
  6. Pagination

 */

const mergeLaunches = (launches: any, rockets: any) => {
  return launches.map((launch: any) => {
    let newRocket = {};
    for (let i = 0; i < rockets.length; i++) {
      if (launch.rocket.rocket_id === rockets[i].rocket_id) {
        newRocket = rockets[i];
      }
    }
    launch.rocket = newRocket;
    return launch;
  });
};

function App() {
  const [rockets, setRockets] = useState<any[]>([]);
  const [launches, setLaunches] = useState<any[]>([]);
  const [mergedLaunches, setMergedLaunches] = useState<any[]>([]);

  useEffect(() => {
    const urlApiRockets = 'https://api.spacexdata.com/v3/rockets';
    const urlApiLaunches = 'https://api.spacexdata.com/v3/launches';

    callApi(urlApiRockets).then((result: any) => {
      setRockets(result);
    });
    callApi(urlApiLaunches).then((result: any) => {
      setLaunches(result);
    });
  }, []);

  useEffect(() => {
    if (!!rockets.length && !!launches.length) {
      setMergedLaunches(mergeLaunches(launches, rockets));
    }
  }, [rockets, launches]);

  return (
    <>
      <div>
        {mergedLaunches.map((launch: any, idx: number) => {
          return (
            <div key={launch.flight_number + idx}>
              <LaunchCard launch={launch}></LaunchCard>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
