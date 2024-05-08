import React, { useState, useEffect, useRef } from "react";
import { IonContent, IonPage, IonModal, IonButton, IonSearchbar, IonBackButton, IonButtons, IonTitle, IonToolbar, IonIcon, IonNavLink, IonHeader, IonFooter } from "@ionic/react";
import { chevronBackOutline, qrCodeOutline, ellipsisHorizontal, ellipsisVertical, personCircle, search } from "ionicons/icons";
import { useHistory, useParams } from "react-router";
import roomData from "./roomData"; // Assuming roomData is exported from another file
import Home from "../pages/Home";

interface RoomDetails {
    image: string;
    floorLevel: number;
    // Add more properties as needed
}

const WelcomeComponent = () => {
    const modal = useRef<HTMLIonModalElement>(null);

    const history = useHistory();
    const { qrValue } = useParams<{ qrValue: keyof typeof roomData }>();
    const [destinationData, setDestinationData] = useState<{
        [key: string]: RoomDetails;
    } | null>(null);
    const [filteredData, setFilteredData] = useState<{
        [key: string]: RoomDetails;
    } | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedDestination, setSelectedDestination] = useState<string | null>(
        null
    );

    useEffect(() => {
        // Filter roomData based on qrValue
        const filteredData = roomData[qrValue];
        setDestinationData(filteredData);
        setFilteredData(filteredData); // Initialize filteredData with destinationData
    }, [qrValue]);

    useEffect(() => {
        // Filter destinationData based on searchQuery
        if (destinationData) {
            const filtered = Object.keys(destinationData)
                .filter((key) => key.toLowerCase().includes(searchQuery.toLowerCase()))
                .reduce<{ [key: string]: RoomDetails }>((obj, key) => {
                    obj[key] = destinationData[key];
                    return obj;
                }, {});
            setFilteredData(filtered);
        }
    }, [searchQuery, destinationData]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleDestinationClick = (destination: string) => {
        setSelectedDestination(destination);
    };

    const handleCloseModal = () => {
        setSelectedDestination(null);
    };

    return (
        <IonPage>
            <IonFooter>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home"></IonBackButton>
                    </IonButtons>
                    <IonTitle></IonTitle>
                </IonToolbar>
            </IonFooter>
            <IonContent>

                <div id="container" className="z-40 flex items-center justify-center w-full h-[900px]">
                    <div className="flex flex-col justify-between w-full h-full p-6 bg-base-300 text-base-content">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className='text-xl'>Your Current Location:</h1>
                            <h1 className="-mt-2 text-6xl font-bold text-center w-96 rounded-2xl">{qrValue}</h1>
                        </div>

                        <IonModal ref={modal} trigger="open-modal" mode='ios' initialBreakpoint={0.75} breakpoints={[0, 0.75]}>
                            <IonFooter>
                                <IonToolbar>
                                    <IonButtons slot="secondary">
                                        <IonButton onClick={handleCloseModal}>
                                            <IonIcon slot="icon-only" className="text-white" icon={chevronBackOutline}></IonIcon>
                                        </IonButton>

                                    </IonButtons>
                                    <IonTitle></IonTitle>
                                </IonToolbar>
                            </IonFooter>
                            <IonContent className=" ion-padding">
                                {/* <IonSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.75)} showCancelButton="focus" animated={true} placeholder="&nbsp; &nbsp; &nbsp; Where do you want to go?" className="w-full h-16 text-left"></IonSearchbar> */}
                                <div className="px-3">
                                    <input
                                        className="w-full px-10 py-5 mt-5 text-base-content h-14 bg-base-100 rounded-xl"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        placeholder="Search destination"
                                    />
                                </div>

                                <div className="flex flex-col p-3 mt-10 h-[600px]">
                                    <div>

                                        {searchQuery &&
                                            filteredData &&
                                            Object.keys(filteredData).length === 0 && <h1 className="text-center">No results found.</h1>}

                                        {searchQuery &&
                                            filteredData &&
                                            Object.keys(filteredData).length > 0 && (

                                                <div>
                                                    {Object.entries(filteredData).map(([destination, details]) => (
                                                        <div key={destination}>
                                                            <h1 className="mb-5 text-center">Results:</h1>
                                                            <button
                                                                onClick={() => handleDestinationClick(destination)}
                                                                className="flex items-center justify-center btn-block btn"
                                                            >

                                                                <h3 className="font-semibold uppercase">{destination}</h3>
                                                            </button>
                                                            <IonModal isOpen={selectedDestination === destination} mode="ios">
                                                                <IonFooter>
                                                                    <IonToolbar mode="ios">
                                                                        <IonButtons slot="secondary">
                                                                            <IonButton onClick={handleCloseModal}>
                                                                                <IonIcon slot="icon-only" className="text-white" icon={chevronBackOutline}></IonIcon>
                                                                            </IonButton>

                                                                        </IonButtons>
                                                                        <IonButtons slot="primary">

                                                                            <IonButton onClick={() => {
                                                                                handleCloseModal();
                                                                                history.push("/home");

                                                                            }}>
                                                                                <IonIcon slot="icon-only" className="text-white" ios={qrCodeOutline} md={qrCodeOutline}></IonIcon>
                                                                            </IonButton>

                                                                        </IonButtons>
                                                                        <IonTitle></IonTitle>
                                                                    </IonToolbar>
                                                                </IonFooter>
                                                                <IonContent>
                                                                    <img src={details.image} alt={destination} className="h-full" />
                                                                </IonContent>
                                                            </IonModal>
                                                            {/* <h2>Floor Level: {details.floorLevel}</h2> */}
                                                            {/* Assuming there are other details to display */}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </IonContent>
                        </IonModal>
                        <div>
                            <h1 className="text-center">where do you want to go?</h1>
                            <div>
                                {/* <input type='text' className='w-full h-16 p-6 rounded-2xl bg-base-300' /> */}
                                <IonButton id="open-modal" expand="block" className="z-50 w-full rounded-3xl searchBtn">
                                    Search Your Destination
                                </IonButton>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <button
                    onClick={() => {
                        history.push("/home");
                    }}
                    className="btn"
                >
                    BACK TO HOME to SCAN AGAIN
                </button> */}
            </IonContent>
        </IonPage>
    );
};

export default WelcomeComponent;