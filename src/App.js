import Footer from "./componets/Footer/Footer";
import LowerNavbar from "./componets/Navbar/LowerNavbar";
import Navbar from "./componets/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

function App() {
    return (
        <div className="App">
            <Navbar />
            <LowerNavbar />
            <MainRoutes />
            <Footer />
        </div>
    );
}

export default App;
