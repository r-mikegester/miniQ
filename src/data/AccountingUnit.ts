//CHED TO ADMIN
import RecordsUnitToAdmissionOffice from "../assets/AccountingUnit/ACCOUNTING UNIT TO ADMISSION OFFICE.png"
import RecordsUnitToFinanceAndAccountingDivision from "../assets/AccountingUnit/ACCOUNTING UNIT TO FINANCE AND ACCOUNTING DIVISION.png"
import RecordsUnitToHumanResourceManagementDivision from "../assets/AccountingUnit/ACCOUNTING UNIT TO HUMAN RESOURCE MANAGEMENT DIVISION.png"
import RecordsUnitToOpenLobby from "../assets/AccountingUnit/ACCOUNTING UNIT TO OPEN LOBBY.png"
import RecordsUnitToRegistrar from "../assets/AccountingUnit/ACCOUNTING UNIT TO REGISTRAR OFFICE.png"
import RecordsUnitToExecutive from "../assets/AccountingUnit/ACCOUNTING UNIT TO EXECUTIVE OFFICE.png"

// BAUTISTA
import RecordsUnitToChemistryLab from "../assets/AccountingUnit/CHEMISTRY LAB.png"
import RecordsUnitToPhysics from "../assets/AccountingUnit/PHYSICS LAB.png"
import RecordsUnitToCanteen from "../assets/AccountingUnit/CANTEEN.png"
import RecordsUnitToAccountingDept from "../assets/AccountingUnit/ACCOUNTING DEPT.png"
import RecordsUnitToEngineeringDept from "../assets/AccountingUnit/ENGINEERING DEPT.png"
import RecordsUnitToEntrepDept from "../assets/AccountingUnit/ENTREP DEPT.png"
import RecordsUnitMathScience from "../assets/AccountingUnit/MATH AND SCIENCE.png"
import RecordsUnitToEducDept from "../assets/AccountingUnit/EDUC DEPT.png"
import RecordsUnitToEngineeringLab from "../assets/AccountingUnit/ENGINEERING LAB.png"
import RecordsUnitElectronicLab from "../assets/AccountingUnit/ELECTRICAL LAB.png"
import RecordsUnitToCCS from "../assets/AccountingUnit/CCS.png"
import RecordsUnitToEngineeringLounge from "../assets/AccountingUnit/ENGINEERINGLOUNGE.png"
import RecordsUnitToITSO from "../assets/AccountingUnit/ITSO.png"

// ACADEMIC
import RecordsUnitToClinic from "../assets/AccountingUnit/CLINIC.png"
import RecordsUnitToCPCE from "../assets/AccountingUnit/CPCE.png"
import RecordsUnitToLibrary from "../assets/AccountingUnit/Library.png"

// TECHVOC
import RecordsUnitToGym from "../assets/AccountingUnit/Gym.png"
import RecordsUnitToInnopad from "../assets/AccountingUnit/Innopad.png"
import RecordsUnitToMotorpool from "../assets/AccountingUnit/MotorPool.png"
import RecordsUnitToIA203 from "../assets/AccountingUnit/PFGSD.png"
import RecordsUnitToIA206 from "../assets/AccountingUnit/SPARDS.png"
import RecordsUnitToIA207 from "../assets/AccountingUnit/SASD.png"
import RecordsUnitToIA208 from "../assets/AccountingUnit/ICTO1.png"
import RecordsUnitToIA209 from "../assets/AccountingUnit/ICTO2.png"
import RecordsUnitToIA210 from "../assets/AccountingUnit/QACIMDO.png"




const AccountingUnit = {
    // ADMIN BUILDING
    AdmissionOffice: {image: RecordsUnitToAdmissionOffice, floorLevel: "2", buildingName: "Admin", roomName: "Admission Office"},
    AccountingDivision: {image: RecordsUnitToFinanceAndAccountingDivision, floorLevel: "2", buildingName: "Admin", roomName: "Accounting Division"},
    HumanResourceManagementDivision: {image: RecordsUnitToHumanResourceManagementDivision, floorLevel: "2", buildingName: "Admin", roomName: "Human Resource Management Division"},
    // OpenLobby: {image: RecordsUnitToOpenLobby, floorLevel: "1", buildingName: "Admin", roomName: "Open Lobby"},
    Registrar: {image: RecordsUnitToRegistrar, floorLevel: "2", buildingName: "Admin", roomName: "Registrar"},
    ExecutiveOffice: {image: RecordsUnitToExecutive, floorLevel: "2", buildingName: "Admin", roomName: "Executive Office"},
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
   // ITSO: {image: RecordsUnitToITSO, floorLevel: "6", buildingName: "Bautista", roomName: "ITSO"},
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

export default AccountingUnit;