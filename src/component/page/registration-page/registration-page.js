import { Provider } from "react-redux";
import RegistrationForm from "../../../model/registration-page/registration-form";
import studentRegistration from "../../../service/form-store/registration-form-store";

function RegistrationPage() {
  return (
    <Provider store={studentRegistration}>
      <RegistrationForm />
    </Provider>
  )
}

export default RegistrationPage;
