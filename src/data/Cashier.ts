//CHED TO ADMIN
import CashierToAdmissionOffice from "../assets/Cashier/CASHIER TO ADMISSION OFFICE.png"
import CashierToFinanceAndAccountingDivision from "../assets/Cashier/CASHIER TO FINANCE AND ACCOUNTING DIVISION.png"
import CashierToHumanResourceManagementDivision from "../assets/Cashier/CASHIER TO HUMAN RESOURCE MANAGEMENT DIVISION.png"
import CashierToOpenLobby from "../assets/Cashier/CASHIER TO OPEN LOBBY.png"
import CashierToRegistrar from "../assets/Cashier/CASHIER TO REGISTRAR OFFICE.png"
import CashierToExecutive from "../assets/Cashier/CASHIER TO CASHIER.png"

const Cashier = {
    // ADMIN BUILDING
    AdmissionOffice: {image: CashierToAdmissionOffice, floorLevel: "2", buildingName: "Admin", roomName: "Admission Office"},
    AccountingDivision: {image: CashierToFinanceAndAccountingDivision, floorLevel: "2", buildingName: "Admin", roomName: "Accounting Division"},
    HumanResourceManagementDivision: {image: CashierToHumanResourceManagementDivision, floorLevel: "2", buildingName: "Admin", roomName: "Human Resource Management Division"},
    OpenLobby: {image: CashierToOpenLobby, floorLevel: "1", buildingName: "Admin", roomName: "Open Lobby"},
    Registrar: {image: CashierToRegistrar, floorLevel: "2", buildingName: "Admin", roomName: "Registrar"},
    ExecutiveOffice: {image: CashierToExecutive, floorLevel: "2", buildingName: "Admin", roomName: "Executive Office"},

    // ADMIN BUILDING
};

export default Cashier;