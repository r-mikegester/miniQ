
import AccountingToCanteen from "../assets/Accounting_Admin/ACCOUNTING TO CANTEEN.png"
import AccountingToCoop from "../assets/Accounting_Admin/ACCOUNTING TO COOP.png"
import AccountingToAccountancyDept from "../assets/Accounting_Admin/ACCOUNTING TO ACCOUNTANCY.png"
import AccountingToChemLab from "../assets/Accounting_Admin/ACCOUNTING TO CHEM LAB.png"
import AccountingToPhysicsLab from "../assets/Accounting_Admin/ACCOUNTING TO PHYSICS.png"
import AccountingToEngrOffice from "../assets/Accounting_Admin/ACCOUNTING TO ENGINEERING.png"
import AccountingToElectronicLab from "../assets/Accounting_Admin/ACCOUNTING TO ELECTRONIC.png"
import AccountingToIK203 from "../assets/Accountin_Adming/ACCOUNTING TO IK203.png"
import AccountingToIK204 from "../assets/Accounting_Admin/ACCOUNTING TO IK204.png"
import AccountingToEducDept from "../assets/Accounting_Admin/ACCOUNTING TO EDUC.png"
import AccountingToMathAndScience from "../assets/Accounting_Admin/ACCOUNTING TO MATHSCIE.png"
import AccountingToIK303 from "../assets/Accounting_Admin/ACCOUNTING TO IK303.png"
import AccountingToIK304 from "../assets/Accounting_Admin/BLANK.png"
import AccountingToEntrepDept from "../assets/Accounting_Admin/ACCOUNTING TO ENTREP.png"
import AccountingToIK403 from "../assets/Accounting_Admin/ACCOUNTING TO IK403.png"
import AccountingToIK404 from "../assets/Accounting_Admin/ACCOUNTING TO IK404.png"
import AccountingToEngrDept from "../assets/Accounting_Admin/ACCOUNTING TO COE.png"
import AccountingToEngrLounge from "../assets/Accounting_Admin/ACCOUNTING TO LOUNGE.png"
import AccountingToIK503 from "../assets/Accounting_Admin/ACCOUNTING TO IK503.png"
import AccountingToIK504 from "../assets/Accounting_Admin/ACCOUNTING TO IK504.png"
import AccountingToCCS from "../assets/Accounting_Admin/ACCOUNTING TO CCS.png"
import AccountingToITSO from "../assets/Accounting_Admin/ACCOUNTING TO ITSO.png"
import AccountingToIK603 from "../assets/Accounting_Admin/ACCOUNTING TO IK603.png"
import AccountingToIK604 from "../assets/Accounting_Admin/ACCOUNTING TO IK604.png"

import AccountingToGym from "../assets/Accounting_Admin/ACCOUNTING TO GYM.png"
import AccountingToIA104c from "../assets/Accounting_Admin/ACCOUNTING TO IA104C.png"
import AccountingToIA105 from "../assets/Accounting_Admin/ACCOUNTING TO IA105.png"
import AccountingToIA106b from "../assets/Accounting_Admin/ACCOUNTING TO IA106b.png"
import AccountingToIA107b from "../assets/Accounting_Admin/ACCOUNTING TO IA107b.png"
import AccountingToInnopad from "../assets/Accounting_Admin/ACCOUNTING TO INNOPAD.png"
import AccountingToMotorpool from "../assets/Accounting_Admin/ACCOUNTING TO MOTORPOOL.png"
import AccountingToPFGSD from "../assets/Accounting_Admin/ACCOUNTING TO ICTO PFGSD IA203.png"
import AccountingToQACIMDO from "../assets/Accounting_Admin/ACCOUNTING TO ICTO QACIMDO IA210.png"
import AccountingToSASD from "../assets/Accounting_Admin/ACCOUNTING TO ICTO SASD IA207.png"
import AccountingToSPARD from "../assets/Accounting_Admin/ACCOUNTING TO ICTO SPARD IA206.png"
import AccountingToICTO208 from "../assets/Accounting_Admin/ACCOUNTING TO ICTO208.png"
import AccountingToIA202 from "../assets/Accounting_Admin/ACCOUNTING TO IA202.png"
import AccountingToIA204 from "../assets/Accounting_Admin/ACCOUNTING TO IA204.png"

import AccountingToGuidance from "../assets/Accounting_Admin/ACCOUNTINGTO GUIDANCE.png"
import AccountingToClinic from "../assets/Accounting_Admin/ACCOUNTINGTO CLINIC.png"
import AccountingToLibrary from "../assets/Accounting_Admin/ACCOUNTINGTO LIBRARY.png"

import AccountingToAccountingChed from "../assets/Accounting_Admin/REGISTRAR TO ACCOUNTING.png"
import AccountingToCashier from "../assets/Accounting_Admin/REGISTRAR TO CASHIER.png"
import AccountingToExecutive from "../assets/Accounting_Admin/REGISTRAR TO EXECUTIVE.png"
import AccountingToRecord from "../assets/Accounting_Admin/REGISTRAR TO RECORD.png"
import AccountingToScholarship from "../assets/Accounting_Admin/REGISTRAR TO SCHOLARSHIP.png"

import AccountingToMultipurpose from "../assets/Accounting_Admin/REGISTRAR TO MULTIPURPOSE.png"
import AccountingToBallroom from "../assets/Accounting_Admin/REGISTRAR TO BALLROOM.png"
import AccountingToUrban from "../assets/Accounting_Admin/REGISTRAR TO URBAN.png"
import AccountingToChineseB from "../assets/Accounting_Admin/REGISTRAR TO CHINESE B.png"

import { library } from "ionicons/icons"

const AccountingDivision = {
        // Bautista Room
        Canteen: {image: AccountingToCanteen, floorLevel: "Basement", buildingName: "Bautista"},
        Coop: {image: AccountingToCoop, floorLevel: "Basement", buildingName: "Bautista"},
        Accountancy_Department: {image: AccountingToAccountancyDept, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Chemistry_Laboratory: {image:AccountingToChemLab, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Physics_Laboratory: {image: AccountingToPhysicsLab, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Engineering_Lab_Office: {image: AccountingToEngrOffice, floorLevel: "2", buildingName: "Bautista"},
        Electronic_Lab: {image: AccountingToElectronicLab, floorLevel: "2", buildingName: "Bautista"},
        IK203: {image: AccountingToIK203, floorLevel: "2", buildingName: "Bautista"},
        IK204: {image: AccountingToIK204, floorLevel: "2", buildingName: "Bautista"},
        College_of_Education: {image: AccountingToEducDept, floorLevel: "3", buildingName: "Bautista"},
        Math_and_Science_Department: {image: AccountingToMathAndScience, floorLevel: "3", buildingName: "Bautista"},
        IK303: {image: AccountingToIK303, floorLevel: "3", buildingName: "Bautista"},
        IK304: {image: AccountingToIK304, floorLevel: "3", buildingName: "Bautista"},
        Entrepreneurship_Department: {image: AccountingToEntrepDept, floorLevel: "4", buildingName: "Bautista"},
        IK403: {image: AccountingToIK403, floorLevel: "4", buildingName: "Bautista"},
        IK404: {image: AccountingToIK404, floorLevel: "4", buildingName: "Bautista"},
        College_of_Enginering: {image: AccountingToEngrDept, floorLevel: "5", buildingName: "Bautista"},
        Engineering_Lounge: {image: AccountingToEngrLounge, floorLevel: "5", buildingName: "Bautista"},
        IK503: {image: AccountingToIK503, floorLevel: "5", buildingName: "Bautista"},
        IK504: {image: AccountingToIK504, floorLevel: "5", buildingName: "Bautista"},
        College_of_Computer_Studies: {image: AccountingToCCS, floorLevel: "6", buildingName: "Bautista"},
        Innovation_and_Technology_Support_Office: {image: AccountingToITSO, floorLevel: "6", buildingName: "Bautista"},
        IK603: {image: AccountingToIK603, floorLevel: "6", buildingName: "Bautista"},
        IK604: {image: AccountingToIK604, floorLevel: "6", buildingName: "Bautista"},

        // TECH-VOC ROOM
        QCU_Gym: {image: AccountingToGym, floorLevel: "1", buildingName: "Techvoc"},
        IA104c: {image: AccountingToIA104c, floorLevel: "1", buildingName: "Techvoc"},
        IA105: {image: AccountingToIA105, floorLevel: "1", buildingName: "Techvoc"},
        IA106b: {image: AccountingToIA106b, floorLevel: "1", buildingName: "Techvoc"},
        IA107b: {image: AccountingToIA107b, floorLevel: "1", buildingName: "Techvoc"},
        QCU_Innopad: {image: AccountingToInnopad, floorLevel: "1", buildingName: "Techvoc"},
        Motorpool_Unit_Office: {image: AccountingToMotorpool, floorLevel: "1", buildingName: "Techvoc"},
        PFGSD_IA203: {image: AccountingToPFGSD, floorLevel: "2", buildingName: "Techvoc"},
        QACIMDO_210: {image: AccountingToQACIMDO, floorLevel: "2", buildingName: "Techvoc"},
        SASD_IA207: {image: AccountingToSASD, floorLevel: "2", buildingName: "Techvoc"},
        SPARD_IA206: {image: AccountingToSPARD, floorLevel: "2", buildingName: "Techvoc"},
        ICTO208: {image: AccountingToICTO208, floorLevel: "2", buildingName: "Techvoc"},
        IA202: {image: AccountingToIA202, floorLevel: "2", buildingName: "Techvoc"},
        IA204: {image: AccountingToIA204, floorLevel: "2", buildingName: "Techvoc"},

        // Academic Room
        Guidance: {image: AccountingToGuidance, floorLevel: "1", buildingName: "Academic"},
        Clinic: {image: AccountingToClinic, floorLevel: "1", buildingName: "Academic"},
        Library: {image: AccountingToLibrary, floorLevel: "1", buildingName: "Academic"},

        // Ched
        Accounting_Ched: {image: AccountingToAccountingChed, floorLevel: "1", buildingName: "Ched"},
        Cashier_Ched: {image: AccountingToCashier, floorLevel: "1", buildingName: "Ched"},
        Executice_Ched: {image: AccountingToExecutive, floorLevel: "1", buildingName: "Ched"},
        Record_Ched: {image: AccountingToRecord, floorLevel: "1", buildingName: "Ched"},
        Scholarship_Ched: {image: AccountingToScholarship, floorLevel: "1", buildingName: "Ched"},

        // Urban
        Urban: {image: AccountingToUrban, floorLevel: "1", buildingName: "Urban"},

        // Multipurpose
        Multipurpose: {image: AccountingToMultipurpose, floorLevel: "1", buildingName: "Multipurpose"},

        // Ballroom
        Ballroom: {image: AccountingToBallroom, floorLevel: "1", buildingName: "Ballroom"},

        // Chinese B
        Chinese_B: {image: AccountingToChineseB, floorLevel: "1", buildingName: "Chinese B"},
}