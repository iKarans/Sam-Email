import React, { useContext } from 'react';
import "./SideNavLink.scss";

import { Link } from "react-router-dom";


import { FiInbox } from 'react-icons/fi';

interface SideNavLinkProps {
    name: string,
    icon: JSX.Element,
    number: number
}

export const SideNavLink: React.FC<SideNavLinkProps> = ({name, icon, number}) => {
        return (
            <Link to={name == "Inbox" ? "/" : name} className="side-nav-link">
                {icon}
                <span className="side-nav-link__name">{name}</span>
                <span className="side-nav-link__number" data-cy={`${name.toLowerCase()}-link`}>{number}</span>
            </Link>
        );
}