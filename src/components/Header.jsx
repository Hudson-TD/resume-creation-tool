function Header({ onChange, currentSection }) {
  const sections = [
    "General Information",
    "Education",
    "Work Experience",
    "Review & Download",
  ];
  return (
    <div className="mw-100 p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1>CV Easy</h1>
        <div>
          <div className="d-flex m-0 mx-5">
            {sections.map((section, index) => {
              return (
                <button
                  key={index}
                  data-section={section}
                  className={
                    currentSection === section
                      ? "list-unstyled px-3 text-primary"
                      : "list-unstyled px-3 text-secondary"
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
