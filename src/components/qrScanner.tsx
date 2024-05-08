import './ExploreContainer.css';
import React, { useRef } from 'react';
import {
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonImg,
    IonSearchbar,
    IonBackButton,
    IonButtons,
    IonFab,
    IonFabButton,
    IonIcon,
} from '@ionic/react';
import { Icon } from '@iconify/react';
import { add } from 'ionicons/icons';

function ExploreContainer() {
    const modal = useRef<HTMLIonModalElement>(null);

    interface ContainerProps { }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {/* <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons> */}
                    <IonTitle></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">

                <div id="container" className="z-40 flex items-center justify-center w-full h-full">
                    <div className="flex flex-col justify-between w-full h-full p-6 bg-base-300 text-base-content">
                        <div>
                            <h1 className='text-xl'>WELCOME TO</h1>
                            <h1 className="-mt-2 font-bold text-9xl">NAVI Q</h1>
                        </div>

                        <div className="mb-20">
                            <div className="flex flex-col items-center justify-center">
                                <h1 className='text-xl'>USE THE QR CODE SCANNER TO NAVIGATE</h1>
                                <Icon icon="icon-park-outline:down" className="w-10 h-10 mt-5 animate-bounce" />
                            </div>
                            <IonFab slot="fixed" vertical="bottom" horizontal="center" className="mb-10">
                                <IonFabButton id="open-modal">
                                    <IonIcon icon={add}></IonIcon>
                                </IonFabButton>
                            </IonFab>
                            
                        </div>
                    </div>
                </div>

            </IonContent>
        </IonPage>

    );
};

export default ExploreContainer;
