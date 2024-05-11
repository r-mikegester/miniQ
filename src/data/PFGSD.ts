// ADMIN BUILDING
import toAdminLobby from "../assets/PFGSD/PFGSD-adminLobby.png"
import toAdmission from "../assets/PFGSD/PFGSD-admission.png"
import toFAD from "../assets/PFGSD/PFGSD-FAD.png"
import toExecutiveOffice from "../assets/PFGSD/PFGSD-executiveOffice.png"
import toRegistrar from "../assets/PFGSD/PFGSD-registrar.png"
import toHRMD from "../assets/PFGSD/PFGSD-HRMD.png"

// ACADEMIC BUILDING
import toCPCE from "../assets/PFGSD/PFGSD-CPCE.png"
import toClinic from "../assets/PFGSD/PFGSD-clinic.png"
import toLibrary from "../assets/PFGSD/PFGSD-library.png"

// BAUTISTA BUILDING
import toCanteen from "../assets/PFGSD/PFGSD-canteen.png"
import toCoop from "../assets/PFGSD/PFGSD-coop.png"
import toAccountancyDept from "../assets/PFGSD/PFGSD-accountancyDept.png"
import toPhysicsLab from "../assets/PFGSD/PFGSD-physicsLab.png"
import toChemLab from "../assets/PFGSD/PFGSD-chemLab.png"
import toEngineeringLab from "../assets/PFGSD/PFGSD-engineeringLab.png"
import toElectronicLab from "../assets/PFGSD/PFGSD-electronicLab.png"
import toCollegeEducation from "../assets/PFGSD/PFGSD-collegeOfEducation.png"
import toMathScience from "../assets/PFGSD/PFGSD-mathScience.png"
import toEntrepDept from "../assets/PFGSD/PFGSD-entrepDept.png"
import toCollegeEngineering from "../assets/PFGSD/PFGSD-collegeOfEngineering.png"
import toEngineeringLounge from "../assets/PFGSD/PFGSD-engineeringLounge.png"
import toCCS from "../assets/PFGSD/PFGSD-CCS.png"
import toITSO from "../assets/PFGSD/PFGSD-ITSO.png"

const PFGSD = {
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

export default PFGSD;