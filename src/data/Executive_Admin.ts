
import ExecutiveToCanteen from "../assets/Executive_Admin/EXECUTIVE TO CANTEEN.png"
import ExecutiveToCoop from "../assets/Executive_Admin/EXECUTIVE TO COOP.png"
import ExecutiveToAccountancyDept from "../assets/Executive_Admin/EXECUTIVE TO ACCOUNTANCY.png"
import ExecutiveToChemLab from "../assetsExecutive_Admin/EXECUTIVE TO CHEM LAB.png"
import ExecutiveToPhysicsLab from "../assets/Executive_Admin/EXECUTIVE TO PHYSICS.png"
import ExecutiveToEngrOffice from "../assets/Executive_Admin/EXECUTIVE TO ENGINEERING.png"
import ExecutiveToElectronicLab from "../assets/Executive_Admin/EXECUTIVE TO ELECTRONIC.png"
import ExecutiveToIK203 from "../assets/Executive_Admin/EXECUTIVE TO IK203.png"
import ExecutiveToIK204 from "../assets/Executive_Admin/EXECUTIVE TO IK204.png"
import ExecutiveToEducDept from "../assets/Executive_Admin/EXECUTIVE TO EDUC.png"
import ExecutiveToMathAndScience from "../assets/Executive_Admin/EXECUTIVE TO MATHSCIE.png"
import ExecutiveToIK303 from "../assets/Executive_Admin/EXECUTIVE TO IK303.png"
import ExecutiveToIK304 from "../assets/Executive_Admin/BLANK.png"
import ExecutiveToEntrepDept from "../assets/Executive_Admin/EXECUTIVE TO ENTREP.png"
import ExecutiveToIK403 from "../assets/Executive_Admin/EXECUTIVE TO IK403.png"
import ExecutiveToIK404 from "../assets/Executive_Admin/EXECUTIVE TO IK404.png"
import ExecutiveToEngrDept from "../assets/Executive_Admin/EXECUTIVE TO COE.png"
import ExecutiveToEngrLounge from "../assets/Executive_Admin/EXECUTIVE TO LOUNGE.png"
import ExecutiveToIK503 from "../assets/Executive_Admin/EXECUTIVE TO IK503.png"
import ExecutiveToIK504 from "../assets/Executive_Admin/EXECUTIVE TO IK504.png"
import ExecutiveToCCS from "../assets/Executive_Admin/EXECUTIVE TO CCS.png"
import ExecutiveToITSO from "../assets/Executive_Admin/EXECUTIVE TO ITSO.png"
import ExecutiveToIK603 from "../assets/Executive_Admin/EXECUTIVE TO IK603.png"
import ExecutiveToIK604 from "../assets/Executive_Admin/EXECUTIVE TO IK604.png"

import ExecutiveToGym from "../assets/Executive_Admin/EXECUTIVE TO GYM.png"
import ExecutiveToIA104c from "../assets/Executive_Admin/EXECUTIVE TO IA104C.png"
import ExecutiveToIA105 from "../assets/Executive_Admin/EXECUTIVE TO IA105.png"
import ExecutiveToIA106b from "../assets/Executive_Admin/EXECUTIVE TO IA106b.png"
import ExecutiveToIA107b from "../assets/Executive_Admin/EXECUTIVE TO IA107b.png"
import ExecutiveToInnopad from "../assets/Executive_Admin/EXECUTIVE TO INNOPAD.png"
import ExecutiveToMotorpool from "../assets/Executive_Admin/EXECUTIVE TO MOTORPOOL.png"
import ExecutiveToPFGSD from "../assets/Executive_Admin/EXECUTIVE TO ICTO PFGSD IA203.png"
import ExecutiveToQACIMDO from "../assets/Executive_Admin/EXECUTIVE TO ICTO QACIMDO IA210.png"
import ExecutiveToSASD from "../assets/Executive_Admin/EXECUTIVE TO ICTO SASD IA207.png"
import ExecutiveToSPARD from "../assets/Executive_Admin/EXECUTIVE TO ICTO SPARD IA206.png"
import ExecutiveToICTO208 from "../assets/Executive_Admin/EXECUTIVE TO ICTO208.png"
import ExecutiveToIA202 from "../assets/Executive_Admin/EXECUTIVE TO IA202.png"
import ExecutiveToIA204 from "../assets/Executive_Admin/EXECUTIVE TO IA204.png"

import ExecutiveToGuidance from "../assets/Executive_Admin/EXECUTIVE TO GUIDANCE.png"
import ExecutiveToClinic from "../assets/Executive_Admin/EXECUTIVE TO CLINIC.png"
import ExecutiveToLibrary from "../assets/Executive_Admin/EXECUTIVE TO LIBRARY.png"

import ExecutiveToAccountingChed from "../assets/Executive_Admin/REGISTRAR TO ACCOUNTING.png"
import ExecutiveToCashier from "../assets/Executive_Admin/REGISTRAR TO CASHIER.png"
import ExecutiveToExecutive from "../assets/Executive_Admin/REGISTRAR TO EXECUTIVE.png"
import ExecutiveToRecord from "../assets/Executive_Admin/REGISTRAR TO RECORD.png"
import ExecutiveToScholarship from "../assets/Executive_Admin/REGISTRAR TO SCHOLARSHIP.png"

import ExecutiveToMultipurpose from "../assets/Executive_Admin/REGISTRAR TO MULTIPURPOSE.png"
import ExecutiveToBallroom from "../assets/Executive_Admin/REGISTRAR TO BALLROOM.png"
import ExecutiveToUrban from "../assets/Executive_Admin/REGISTRAR TO URBAN.png"
import ExecutiveToChineseB from "../assets/Executive_Admin/REGISTRAR TO CHINESE B.png"

import { library } from "ionicons/icons"

const ExecutiveFloor = {
        // Bautista Room
        Canteen: {image: ExecutiveToCanteen, floorLevel: "Basement", buildingName: "Bautista"},
        Coop: {image: ExecutiveToCoop, floorLevel: "Basement", buildingName: "Bautista"},
        Accountancy_Department: {image: ExecutiveToAccountancyDept, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Chemistry_Laboratory: {image:ExecutiveToChemLab, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Physics_Laboratory: {image: ExecutiveToPhysicsLab, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Engineering_Lab_Office: {image: ExecutiveToEngrOffice, floorLevel: "2", buildingName: "Bautista"},
        Electronic_Lab: {image: ExecutiveToElectronicLab, floorLevel: "2", buildingName: "Bautista"},
        IK203: {image: ExecutiveToIK203, floorLevel: "2", buildingName: "Bautista"},
        IK204: {image: ExecutiveToIK204, floorLevel: "2", buildingName: "Bautista"},
        College_of_Education: {image: ExecutiveToEducDept, floorLevel: "3", buildingName: "Bautista"},
        Math_and_Science_Department: {image: ExecutiveToMathAndScience, floorLevel: "3", buildingName: "Bautista"},
        IK303: {image: ExecutiveToIK303, floorLevel: "3", buildingName: "Bautista"},
        IK304: {image: ExecutiveToIK304, floorLevel: "3", buildingName: "Bautista"},
        Entrepreneurship_Department: {image: ExecutiveToEntrepDept, floorLevel: "4", buildingName: "Bautista"},
        IK403: {image: ExecutiveToIK403, floorLevel: "4", buildingName: "Bautista"},
        IK404: {image: ExecutiveToIK404, floorLevel: "4", buildingName: "Bautista"},
        College_of_Enginering: {image: ExecutiveToEngrDept, floorLevel: "5", buildingName: "Bautista"},
        Engineering_Lounge: {image: ExecutiveToEngrLounge, floorLevel: "5", buildingName: "Bautista"},
        IK503: {image: ExecutiveToIK503, floorLevel: "5", buildingName: "Bautista"},
        IK504: {image: ExecutiveToIK504, floorLevel: "5", buildingName: "Bautista"},
        College_of_Computer_Studies: {image: ExecutiveToCCS, floorLevel: "6", buildingName: "Bautista"},
        Innovation_and_Technology_Support_Office: {image: ExecutiveToITSO, floorLevel: "6", buildingName: "Bautista"},
        IK603: {image: ExecutiveToIK603, floorLevel: "6", buildingName: "Bautista"},
        IK604: {image: ExecutiveToIK604, floorLevel: "6", buildingName: "Bautista"},

        // TECH-VOC ROOM
        QCU_Gym: {image: ExecutiveToGym, floorLevel: "1", buildingName: "Techvoc"},
        IA104c: {image: ExecutiveToIA104c, floorLevel: "1", buildingName: "Techvoc"},
        IA105: {image: ExecutiveToIA105, floorLevel: "1", buildingName: "Techvoc"},
        IA106b: {image: ExecutiveToIA106b, floorLevel: "1", buildingName: "Techvoc"},
        IA107b: {image: ExecutiveToIA107b, floorLevel: "1", buildingName: "Techvoc"},
        QCU_Innopad: {image: ExecutiveToInnopad, floorLevel: "1", buildingName: "Techvoc"},
        Motorpool_Unit_Office: {image: ExecutiveToMotorpool, floorLevel: "1", buildingName: "Techvoc"},
        PFGSD_IA203: {image: ExecutiveToPFGSD, floorLevel: "2", buildingName: "Techvoc"},
        QACIMDO_210: {image: ExecutiveToQACIMDO, floorLevel: "2", buildingName: "Techvoc"},
        SASD_IA207: {image: ExecutiveToSASD, floorLevel: "2", buildingName: "Techvoc"},
        SPARD_IA206: {image: ExecutiveToSPARD, floorLevel: "2", buildingName: "Techvoc"},
        ICTO208: {image: ExecutiveToICTO208, floorLevel: "2", buildingName: "Techvoc"},
        IA202: {image: ExecutiveToIA202, floorLevel: "2", buildingName: "Techvoc"},
        IA204: {image: ExecutiveToIA204, floorLevel: "2", buildingName: "Techvoc"},

        // Academic Room
        Guidance: {image: ExecutiveToGuidance, floorLevel: "1", buildingName: "Academic"},
        Clinic: {image: ExecutiveToClinic, floorLevel: "1", buildingName: "Academic"},
        Library: {image: ExecutiveToLibrary, floorLevel: "1", buildingName: "Academic"},

        // Ched
        Accounting_Ched: {image: ExecutiveToAccountingChed, floorLevel: "1", buildingName: "Ched"},
        Cashier_Ched: {image: ExecutiveToCashier, floorLevel: "1", buildingName: "Ched"},
        Executice_Ched: {image: ExecutiveToExecutive, floorLevel: "1", buildingName: "Ched"},
        Record_Ched: {image: ExecutiveToRecord, floorLevel: "1", buildingName: "Ched"},
        Scholarship_Ched: {image: ExecutiveToScholarship, floorLevel: "1", buildingName: "Ched"},

        // Urban
        Urban: {image: ExecutiveToUrban, floorLevel: "1", buildingName: "Urban"},

        // Multipurpose
        Multipurpose: {image: ExecutiveToMultipurpose, floorLevel: "1", buildingName: "Multipurpose"},

        // Ballroom
        Ballroom: {image: ExecutiveToBallroom, floorLevel: "1", buildingName: "Ballroom"},

        // Chinese B
        Chinese_B: {image: ExecutiveToChineseB, floorLevel: "1", buildingName: "Chinese B"},
}