import React, { createContext, useReducer } from "react";
import { emailReducer } from "./emailReducer";

import emails from "../data/emails";
import { IEmail } from "../modals/modals";

export const EmailContext = createContext<any>({});

interface IProps {
    children: any;
}

interface IInitialState {
    emails: IEmail[];
}



  const EmailProvider: React.FC<IProps> = ({ children }) => {

    const initialState: IInitialState = {
            emails: emails,
      }
      const [state, dispatch] = useReducer(emailReducer, initialState);

      const markAsRead = (id: number) => {
        dispatch({
          type: "MARK_AS_READ",
          payload: id
        });
      }
    const markAsDeleted = (id: number) => {
      dispatch({
        type: "MARK_AS_DELETED",
        payload: id
      });
    }
    const markAsUnread= (id: number) => {
      dispatch({
        type: "MARK_AS_UNREAD",
        payload: id
      });
    }
      return (
        <EmailContext.Provider
          value={{
            inboxEmails: state.emails,
            markAsRead: markAsRead,
            markAsDeleted: markAsDeleted,
            markAsUnread: markAsUnread
          }}
        >
          {children}
        </EmailContext.Provider>
      );
  };

export default EmailProvider;