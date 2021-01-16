import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.scss";
import ProfilePicture from "./components/ProfilePicture";
import ProfileSummary from "./components/ProfileSummary";

const App = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">
                <ProfilePicture />
                <ProfileSummary />
            </div>
            <div className="col">yes</div>
        </div>
    </div>
);

export default App;
