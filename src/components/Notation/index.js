import "./styles.scss";

const Notation = ({ title, note }) => (
    <div id="notation" className="mb-3">
        <span className="small">{title}</span>
        <div className="progress mt-1">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${note}%` }}
                aria-valuenow={note}
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
    </div>
);

export default Notation;
