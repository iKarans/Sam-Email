import { IEmail } from "../modals/modals";

interface IState {
    emails: IEmail[];
  }
  
  interface IAction {
    type: string;
    payload: any;
  }
  
  export const emailReducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
      case "MARK_AS_READ":
        return {
            ...state, 
            emails: state.emails.map(email => email.id == action.payload ? {...email, isRead: true} : email)
        }
        case "MARK_AS_UNREAD":
          return {
              ...state, 
              emails: state.emails.map(email => email.id == action.payload ? {...email, isRead: false} : email)
          }
      case "MARK_AS_DELETED":
        return {
            ...state, 
            emails: state.emails.map(email => email.id == action.payload ? {...email, isDeleted: true} : email)
        }
      default:
        return state;
    }
  };
  
  export default emailReducer;
