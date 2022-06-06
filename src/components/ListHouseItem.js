import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonItem,
  IonPage,
} from '@ionic/react';

function ListHouseItem({ house }) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonItem>
          <IonCardTitle>{house.name}</IonCardTitle>
        </IonItem>
        <IonCardContent>{house.id}</IonCardContent>
      </IonCardHeader>
    </IonCard>
  );
}

export default ListHouseItem;
