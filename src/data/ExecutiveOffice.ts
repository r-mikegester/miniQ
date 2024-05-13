//CHED TO ADMIN
import executiveOfficeToAdmissionOffice from "../assets/ExecutiveOffice/EXECUTIVE OFFICE TO ADMISSION OFFICE.png"
import executiveOfficeToFinanceAndAccountingDivision from "../assets/ExecutiveOffice/EXECUTIVE OFFICE TO FINANCE AND ACCOUNTING DIVISION.png"
import executiveOfficeToHumanResourceManagementDivision from "../assets/ExecutiveOffice/EXECUTIVE OFFICE TO HUMAN RESOURCE MANAGEMENT DIVISION.png"
import executiveOfficeToOpenLobby from "../assets/ExecutiveOffice/EXECUTIVE OFFICE TO OPEN LOBBY.png"
import executiveOfficeToRegistrar from "../assets/ExecutiveOffice/EXECUTIVE OFFICE TO REGISTRAR OFFICE.png"

const ExecutiveOffice = {
    // ADMIN BUILDING
    AdmissionOffice: {image: executiveOfficeToAdmissionOffice, floorLevel: "2", buildingName: "Admin", roomName: "Admission Office"},
    AccountingDivision: {image: executiveOfficeToFinanceAndAccountingDivision, floorLevel: "2", buildingName: "Admin", roomName: "Accounting Division"},
    HumanResourceManagementDivision: {image: executiveOfficeToHumanResourceManagementDivision, floorLevel: "2", buildingName: "Admin", roomName: "Human Resource Management Division"},
    OpenLobby: {image: executiveOfficeToOpenLobby, floorLevel: "1", buildingName: "Admin", roomName: "Open Lobby"},
    Registrar: {image: executiveOfficeToRegistrar, floorLevel: "2", buildingName: "Admin", roomName: "Registrar"},
    // ADMIN BUILDING
}

export default ExecutiveOffice;