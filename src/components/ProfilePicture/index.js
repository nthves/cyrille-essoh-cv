import profile from "../../assets/images/profile.jpeg";
import "./styles.scss";

const ProfilePicture = () => (
    <div
        className="card text-white border-0 bg-rajah rounded-0"
        id="profile-picture"
    >
        <img src={profile} className="card-img rounded-0" alt="Cyrille Essoh" />
        <div className="card-img-overlay text-center">
            <div className="position-relative">
                <h5 className="card-title">Cyrille Essoh Misse Misse</h5>
                <p className="card-text">Informaticien Développeur</p>
            </div>
        </div>
    </div>
);

export default ProfilePicture;
