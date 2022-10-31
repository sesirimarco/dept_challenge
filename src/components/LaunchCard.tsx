import React from 'react';
import { getItem, saveItem, deleteItem } from '../utils';
import Card from 'react-bootstrap/Card';

const saveFavorite = (status: boolean, id: string) => {
  console.log(status, id);

  if (status) {
    //localStorage.setItem(id, String(status));
    saveItem(id, status);
  } else {
    deleteItem(id);
  }
};
type Props = {
  launch: any;
};
const LaunchCard: React.FC<Props> = ({ launch }) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={launch.links.mission_patch_small} />
        <Card.Body>
          <Card.Title>{launch.mission_name}</Card.Title>
          <Card.Text>{launch.details}</Card.Text>
          <p>{launch.launch_date_local}</p>
          <input
            type='checkbox'
            checked={getItem(launch.flight_number) ? true : false}
            onChange={(event: any) =>
              saveFavorite(event.currentTarget.checked, launch.flight_number)
            }
          ></input>
        </Card.Body>
      </Card>
    </>
  );
};

export default LaunchCard;
