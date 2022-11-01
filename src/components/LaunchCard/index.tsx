import React, { useState } from 'react';
import { getItem, saveItem, deleteItem } from '../../utils';
import Card from 'react-bootstrap/Card';

const saveFavorite = (status: boolean, id: string) => {
  if (status) {
    saveItem(id, status);
  } else {
    deleteItem(id);
  }
};
type Props = {
  launch: any;
};
const LaunchCard: React.FC<Props> = ({ launch }) => {
  const [value, setValue] = useState<boolean>(
    Boolean(getItem(launch.flight_number))
  );
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
            checked={value}
            onChange={(event: any) => {
              setValue(event.currentTarget.checked);
              saveFavorite(event.currentTarget.checked, launch.flight_number);
            }}
          ></input>
        </Card.Body>
      </Card>
    </>
  );
};

export default LaunchCard;
