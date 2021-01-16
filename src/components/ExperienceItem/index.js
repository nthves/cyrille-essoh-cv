const ExperienceItem = ({ left, children }) => (
    <dl className="row mb-3">
        <dt className="col-sm-3 font-weight-light text-muted">{left}</dt>
        <dd className="col-sm-9">{children}</dd>
    </dl>
);

export default ExperienceItem;
