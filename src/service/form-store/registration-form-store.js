import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
});
  
const studentRegistration = createStore(rootReducer);

export default studentRegistration;
