import React, { useContext } from 'react';
import "./SideNav.scss";

import { AiOutlineMail } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { SideNavLink } from '../SideNavLink/SideNavLink';
import { EmailContext } from '../../contexts/EmailContext';
import { IEmail } from '../../modals/modals';



interface SideNavProps {

}

export const SideNav: React.FC<SideNavProps> = ({}) => {
    const { inboxEmails } = useContext(EmailContext);
        return (
            <div className="side-nav">
                <SideNavLink name="Inbox" icon={<AiOutlineMail className={`side-nav-link__icon`}/>} number={inboxEmails.filter((email: IEmail) => !email.isRead && !email.isDeleted).length}/>
                <SideNavLink name="Trash" icon={<BsTrash className={`side-nav-link__icon`}/>} number={inboxEmails.filter((email: IEmail) => !email.isRead && email.isDeleted).length}/>
            </div>
        );
}