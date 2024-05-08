import LibraryToRegistrar from "./Library to Registrar.png"
import RegistrarToLibrary from "./Registrar to Library.jpg"
import itachi from "./itachi.jpg"
import naruto from "./naruto.jpg"

const roomData = {
    Library: {
        Registrar: {
            image: LibraryToRegistrar,
            floorLevel: 2
        },     
    },
    Registrar: {
        Library: {
            image: RegistrarToLibrary,
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