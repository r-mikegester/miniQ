import AdmissionToAccountingChed from "../assets/Registrar/(REGISTRAR) TO (REGISTRAR TO ACCOUNTANCY).png"
import AdmissionToCashier from "../assets/Registrar/REGISTRAR TO COOP (2).png"
import AdmissionToExecutive from "../assets/Registrar/(REGISTRAR) TO (C-Executive Office).png"
import AdmissionToRecords from "../assets/Registrar/(REGISTRAR) TO (C-Records Unit).png"
import AdmissionToScholarship from "../assets/Registrar/(REGISTRAR) TO (C-Scholarship Unit).png"
import AdmissionToCanteen from "../assets/Registrar/ADMISSION TO CANTEEN.png"
import AdmissionToCoop from "../assets/Registrar/ADMISSION TO COOP.png"
import AdmissionToAccountancyDept from "../assets/Registrar/ADMISSION TO ACCOUNTANCY.png"
import AdmissionToChemLab from "../assetsRegistrary/ADMISSION TO CHEM LAB.png"
import AdmissionToPhysicsLab from "../assets/Registrar/ADMISSION TO PHYSICS.png"
import AdmissionToEngrOffice from "../assets/Registrar/ADMISSION TO ENGINEERING.png"
import AdmissionToElectronicLab from "../assets/Registrar/ADMISSION TO ELECTRONIC.png"
import AdmissionToIK203 from "../assets/Registrar/ADMISSION TO IK203.png"
import AdmissionToIK204 from "../assets/Registrar/ADMISSION TO IK204.png"
import AdmissionToEducDept from "../assets/Registrar/ADMISSION TO EDUC.png"
import AdmissionToMathAndScience from "../assets/Registrar/ADMISSION TO MATHSCIE.png"
import AdmissionToIK303 from "../assets/Registrar/ADMISSION TO IK303.png"
import AdmissionToIK304 from "../assets/Registrar/BLANK.png"
import AdmissionToEntrepDept from "../assets/Registrar/ADMISSION TO ENTREP.png"
import AdmissionToIK403 from "../assets/Registrar/ADMISSION TO IK403.png"
import AdmissionToIK404 from "../assets/Registrar/ADMISSION TO IK404.png"
import AdmissionToEngrDept from "../assets/Registrar/ADMISSION TO COE.png"
import AdmissionToEngrLounge from "../assets/Registrar/ADMISSION TO LOUNGE.png"
import AdmissionToIK503 from "../assets/Registrar/ADMISSION TO IK503.png"
import AdmissionToIK504 from "../assets/Registrar/ADMISSION TO IK504.png"
import AdmissionToCCS from "../assets/Registrar/ADMISSION TO CCS.png"
import AdmissionToITSO from "../assets/Registrar/ADMISSION TO ITSO.png"
import AdmissionToIK603 from "../assets/Registrar/ADMISSION TO IK603.png"
import AdmissionToIK604 from "../assets/Registrar/ADMISSION TO IK604.png"

import AdmissionToGym from "../assets/Registrar/ADMISSION TO GYM.png"
import AdmissionToIA104c from "../assets/Registrar/ADMISSION TO IA104C.png"
import AdmissionToIA105 from "../assets/Registrar/ADMISSION TO IA105.png"
import AdmissionToIA106b from "../assets/Registrar/ADMISSION TO IA106b.png"
import AdmissionToIA107b from "../assets/Registrar/ADMISSION TO IA107b.png"
import AdmissionToInnopad from "../assets/Registrar/ADMISSION TO INNOPAD.png"
import AdmissionToMotorpool from "../assets/Registrar/ADMISSION TO MOTORPOOL.png"
import AdmissionToPFGSD from "../assets/Registrar/ADMISSION TO ICTO PFGSD IA203.png"
import AdmissionToQACIMDO from "../assets/Registrar/ADMISSION TO ICTO QACIMDO IA210.png"
import AdmissionToSASD from "../assets/Registrar/ADMISSION TO ICTO SASD IA207.png"
import AdmissionToSPARD from "../assets/Registrar/ADMISSION TO ICTO SPARD IA206.png"
import AdmissionToICTO208 from "../assets/Registrar/ADMISSION TO ICTO208.png"
import AdmissionToIA202 from "../assets/Registrar/ADMISSION TO IA202.png"
import AdmissionToIA204 from "../assets/Registrar/ADMISSION TO IA204.png"

import AdmissionToGuidance from "../assets/Registrar/AdmissionToGuidance.png"
import AdmissionToClinic from "../assets/Registrar/AdmissionToClinic.png"
import AdmissionToLibrary from "../assets/Registrar/AdmissionToLibrary.png"
import { library } from "ionicons/icons"

const Admission = {
    Admission: {
        // Bautista Room
        Canteen: {image: AdmissionToCanteen, floorLevel: "Basement", buildingName: "Bautista"},
        Coop: {image: AdmissionToCoop, floorLevel: "Basement", buildingName: "Bautista"},
        Accountancy_Department: {image: AdmissionToAccountancyDept, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Chemistry_Laboratory: {image:AdmissionToChemLab, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Physics_Laboratory: {image: AdmissionToPhysicsLab, floorLevel: "Ground Floor", buildingName: "Bautista"},
        Engineering_Lab_Office: {image: AdmissionToEngrOffice, floorLevel: "2", buildingName: "Bautista"},
        Electronic_Lab: {image: AdmissionToElectronicLab, floorLevel: "2", buildingName: "Bautista"},
        IK203: {image: AdmissionToIK203, floorLevel: "2", buildingName: "Bautista"},
        IK204: {image: AdmissionToIK204, floorLevel: "2", buildingName: "Bautista"},
        College_of_Education: {image: AdmissionToEducDept, floorLevel: "3", buildingName: "Bautista"},
        Math_and_Science_Department: {image: AdmissionToMathAndScience, floorLevel: "3", buildingName: "Bautista"},
        IK303: {image: AdmissionToIK303, floorLevel: "3", buildingName: "Bautista"},
        IK304: {image: AdmissionToIK304, floorLevel: "3", buildingName: "Bautista"},
        Entrepreneurship_Department: {image: AdmissionToEntrepDept, floorLevel: "4", buildingName: "Bautista"},
        IK403: {image: AdmissionToIK403, floorLevel: "4", buildingName: "Bautista"},
        IK404: {image: AdmissionToIK404, floorLevel: "4", buildingName: "Bautista"},
        College_of_Enginering: {image: AdmissionToEngrDept, floorLevel: "5", buildingName: "Bautista"},
        Engineering_Lounge: {image: AdmissionToEngrLounge, floorLevel: "5", buildingName: "Bautista"},
        IK503: {image: AdmissionToIK503, floorLevel: "5", buildingName: "Bautista"},
        IK504: {image: AdmissionToIK504, floorLevel: "5", buildingName: "Bautista"},
        College_of_Computer_Studies: {image: AdmissionToCCS, floorLevel: "6", buildingName: "Bautista"},
        Innovation_and_Technology_Support_Office: {image: AdmissionToITSO, floorLevel: "6", buildingName: "Bautista"},
        IK603: {image: AdmissionToIK603, floorLevel: "6", buildingName: "Bautista"},
        IK604: {image: AdmissionToIK604, floorLevel: "6", buildingName: "Bautista"},

        // TECH-VOC ROOM
        QCU_Gym: {image: AdmissionToGym, floorLevel: "1", buildingName: "Techvoc"},
        IA104c: {image: AdmissionToIA104c, floorLevel: "1", buildingName: "Techvoc"},
        IA105: {image: AdmissionToIA105, floorLevel: "1", buildingName: "Techvoc"},
        IA106b: {image: AdmissionToIA106b, floorLevel: "1", buildingName: "Techvoc"},
        IA107b: {image: AdmissionToIA107b, floorLevel: "1", buildingName: "Techvoc"},
        QCU_Innopad: {image: AdmissionToInnopad, floorLevel: "1", buildingName: "Techvoc"},
        Motorpool_Unit_Office: {image: AdmissionToMotorpool, floorLevel: "1", buildingName: "Techvoc"},
        PFGSD_IA203: {image: AdmissionToPFGSD, floorLevel: "2", buildingName: "Techvoc"},
        QACIMDO_210: {image: AdmissionToQACIMDO, floorLevel: "2", buildingName: "Techvoc"},
        SASD_IA207: {image: AdmissionToSASD, floorLevel: "2", buildingName: "Techvoc"},
        SPARD_IA206: {image: AdmissionToSPARD, floorLevel: "2", buildingName: "Techvoc"},
        ICTO208: {image: AdmissionToICTO208, floorLevel: "2", buildingName: "Techvoc"},
        IA202: {image: AdmissionToIA202, floorLevel: "2", buildingName: "Techvoc"},
        IA204: {image: AdmissionToIA204, floorLevel: "2", buildingName: "Techvoc"},

        // Academic Room
        Guidance: {image: AdmissionToGuidance, floorLevel: "1", buildingName: "Academic"},
        Clinic: {image: AdmissionToClinic, floorLevel: "1", buildingName: "Academic"},
        Library: {image: AdmissionToLibrary, floorLevel: "1", buildingName: "Academic"},
    }
}