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
  IonFooter,
} from "@ionic/react";
import { add, qrCodeOutline } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { useRef, useState } from "react";
import QrReader from "../components/qrCodeScanner";
import { useHistory } from "react-router";
import { Icon } from "@iconify/react";

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
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {/* <ExploreContainer /> */}
        <div id="container" className="z-40 flex items-center justify-center w-full h-full py-20">
          <div className="flex flex-col justify-between w-full h-full p-6 text-base-content">
            <div>
              <h1 className='text-xl text-center'>WELCOME TO</h1>
              <h1 className="-mt-2 font-bold text-center text-8xl">NAVI Q</h1>
            </div>

            <div className="mb-1">
              <div className="flex flex-col items-center justify-center">
                <h1 className='text-xl text-center'>USE THE QR CODE SCANNER TO NAVIGATE</h1>
                <Icon icon="icon-park-outline:down" className="w-10 h-10 mt-5 animate-bounce" />
              </div>
              <IonFab slot="fixed" vertical="bottom" horizontal="center"  className="mb-10">
                <IonFabButton id="open-modal">
                  <IonIcon icon={qrCodeOutline}></IonIcon>
                </IonFabButton>
              </IonFab>

            </div>
          </div>
        </div>


        <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.75} breakpoints={[0, 0.75]}  handleBehavior="cycle">
          <IonHeader>
            <IonToolbar className="">
              <IonButtons slot="end">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  Cancel
                </IonButton>
              </IonButtons>
              {/* <IonTitle>QR CODE SCANNER</IonTitle> */}
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <QrReader
              closeModal={closeModal}
              onScan={(result: any) => {
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