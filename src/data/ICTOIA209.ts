// ADMIN BUILDING
import toAdminLobby from "../assets/ICTO-IA209/ICTO209-adminLobby.png"
import toAdmission from "../assets/ICTO-IA209/ICTO209-admission.png"
import toFAD from "../assets/ICTO-IA209/ICTO209-FAD.png"
import toExecutiveOffice from "../assets/ICTO-IA209/ICTO209-executiveOffice.png"
import toRegistrar from "../assets/ICTO-IA209/ICTO209-registrar.png"
import toHRMD from "../assets/ICTO-IA209/ICTO209-HRMD.png"

// ACADEMIC BUILDING
import toCPCE from "../assets/ICTO-IA209/ICTO209-CPCE.png"
import toClinic from "../assets/ICTO-IA209/ICTO209-clinic.png"
import toLibrary from "../assets/ICTO-IA209/ICTO209-library.png"

// BAUTISTA BUILDING
import toCanteen from "../assets/ICTO-IA209/ICTO209-canteen.png"
import toCoop from "../assets/ICTO-IA209/ICTO209-coop.png"
import toAccountancyDept from "../assets/ICTO-IA209/ICTO209-accountacyDept.png"
import toPhysicsLab from "../assets/ICTO-IA209/ICTO209-physicsLab.png"
import toChemLab from "../assets/ICTO-IA209/ICTO209-chemLab.png"
import toEngineeringLab from "../assets/ICTO-IA209/ICTO209-engineeringLab.png"
import toElectronicLab from "../assets/ICTO-IA209/ICTO209-electronicLab.png"
import toCollegeEducation from "../assets/ICTO-IA209/ICTO209-collegeOfEducation.png"
import toMathScience from "../assets/ICTO-IA209/ICTO209-mathScience.png"
import toEntrepDept from "../assets/ICTO-IA209/ICTO209-entrepDept.png"
import toCollegeEngineering from "../assets/ICTO-IA209/ICTO209-collegeOfEngineering.png"
import toEngineeringLounge from "../assets/ICTO-IA209/ICTO209-engineeringLounge.png"
import toCCS from "../assets/ICTO-IA209/ICTO209-CCS.png"
import toITSO from "../assets/ICTO-IA209/ICTO209-ITSO.png"

const ICTOIA209 = {
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

export default ICTOIA209;