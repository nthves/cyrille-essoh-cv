import LeftSideCategory from "../LeftSideCategory";
import Notation from "../Notation";
import ProfileSummaryMainItem from "../ProfileSummaryMainItem";
import "./styles.scss";

const ProfileSummary = () => (
    <div id="profile-summary" className="bg-gold-drop text-white">
        <ul className="list-unstyled pt-4 pb-4 mb-0 ml-5">
            <ProfileSummaryMainItem icon="bi-envelope-fill">
                <a href="mailto:cyrilmisse1@gmail.com" className="text-white">
                    cyrilmisse1@gmail.com
                </a>
            </ProfileSummaryMainItem>
            <ProfileSummaryMainItem icon="bi-geo-alt-fill">
                Bonamoussadi, 75054 Douala
            </ProfileSummaryMainItem>
            <ProfileSummaryMainItem icon="bi-calendar-event-fill">
                25 ans
            </ProfileSummaryMainItem>
            <ProfileSummaryMainItem icon="bi-telephone-fill">
                <a href="tel:+237696086104" className="text-white">
                    +237 6 96 08 61 04
                </a>
            </ProfileSummaryMainItem>
        </ul>
        <hr className="mt-0 mb-0" />
        <div className="pt-4 pb-4 ml-5">
            <LeftSideCategory icon={`A`} title="Langues">
                <Notation title="Allemand" note={25} />
                <Notation title="Français" note={100} />
                <Notation title="Anglais" note={75} />
            </LeftSideCategory>
        </div>
        <hr className="mt-0 mb-0" />
        <div className="pt-4 pb-4 ml-5">
            <LeftSideCategory
                icon={<i className="bi bi-trophy-fill"></i>}
                title="Atouts"
            >
                <Notation title="Travaille en équipe" note={99} />
                <Notation title="Travailleur" note={100} />
                <Notation title="Responsabilité" note={85} />
            </LeftSideCategory>
        </div>
        <hr className="mt-0 mb-0" />
        <div className="pt-4 pb-4 ml-5">
            <LeftSideCategory
                icon={<i className="bi bi-people-fill"></i>}
                title="Centres d'Intérêts"
            >
                <div className="mb-3 small">Lecture</div>
                <div className="mb-3 small">Sport</div>
                <div className="mb-3 small">Cinema</div>
            </LeftSideCategory>
        </div>
    </div>
);

export default ProfileSummary;
