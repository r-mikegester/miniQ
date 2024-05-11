// ADMIN BUILDING
import toAdminLobby from "../assets/SPARDS/SPARDS-adminLobby.png"
import toAdmission from "../assets/SPARDS/SPARDS-admission.png"
import toFAD from "../assets/SPARDS/SPARDS-FAD.png"
import toExecutiveOffice from "../assets/SPARDS/SPARDS-executiveOffice.png"
import toRegistrar from "../assets/SPARDS/SPARDS-registrar.png"
import toHRMD from "../assets/SPARDS/SPARDS-HRMD.png"

// ACADEMIC BUILDING
import toCPCE from "../assets/SPARDS/SPARDS-CPCE.png"
import toClinic from "../assets/SPARDS/SPARDS-clinic.png"
import toLibrary from "../assets/SPARDS/SPARDS-library.png"

// BAUTISTA BUILDING
import toCanteen from "../assets/SPARDS/SPARDS-canteen.png"
import toCoop from "../assets/SPARDS/SPARDS-coop.png"
import toAccountancyDept from "../assets/SPARDS/SPARDS-accountancyDept.png"
import toPhysicsLab from "../assets/SPARDS/SPARDS-physicsLab.png"
import toChemLab from "../assets/SPARDS/SPARDS-chemLab.png"
import toEngineeringLab from "../assets/SPARDS/SPARDS-engineeringLab.png"
import toElectronicLab from "../assets/SPARDS/SPARDS-electronicLab.png"
import toCollegeEducation from "../assets/SPARDS/SPARDS-collegeOfEducation.png"
import toMathScience from "../assets/SPARDS/SPARDS-mathScience.png"
import toEntrepDept from "../assets/SPARDS/SPARDS-entrepDept.png"
import toCollegeEngineering from "../assets/SPARDS/SPARDS-collegeOfEngineering.png"
import toEngineeringLounge from "../assets/SPARDS/SPARDS-engineeringLounge.png"
import toCCS from "../assets/SPARDS/SPARDS-CCS.png"
import toITSO from "../assets/SPARDS/SPARDS-ITSO.png"

const SPARDS = {
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

export default SPARDS;