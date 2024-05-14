//CHED TO ADMIN
import CashierToAdmissionOffice from "../assets/Cashier/CASHIER TO ADMISSION OFFICE.png"
import CashierToFinanceAndAccountingDivision from "../assets/Cashier/CASHIER TO FINANCE AND ACCOUNTING DIVISION.png"
import CashierToHumanResourceManagementDivision from "../assets/Cashier/CASHIER TO HUMAN RESOURCE MANAGEMENT DIVISION.png"
import CashierToOpenLobby from "../assets/Cashier/CASHIER TO OPEN LOBBY.png"
import CashierToRegistrar from "../assets/Cashier/CASHIER TO REGISTRAR OFFICE.png"
import CashierToExecutive from "../assets/Cashier/CASHIER TO EXECUTIVE OFFICE.png"

// BAUTISTA
import RecordsUnitToChemistryLab from "../assets/Cashier/CHEMISTRY LAB.png"
import RecordsUnitToPhysics from "../assets/Cashier/PHYSICS LAB.png"
import RecordsUnitToCanteen from "../assets/Cashier/CANTEEN.png"
import RecordsUnitToAccountingDept from "../assets/Cashier/ACCOUNTING DEPT.png"
import RecordsUnitToEngineeringDept from "../assets/Cashier/ENGINEERING DEPT.png"
import RecordsUnitToEntrepDept from "../assets/Cashier/ENTREP DEPT.png"
import RecordsUnitMathScience from "../assets/Cashier/MATH AND SCIENCE.png"
import RecordsUnitToEducDept from "../assets/Cashier/EDUC DEPT.png"
import RecordsUnitToEngineeringLab from "../assets/Cashier/ENGINEERING LAB.png"
import RecordsUnitElectronicLab from "../assets/Cashier/ELECTRICAL LAB.png"
import RecordsUnitToCCS from "../assets/Cashier/CCS.png"
import RecordsUnitToEngineeringLounge from "../assets/Cashier/EngineeringLounge.png"
import RecordsUnitToITSO from "../assets/Cashier/ITSO.png"


// ACADEMIC
import RecordsUnitToClinic from "../assets/Cashier/Clinic.png"
import RecordsUnitToCPCE from "../assets/Cashier/CPCE.png"
import RecordsUnitToLibrary from "../assets/AccountingUnit/Library.png"

// TECHVOC
import RecordsUnitToGym from "../assets/Cashier/Gym.png"
import RecordsUnitToInnopad from "../assets/Cashier/Innopad.png"
import RecordsUnitToMotorpool from "../assets/Cashier/MotorPool.png"
import RecordsUnitToIA203 from "../assets/Cashier/PFGSD.png"
import RecordsUnitToIA206 from "../assets/Cashier/SPARDS.png"
import RecordsUnitToIA207 from "../assets/Cashier/SASD.png"
import RecordsUnitToIA208 from "../assets/Cashier/ICTO1.png"
import RecordsUnitToIA209 from "../assets/Cashier/ICTO2.png"
import RecordsUnitToIA210 from "../assets/Cashier/QACIMDO.png"

const Cashier = {
    // ADMIN BUILDING
    AdmissionOffice: {image: CashierToAdmissionOffice, floorLevel: "2", buildingName: "Admin", roomName: "Admission Office"},
    AccountingDivision: {image: CashierToFinanceAndAccountingDivision, floorLevel: "2", buildingName: "Admin", roomName: "Accounting Division"},
    HumanResourceManagementDivision: {image: CashierToHumanResourceManagementDivision, floorLevel: "2", buildingName: "Admin", roomName: "Human Resource Management Division"},
    OpenLobby: {image: CashierToOpenLobby, floorLevel: "1", buildingName: "Admin", roomName: "Open Lobby"},
    Registrar: {image: CashierToRegistrar, floorLevel: "2", buildingName: "Admin", roomName: "Registrar"},
    ExecutiveOffice: {image: CashierToExecutive, floorLevel: "2", buildingName: "Admin", roomName: "Executive Office"},

    // ADMIN BUILDING

    // BAUTISTA
    Canteen: {image: RecordsUnitToCanteen, floorLevel: "UG", buildingName: "Bautista", roomName: "Canteen"},
    Chemistry: {image: RecordsUnitToChemistryLab, floorLevel: "1", buildingName: "Bautista", roomName: "Chemistry Lab"},
    Physics: {image: RecordsUnitToPhysics, floorLevel: "1", buildingName: "Bautista", roomName: "Physics Lab"},
    ChemistryLab: {image: RecordsUnitToChemistryLab, floorLevel: "1", buildingName: "Bautista", roomName: "Chemistry Lab"},
    AccountingDept: {image: RecordsUnitToAccountingDept, floorLevel: "1", buildingName: "Bautista", roomName: "Accounting Department"},
    EngineeringLab: {image: RecordsUnitToEngineeringLab, floorLevel: "2", buildingName: "Bautista", roomName: "Engineering Lab"},
    ElectronicLab: {image: RecordsUnitElectronicLab, floorLevel: "2", buildingName: "Bautista", roomName: "Electronics and Electrical Lab"},
    MathScience: {image: RecordsUnitMathScience, floorLevel: "3", buildingName: "Bautista", roomName: "Math and Science Lab"},
    EducDept: {image: RecordsUnitToEducDept, floorLevel: "3", buildingName: "Bautista", roomName: "Education Department"},
    EntrepDept: {image: RecordsUnitToEntrepDept, floorLevel: "4", buildingName: "Bautista", roomName: "Enteprenuership Department"},
    EngineeringDept: {image: RecordsUnitToEngineeringDept, floorLevel: "5", buildingName: "Bautista", roomName: "Engineering Department"},
    EngineeringLounge: {image: RecordsUnitToEngineeringLounge, floorLevel: "5", buildingName: "Bautista", roomName: "Engineering Student Lounge"},
    CCS: {image: RecordsUnitToCCS, floorLevel: "6", buildingName: "Bautista", roomName: "CCS"},
    ITSO: {image: RecordsUnitToITSO, floorLevel: "6", buildingName: "Bautista", roomName: "ITSO"},
    // BAUTISTA
   
    // ACADEMIC
    Clinic: {image: RecordsUnitToClinic, floorLevel: "1", buildingName: "Academic", roomName: "Clinic"},
    CPCE: {image: RecordsUnitToCPCE, floorLevel: "1", buildingName: "Academic", roomName: "Clinic"},
    Library: {image: RecordsUnitToLibrary, floorLevel: "2", buildingName: "Academic", roomName: "Library"},


    // TECHVOC
    QCU_Gym: {image: RecordsUnitToGym, floorLevel: "1", buildingName: "Techvoc", roomName: "QCU Gym"},
    QCU_Innopad: {image: RecordsUnitToInnopad, floorLevel: "1", buildingName: "Techvoc", roomName: "QCU Innopad"},
    Motorpool_Unit_Office: {image: RecordsUnitToMotorpool, floorLevel: "1", buildingName: "Techvoc", roomName: "Motorpool Unit Office"},

    IA203_PFGSD: {image: RecordsUnitToIA203, floorLevel: "2", buildingName: "Techvoc", roomName: "PFGSD - IA203"},
    IA206_SPARDS: {image: RecordsUnitToIA206, floorLevel: "2", buildingName: "Techvoc", roomName: "SPARDS - IA206"},
    IA207_SASD: {image: RecordsUnitToIA207, floorLevel: "2", buildingName: "Techvoc", roomName: "SASD - IA207"},
    IA208_ICTO: {image: RecordsUnitToIA208, floorLevel: "2", buildingName: "Techvoc", roomName: "ICTO - IA208"},
    IA209_ICTO: {image: RecordsUnitToIA209, floorLevel: "2", buildingName: "Techvoc", roomName: "ICTO - IA209"},
    IA210_QACIMDO: {image: RecordsUnitToIA210, floorLevel: "2", buildingName: "Techvoc", roomName: "QACIMDO - IA210"},
};

export default Cashier;