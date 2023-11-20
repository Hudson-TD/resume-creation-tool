function ExperienceCard({ data, handleEntryDelete }) {
  return (
    <div className="card w-75 mb-1 d-flex flex-row">
      <div className="card-body">
        <h5 className="card-title">{data.companyName}</h5>
        <p>
          {data.startDate} - {data.endDate}
        </p>
        <p>
          {data.city},{data.state}
        </p>
        <h4>{data.title}</h4>
        <p className="card-text"></p>
        <ul className="list-unstyled">
          <li className="card-text">{data.achievementOne}</li>
          <li className="card-text">{data.achievementTwo}</li>
          <li className="card-text">{data.achievementThree}</li>
        </ul>
      </div>
      <div>
        <button
          type="button"
          value={data.companyName}
          className="btn btn-light h-100 w-15"
          onClick={handleEntryDelete}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default ExperienceCard;
