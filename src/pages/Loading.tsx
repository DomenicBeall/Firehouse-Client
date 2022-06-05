import { IonContent, IonPage, IonSpinner } from '@ionic/react';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <IonPage>
      <IonContent id='loading-content'>
        <IonSpinner id='loading-spinner' name='crescent'>
        </IonSpinner>
      </IonContent>
    </IonPage>
  );
};

export default Loading;
