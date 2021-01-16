import "./styles.scss";

const ProfileSummary = () => (
    <div id="profile-summary" className="bg-gold-drop text-white">
        <ul class="list-unstyled pt-4 pb-4 mb-0">
            <li class="media ml-5 mb-2">
                <i class="bi bi-envelope-fill mr-3"></i>
                <div className="media-body">
                    <a
                        href="mailto:cyrilmisse1@gmail.com"
                        className="text-white"
                    >
                        cyrilmisse1@gmail.com
                    </a>
                </div>
            </li>
            <li class="media ml-5 mb-2">
                <i class="bi bi-geo-alt-fill mr-3"></i>
                <div className="media-body">Bonamoussadi, 75054 Douala</div>
            </li>
            <li class="media ml-5 mb-2">
                <i class="bi bi-calendar-event-fill mr-3"></i>
                <div className="media-body">25 ans</div>
            </li>
            <li class="media ml-5 mb-2">
                <i class="bi bi-telephone-fill mr-3"></i>
                <div className="media-body">
                    <a href="tel:+237696086104" className="text-white">
                        +237 6 96 08 61 04
                    </a>
                </div>
            </li>
        </ul>
        <hr className="mt-0 mb-0" />
    </div>
);

export default ProfileSummary;
