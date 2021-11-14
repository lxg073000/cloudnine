import Feed from "./comps/Feed";
import NavBar from "./comps/NavBar";
import UploadForm from "./comps/UploadForm";
import "./styles/output.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Feed />
      <UploadForm />
    </div>
  );
}

export default App;
