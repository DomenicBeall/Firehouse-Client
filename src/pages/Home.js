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
} from '@ionic/react';
import './Home.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import CreateHouse from '../components/CreateHouse';
import ListHouseItem from '../components/ListHouseItem';
import HouseService from '../services/HouseService';
import JoinHouse from '../components/JoinHouse';

const Home = () => {
  const { logout, user } = useAuth0();
  const [createHouseModalOpen, setCreateHouseModalOpen] = useState(false);
  const [JoinHouseModalOpen, setJoinHouseModalOpen] = useState(false);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    LoadHouses();
  }, []);

  function LoadHouses() {
    var houses = HouseService.getHousesByUserId(user.sub);
    setHouses(houses);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home Page</IonTitle>
          <IonButton
            slot="end"
            onClick={() => {
              setJoinHouseModalOpen(true);
            }}
          >
            Join a House (test)
          </IonButton>
          <JoinHouse
            JoinHouseModalOpen={JoinHouseModalOpen}
            setJoinHouseModalOpen={setJoinHouseModalOpen}
          ></JoinHouse>
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
            reloadHouses={LoadHouses}
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
          </IonCardHeader>
          <IonCardContent>
            <b>Email:</b> {user?.email}
            <br />
            <b>ID:</b> {user?.sub}
          </IonCardContent>
        </IonCard>
        <br />
        {houses.map((houses, index) => (
          <ListHouseItem house={houses} key={index}></ListHouseItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
