// ADMIN BUILDING
import toAdminLobby from "../assets/QCUGym/QCUGym-adminLobby.png"
import toAdmission from "../assets/QCUGym/QCUGym-admission.png"
import toFAD from "../assets/QCUGym/QCUGym-FAD.png"
import toExecutiveOffice from "../assets/QCUGym/QCUGym-executiveOffice.png"
import toRegistrar from "../assets/QCUGym/QCUGym-registrar.png"
import toHRMD from "../assets/QCUGym/QCUGym-HRMD.png"

// ACADEMIC BUILDING
import toCPCE from "../assets/QCUGym/QCUGym-CPCE.png"
import toClinic from "../assets/QCUGym/QCUGym-clinic.png"
import toLibrary from "../assets/QCUGym/QCUGym-library.png"

// BAUTISTA BUILDING
import toCanteen from "../assets/QCUGym/QCUGym-canteen.png"
import toCoop from "../assets/QCUGym/QCUGym-coop.png"
import toAccountancyDept from "../assets/QCUGym/QCUGym-accountacyDept.png"
import toPhysicsLab from "../assets/QCUGym/QCUGym-physicsLab.png"
import toChemLab from "../assets/QCUGym/QCUGym-chemLab.png"
import toEngineeringLab from "../assets/QCUGym/QCUGym-engineeringLab.png"
import toElectronicLab from "../assets/QCUGym/QCUGym-electronicLab.png"
import toCollegeEducation from "../assets/QCUGym/QCUGym-collegeOfEducation.png"
import toMathScience from "../assets/QCUGym/QCUGym-mathScience.png"
import toEntrepDept from "../assets/QCUGym/QCUGym-entrepDept.png"
import toCollegeEngineering from "../assets/QCUGym/QCUGym-collegeOfEngineering.png"
import toEngineeringLounge from "../assets/QCUGym/QCUGym-engineeringLounge.png"
import toCCS from "../assets/QCUGym/QCUGym-CCS.png"
import toITSO from "../assets/QCUGym/QCUGym-ITSO.png"

const QCUGym = {
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

export default QCUGym;