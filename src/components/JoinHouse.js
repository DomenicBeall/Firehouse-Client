import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
} from '@ionic/react';
import React, { useState } from 'react';
import './CreateHouse.css';
import HouseService from '../services/HouseService';

const JoinHouse = (props) => {
  const [JoinHouseID, setJoinHouseID] = useState('');

  const JoinHouseHandler = async () => {
    if (HouseService.getHouseById(JoinHouseID)) {
      console.log('house Joined');
    } else {
      console.log('House not joined');
      return;
    }
  };

  return (
    <IonModal isOpen={props.JoinHouseModalOpen} backdropDismiss={false}>
      <IonContent>
        <h1>Join a House</h1>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Enter House ID:</IonLabel>
            <IonInput
              value={JoinHouseID}
              name="HouseID"
              id="JoinHouseID"
              onIonChange={(e) => {
                setJoinHouseID(e.target.value);
              }}
            ></IonInput>
          </IonItem>
          <IonButton
            onClick={() => {
              JoinHouseHandler(HouseService.getHouseById);
            }}
          >
            Enter
          </IonButton>
        </IonList>

        <IonButton
          onClick={() => {
            props.setJoinHouseModalOpen(false);
          }}
        >
          Cancel
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default JoinHouse;
