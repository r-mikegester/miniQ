// ADMIN BUILDING
import libraryToLobby from "../assets/AccountancyDept/(AccDept) TO (A-Admin Lobby).png"
import libraryToAccounting from "../assets/AccountancyDept/(AccDept) TO (A-Accounting Division).png"
import libraryToHR from "../assets/AccountancyDept/(AccDept) TO (A-HR Office).png"

// ACADEMIC BUILDING
import AccountancyToClinic from "../assets/AccountancyDept/(AccountancyDept) TO (Clinic).png"
import AccountancyToLibrary from "../assets/AccountancyDept/(AccountancyDept) TO (Library).png"
import AccountancyToCPCE from "../assets/AccountancyDept/(AccountancyDept) TO (CPCE).png"
// ACADEMIC BUILDING

/// CHED BUILDING
import libraryToCashier from "../assets/AccountancyDept/(AccDept) TO (C-Cashier).png"
import libraryToExecutive from "../assets/AccountancyDept/(AccDept) TO (C-Executive Office).png"
import libraryToScholarship from "../assets/AccountancyDept/(AccDept) TO (C-Scholarship Unit).png"


// TECHVOC
import libraryToGym from "../assets/AccountancyDept/(AccDept) TO (IA-QCU Gym).png"
import libraryToInnopad from "../assets/AccountancyDept/(AccDept) TO (IA-QCU Innopad).png"
import libraryToMotorpool from "../assets/AccountancyDept/(AccDept) TO (IA-Motorpool Unit Office).png"
import libraryToIA203 from "../assets/AccountancyDept/(AccDept) TO (IA203-PFGSD).png"
import libraryToIA206 from "../assets/AccountancyDept/(AccDept) TO (IA206-SPARDS).png"
import libraryToIA207 from "../assets/AccountancyDept/(AccDept) TO (IA207-SASD).png"
import libraryToIA208 from "../assets/AccountancyDept/(AccDept) TO (IA208-ICTO).png"
import libraryToIA209 from "../assets/AccountancyDept/(AccDept) TO (IA209-ICTO).png"
import libraryToIA210 from "../assets/AccountancyDept/(AccDept) TO (IA210-QACIMDO).png"


const AccountancyDept = {
    // ADMIN BUILDING
    Admin_Lobby: {image: libraryToLobby, floorLevel: "1", buildingName: "Admin", roomName: "Admin Lobby"},
    Accounting_Division: {image: libraryToAccounting, floorLevel: "2", buildingName: "Admin", roomName: "Accounting Division"},
    HR_Office: {image: libraryToHR, floorLevel: "2", buildingName: "Admin", roomName: "HR Office"},

    // ADMIN BUILDING

    // ACADEMIC BUILDING
    Clinic: {image: AccountancyToClinic, floorLevel: "1", buildingName: "Academic", roomName: "Medical and Dental Clinic"},
    CPCE: {image: AccountancyToCPCE, floorLevel: "1", buildingName: "Academic", roomName: "Center for Preofessional and Continuing Education"},
    Library: {image: AccountancyToLibrary, floorLevel: "1", buildingName: "Academic", roomName: "Library"},
    // ACADEMIC BUILDING

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

};

export default AccountancyDept;
