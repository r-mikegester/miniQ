//CHED TO ADMIN
import RecordsUnitToAdmissionOffice from "../assets/RecordsUnit/CASHIER TO ADMISSION OFFICE.png"
import RecordsUnitToFinanceAndAccountingDivision from "../assets/RecordsUnit/CASHIER TO FINANCE AND ACCOUNTING DIVISION.png"
import RecordsUnitToHumanResourceManagementDivision from "../assets/RecordsUnit/CASHIER TO HUMAN RESOURCE MANAGEMENT DIVISION.png"
import RecordsUnitToOpenLobby from "../assets/RecordsUnit/CASHIER TO OPEN LOBBY.png"
import RecordsUnitToRegistrar from "../assets/RecordsUnit/CASHIER TO REGISTRAR OFFICE.png"
import RecordsUnitToExecutive from "../assets/RecordsUnit/CASHIER TO CASHIER.png"

const RecordsUnit = {
    // ADMIN BUILDING
    AdmissionOffice: {image: RecordsUnitToAdmissionOffice, floorLevel: "2", buildingName: "Admin", roomName: "Admission Office"},
    AccountingDivision: {image: RecordsUnitToFinanceAndAccountingDivision, floorLevel: "2", buildingName: "Admin", roomName: "Accounting Division"},
    HumanResourceManagementDivision: {image: RecordsUnitToHumanResourceManagementDivision, floorLevel: "2", buildingName: "Admin", roomName: "Human Resource Management Division"},
    OpenLobby: {image: RecordsUnitToOpenLobby, floorLevel: "1", buildingName: "Admin", roomName: "Open Lobby"},
    Registrar: {image: RecordsUnitToRegistrar, floorLevel: "2", buildingName: "Admin", roomName: "Registrar"},
    ExecutiveOffice: {image: RecordsUnitToExecutive, floorLevel: "2", buildingName: "Admin", roomName: "Executive Office"},

    // ADMIN BUILDING
};

export default RecordsUnit;