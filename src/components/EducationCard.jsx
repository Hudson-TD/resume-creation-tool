function EducationCard({ data }) {
  return (
    <div className="card w-75 mb-1 d-flex flex-row">
      <div className="card-body">
        <h5 className="card-title">{data.institute}</h5>
        <p className="card-text">
          {data.educationLevel} of {data.major}
        </p>
        <p className="card-text">
          {data.startDate} - {data.graduationDate}
        </p>
        <ul className="list-unstyled">
          <li className="card-text">- {data.accoladeOne}</li>
          <li className="card-text">- {data.accoladeTwo}</li>
          <li className="card-text">- {data.accoladeThree}</li>
        </ul>
      </div>
      <div>
        <button href="#" className="btn btn-light h-100 w-15">
          X
        </button>
      </div>
    </div>
  );
}

export default EducationCard;
