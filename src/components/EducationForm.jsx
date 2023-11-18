import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EducationForm = ({ dataList, onSave }) => {
  const [showMajor, setShowMajor] = useState(false);
  const maxEntries = 3;
  const formik = useFormik({
    initialValues: {
      institute: "",
      educationLevel: "",
      showMajor: showMajor,
      major: "",
      startDate: "",
      graduationDate: "",
      accoladeOne: "",
      accoladeTwo: "",
      accoladeThree: "",
    },
    validationSchema: Yup.object({
      institute: Yup.string().required("Required"),
      educationLevel: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      showMajor: Yup.boolean(),
      major: Yup.string().when("showMajor", {
        is: true,
        then: () => Yup.string().required("Required"),
      }),
      startDate: Yup.date().required("Required"),
      graduationDate: Yup.date().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      onSave(values);
      resetForm({ values: "" });
    },
  });
  return (
    <div
      className={
        "w-100 d-flex flex-column justify-content-start align-items-center"
      }
    >
      <h1 className={"py-3"}>Education Information</h1>
      <div className={"w-75"}>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control d-flex flex-column">
            <label htmlFor="institute">Institute Name *</label>
            <input
              id="institute"
              name="institute"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.institute}
            />
            {formik.touched.institute && formik.errors.institute ? (
              <span className="text-danger">{formik.errors.institute}</span>
            ) : null}
          </div>
          <div className="form-control d-flex flex-column">
            <p>Education Level *</p>
            <div
              role="group"
              id="educationLevelHeader"
              name="educationLevel"
              className="d-flex flex-column"
              onClick={(e) => {
                let selection = e.target.value;
                if (selection !== "High School Diploma") {
                  setShowMajor(true);
                } else {
                  setShowMajor(false);
                }
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.educationLevel}
            >
              <div className="d-flex">
                <input
                  className="mx-2"
                  id="High School Diploma"
                  name="educationLevel"
                  type="radio"
                  value="High School Diploma"
                />
                <label htmlFor="High School Diploma">High School Diploma</label>
              </div>
              <div className="d-flex">
                <input
                  className="mx-2"
                  id="Certification"
                  name="educationLevel"
                  type="radio"
                  value="Certification"
                />
                <label htmlFor="Certification">Certification</label>
              </div>
              <div className="d-flex">
                <input
                  className="mx-2"
                  id="Associate"
                  name="educationLevel"
                  type="radio"
                  value="Associate"
                />
                <label htmlFor="Associate">Associate</label>
              </div>
              <div className="d-flex">
                <input
                  className="mx-2"
                  id="Bachelor's"
                  name="educationLevel"
                  type="radio"
                  value="Bachelor's"
                />
                <label htmlFor="Bachelor's">Bachelor&apos;s</label>
              </div>
              <div className="d-flex">
                <input
                  className="mx-2"
                  id="Master's"
                  name="educationLevel"
                  type="radio"
                  value="Master's"
                />
                <label htmlFor="Master's">Master&apos;s</label>
              </div>
              <div className="d-flex">
                <input
                  className="mx-2"
                  id="Doctorate"
                  name="educationLevel"
                  type="radio"
                  value="Doctorate"
                />
                <label htmlFor="Doctorate">Doctorate</label>
              </div>
            </div>
            {formik.touched.educationLevel && formik.errors.educationLevel ? (
              <span className="text-danger">
                {formik.errors.educationLevel}
              </span>
            ) : null}
          </div>
          {showMajor === true && (
            <div className="form-control d-flex flex-column">
              <label htmlFor="major">Concentration / Major *</label>
              <input
                id="major"
                name="major"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.major}
              />
              {formik.touched.major && formik.errors.major ? (
                <span className="text-danger">{formik.errors.major}</span>
              ) : null}
            </div>
          )}
          <div className="form-control d-flex flex-column">
            <label htmlFor="startDate">Start Date *</label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.startDate}
            />
            {formik.touched.startDate && formik.errors.startDate ? (
              <span className="text-danger">{formik.errors.startDate}</span>
            ) : null}
          </div>
          <div className="form-control d-flex flex-column">
            <label htmlFor="graduationDate">Graduation Date *</label>
            <input
              id="graduationDate"
              name="graduationDate"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.graduationDate}
            />
            {formik.touched.graduationDate && formik.errors.graduationDate ? (
              <span className="text-danger">
                {formik.errors.graduationDate}
              </span>
            ) : null}
          </div>
          <div className="form-control d-flex flex-column">
            <p>Accolades (Optional)</p>
            <input
              className="mb-2"
              id="accoladeOne"
              name="accoladeOne"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.accoladeOne}
            />
            <input
              className="mb-2"
              id="accoladeTwo"
              name="accoladeTwo"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.accoladeTwo}
            />
            <input
              className="mb-2"
              id="accoladeThree"
              name="accoladeThree"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.accoladeThree}
            />
          </div>
          <div className="d-flex justify-content-center py-3">
            <button
              type="submit"
              className="btn btn-success px-5"
              disabled={!formik.isValid || dataList.length === maxEntries}
            >
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationForm;
