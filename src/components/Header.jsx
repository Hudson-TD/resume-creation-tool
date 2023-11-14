function Header({ onChange, currentSection }) {
  const sections = [
    "General Information",
    "Education",
    "Work Experience",
    "Review & Download",
  ];
  return (
    <div className="w-100 p-3 bg-dark rounded-bottom">
      <div className="d-flex justify-content-around align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src="public/maid-logo.svg"
            style={{ width: "100px", height: "100px" }}
          />
          <h1 className="mx-4 text-white">Resu-Maid</h1>
        </div>
        <div>
          <div className="d-flex">
            {sections.map((section, index) => {
              return (
                <button
                  key={index}
                  data-section={section}
                  className={
                    currentSection === section
                      ? "btn btn-primary mx-1"
                      : "btn btn-light mx-1"
                  }
                  onClick={onChange}
                >
                  {section}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
