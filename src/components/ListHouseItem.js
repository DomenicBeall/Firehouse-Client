import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonPage,
} from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
 import { Link, Navigate, useHistory } from 'react-router-dom';
import HouseService from '../services/HouseService';

function ListHouseItem({ house, reloadHouses }) {
  const history = useHistory();

  const viewHandler = () => {
     history.push('/house/' + house.id);
  };

  const deleteHandler = async () => {
    await HouseService.deleteHouseById(house.id);
    reloadHouses();
  }

  return (
    <IonCard>
      <IonCardHeader>
        <IonItem>
          <IonCardTitle>{house.name}</IonCardTitle>
        </IonItem>
        <IonCardContent>{house.id}</IonCardContent>
        <IonCardContent>
          <IonButton onClick={viewHandler}>View (Not Working)</IonButton>
          <IonButton onClick={deleteHandler} color="danger">
            <IonIcon icon={trashOutline}></IonIcon>
          </IonButton>
        </IonCardContent>
      </IonCardHeader>
    </IonCard>
  );
}

export default ListHouseItem;
