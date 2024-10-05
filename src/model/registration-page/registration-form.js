import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import DropDownComponent from "../../component/organism/drop-down-component/drop-down-component";
import InputComponent from "../../component/organism/input-component/input-component";
import RenderRazorpay from "../../component/page/payment-page/payment-page";
import validators from "../../utilities/validator";

const formValidators = {
  fullName: [validators.required('This field is required.')],
  email: [validators.required('This field is required.'), validators.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Enter a valid email.')],
  phoneNo: [validators.required('This field is required.'), validators.regex(/^\d{10}$/, 'Enter a valid mobile no.')],
  iAmA: [validators.required('This field is required.')],
  dateOfBirth: [validators.required('This field is required.')],
  // selecteDate: [validators.required('This field is required.')],
  selecteTime: [validators.required('This field is required.')]
}

const RegistrationForm = props => {

  const { handleSubmit, pristine, submitting, valid } = props;

  const razorpayKey = {
    id: 'rzp_live_tG7YenWAYDDai9',
    secret: 'POPBlMLZPVUGxhFiS2RE2OYb'
  }

  let [userDetails, setUserDetail] = useState({});

  const onSubmit = (values) => {
    setUserDetail({
      name: values.fullName,
      emailId: values.email,
      mobileNo: values.phoneNo,
      currentStatus: values.iAmA,
      dateOfBirth: values.dateOfBirth,
      courseStartDate: "16/Aug/2024",
      courseEndDate: "",
      aboutUser: "",
      timeing: values.selecteTime,
      shift: values.selecteTime === "11:00AM-02:00PM" ? 'shift-1': 'shift-2',
      paymentId: "",
      orderId: "",
      paymentSign: "",
    })
    const payload = {
      amount: 100,
      currency: 'INR',
      keyId: 'rzp_live_tG7YenWAYDDai9',
      KeySecret: 'POPBlMLZPVUGxhFiS2RE2OYb',
    }
    const axiosHttp = axios.create({
      baseURL: 'http://localhost:5000'
    });
    axiosHttp.post('/order/get-order-id', payload).then(resp => {
      const data = resp
        if(data && data.data?.order_id){
          setOrderDetails({
            orderId: data.data.order_id,
            currency: data.data.currency,
            amount: data.data.amount,
          });
          setDisplayRazorpay(true);
        }
    }).catch(err => {
      console.log(err);
    })
  }

  const navigate = useNavigate();

  function goBack() {
    navigate(`/home`);
  }

  const roleList = [
    { label: 'Student', value: 'student' },
    { label: 'Working Professional', value: 'working-professional' }
  ];

  const dateList = [
    { label: '16/Aug/2024', value: '16/Aug/2024' },
  ];

  const timeList = [
    {label: '11:00AM-02:00PM', value: '11:00AM-02:00PM'},
    {label: '06:00pM-10:00PM', value: '06:00pM-10:00PM'}
  ];

  var [displayRazorpay, setDisplayRazorpay] = useState(false);
  // var [offerEnded, changeOfferStatus] = useState(false);
  var [orderDetails, setOrderDetails] = useState({
    orderId: null,
    currency: null,
    amount: null,
  });

  return (
    <div className="flex justify-center form-bg">
      <div className="flex flex-col flex-grow gap-3 p-6 form-container max-w-[700px] mt-6 overflow-auto">
        <h2 className="text-2xl font-medium">Register for classes</h2>
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-black text-base font-medium field-required">Full Name:</label>
              <Field
                name="fullName"
                component={InputComponent}
                placeholder="Enter your full name here"
                validate={formValidators.fullName}
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
                component={DropDownComponent}
                validate={formValidators.iAmA}
                optionsList={roleList}
              />
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
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-black text-base font-medium field-required">Select Date: </label>
              <Field
                name="selecteDate"
                component={DropDownComponent}
                validate={formValidators.selecteDate}
                optionsList={dateList}
                defaultValue="16/Aug/2024"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-black text-base font-medium field-required">Select Time: </label>
              <Field
                name="selecteTime"
                component={DropDownComponent}
                validate={formValidators.selecteTime}
                optionsList={timeList}
              />
            </div>
          </div>
        </div>
        <div>
          The total amount you need to pay is ₹199.
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="tutor-btn cancel shadow-md w-fit" onClick={goBack}>Back</button>
          <button className="tutor-btn w-fit" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}>Pay Now {valid}</button>
        </div>
      </div>
      {displayRazorpay &&
        <RenderRazorpay
          amount={orderDetails.amount}
          currency={orderDetails.currency}
          orderId={orderDetails.orderId}
          keyId={razorpayKey.id}
          keySecret={razorpayKey.secret}
          userDetails={userDetails}
        />
      }
    </div>
  )
}

export default reduxForm({
  form: 'registration',
})(RegistrationForm);
