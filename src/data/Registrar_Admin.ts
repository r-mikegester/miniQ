
import RegistrarToCanteen from "../assets/Registrar_Admin/REGISTRAR TO CANTEEN.png"
import RegistrarToCoop from "../assets/Registrar_Admin/REGISTRAR TO COOP.png"
import RegistrarToAccountancyDept from "../assets/Registrar_Admin/REGISTRAR TO ACCOUNTANCY.png"
import RegistrarToChemLab from "../assetsRegistrar_Admin/REGISTRAR TO CHEM LAB.png"
import RegistrarToPhysicsLab from "../assets/Registrar_Admin/REGISTRAR TO PHYSICS.png"
import RegistrarToEngrOffice from "../assets/Registrar_Admin/REGISTRAR TO ENGINEERING.png"
import RegistrarToElectronicLab from "../assets/Registrar_Admin/REGISTRAR TO ELECTRONIC.png"
import RegistrarToIK203 from "../assets/Registrar_Admin/REGISTRAR TO IK203.png"
import RegistrarToIK204 from "../assets/Registrar_Admin/REGISTRAR TO IK204.png"
import RegistrarToEducDept from "../assets/Registrar_Admin/REGISTRAR TO EDUC.png"
import RegistrarToMathAndScience from "../assets/Registrar_Admin/REGISTRAR TO MATHSCIE.png"
import RegistrarToIK303 from "../assets/Registrar_Admin/REGISTRAR TO IK303.png"
import RegistrarToIK304 from "../assets/Registrar_Admin/BLANK.png"
import RegistrarToEntrepDept from "../assets/Registrar_Admin/REGISTRAR TO ENTREP.png"
import RegistrarToIK403 from "../assets/Registrar_Admin/REGISTRAR TO IK403.png"
import RegistrarToIK404 from "../assets/Registrar_Admin/REGISTRAR TO IK404.png"
import RegistrarToEngrDept from "../assets/Registrar_Admin/REGISTRAR TO COE.png"
import RegistrarToEngrLounge from "../assets/Registrar_Admin/REGISTRAR TO LOUNGE.png"
import RegistrarToIK503 from "../assets/Registrar_Admin/REGISTRAR TO IK503.png"
import RegistrarToIK504 from "../assets/Registra_Adminr/REGISTRAR TO IK504.png"
import RegistrarToCCS from "../assets/Registrar_Admin/REGISTRAR TO CCS.png"
import RegistrarToITSO from "../assets/Registrar_Admin/REGISTRAR TO ITSO.png"
import RegistrarToIK603 from "../assets/Registrar_Admin/REGISTRAR TO IK603.png"
import RegistrarToIK604 from "../assets/Registrar_Admin/REGISTRAR TO IK604.png"

import RegistrarToGym from "../assets/Registrar_Admin/REGISTRAR TO GYM.png"
import RegistrarToIA104c from "../assets/Registrar_Admin/REGISTRAR TO IA104C.png"
import RegistrarToIA105 from "../assets/Registrar_Admin/REGISTRAR TO IA105.png"
import RegistrarToIA106b from "../assets/Registrar_Admin/REGISTRAR TO IA106b.png"
import RegistrarToIA107b from "../assets/Registrar_Admin/REGISTRAR TO IA107b.png"
import RegistrarToInnopad from "../assets/Registrar_Admin/REGISTRAR TO INNOPAD.png"
import RegistrarToMotorpool from "../assets/Registrar_Admin/REGISTRAR TO MOTORPOOL.png"
import RegistrarToPFGSD from "../assets/Registra_Adminr/REGISTRAR TO ICTO PFGSD IA203.png"
import RegistrarToQACIMDO from "../assets/Registrar_Admin/REGISTRAR TO ICTO QACIMDO IA210.png"
import RegistrarToSASD from "../assets/Registrar_Admin/REGISTRAR TO ICTO SASD IA207.png"
import RegistrarToSPARD from "../assets/Registrar_Admin/REGISTRAR TO ICTO SPARD IA206.png"
import RegistrarToICTO208 from "../assets/Registrar_Admin/REGISTRAR TO ICTO208.png"
import RegistrarToIA202 from "../assets/Registrar_Admin/REGISTRAR TO IA202.png"
import RegistrarToIA204 from "../assets/Registrar_Admin/REGISTRAR TO IA204.png"

import RegistrarToGuidance from "../assets/Registrar_Admin/AdminRegistrarfloortoAcadGuidance.png"
import RegistrarToClinic from "../assets/Registrar_Admin/AdminRegistrarfloortoAcadClinic.png"
import RegistrarToLibrary from "../assets/Registrar_Admin/AdminRegistrarfloortoAcadLibrary.png"

import RegistrarToAccountingChed from "../assets/Registrar_Admin/REGISTRAR TO ACCOUNTING.png"
import RegistrarToCashier from "../assets/Registrar_Admin/REGISTRAR TO CASHIER.png"
import RegistrarToExecutive from "../assets/Registrar_Admin/REGISTRAR TO EXECUTIVE.png"
import RegistrarToRecord from "../assets/Registrar_Admin/REGISTRAR TO RECORD.png"
import RegistrarToScholarship from "../assets/Registrar_Admin/REGISTRAR TO SCHOLARSHIP.png"

import RegistrarToMultipurpose from "../assets/Registrar_Admin/REGISTRAR TO MULTIPURPOSE.png"
import RegistrarToBallroom from "../assets/Registrar_Admin/REGISTRAR TO BALLROOM.png"
import RegistrarToUrban from "../assets/Registrar_Admin/REGISTRAR TO URBAN.png"
import RegistrarToChineseB from "../assets/Registrar_Admin/REGISTRAR TO CHINESE B.png"

import { library } from "ionicons/icons"

const Registrar = {
        // Bautista Room
        Canteen: {image: RegistrarToCanteen, floorLevel: "Basement", buildingName: "Bautista"},
        Coop: {image: RegistrarToCoop, floorLevel: "Basement", buildingName: "Bautista"},
        Accountancy_Department: {image: RegistrarToAccountancyDept, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Chemistry_Laboratory: {image: RegistrarToChemLab, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Physics_Laboratory: {image: RegistrarToPhysicsLab, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Engineering_Lab_Office: {image: RegistrarToEngrOffice, floorLevel: "2", buildingName: "Bautista"},
        Electronic_Lab: {image: RegistrarToElectronicLab, floorLevel: "2", buildingName: "Bautista"},
        IK203: {image: RegistrarToIK203, floorLevel: "2", buildingName: "Bautista"},
        IK204: {image: RegistrarToIK204, floorLevel: "2", buildingName: "Bautista"},
        College_of_Education: {image: RegistrarToEducDept, floorLevel: "3", buildingName: "Bautista"},
        Math_and_Science_Department: {image: RegistrarToMathAndScience, floorLevel: "3", buildingName: "Bautista"},
        IK303: {image: RegistrarToIK303, floorLevel: "3", buildingName: "Bautista"},
        IK304: {image: RegistrarToIK304, floorLevel: "3", buildingName: "Bautista"},
        Entrepreneurship_Department: {image: RegistrarToEntrepDept, floorLevel: "4", buildingName: "Bautista"},
        IK403: {image: RegistrarToIK403, floorLevel: "4", buildingName: "Bautista"},
        IK404: {image: RegistrarToIK404, floorLevel: "4", buildingName: "Bautista"},
        College_of_Enginering: {image: RegistrarToEngrDept, floorLevel: "5", buildingName: "Bautista"},
        Engineering_Lounge: {image: RegistrarToEngrLounge, floorLevel: "5", buildingName: "Bautista"},
        IK503: {image: RegistrarToIK503, floorLevel: "5", buildingName: "Bautista"},
        IK504: {image: RegistrarToIK504, floorLevel: "5", buildingName: "Bautista"},
        College_of_Computer_Studies: {image: RegistrarToCCS, floorLevel: "6", buildingName: "Bautista"},
        Innovation_and_Technology_Support_Office: {image: RegistrarToITSO, floorLevel: "6", buildingName: "Bautista"},
        IK603: {image: RegistrarToIK603, floorLevel: "6", buildingName: "Bautista"},
        IK604: {image: RegistrarToIK604, floorLevel: "6", buildingName: "Bautista"},

        // TECH-VOC ROOM
        QCU_Gym: {image: RegistrarToGym, floorLevel: "1", buildingName: "Techvoc"},
        IA104c: {image: RegistrarToIA104c, floorLevel: "1", buildingName: "Techvoc"},
        IA105: {image: RegistrarToIA105, floorLevel: "1", buildingName: "Techvoc"},
        IA106b: {image: RegistrarToIA106b, floorLevel: "1", buildingName: "Techvoc"},
        IA107b: {image: RegistrarToIA107b, floorLevel: "1", buildingName: "Techvoc"},
        QCU_Innopad: {image: RegistrarToInnopad, floorLevel: "1", buildingName: "Techvoc"},
        Motorpool_Unit_Office: {image: RegistrarToMotorpool, floorLevel: "1", buildingName: "Techvoc"},
        PFGSD_IA203: {image: RegistrarToPFGSD, floorLevel: "2", buildingName: "Techvoc"},
        QACIMDO_210: {image: RegistrarToQACIMDO, floorLevel: "2", buildingName: "Techvoc"},
        SASD_IA207: {image: RegistrarToSASD, floorLevel: "2", buildingName: "Techvoc"},
        SPARD_IA206: {image: RegistrarToSPARD, floorLevel: "2", buildingName: "Techvoc"},
        ICTO208: {image: RegistrarToICTO208, floorLevel: "2", buildingName: "Techvoc"},
        IA202: {image: RegistrarToIA202, floorLevel: "2", buildingName: "Techvoc"},
        IA204: {image: RegistrarToIA204, floorLevel: "2", buildingName: "Techvoc"},

        // Academic Room
        Guidance: {image: RegistrarToGuidance, floorLevel: "1", buildingName: "Academic"},
        Clinic: {image: RegistrarToClinic, floorLevel: "1", buildingName: "Academic"},
        Library: {image: RegistrarToLibrary, floorLevel: "1", buildingName: "Academic"},

        // Ched
        Accounting_Ched: {image: RegistrarToAccountingChed, floorLevel: "1", buildingName: "Ched"},
        Cashier_Ched: {image: RegistrarToCashier, floorLevel: "1", buildingName: "Ched"},
        Executice_Ched: {image: RegistrarToExecutive, floorLevel: "1", buildingName: "Ched"},
        Record_Ched: {image: RegistrarToRecord, floorLevel: "1", buildingName: "Ched"},
        Scholarship_Ched: {image: RegistrarToScholarship, floorLevel: "1", buildingName: "Ched"},

        // Urban
        Urban: {image: RegistrarToUrban, floorLevel: "1", buildingName: "Urban"},

        // Multipurpose
        Multipurpose: {image: RegistrarToMultipurpose, floorLevel: "1", buildingName: "Multipurpose"},

        // Ballroom
        Ballroom: {image: RegistrarToBallroom, floorLevel: "1", buildingName: "Ballroom"},

        // Chinese B
        Chinese_B: {image: RegistrarToChineseB, floorLevel: "1", buildingName: "Chinese B"},
}

