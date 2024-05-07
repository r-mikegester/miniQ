import kakashi from "./kakashi.jpg"
import naruto from "./naruto.jpg"
import itachi from "./itachi.jpg"

const roomData = {
    Library: {
        Registrar: {
            image: kakashi,
            floorLevel: 2
        },     
    },
    Registrar: {
        Library: {
            image: kakashi,
            floorLevel: 2
        },
        Admin: {
            image: itachi,
            floorLevel: 2
        },
        CCS: {
            image: naruto,
            floorLevel: 6
        },
    }
};

export default roomData;
