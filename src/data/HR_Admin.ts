
import HRToCanteen from "../assets/HR_Admin/HR TO CANTEEN.png"
import HRToCoop from "../assets/HR_Admin/HR TO COOP.png"
import HRToAccountancyDept from "../assets/HR_Admin/HR TO ACCOUNTANCY.png"
import HRToChemLab from "../assets/HR_Admin/HR TO CHEM LAB.png"
import HRToPhysicsLab from "../assets/HR_Admin/HR TO PHYSICS.png"
import HRToEngrOffice from "../assets/HR_Admin/HR TO ENGINEERING.png"
import HRToElectronicLab from "../assets/HR_Admin/HR TO ELECTRONIC.png"
import HRToIK203 from "../assets/HR_Admin/HR TO IK203.png"
import HRToIK204 from "../assets/HR_Admin/HR TO IK204.png"
import HRToEducDept from "../assets/HR_Admin/HR TO EDUC.png"
import HRToMathAndScience from "../assets/HR_Admin/HR TO MATHSCIE.png"
import HRToIK303 from "../assets/HR_Admin/HR TO IK303.png"
import HRToIK304 from "../assets/HR_Admin/BLANK.png"
import HRToEntrepDept from "../assets/HR_Admin/HR TO ENTREP.png"
import HRToIK403 from "../assets/HR_Admin/HR TO IK403.png"
import HRToIK404 from "../assets/HR_Admin/HR TO IK404.png"
import HRToEngrDept from "../assets/HR_Admin/HR TO COE.png"
import HRToEngrLounge from "../assets/HR_Admin/HR TO LOUNGE.png"
import HRToIK503 from "../assets/HR_Admin/HR TO IK503.png"
import HRToIK504 from "../assets/HR_Admin/HR TO IK504.png"
import HRToCCS from "../assets/HR_Admin/HR TO CCS.png"
import HRToITSO from "../assets/HR_Admin/HR TO ITSO.png"
import HRToIK603 from "../assets/HR_Admin/HR TO IK603.png"
import HRToIK604 from "../assets/HR_Admin/HR TO IK604.png"

import HRToGym from "../assets/HR_Admin/HR TO GYM.png"
import HRToIA104c from "../assets/HR_Admin/HR TO IA104C.png"
import HRToIA105 from "../assets/HR_Admin/HR TO IA105.png"
import HRToIA106b from "../assets/HR_Admin/HR TO IA106b.png"
import HRToIA107b from "../assets/HR_Admin/HR TO IA107b.png"
import HRToInnopad from "../assets/HR_Admin/HR TO INNOPAD.png"
import HRToMotorpool from "../assets/HR_Admin/HR TO MOTORPOOL.png"
import HRToPFGSD from "../assets/HR_Admin/HR TO ICTO PFGSD IA203.png"
import HRToQACIMDO from "../assets/HR_Admin/HR TO ICTO QACIMDO IA210.png"
import HRToSASD from "../assets/HR_Admin/HR TO ICTO SASD IA207.png"
import HRToSPARD from "../assets/HR_Admin/HR TO ICTO SPARD IA206.png"
import HRToICTO208 from "../assets/HR_Admin/HR TO ICTO208.png"
import HRToIA202 from "../assets/HR_Admin/HR TO IA202.png"
import HRToIA204 from "../assets/HR_Admin/HR TO IA204.png"

import HRToGuidance from "../assets/HR_Admin/HR TO GUIDANCE.png"
import HRToClinic from "../assets/HR_Admin/HR TO CLINIC.png"
import HRToLibrary from "../assets/HR_Admin/HR TO LIBRARY.png"

import HRToAccountingChed from "../assets/HR_Admin/REGISTRAR TO ACCOUNTING.png"
import HRToCashier from "../assets/HR_Admin/REGISTRAR TO CASHIER.png"
import HRToExecutive from "../assets/HR_Admin/REGISTRAR TO EXECUTIVE.png"
import HRToRecord from "../assets/HR_Admin/REGISTRAR TO RECORD.png"
import HRToScholarship from "../assets/HR_Admin/REGISTRAR TO SCHOLARSHIP.png"

import HRToMultipurpose from "../assets/HR_Admin/REGISTRAR TO MULTIPURPOSE.png"
import HRToBallroom from "../assets/HR_Admin/REGISTRAR TO BALLROOM.png"
import HRToUrban from "../assets/HR_Admin/REGISTRAR TO URBAN.png"
import HRToChineseB from "../assets/HR_Admin/REGISTRAR TO CHINESE B.png"

import { library } from "ionicons/icons"

const HROffice = {
        // Bautista Room
        Canteen: {image: HRToCanteen, floorLevel: "Basement", buildingName: "Bautista"},
        Coop: {image: HRToCoop, floorLevel: "Basement", buildingName: "Bautista"},
        Accountancy_Department: {image: HRToAccountancyDept, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Chemistry_Laboratory: {image:HRToChemLab, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Physics_Laboratory: {image: HRToPhysicsLab, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Engineering_Lab_Office: {image: HRToEngrOffice, floorLevel: "2", buildingName: "Bautista"},
        Electronic_Lab: {image: HRToElectronicLab, floorLevel: "2", buildingName: "Bautista"},
        IK203: {image: HRToIK203, floorLevel: "2", buildingName: "Bautista"},
        IK204: {image: HRToIK204, floorLevel: "2", buildingName: "Bautista"},
        College_of_Education: {image: HRToEducDept, floorLevel: "3", buildingName: "Bautista"},
        Math_and_Science_Department: {image: HRToMathAndScience, floorLevel: "3", buildingName: "Bautista"},
        IK303: {image: HRToIK303, floorLevel: "3", buildingName: "Bautista"},
        IK304: {image: HRToIK304, floorLevel: "3", buildingName: "Bautista"},
        Entrepreneurship_Department: {image: HRToEntrepDept, floorLevel: "4", buildingName: "Bautista"},
        IK403: {image: HRToIK403, floorLevel: "4", buildingName: "Bautista"},
        IK404: {image: HRToIK404, floorLevel: "4", buildingName: "Bautista"},
        College_of_Enginering: {image: HRToEngrDept, floorLevel: "5", buildingName: "Bautista"},
        Engineering_Lounge: {image: HRToEngrLounge, floorLevel: "5", buildingName: "Bautista"},
        IK503: {image: HRToIK503, floorLevel: "5", buildingName: "Bautista"},
        IK504: {image: HRToIK504, floorLevel: "5", buildingName: "Bautista"},
        College_of_Computer_Studies: {image: HRToCCS, floorLevel: "6", buildingName: "Bautista"},
        Innovation_and_Technology_Support_Office: {image: HRToITSO, floorLevel: "6", buildingName: "Bautista"},
        IK603: {image: HRToIK603, floorLevel: "6", buildingName: "Bautista"},
        IK604: {image: HRToIK604, floorLevel: "6", buildingName: "Bautista"},

        // TECH-VOC ROOM
        QCU_Gym: {image: HRToGym, floorLevel: "1", buildingName: "Techvoc"},
        IA104c: {image: HRToIA104c, floorLevel: "1", buildingName: "Techvoc"},
        IA105: {image: HRToIA105, floorLevel: "1", buildingName: "Techvoc"},
        IA106b: {image: HRToIA106b, floorLevel: "1", buildingName: "Techvoc"},
        IA107b: {image: HRToIA107b, floorLevel: "1", buildingName: "Techvoc"},
        QCU_Innopad: {image: HRToInnopad, floorLevel: "1", buildingName: "Techvoc"},
        Motorpool_Unit_Office: {image: HRToMotorpool, floorLevel: "1", buildingName: "Techvoc"},
        PFGSD_IA203: {image: HRToPFGSD, floorLevel: "2", buildingName: "Techvoc"},
        QACIMDO_210: {image: HRToQACIMDO, floorLevel: "2", buildingName: "Techvoc"},
        SASD_IA207: {image: HRToSASD, floorLevel: "2", buildingName: "Techvoc"},
        SPARD_IA206: {image: HRToSPARD, floorLevel: "2", buildingName: "Techvoc"},
        ICTO208: {image: HRToICTO208, floorLevel: "2", buildingName: "Techvoc"},
        IA202: {image: HRToIA202, floorLevel: "2", buildingName: "Techvoc"},
        IA204: {image: HRToIA204, floorLevel: "2", buildingName: "Techvoc"},

        // Academic Room
        Guidance: {image: HRToGuidance, floorLevel: "1", buildingName: "Academic"},
        Clinic: {image: HRToClinic, floorLevel: "1", buildingName: "Academic"},
        Library: {image: HRToLibrary, floorLevel: "1", buildingName: "Academic"},

        // Ched
        Accounting_Ched: {image: HRToAccountingChed, floorLevel: "1", buildingName: "Ched"},
        Cashier_Ched: {image: HRToCashier, floorLevel: "1", buildingName: "Ched"},
        Executice_Ched: {image: HRToExecutive, floorLevel: "1", buildingName: "Ched"},
        Record_Ched: {image: HRToRecord, floorLevel: "1", buildingName: "Ched"},
        Scholarship_Ched: {image: HRToScholarship, floorLevel: "1", buildingName: "Ched"},

        // Urban
        Urban: {image: HRToUrban, floorLevel: "1", buildingName: "Urban"},

        // Multipurpose
        Multipurpose: {image: HRToMultipurpose, floorLevel: "1", buildingName: "Multipurpose"},

        // Ballroom
        Ballroom: {image: HRToBallroom, floorLevel: "1", buildingName: "Ballroom"},

        // Chinese B
        Chinese_B: {image: HRToChineseB, floorLevel: "1", buildingName: "Chinese B"},
}