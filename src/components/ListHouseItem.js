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
// import { Link, Navigate, useNavigate } from 'react-router-dom';

function ListHouseItem({ house }) {
  // const navigate = useNavigate();

  // const ViewHandler = () => {
  //   navigate('/house/:id');
  // };

  return (
    <IonCard>
      <IonCardHeader>
        <IonItem>
          <IonCardTitle>{house.name}</IonCardTitle>
        </IonItem>
        <IonCardContent>{house.id}</IonCardContent>
        <IonCardContent>
          <IonButton>View (Not Working)</IonButton>
        </IonCardContent>
      </IonCardHeader>
    </IonCard>
  );
}

export default ListHouseItem;
