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

type CreateHouseProps = {
  createHouseModalOpen: boolean;
  setCreateHouseModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateHouse = (props: CreateHouseProps) => {
  const [formValue, setFormValue] = useState({
    houseName: '',
  });

  return (
    <IonModal isOpen={props.createHouseModalOpen} backdropDismiss={false}>
      <IonContent>
        <h1>Create a House</h1>
        <form>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Enter House Name:</IonLabel>
              <IonInput value={formValue.houseName} name="houseName"></IonInput>
            </IonItem>
            <IonButton type="submit">Submit</IonButton>
          </IonList>
        </form>
        <IonButton
          onClick={() => {
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
