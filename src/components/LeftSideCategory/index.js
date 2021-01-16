const LeftSideCategory = ({ icon, title, children }) => (
    <>
        <dl className="row">
            <dt className="col-sm-1">{icon}</dt>
            <dd className="col-sm-11">{title}</dd>
        </dl>
        <dl className="row mb-0">
            <dt className="col-sm-1" />
            <dd className="col-sm-9">{children}</dd>
        </dl>
    </>
);

export default LeftSideCategory;
