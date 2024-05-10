import React, { useState, useEffect, useRef } from "react";
import { IonContent, IonPage, IonModal, IonButton, IonSearchbar, IonBackButton, IonButtons, IonTitle, IonToolbar, IonIcon, IonNavLink, IonHeader, IonFooter } from "@ionic/react";
import { chevronBackOutline, qrCodeOutline, searchOutline } from "ionicons/icons";
import { useHistory, useParams } from "react-router";
import roomData from "./roomData";

interface RoomDetails {
    image: string;
    floorLevel: string;
    buildingName: string;
}

const WelcomeComponent = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [isOpen, setIsOpen] = useState(false);

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
        const filteredData = roomData[qrValue];
        setDestinationData(filteredData);
        setFilteredData(filteredData);
    }, [qrValue]);

    useEffect(() => {
        if (destinationData) {
            const filtered = Object.keys(destinationData)
                .filter((key) => {
                    const roomDetails = destinationData[key];
                    return (
                        key.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        roomDetails.buildingName.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                })
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

    const handleModalDidDismiss = () => {
        setIsOpen(false); // Ensure isOpen is set to false when the modal is dismissed
    };

    const handleBack = () => {
        history.push('/home');
    };


    return (
        <IonPage>
            <IonFooter>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton className="" onClick={handleBack}><IonIcon className="text-white" slot="icon-only" icon={chevronBackOutline} /><div className="text-white">
                        Back</div></IonButton>
                    </IonButtons>
                    <IonTitle></IonTitle>
                </IonToolbar>
            </IonFooter>
            <IonContent>
                <div id="container" className="z-40 flex items-center justify-center w-full h-full">
                    <div className="flex flex-col justify-between w-full h-full bg-base-300 text-base-content">
                        <div className="m-6 bg-base-100 rounded-3xl">
                            <div className="flex flex-col items-center justify-center">
                                <h1 className='text-xl'>Your Current Location:</h1>
                                <h1 className="-mt-2 text-6xl font-bold text-center w-96 rounded-2xl">{qrValue}</h1>
                            </div>

                        </div>
                        <div className="bg-base-200 rounded-t-3xl">
                            <div className="px-6 ">
                                <h1 className="text-lg text-center ">Where do you want to go?</h1>
                                <label className="flex items-center h-16 gap-2 input rounded-2xl input-bordered">
                                    <IonIcon slot="icon-only" className="w-10 h-10 text-white" icon={searchOutline}></IonIcon>
                                    <input type="text" value={searchQuery}
                                        onChange={handleSearchChange} className="w-full grow text-base-content h-14 bg-base-100 rounded-2xl" placeholder="search your destination here..." />

                                </label>
                            </div>
                            <h1 className="text-center">Search Results:</h1>
                            <div className="flex flex-col p-3 overflow-y-scroll bg-base-100 rounded-t-3xl h-[500px]">


                                <div>
                                    {searchQuery &&
                                        filteredData &&
                                        Object.keys(filteredData).length === 0 && <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 dark:text-gray-400">
                                            <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                            <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
                                            <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
                                            <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
                                        </svg>
                                        <p className="text-3xl">Looks like we didn't find your query, try again.</p>
                                        
                                    </div>}
                                    {searchQuery &&
                                        filteredData &&
                                        Object.keys(filteredData).length > 0 && (
                                            <div className="space-y-3">
                                                {Object.entries(filteredData).map(([destination, details]) => (
                                                    <div key={destination}>
                                                        <button
                                                            onClick={() => handleDestinationClick(destination)}
                                                            className="h-full py-3 bg-base-300 rounded-2xl btn-block btn"
                                                        >
                                                            <div className="flex justify-between w-full h-auto space-x-3">
                                                                <div className="text-lg font-semibold text-left uppercase truncate w-72 text-wrap text-ellipsis">{destination}</div>
                                                                <div className="flex flex-col items-end space-y-2 text-right">
                                                                    <div> floor: {details.floorLevel}</div>
                                                                    <div className="badge badge-lg bg-emerald-500 text-base-300">{details.buildingName}</div>
                                                                </div>
                                                            </div>
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
                                                                        <IonButton
                                                                            onClick={() => {
                                                                                handleCloseModal();
                                                                                history.push("/home");
                                                                                setIsOpen(false);
                                                                                setSearchQuery("");
                                                                            }}
                                                                        >
                                                                            <IonIcon slot="icon-only" className="text-white" icon={qrCodeOutline}></IonIcon>
                                                                        </IonButton>
                                                                    </IonButtons>
                                                                    <IonTitle></IonTitle>
                                                                </IonToolbar>
                                                            </IonFooter>
                                                            <IonContent>
                                                                <img src={details.image} alt={destination} className="h-full" />
                                                            </IonContent>
                                                        </IonModal>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>
                        <IonModal
                            ref={modal}
                            mode='ios'
                            initialBreakpoint={0.75}
                            breakpoints={[0, 0.75]}
                            isOpen={isOpen}
                            onDidDismiss={handleModalDidDismiss} // Listen for modal dismissal event
                        >
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
                                <div className="px-3">
                                    <input
                                        className="w-full px-10 py-5 mt-5 text-base-content h-14 bg-base-100 rounded-xl"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        placeholder="Search destination"
                                    />
                                </div>
                                <h1 className="mb-5 text-center">Search Results:</h1>
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
                                                            <button
                                                                onClick={() => handleDestinationClick(destination)}
                                                                className="flex items-center justify-center h-auto mb-3 btn-block btn"
                                                            >
                                                                <h3 className="font-semibold uppercase">{destination} - floor: {details.floorLevel} - {details.buildingName}</h3>
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
                                                                            <IonButton
                                                                                onClick={() => {
                                                                                    handleCloseModal();
                                                                                    history.push("/home");
                                                                                    setIsOpen(false);
                                                                                    setSearchQuery("");
                                                                                }}
                                                                            >
                                                                                <IonIcon slot="icon-only" className="text-white" icon={qrCodeOutline}></IonIcon>
                                                                            </IonButton>
                                                                        </IonButtons>
                                                                        <IonTitle></IonTitle>
                                                                    </IonToolbar>
                                                                </IonFooter>
                                                                <IonContent>
                                                                    <img src={details.image} alt={destination} className="h-full" />
                                                                </IonContent>
                                                            </IonModal>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </IonContent>
                        </IonModal>
                        <div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default WelcomeComponent;
