const ProfileSummaryMainItem = ({ icon, children }) => (
    <li className="media mb-2">
        <i className={`bi ${icon} mr-3`}></i>
        <div className="media-body">{children}</div>
    </li>
);

export default ProfileSummaryMainItem;
