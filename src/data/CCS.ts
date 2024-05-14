
// ADMIN BUILDING
import libraryToLobby from "../assets/CCS/A-Admin Lobby.png"
import libraryToAccounting from "../assets/CCS/A-Accounting Division.png"
import libraryToAdmission from "../assets/CCS/A-Admission Office.png"
import libraryToHR from "../assets/CCS/A-HR Office.png"
import libraryToRegistrar from "../assets/CCS/A-Registrar.png"

// CHED BUILDING
import libraryToCashier from "../assets/CCS/C-Cashier.png"
import libraryToExecutive from "../assets/CCS/C-Executive Office.png"
import libraryToScholarship from "../assets/CCS/C-Scholarship Unit.png"

// TECHVOC
import libraryToGym from "../assets/CCS/IA-QCU Gym.png"
import libraryToInnopad from "../assets/CCS/IA-QCU Innopad.png"
import libraryToMotorpool from "../assets/CCS/IA-Motorpool Unit Office.png"
import libraryToIA203 from "../assets/CCS/IA203-PFGSD.png"
import libraryToIA206 from "../assets/CCS/IA206-SPARDS.png"
import libraryToIA207 from "../assets/CCS/IA207-SASD.png"
import libraryToIA208 from "../assets/CCS/IA208-ICTO.png"
import libraryToIA209 from "../assets/CCS/IA209-ICTO.png"
import libraryToIA210 from "../assets/CCS/IA210-QACIMDO.png"

// ACADEMIC BUILDING
import AccountancyToClinic from "../assets/CCS/Clinic.png"
import AccountancyToLibrary from "../assets/CCS/Library.png"
import AccountancyToCPCE from "../assets/CCS/CPCE.png"
// ACADEMIC BUILDING


const CCS = {
    // ADMIN BUILDING
    Admin_Lobby: {image: libraryToLobby, floorLevel: "1", buildingName: "Admin", roomName: "Admin Lobby"},
    Accounting_Division: {image: libraryToAccounting, floorLevel: "2", buildingName: "Admin", roomName: "Accounting Division"},
    Admission_Office: {image: libraryToAdmission, floorLevel: "2", buildingName: "Admin", roomName: "Admission Office"},
    HR_Office: {image: libraryToHR, floorLevel: "2", buildingName: "Admin", roomName: "HR Office"},
    Registrar: {image: libraryToRegistrar, floorLevel: "2", buildingName: "Admin", roomName: "Registrar"},
    // ADMIN BUILDING

    // CHED
    Cashier: {image: libraryToCashier, floorLevel: "1", buildingName: "CHED", roomName: "Cashier"},
    Executive_Office: {image: libraryToExecutive, floorLevel: "1", buildingName: "CHED", roomName: "Executive Office"},
    Scholarship_Unit: {image: libraryToScholarship, floorLevel: "1", buildingName: "CHED", roomName: "Scholarship Unit"},
    // CHED
    
 
    // TECHVOC BUILDING
    QCU_Gym: {image: libraryToGym, floorLevel: "1", buildingName: "Techvoc", roomName: "QCU Gym"},
    QCU_Innopad: {image: libraryToInnopad, floorLevel: "1", buildingName: "Techvoc", roomName: "QCU Innopad"},
    Motorpool_Unit_Office: {image: libraryToMotorpool, floorLevel: "1", buildingName: "Techvoc", roomName: "Motorpool Unit Office"},

    IA203_PFGSD: {image: libraryToIA203, floorLevel: "2", buildingName: "Techvoc", roomName: "PFGSD - IA203"},
    IA206_SPARDS: {image: libraryToIA206, floorLevel: "2", buildingName: "Techvoc", roomName: "SPARDS - IA206"},
    IA207_SASD: {image: libraryToIA207, floorLevel: "2", buildingName: "Techvoc", roomName: "SASD - IA207"},
    IA208_ICTO: {image: libraryToIA208, floorLevel: "2", buildingName: "Techvoc", roomName: "ICTO - IA208"},
    IA209_ICTO: {image: libraryToIA209, floorLevel: "2", buildingName: "Techvoc", roomName: "ICTO - IA209"},
    IA210_QACIMDO: {image: libraryToIA210, floorLevel: "2", buildingName: "Techvoc", roomName: "QACIMDO - IA210"},
    // TECHVOC BUILDING

    // ACADEMIC BUILDING
 
    Clinic: {image: AccountancyToClinic, floorLevel: "1", buildingName: "Academic", roomName: "Medical and Dental Clinic"},
    CPCE: {image: AccountancyToCPCE, floorLevel: "1", buildingName: "Academic", roomName: "Center for Preofessional and Continuing Education"},
    Library: {image: AccountancyToLibrary, floorLevel: "1", buildingName: "Academic", roomName: "Library"},
    // ACADEMIC BUILDING

};

export default CCS;