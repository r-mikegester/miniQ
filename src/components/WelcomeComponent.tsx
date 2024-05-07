import React, { useState, useEffect } from "react";
import { IonContent, IonPage, IonModal, IonButton } from "@ionic/react";
import { useHistory, useParams } from "react-router";
import roomData from "./roomData"; // Assuming roomData is exported from another file

interface RoomDetails {
  image: string;
  floorLevel: number;
  // Add more properties as needed
}

const WelcomeComponent = () => {
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
      <IonContent>
        <h1>Your current location: {qrValue}</h1>
        <br />
        <p>Where do you want to go?</p>
        <input
          className="border-white bg-white text-black"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search destination"
        />
        <br />
        <br />
        {searchQuery &&
          filteredData &&
          Object.keys(filteredData).length === 0 && <p>No results found.</p>}
        {searchQuery &&
          filteredData &&
          Object.keys(filteredData).length > 0 && (
            <div>
              {Object.entries(filteredData).map(([destination, details]) => (
                <div key={destination}>
                  <button
                    onClick={() => handleDestinationClick(destination)}
                    className="btn"
                  >
                    <h3>Destination: {destination}</h3>
                  </button>
                  <IonModal isOpen={selectedDestination === destination}>
                    <IonContent>
                      <img src={details.image} alt={destination} />
                      <IonButton onClick={handleCloseModal}>
                        Close Modal
                      </IonButton>
                      <IonButton
                        onClick={() => {
                          history.push("/home");
                          handleCloseModal();
                        }}
                      > BACK TO HOME to SCAN AGAIN </IonButton>
                    </IonContent>
                  </IonModal>
                  <h2>Floor Level: {details.floorLevel}</h2>
                  {/* Assuming there are other details to display */}
                </div>
              ))}
            </div>
          )}
        <br />
        <button
          onClick={() => {
            history.push("/home");
          }}
          className="btn"
        >
          BACK TO HOME to SCAN AGAIN
        </button>
      </IonContent>
    </IonPage>
  );
};

export default WelcomeComponent;