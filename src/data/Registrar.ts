
// ADMIN BUILDING
import libraryToLobby from "../assets/Library/(LIBRARY) TO (A-Admin Lobby).png"
import libraryToAccounting from "../assets/Library/(LIBRARY) TO (A-Accounting Division).png"
import libraryToAdmission from "../assets/Library/(LIBRARY) TO (A-Admission Office).png"
import libraryToRegistrar from "../assets/Library/(LIBRARY) TO (A-Registrar Office).png"
import libraryToHR from "../assets/Library/(LIBRARY) TO (A-HR Office).png"

// CHED BUILDING
import libraryToAccountingChed from "../assets/Library/(LIBRARY) TO (C-Accounting Unit).png"
import libraryToCashier from "../assets/Library/(LIBRARY) TO (C-Cashier).png"
import libraryToExecutive from "../assets/Library/(LIBRARY) TO (C-Executive Office).png"
import libraryToRecords from "../assets/Library/(LIBRARY) TO (C-Records Unit).png"
import libraryToScholarship from "../assets/Library/(LIBRARY) TO (C-Scholarship Unit).png"

// BAUTISTA BUILDING
import libraryToCanteen from "../assets/Library/(LIBRARY) TO (B-Canteen).png"
import libraryToCoop from "../assets/Library/(LIBRARY) TO (B-Coop).png"
import libraryToAccountancyDept from "../assets/Library/(LIBRARY) TO (B-Accountancy Department).png"
import libraryToChemLab from "../assets/Library/(LIBRARY) TO (B-Chemistry Lab).png"
import libraryToPhysicsLab from "../assets/Library/(LIBRARY) TO (B-Physics Lab).png"
import libraryToEngrOffice from "../assets/Library/(LIBRARY) TO (B-Engineering Lab Office).png"
import libraryToElectronicLab from "../assets/Library/(LIBRARY) TO (B-Electronic Lab).png"
import libraryToEducDept from "../assets/Library/(LIBRARY) TO (B-College of Education).png"
import libraryToMathAndScience from "../assets/Library/(LIBRARY) TO (B-Math & Science Department).png"
import libraryToEntrepDept from "../assets/Library/(LIBRARY) TO (B-Entrepreneurship Department).png"
import libraryToEngrDept from "../assets/Library/(LIBRARY) TO (B-College of Engineering).png"
import libraryToEngrLounge from "../assets/Library/(LIBRARY) TO (B-Engineering Lounge).png"
import libraryToCCS from "../assets/Library/(LIBRARY) TO (B-College of Computer Studies).png"
import libraryToITSO from "../assets/Library/(LIBRARY) TO (B-ITSO).png"

// TECHVOC
import libraryToGym from "../assets/Library/(LIBRARY) TO (IA-QCU Gym).png"
import libraryToInnopad from "../assets/Library/(LIBRARY) TO (IA-QCU Innopad).png"
import libraryToMotorpool from "../assets/Library/(LIBRARY) TO (IA-Motorpool Unit Office).png"
import libraryToIA203 from "../assets/Library/(LIBRARY) TO (IA203-PFGSD).png"
import libraryToIA206 from "../assets/Library/(LIBRARY) TO (IA206-SPARDS).png"
import libraryToIA207 from "../assets/Library/(LIBRARY) TO (IA207-SASD).png"
import libraryToIA208 from "../assets/Library/(LIBRARY) TO (IA208-ICTO).png"
import libraryToIA209 from "../assets/Library/(LIBRARY) TO (IA209-ICTO).png"
import libraryToIA210 from "../assets/Library/(LIBRARY) TO (IA210-QACIMDO).png"

// ACADEMIC BUILDING
// LAGYAN NA LANG

const Registrar = {
    // ADMIN BUILDING
    Admin_Lobby: {image: libraryToLobby, floorLevel: "1", buildingName: "Admin", roomName: "Admin Lobby"},
    Accounting_Division: {image: libraryToAccounting, floorLevel: "2", buildingName: "Admin", roomName: "Accounting Division"},
    Admission_Office: {image: libraryToAdmission, floorLevel: "2", buildingName: "Admin", roomName: "Admission Office"},
    Registrar_Office: {image: libraryToRegistrar, floorLevel: "2", buildingName: "Admin", roomName: "Registrar Office"},
    HR_Office: {image: libraryToHR, floorLevel: "2", buildingName: "Admin", roomName: "HR Office"},
    // ADMIN BUILDING

    // CHED
    Accounting_Unit: {image: libraryToAccountingChed, floorLevel: "1", buildingName: "CHED", roomName: "Accounting Unit"},
    Cashier: {image: libraryToCashier, floorLevel: "1", buildingName: "CHED", roomName: "Cashier"},
    Executive_Office: {image: libraryToExecutive, floorLevel: "1", buildingName: "CHED", roomName: "Executive Office"},
    Records_Unit: {image: libraryToRecords, floorLevel: "1", buildingName: "CHED", roomName: "Records Unit"},
    Scholarship_Unit: {image: libraryToScholarship, floorLevel: "1", buildingName: "CHED", roomName: "Scholarship Unit"},
    // CHED

    // BAUTISTA BUILDING
    Canteen: {image: libraryToCanteen, floorLevel: "Basement", buildingName: "Bautista", roomName: "Canteen"},
    Coop: {image: libraryToCoop, floorLevel: "Basement", buildingName: "Bautista", roomName: "Coop"},
    Accountancy_Department: {image: libraryToAccountancyDept, floorLevel: "Ground Floor", buildingName: "Bautista", roomName: "Accountancy Department"},
    Chemistry_Laboratory: {image: libraryToChemLab, floorLevel: "Ground Floor", buildingName: "Bautista", roomName: "Chemistry Laboratory"},
    Physics_Laboratory: {image: libraryToPhysicsLab, floorLevel: "Ground Floor", buildingName: "Bautista", roomName: "Physics Laboratory"},
    Engineering_Lab_Office: {image: libraryToEngrOffice, floorLevel: "2", buildingName: "Bautista", roomName: "Engineering Lab Office"},
    Electronic_Lab: {image: libraryToElectronicLab, floorLevel: "2", buildingName: "Bautista", roomName: "Electronic Lab"},
    College_of_Education: {image: libraryToEducDept, floorLevel: "3", buildingName: "Bautista", roomName: "College of Education"},
    Math_and_Science_Department: {image: libraryToMathAndScience, floorLevel: "3", buildingName: "Bautista", roomName: "Math and Science Department"},
    Entrepreneurship_Department: {image: libraryToEntrepDept, floorLevel: "4", buildingName: "Bautista", roomName: "Entrepreneurship Department"},
    College_of_Enginering: {image: libraryToEngrDept, floorLevel: "5", buildingName: "Bautista", roomName: "College of Engineering"},
    Engineering_Lounge: {image: libraryToEngrLounge, floorLevel: "5", buildingName: "Bautista", roomName: "Engineering Lounge"},
    College_of_Computer_Studies: {image: libraryToCCS, floorLevel: "6", buildingName: "Bautista", roomName: "College of Computer Studies"},
    Innovation_and_Technology_Support_Office: {image: libraryToITSO, floorLevel: "6", buildingName: "Bautista", roomName: "Innovation and Technology Support Office"},
    // BAUTISTA BUILDING

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


    // ACADEMIC BUILDING
};

export default Registrar;
