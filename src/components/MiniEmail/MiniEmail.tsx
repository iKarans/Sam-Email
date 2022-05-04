import React, { useState, useContext } from 'react';
import { EmailContext } from '../../contexts/EmailContext';
import "./MiniEmail.scss";

import avatar from "../../assets/avatar.png";
import { IEmail } from '../../modals/modals';




interface MiniEmailProps {
    email: IEmail,
    setCurrentEmail: React.Dispatch<React.SetStateAction<number | null>>,
    isActive: boolean
}

export const MiniEmail: React.FC<MiniEmailProps> = ({email, setCurrentEmail, isActive}) => {
    const { inboxEmails} = useContext(EmailContext);
    const {name, title, emailContent, date, id} = email;
        return (
                <li className={`mini-email ${isActive ? "mini-email__active" : ""}`} onClick={() => {
                    setCurrentEmail(id);
                    }}
                    data-cy={`mini-email${id}`}>
                    <img src={avatar} alt="avatar" className="mini-email__avatar"/>
                    <h4 className="mini-email__name" data-cy="mini-email-name">{name}</h4>
                    <h4 className="mini-email__date" data-cy="mini-email-date">{date.toDateString().substring(4, 10)}</h4>
                    <h3 className="mini-email__title" data-cy="mini-email-title">{title}</h3>
                    <p className="mini-email__snippet small-paragraph" data-cy="mini-email-snippet">{emailContent.substring(0, 160)}...</p>
                </li>
        );
}