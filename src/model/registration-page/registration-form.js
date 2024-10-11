import axios from "axios";
import axiosRetry from 'axios-retry';
import { useState, useEffect } from "react";
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
  selecteTime: [validators.required('This field is required.')]
}

const axiosHttp = axios.create({
  baseURL: 'https://coding-camp-api.vercel.app'
});

axiosRetry(axiosHttp, {
  retries: 5,
  retryDelay: (_) => {
    return 2000;
  },
  retryCondition: () => true
});
const RegistrationForm = props => {

  const { handleSubmit, pristine, submitting, valid } = props;

  const razorpayKey = {
    id: 'rzp_live_tG7YenWAYDDai9',
    secret: 'POPBlMLZPVUGxhFiS2RE2OYb'
  }

  const [isSlotsFetched, setIsSlotsFetched] = useState(false)

  const [failedToFetchSlots, setSlotFetchStatus] = useState(false)

  const [isSlotsFull, setIsSlotsFull] = useState(false)

  const [unableToProcessPayment, setPaymentProcessStatus] = useState(false)

  const [paymenyPortalOpening, setPaymenyPortalOpeningState] = useState(false)

  const [hasUser, setHasUser] = useState(false)

  let [userDetails, setUserDetail] = useState({});

  const onSubmit = (values) => {
    setPaymenyPortalOpeningState(true);
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
      shift: values.id,
      paymentId: "",
      orderId: "",
      paymentSign: "",
    })
    const payload = {
      amount: localStorage.getItem('isOfferEnded') && JSON.parse(localStorage.getItem('isOfferEnded')) ? 899 * 100 : 199 * 100,
      // amount: 100,
      currency: 'INR',
      keyId: 'rzp_live_tG7YenWAYDDai9',
      KeySecret: 'POPBlMLZPVUGxhFiS2RE2OYb',
      emailId: values.email,
      mobileNo: values.phoneNo
    }
    axiosHttp.post('/order/get-order-id', payload).then(resp => {
      const data = resp
        if(data){
          if(data.data?.isUserExists) {
            setHasUser(true)
            setPaymenyPortalOpeningState(false)
          }
          else if(data.data?.order_id) {
            setHasUser(false)
            setOrderDetails({
              orderId: data.data.order_id,
              currency: data.data.currency,
              amount: data.data.amount,
            });
            setDisplayRazorpay(true);
          }
        }
    }).catch(err => {
      console.log(err);
      setPaymentProcessStatus(true)
      setPaymenyPortalOpeningState(false);
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

  const [slots, setSlots] = useState([])

  var [displayRazorpay, setDisplayRazorpay] = useState(false);
  // var [offerEnded, changeOfferStatus] = useState(false);
  var [orderDetails, setOrderDetails] = useState({
    orderId: null,
    currency: null,
    amount: null,
  });

  function getSlots() {
    axiosHttp.get('/student/get-shift-list').then(res => {
      if(res.data.status) {
        setSlots(res.data.slots)
        setIsSlotsFetched(true)
        if(res.data.isAllSlotsFull) {
          setIsSlotsFull(true)
        }
      }
    }).catch(err => {
      console.log(err)
      setSlotFetchStatus(true)
      setIsSlotsFetched(true)
    })
  }

  useEffect(() => {
    getSlots()
    // eslint-disable-next-line 
  }, [])

  return (
    <div className="flex justify-center form-bg">
      <div className="flex flex-col flex-grow gap-3 p-6 form-container max-w-[700px] mt-6 overflow-auto relative">
        {!isSlotsFetched && <div className="loader-background">
          <div className="flex flex-col gap-4 items-center">
            <div className="loader"></div>
            <div className="loader-content">Fetching available slots for you...</div>
          </div>
        </div>}
        {
          paymenyPortalOpening  &&
          <div className="loader-background">
            <div className="flex flex-col gap-4 items-center">
              <div className="loader"></div>
              <div className="loader-content">Opening Razorpay...</div>
            </div>
          </div>
        }
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
              <label className="text-black text-base font-medium field-required">Select Time: </label>
              <Field
                name="selecteTime"
                component={DropDownComponent}
                validate={formValidators.selecteTime}
                optionsList={slots}
              />
            </div>
          </div>
        </div>
        <div>
          The total amount you need to pay is ₹199.
        </div>
        {
          hasUser && <div className="font-bold text-red-dark text-lg">Entered emaill are mobile no is already exists.</div>
        }
        {
          failedToFetchSlots ?
          <div className="font-bold text-red-dark text-lg">Server is little busy please try some time later.</div> :
          <div>
            {unableToProcessPayment ? 
              <div className="font-bold text-red-dark text-lg">
                Payment server is full please try some time later.
              </div> :
              <div>
                {!isSlotsFull ? <div className="flex flex-wrap gap-2">
                  <button className="tutor-btn cancel shadow-md w-fit" onClick={goBack}>Back</button>
                  <button className="tutor-btn w-fit" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}>Pay Now {valid}</button>
                </div> : <div className="font-bold text-red-dark text-lg">You can't register now all the slots are full</div>}
              </div>
            }
          </div>
        }
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
