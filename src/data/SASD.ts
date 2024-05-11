// ADMIN BUILDING
import toAdminLobby from "../assets/SASD/SASD-adminLobby.png"
import toAdmission from "../assets/SASD/SASD-admission.png"
import toFAD from "../assets/SASD/SASD-FAD.png"
import toExecutiveOffice from "../assets/SASD/SASD-executiveOffice.png"
import toRegistrar from "../assets/SASD/SASD-registrar.png"
import toHRMD from "../assets/SASD/SASD-HRMD.png"

// ACADEMIC BUILDING
import toCPCE from "../assets/SASD/SASD-CPCE.png"
import toClinic from "../assets/SASD/SASD-clinic.png"
import toLibrary from "../assets/SASD/SASD-library.png"

// BAUTISTA BUILDING
import toCanteen from "../assets/SASD/SASD-canteen.png"
import toCoop from "../assets/SASD/SASD-coop.png"
import toAccountancyDept from "../assets/SASD/SASD-accountancyDept.png"
import toPhysicsLab from "../assets/SASD/SASD-physicsLab.png"
import toChemLab from "../assets/SASD/SASD-chemLab.png"
import toEngineeringLab from "../assets/SASD/SASD-engineeringLab.png"
import toElectronicLab from "../assets/SASD/SASD-electronicLab.png"
import toCollegeEducation from "../assets/SASD/SASD-collegeOfEducation.png"
import toMathScience from "../assets/SASD/SASD-mathScience.png"
import toEntrepDept from "../assets/SASD/SASD-entrepDept.png"
import toCollegeEngineering from "../assets/SASD/SASD-collegeOfEngineering.png"
import toEngineeringLounge from "../assets/SASD/SASD-engineeringLounge.png"
import toCCS from "../assets/SASD/SASD-CCS.png"
import toITSO from "../assets/SASD/SASD-ITSO.png"

const SASD = {
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

export default SASD;