import { useFormik } from "formik";
import * as Yup from "yup";

const GeneralForm = ({ onGeneralSave, onSectionSave }) => {
  const nextSection = "Education";
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      smOne: "",
      smTwo: "",
      smThree: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      emailAddress: Yup.string().email().required("Required"),
      phoneNumber: Yup.string().matches(
        phoneRegExp,
        "Phone number is not valid"
      ),
      smOne: Yup.string(),
      smTwo: Yup.string(),
      smThree: Yup.string(),
    }),
    onSubmit: async (values, { resetForm }) => {
      await onGeneralSave(values);
      await resetForm({ values: "" });
      onSectionSave(nextSection);
    },
  });
  return (
    <div
      className={
        "w-100 d-flex flex-column justify-content-start align-items-center"
      }
    >
      <h1 className="font-weight-bold py-3">General Information</h1>
      <div className={"w-75"}>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control d-flex flex-column">
            <label htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <span className="text-danger">{formik.errors.firstName}</span>
            ) : null}
          </div>
          <div className="form-control d-flex flex-column">
            <label htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <span className="text-danger">{formik.errors.lastName}</span>
            ) : null}
          </div>
          <div className="form-control d-flex flex-column">
            <label htmlFor="emailAddress">Email Address *</label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emailAddress}
            />
            {formik.touched.emailAddress && formik.errors.emailAddress ? (
              <span className="text-danger">{formik.errors.emailAddress}</span>
            ) : null}
          </div>
          <div className="form-control d-flex flex-column">
            <label htmlFor="phoneNumber">Phone Number (Recommended)</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <span className="text-danger">{formik.errors.phoneNumber}</span>
            ) : null}
          </div>
          <div className="text-center py-2 text-primary">
            <p className="fs-5">
              <span className="fs-2">🔑 </span>Stand out with social media
              (LinkedIn, Web Portfolio, etc.)
            </p>
          </div>
          <div className="form-control d-flex flex-column">
            <label htmlFor="smOne">Link One (Optional)</label>
            <input
              id="smOne"
              name="smOne"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.smOne}
            />
            {formik.touched.smOne && formik.errors.smOne ? (
              <span className="text-danger">{formik.errors.smOne}</span>
            ) : null}
          </div>
          <div className="form-control d-flex flex-column">
            <label htmlFor="smTwo">Link Two (Optional)</label>
            <input
              id="smTwo"
              name="smTwo"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.smTwo}
            />
            {formik.touched.smTwo && formik.errors.smTwo ? (
              <span className="text-danger">{formik.errors.smTwo}</span>
            ) : null}
          </div>
          <div className="form-control d-flex flex-column">
            <label htmlFor="smThree">Link Three (Optional)</label>
            <input
              id="smThree"
              name="smThree"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.smThree}
            />
            {formik.touched.smThree && formik.errors.smThree ? (
              <span className="text-danger">{formik.errors.smThree}</span>
            ) : null}
          </div>
          <div className="d-flex justify-content-center py-3">
            <button
              type="submit"
              className="btn btn-success px-5"
              disabled={!formik.isValid}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneralForm;
