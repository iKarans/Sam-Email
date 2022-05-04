import React, { useContext } from 'react';
import "./BigEmail.scss";

import avatar from "../../assets/avatar.png";

import { FaEllipsisH, FaTrashAlt } from 'react-icons/fa';
import { AiOutlineRead } from 'react-icons/ai';

import { IEmail } from '../../modals/modals';

import { EmailContext } from '../../contexts/EmailContext';

interface BigEmailProps {
    email: IEmail,
    currentEmail: number | null,
    setCurrentEmail: React.Dispatch<React.SetStateAction<number | null>>
}

export const BigEmail: React.FC<BigEmailProps> = ({email, currentEmail, setCurrentEmail}) => {
    const { inboxEmails, markAsDeleted, markAsRead, markAsUnread } = useContext(EmailContext);
        return (
            <div className="big-email" data-cy={`big-email${email?.id ? email.id : ""}`}>
            {currentEmail ?
                <>
                <img src={avatar} alt="avatar" className="big-email__avatar" />
                <h4 className="big-email__name" >{email.name}</h4>
                <h4 className="big-email__email-address">{email.emailAddress}</h4>
                <FaEllipsisH className="big-email__ellipsis" />
                <AiOutlineRead className="big-email__send" onClick={() => markAsRead
                (email.id)} data-cy="big-email-read-button"/>
                <FaTrashAlt className="big-email__trash" onClick={() => {
                    markAsDeleted(email.id)
                    markAsUnread(email.id)
                    setCurrentEmail(null)
                }
                    } data-cy="big-email-delete-button" />
                <h1 className="big-email__title" data-cy={`big-email${email?.id}-title`}>{email.title}</h1>
                <p className="big-email__email">{email.emailContent}</p> </>: "Nothing to see here"}
            </div>
        );
}