import { useFormik } from "formik";
import * as Yup from "yup";

const ExperienceForm = ({ dataList, onSave }) => {
  const maxEntries = 5;
  const formik = useFormik({
    initialValues: {
      companyName: "",
      city: "",
      state: "",
      title: "",
      startDate: "",
      endDate: "",
      currentPosition: false,
      achievementOne: "",
      achievementTwo: "",
      achievementThree: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      title: Yup.string().required("Required"),
      startDate: Yup.date().required("Required"),
      endDate: Yup.date().required("Required"),
      currentPosition: Yup.boolean(),
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
      <h1 className={"py-3"}>Work Experience</h1>
      <div className={"w-75"}>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control d-flex flex-column">
            <label htmlFor="companyName">Company Name *</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.companyName}
            />
            {formik.touched.companyName && formik.errors.companyName ? (
              <span className="text-danger">{formik.errors.companyName}</span>
            ) : null}
          </div>
          <div className="form-control d-flex flex-column">
            <div className="d-flex">
              <div>
                <label htmlFor="city">City *</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city ? (
                  <span className="text-danger">{formik.errors.city}</span>
                ) : null}
              </div>
              <div>
                <label htmlFor="state">State *</label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                />
                {formik.touched.state && formik.errors.state ? (
                  <span className="text-danger">{formik.errors.state}</span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="form-control d-flex flex-column">
            <label htmlFor="title">Title/Role *</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <span className="text-danger">{formik.errors.title}</span>
            ) : null}
          </div>
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
            <label htmlFor="endDate">End Date *</label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.endDate}
            />
            {formik.touched.endDate && formik.errors.endDate ? (
              <span className="text-danger">{formik.errors.endDate}</span>
            ) : null}
          </div>
          <div className="form-control d-flex flex-column">
            <p>Achievements (Optional)</p>
            <input
              className="mb-2"
              id="achievementOne"
              name="achievementOne"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.achievementOne}
            />
            <input
              className="mb-2"
              id="achievementTwo"
              name="achievementTwo"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.achievementTwo}
            />
            <input
              className="mb-2"
              id="achievementThree"
              name="achievementThree"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.achievementThree}
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

export default ExperienceForm;
