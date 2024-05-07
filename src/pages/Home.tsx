import {
  IonButtons,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { useRef, useState } from "react";
import QrReader from "../components/qrCodeScanner";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  const history = useHistory();

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const [scannedResult, setScannedResult] = useState<string | undefined>("");
  const closeModal = () => {
    modal.current?.dismiss();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mini Q</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mini Q</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <ExploreContainer />

        <IonFab slot="fixed" vertical="bottom" horizontal="center">
          <IonFabButton id="open-modal">
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonModal ref={modal} trigger="open-modal">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  Cancel
                </IonButton>
              </IonButtons>
              <IonTitle>QR SCAN</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <QrReader
              closeModal={closeModal}
              onScan={(result:any) => {
                setScannedResult(result);
                closeModal();
                history.push(`/WelcomeComponent/${result}`);
              }}
            />
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
