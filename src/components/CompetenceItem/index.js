import "./styles.scss";

const CompetenceItem = ({ title, note, styleClass }) => (
    <dl className={`row ${styleClass ? styleClass : ""}`} id="competence-item">
        <dt className="col-sm-3 font-weight-normal">{title}</dt>
        <dd className="col-sm-7">
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
        </dd>
    </dl>
);

export default CompetenceItem;
