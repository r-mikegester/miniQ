
// ADMIN BUILDING
import libraryToLobby from "../assets/Chemistry/(LIBRARY) TO (A-Admin Lobby).png"
import libraryToAccounting from "../assets/Chemistry/(LIBRARY) TO (A-Accounting Division).png"
import libraryToAdmission from "../assets/Chemistry/(LIBRARY) TO (A-Admission Office).png"
import libraryToRegistrar from "../assets/Chemistry/(LIBRARY) TO (A-Registrar Office).png"
import libraryToHR from "../assets/Chemistry/(LIBRARY) TO (A-HR Office).png"

// CHED BUILDING
import libraryToCashier from "../assets/Chemistry/(LIBRARY) TO (C-Cashier).png"
import libraryToExecutive from "../assets/Chemistry/(LIBRARY) TO (C-Executive Office).png"
import libraryToScholarship from "../assets/Chemistry/(LIBRARY) TO (C-Scholarship Unit).png"

// TECHVOC
import libraryToGym from "../assets/Chemistry/(LIBRARY) TO (IA-QCU Gym).png"
import libraryToInnopad from "../assets/Chemistry/(LIBRARY) TO (IA-QCU Innopad).png"
import libraryToMotorpool from "../assets/Chemistry/(LIBRARY) TO (IA-Motorpool Unit Office).png"
import libraryToIA203 from "../assets/Chemistry/(LIBRARY) TO (IA203-PFGSD).png"
import libraryToIA206 from "../assets/Chemistry/(LIBRARY) TO (IA206-SPARDS).png"
import libraryToIA207 from "../assets/Chemistry/(LIBRARY) TO (IA207-SASD).png"
import libraryToIA208 from "../assets/Chemistry/(LIBRARY) TO (IA208-ICTO).png"
import libraryToIA209 from "../assets/Chemistry/(LIBRARY) TO (IA209-ICTO).png"
import libraryToIA210 from "../assets/Chemistry/(LIBRARY) TO (IA210-QACIMDO).png"

// ACADEMIC BUILDING
import AccountancyToClinic from "../assets/Chemistry/(AccountancyDept) TO (Clinic).png"
import AccountancyToLibrary from "../assets/Chemistry/(AccountancyDept) TO (Library).png"
import AccountancyToCPCE from "../assets/Chemistry/(AccountancyDept) TO (CPCE).png"
// ACADEMIC BUILDING


const ChemistryLab = {
    // ADMIN BUILDING
    Admin_Lobby: {image: libraryToLobby, floorLevel: "1", buildingName: "Admin", roomName: "Admin Lobby"},
    Accounting_Division: {image: libraryToAccounting, floorLevel: "2", buildingName: "Admin", roomName: "Accounting Division"},
    Admission_Office: {image: libraryToAdmission, floorLevel: "2", buildingName: "Admin", roomName: "Admission Office"},
    Registrar_Office: {image: libraryToRegistrar, floorLevel: "2", buildingName: "Admin", roomName: "Registrar Office"},
    HR_Office: {image: libraryToHR, floorLevel: "2", buildingName: "Admin", roomName: "HR Office"},
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
   // Clinic: {image: AccountancyToClinic, floorLevel: "1", buildingName: "Academic", roomName: "Medical and Dental Clinic"},
   // CPCE: {image: AccountancyToCPCE, floorLevel: "1", buildingName: "Academic", roomName: "Center for Preofessional and Continuing Education"},
   // Library: {image: AccountancyToLibrary, floorLevel: "1", buildingName: "Academic", roomName: "Library"},
    // ACADEMIC BUILDING 
};

export default ChemistryLab;
