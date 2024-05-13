//CHED TO ADMIN
import executiveOfficeToAdmissionOffice from "../assets/ExecutiveOffice/EXECUTIVE OFFICE TO ADMISSION OFFICE.png"
import executiveOfficeToFinanceAndAccountingDivision from "../assets/ExecutiveOffice/EXECUTIVE OFFICE TO FINANCE AND ACCOUNTING DIVISION.png"
import executiveOfficeToHumanResourceManagementDivision from "../assets/ExecutiveOffice/EXECUTIVE OFFICE TO HUMAN RESOURCE MANAGEMENT DIVISION.png"
import executiveOfficeToOpenLobby from "../assets/ExecutiveOffice/EXECUTIVE OFFICE TO OPEN LOBBY.png"
import executiveOfficeToRegistrar from "../assets/ExecutiveOffice/EXECUTIVE OFFICE TO REGISTRAR OFFICE.png"


// BAUTISTA
import RecordsUnitToChemistryLab from "../assets/ExecutiveOffice/CHEMISTRY LAB.png"
import RecordsUnitToPhysics from "../assets/ExecutiveOffice/PHYSICS LAB.png"
import RecordsUnitToCanteen from "../assets/ExecutiveOffice/CANTEEN.png"
import RecordsUnitToAccountingDept from "../assets/ExecutiveOffice/ACCOUNTING DEPT.png"
import RecordsUnitToEngineeringDept from "../assets/ExecutiveOffice/ENGINEERING DEPT.png"
import RecordsUnitToEntrepDept from "../assets/ExecutiveOffice/ENTREP DEPT.png"
import RecordsUnitMathScience from "../assets/ExecutiveOffice/MATH AND SCIENCE.png"
import RecordsUnitToEducDept from "../assets/ExecutiveOffice/EDUC DEPT.png"
import RecordsUnitToEngineeringLab from "../assets/ExecutiveOffice/ENGINEERING LAB.png"
import RecordsUnitElectronicLab from "../assets/ExecutiveOffice/ELECTRICAL LAB.png"
import RecordsUnitToCCS from "../assets/ExecutiveOffice/CCS.png"

// ACADEMIC
import RecordsUnitToClinic from "../assets/ExecutiveOffice/Clinic.png"
import RecordsUnitToCPCE from "../assets/ExecutiveOffice/CPCE.png"

// TECHVOC
import RecordsUnitToGym from "../assets/ExecutiveOffice/Gym.png"
import RecordsUnitToInnopad from "../assets/ExecutiveOffice/Innopad.png"
import RecordsUnitToMotorpool from "../assets/ExecutiveOffice/MotorPool.png"
import RecordsUnitToIA203 from "../assets/ExecutiveOffice/PFGSD.png"
import RecordsUnitToIA206 from "../assets/ExecutiveOffice/SPARDS.png"
import RecordsUnitToIA207 from "../assets/ExecutiveOffice/SASD.png"
import RecordsUnitToIA208 from "../assets/ExecutiveOffice/ICTO1.png"
import RecordsUnitToIA209 from "../assets/ExecutiveOffice/ICTO2.png"
import RecordsUnitToIA210 from "../assets/ExecutiveOffice/QACIMDO.png"

const ExecutiveOffice = {
    // ADMIN BUILDING
    AdmissionOffice: {image: executiveOfficeToAdmissionOffice, floorLevel: "2", buildingName: "Admin", roomName: "Admission Office"},
    AccountingDivision: {image: executiveOfficeToFinanceAndAccountingDivision, floorLevel: "2", buildingName: "Admin", roomName: "Accounting Division"},
    HumanResourceManagementDivision: {image: executiveOfficeToHumanResourceManagementDivision, floorLevel: "2", buildingName: "Admin", roomName: "Human Resource Management Division"},
    OpenLobby: {image: executiveOfficeToOpenLobby, floorLevel: "1", buildingName: "Admin", roomName: "Open Lobby"},
    Registrar: {image: executiveOfficeToRegistrar, floorLevel: "2", buildingName: "Admin", roomName: "Registrar"},
    // ADMIN BUILDING

    
    // BAUTISTA
    Chemistry: {image: RecordsUnitToChemistryLab, floorLevel: "1", buildingName: "Bautista", roomName: "Chemistry Lab"},
    Physics: {image: RecordsUnitToPhysics, floorLevel: "1", buildingName: "Bautista", roomName: "Physics Lab"},
    Canteen: {image: RecordsUnitToCanteen, floorLevel: "UG", buildingName: "Bautista", roomName: "Canteen"},
    AccountingDept: {image: RecordsUnitToAccountingDept, floorLevel: "1", buildingName: "Bautista", roomName: "Accounting Department"},
    EngineeringDept: {image: RecordsUnitToEngineeringDept, floorLevel: "3", buildingName: "Bautista", roomName: "Engineering Department"},
    EntrepDept: {image: RecordsUnitToEntrepDept, floorLevel: "UG", buildingName: "Bautista", roomName: "Enteprenuership Department"},
    MathScience: {image: RecordsUnitMathScience, floorLevel: "4", buildingName: "Bautista", roomName: "Math and Science Lab"},
    EducDept: {image: RecordsUnitToEducDept, floorLevel: "3", buildingName: "Bautista", roomName: "Education Department"},
    EngineeringLab: {image: RecordsUnitToEngineeringLab, floorLevel: "3", buildingName: "Bautista", roomName: "Engineering Lab"},
    ElectronicLab: {image: RecordsUnitElectronicLab, floorLevel: "4", buildingName: "Bautista", roomName: "Electronics and Electrical Lab"},
    ChemistryLab: {image: RecordsUnitToChemistryLab, floorLevel: "4", buildingName: "Bautista", roomName: "Chemistry Lab"},
    CCS: {image: RecordsUnitToCCS, floorLevel: "6", buildingName: "Bautista", roomName: "CCS"},
    // BAUTISTA

    // ACADEMIC
    Clinic: {image: RecordsUnitToClinic, floorLevel: "1", buildingName: "Academic", roomName: "Clinic"},
    CPCE: {image: RecordsUnitToCPCE, floorLevel: "1", buildingName: "Academic", roomName: "Clinic"},

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


}

export default ExecutiveOffice;