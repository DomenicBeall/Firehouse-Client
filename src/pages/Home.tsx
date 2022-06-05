import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonAvatar,
  IonModal,
} from '@ionic/react';
import './Home.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import CreateHouse from '../components/CreateHouse';

const Home: React.FC = () => {
  const { logout, user } = useAuth0();
  const [createHouseModalOpen, setCreateHouseModalOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home Page</IonTitle>
          <IonButton
            slot="end"
            onClick={() => {
              setCreateHouseModalOpen(true);
            }}
          >
            Create a House (test)
          </IonButton>
          <CreateHouse
            createHouseModalOpen={createHouseModalOpen}
            setCreateHouseModalOpen={setCreateHouseModalOpen}
          />
          <IonButton
            slot="end"
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonItem>
              <IonAvatar slot="start">
                <img src={user?.picture} />
              </IonAvatar>
              <IonCardTitle>{user?.name}</IonCardTitle>
            </IonItem>
            <IonCardContent>
              <b>Email:</b> {user?.email}
              <br />
              <b>ID:</b> {user?.sub}
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
