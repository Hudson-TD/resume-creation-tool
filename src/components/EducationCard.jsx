function EducationCard({ data, handleEntryDelete }) {
  console.log(data);
  // const startString = data.startDate;
  // // const startSplit = startString.split("-");

  // const gradString = data.graduationDate;
  // // const gradSplit = gradString.split("-");

  return (
    <div className="card w-75 mb-1 d-flex flex-row">
      <div className="card-body">
        <h5 className="card-title">{data.institute}</h5>
        <p className="card-text">
          {data.educationLevel} of {data.major}
        </p>
        <p className="card-text"></p>
        <ul className="list-unstyled">
          <li className="card-text">{data.accoladeOne}</li>
          <li className="card-text">{data.accoladeTwo}</li>
          <li className="card-text">{data.accoladeThree}</li>
        </ul>
      </div>
      <div>
        <button
          type="button"
          value={data.institute}
          data-list="educationList"
          className="btn btn-light h-100 w-15"
          onClick={handleEntryDelete}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default EducationCard;
