// This Component is for creating Houses (Groups) For users to join.
// It will collect the House Name and create a unique :id for the House

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
import { useAuth0 } from '@auth0/auth0-react';

const CreateHouse = (props) => {
  const [houseName, setHouseName] = useState('');
  const { user } = useAuth0();

  return (
    <IonModal isOpen={props.createHouseModalOpen} backdropDismiss={false}>
      <IonContent>
        <h1>Create a House</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            HouseService.createHouse(houseName, user.sub);
            props.reloadHouses();
            props.setCreateHouseModalOpen(false);
          }}
        >
          <IonList>
            <IonItem>
              <IonLabel position="floating">Enter House Name:</IonLabel>
              <IonInput
                value={houseName}
                name="houseName"
                onIonChange={(e) => {
                  setHouseName(e.target.value);
                }}
              ></IonInput>
            </IonItem>
            <IonButton type="submit">Submit</IonButton>
          </IonList>
        </form>
        <IonButton
          onClick={(e) => {
            props.setCreateHouseModalOpen(false);
          }}
        >
          Cancel
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default CreateHouse;
