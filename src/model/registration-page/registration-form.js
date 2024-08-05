import { Field, reduxForm } from "redux-form";
import InputComponent from "../../component/organism/input-component/input-component";
import validators from "../../utilities/validator";

const formValidators = {
  firstName: [validators.required('This field is required.'), validators.minLength(3, 'This field should contain at least 3 char.')],
  iAmA: [validators.required('This field is required.')],
  email: [validators.required('This field is required.'), validators.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Enter a valid email.')],
  phoneNo: [validators.required('This field is required.'), validators.regex(/^\d{10}$/, 'Enter a valid mobile no.')],
  dateOfBirth: [validators.required('This field is required.')],
  aboutMySelf: [validators.required('This field is required.'), validators.minLength(10, 'This field should contain at least 10 char.')],
  password: validators.required('This field is required.')
}

const RegistrationForm = props => {

  const { handleSubmit, pristine, submitting } = props;

  const onSubmit = (values, dispatch, props) => {
    console.log(values)
  }

  return (
    <div className="flex justify-center form-bg">
      <div className="flex flex-col flex-grow gap-3 p-6 form-container max-w-[700px] mt-6 overflow-auto">
        <h2 className="text-2xl font-medium">Register for classes</h2>
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-black text-base font-medium field-required">First Name:</label>
              <Field
                name="firstName"
                component={InputComponent}
                placeholder="Enter your first name here"
                validate={formValidators.firstName}
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-black text-base font-medium">Last Name:</label>
              <Field
                name="lastName"
                component={InputComponent}
                placeholder="enter your last name here"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-black text-base font-medium field-required">Email ID:</label>
              <Field
                name="email"
                component={InputComponent}
                placeholder="enter your email id here"
                validate={formValidators.email}
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-black text-base font-medium field-required">Mobile No (Should be what's app no):</label>
              <Field
                name="phoneNo"
                component={InputComponent}
                placeholder="enter your phone here"
                validate={formValidators.phoneNo}
              />
            </div>
            
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-black text-base font-medium field-required">Are you a:</label>
              <Field
                name="iAmA"
                className="select-input"
                component="select"
                placeholder="enter your user name here"
                validate={formValidators.iAmA}
              >
                <option disabled value="">Select here</option>
                <option key="student" value="student">
                  Student
                </option>
                <option key="working-professional" value="working-professional">
                  working professional
                </option>
              </Field>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-black text-base font-medium field-required">Date of birth:</label>
              <Field
                name="dateOfBirth"
                component={InputComponent}
                type="date"
                placeholder="select your date of birth here"
                validate={formValidators.dateOfBirth}
              />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-2 mt-3">
          <label className="text-black text-base font-medium field-required">Tell Us About Yourself:</label>
          <Field
            name="aboutMySelf"
            className="text-input"
            component="textarea"
            placeholder="Enter "
            validate={formValidators.aboutMySelf}
          />
          <div className="text-grey">
            <div className="text-xs">If you are a student, tell us what you are studying.</div>
            <div className="text-xs">If you are a working professional, tell us what your job role is.</div>
          </div>
          <div>

          </div>
        </div> */}
        <div>
          The total amount you need to pay is ₹199.
        </div>
        <button className="tutor-btn w-fit" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}>Pay Now</button>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'registration',
})(RegistrationForm);
