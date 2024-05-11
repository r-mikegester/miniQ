// ADMIN BUILDING
import toAdminLobby from "../assets/QACIMDO/QACIMDO-adminLobby.png"
import toAdmission from "../assets/QACIMDO/QACIMDO-admission.png"
import toFAD from "../assets/QACIMDO/QACIMDO-FAD.png"
import toExecutiveOffice from "../assets/QACIMDO/QACIMDO-executiveOffice.png"
import toRegistrar from "../assets/QACIMDO/QACIMDO-registrar.png"
import toHRMD from "../assets/QACIMDO/QACIMDO-HRMD.png"

// ACADEMIC BUILDING
import toCPCE from "../assets/QACIMDO/QACIMDO-CPCE.png"
import toClinic from "../assets/QACIMDO/QACIMDO-clinic.png"
import toLibrary from "../assets/QACIMDO/QACIMDO-library.png"

// BAUTISTA BUILDING
import toCanteen from "../assets/QACIMDO/QACIMDO-canteen.png"
import toCoop from "../assets/QACIMDO/QACIMDO-coop.png"
import toAccountancyDept from "../assets/QACIMDO/QACIMDO-accountacyDept.png"
import toPhysicsLab from "../assets/QACIMDO/QACIMDO-physicsLab.png"
import toChemLab from "../assets/QACIMDO/QACIMDO-chemLab.png"
import toEngineeringLab from "../assets/QACIMDO/QACIMDO-engineeringLab.png"
import toElectronicLab from "../assets/QACIMDO/QACIMDO-electronicLab.png"
import toCollegeEducation from "../assets/QACIMDO/QACIMDO-collegeOfEducation.png"
import toMathScience from "../assets/QACIMDO/QACIMDO-mathScience.png"
import toEntrepDept from "../assets/QACIMDO/QACIMDO-entrepDept.png"
import toCollegeEngineering from "../assets/QACIMDO/QACIMDO-collegeOfEngineering.png"
import toEngineeringLounge from "../assets/QACIMDO/QACIMDO-engineeringLounge.png"
import toCCS from "../assets/QACIMDO/QACIMDO-CCS.png"
import toITSO from "../assets/QACIMDO/QACIMDO-ITSO.png"

const QACIMDO = {
    // ADMIN BUILDING
    Admin_Lobby: {image: toAdminLobby, floorLevel: "1", buildingName: "Admin", roomName: "Admin Lobby"},
    Accounting_Division: {image: toFAD, floorLevel: "2", buildingName: "Admin", roomName: "Accounting Division"},
    Admission_Office: {image: toAdmission, floorLevel: "2", buildingName: "Admin", roomName: "Admission Office"},
    Registrar_Office: {image: toRegistrar, floorLevel: "2", buildingName: "Admin", roomName: "Registrar Office"},
    HR_Office: {image: toHRMD, floorLevel: "3", buildingName: "Admin", roomName: "HR Office"},
    Executive_Office: {image: toExecutiveOffice, floorLevel: "4", buildingName: "Admin", roomName: "Executive Office"},
    
    // ACADEMIC BUILDING
    CPCE: {image: toCPCE, floorLevel: "1", buildingName: "Academic", roomName: "Center for Professional and Continuing Education"},
    Clinic: {image: toClinic, floorLevel: "1", buildingName: "Academic", roomName: "Clinic"},
    Library: {image: toLibrary, floorLevel: "2", buildingName: "Academic", roomName: "Library"},

    // BAUTISTA BUILDING
    Canteen: {image: toCanteen, floorLevel: "Basement", buildingName: "Bautista", roomName: "Canteen"},
    Coop: {image: toCoop, floorLevel: "Basement", buildingName: "Bautista", roomName: "Coop"},
    Accountancy_Department: {image: toAccountancyDept, floorLevel: "Ground Floor", buildingName: "Bautista", roomName: "Accountancy Department"},
    Chemistry_Laboratory: {image: toChemLab, floorLevel: "Ground Floor", buildingName: "Bautista", roomName: "Chemistry Laboratory"},
    Physics_Laboratory: {image: toPhysicsLab, floorLevel: "Ground Floor", buildingName: "Bautista", roomName: "Physics Laboratory"},
    Engineering_Lab_Office: {image: toEngineeringLab, floorLevel: "2", buildingName: "Bautista", roomName: "Engineering Lab Office"},
    Electronic_Lab: {image: toElectronicLab, floorLevel: "2", buildingName: "Bautista", roomName: "Electronic Lab"},
    College_of_Education: {image: toCollegeEducation, floorLevel: "3", buildingName: "Bautista", roomName: "College of Education"},
    Math_and_Science_Department: {image: toMathScience, floorLevel: "3", buildingName: "Bautista", roomName: "Math and Science Department"},
    Entrepreneurship_Department: {image: toEntrepDept, floorLevel: "4", buildingName: "Bautista", roomName: "Entrepreneurship Department"},
    College_of_Enginering: {image: toCollegeEngineering, floorLevel: "5", buildingName: "Bautista", roomName: "College of Engineering"},
    Engineering_Lounge: {image: toEngineeringLounge, floorLevel: "5", buildingName: "Bautista", roomName: "Engineering Lounge"},
    College_of_Computer_Studies: {image: toCCS, floorLevel: "6", buildingName: "Bautista", roomName: "College of Computer Studies"},
    Innovation_and_Technology_Support_Office: {image: toITSO, floorLevel: "6", buildingName: "Bautista", roomName: "Innovation and Technology Support Office"},
};

export default QACIMDO;