import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";

const Login: React.FC = () => {

  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={() => { loginWithRedirect(); }}>Log In</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
