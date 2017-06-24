import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import ModalReducer from './modal_reducer';
import PhotoReducer from './photo_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  modal: ModalReducer,
  photo: PhotoReducer,
});

export default rootReducer;
