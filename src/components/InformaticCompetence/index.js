import "./styles.scss";

const InformaticCompetence = ({ note, title, children }) => (
    <dl className="row" id="informatic-competence">
        <dt className="col-sm-3 font-weight-normal">{title}</dt>
        <dd className="col-sm-7 pt-2">
            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${note}%` }}
                    aria-valuenow={note}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
            <div className="mt-3">{children}</div>
        </dd>
    </dl>
);

export default InformaticCompetence;
