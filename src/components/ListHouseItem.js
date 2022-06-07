import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonItem,
  IonPage,
} from '@ionic/react';
 import { Link, Navigate, useHistory } from 'react-router-dom';

function ListHouseItem({ house }) {
  const history = useHistory();

  const ViewHandler = () => {
     history.push('/house/' + house.id);
   };

  return (
    <IonCard>
      <IonCardHeader>
        <IonItem>
          <IonCardTitle>{house.name}</IonCardTitle>
        </IonItem>
        <IonCardContent>{house.id}</IonCardContent>
        <IonCardContent>
          <IonButton onClick={ViewHandler}>View (Not Working)</IonButton>
        </IonCardContent>
      </IonCardHeader>
    </IonCard>
  );
}

export default ListHouseItem;
