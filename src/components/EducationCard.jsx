function EducationCard({ data }) {
  console.log(data);
  const startString = data.startDate;
  const startSplit = startString.split("-");

  const gradString = data.graduationDate;
  const gradSplit = gradString.split("-");

  return (
    <div className="card w-75 mb-1 d-flex flex-row">
      <div className="card-body">
        <h5 className="card-title">{data.institute}</h5>
        <p className="card-text">
          {data.educationLevel} of {data.major}
        </p>
        <p className="card-text">
          {startSplit[1]}/{startSplit[0]} - {gradSplit[1]}/{gradSplit[0]}
        </p>
        <ul className="list-unstyled">
          <li className="card-text">{data.accoladeOne}</li>
          <li className="card-text">{data.accoladeTwo}</li>
          <li className="card-text">{data.accoladeThree}</li>
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
