import React, { useState, useEffect, useRef } from "react";
import {
  IonContent,
  IonPage,
  IonModal,
  IonButton,
  IonSearchbar,
  IonBackButton,
  IonButtons,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonNavLink,
  IonHeader,
  IonFooter,
} from "@ionic/react";
import { chevronBackOutline, qrCodeOutline } from "ionicons/icons";
import { useHistory, useParams } from "react-router";

interface RoomDetails {
  image: string;
  floorLevel: string;
  buildingName: string;
}

type DestinationData = {
  [key: string]: RoomDetails;
};

// Define the type for filteredData
type FilteredData = {
  [key: string]: RoomDetails;
};

const WelcomeComponent = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();
  const { qrValue } = useParams<{ qrValue?: string | undefined }>();
  const [destinationData, setDestinationData] =
    useState<DestinationData | null>(null);
  const [filteredData, setFilteredData] = useState<FilteredData | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(""); // Ensure searchQuery is initialized with an empty string
  const [selectedDestination, setSelectedDestination] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (!destinationData) { // Add this condition to fetch data only if destinationData is not already set
      // Dynamically import the module based on qrValue
      import(`../data/${qrValue}`)
        .then((module) => {
          console.log("Fetched data:", module.default); // Log the fetched data
          setDestinationData(module.default);
          setFilteredData(module.default);
        })
        .catch((error) => {
          console.error(`Failed to load module for ${qrValue}:`, error);
        });
    }
  }, [qrValue, destinationData]); // Include destinationData in the dependency array  

  useEffect(() => {
    if (destinationData) {
      const filtered = Object.keys(destinationData)
        .filter((key) => {
          const roomDetails = destinationData[key];
          if (!roomDetails) {
            console.error("Room details is undefined for key:", key);
            return false; // Skip this key if roomDetails is undefined
          }
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
    const newSearchQuery = event.target.value || ""; // Ensure newSearchQuery is always a string
    setSearchQuery(newSearchQuery);
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
    history.push("/home");
  };

  return (
    <IonPage>
      <IonFooter>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={handleBack}>
              <IonIcon slot="icon-only" icon={chevronBackOutline} />
              Back
            </IonButton>
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonFooter>
      <IonContent>
        <div
          id="container"
          className="z-40 flex items-center justify-center w-full h-full"
        >
          <div className="flex flex-col justify-between w-full h-full p-6 bg-base-300 text-base-content">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl">Your Current Location:</h1>
              <h1 className="-mt-2 text-6xl font-bold text-center w-96 rounded-2xl">
                {qrValue}
              </h1>
            </div>
            <IonModal
              ref={modal}
              mode="ios"
              initialBreakpoint={0.75}
              breakpoints={[0, 0.75]}
              isOpen={isOpen}
              onDidDismiss={handleModalDidDismiss} // Listen for modal dismissal event
            >
              <IonFooter>
                <IonToolbar>
                  <IonButtons slot="secondary">
                    <IonButton onClick={handleCloseModal}>
                      <IonIcon
                        slot="icon-only"
                        className="text-white"
                        icon={chevronBackOutline}
                      ></IonIcon>
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
                      Object.keys(filteredData).length === 0 && (
                        <h1 className="text-center">No results found.</h1>
                      )}
                    {searchQuery &&
                      filteredData &&
                      Object.keys(filteredData).length > 0 && (
                        <div>
                          {Object.entries(filteredData).map(
                            ([destination, details]) => (
                              <div key={destination}>
                                <button
                                  onClick={() =>
                                    handleDestinationClick(destination)
                                  }
                                  className="flex items-center justify-center btn-block btn mb-3 h-auto"
                                >
                                  <h3 className="font-semibold uppercase">
                                    {destination} - floor: {details.floorLevel}{" "}
                                    - {details.buildingName}
                                  </h3>
                                </button>
                                <IonModal
                                  isOpen={selectedDestination === destination}
                                  mode="ios"
                                >
                                  <IonFooter>
                                    <IonToolbar mode="ios">
                                      <IonButtons slot="secondary">
                                        <IonButton onClick={handleCloseModal}>
                                          <IonIcon
                                            slot="icon-only"
                                            className="text-white"
                                            icon={chevronBackOutline}
                                          ></IonIcon>
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
                                          <IonIcon
                                            slot="icon-only"
                                            className="text-white"
                                            icon={qrCodeOutline}
                                          ></IonIcon>
                                        </IonButton>
                                      </IonButtons>
                                      <IonTitle></IonTitle>
                                    </IonToolbar>
                                  </IonFooter>
                                  <IonContent>
                                    <img
                                      src={details.image}
                                      alt={destination}
                                      className="h-full"
                                    />
                                  </IonContent>
                                </IonModal>
                              </div>
                            )
                          )}
                        </div>
                      )}
                  </div>
                </div>
              </IonContent>
            </IonModal>
            <div>
              <h1 className="text-center">Where do you want to go?</h1>
              <div>
                <IonButton
                  id="open-modal"
                  expand="block"
                  className="z-50 w-full rounded-3xl searchBtn"
                  onClick={() => setIsOpen(true)}
                >
                  Search Your Destination
                </IonButton>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WelcomeComponent;
