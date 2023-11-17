function Header({ onChange, currentSection }) {
  const sections = [
    "General Information",
    "Education",
    "Work Experience",
    "Review & Download",
  ];
  return (
    <div className="d-flex flex-column h-100 p-3 bg-dark border border-dark">
      <div className="d-flex flex-column justify-content-around align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src="/maid-logo.svg"
            style={{ width: "100px", height: "100px" }}
          />
          <h1 className="my-4 text-white text-center fs-4">Resu-Maid</h1>
        </div>
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {sections.map((section, index) => {
              return (
                <button
                  key={index}
                  data-section={section}
                  className={
                    currentSection === section
                      ? "btn btn-primary my-3"
                      : "btn btn-light my-3"
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
