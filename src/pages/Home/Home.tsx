import React, { useContext, useState } from 'react';
import "./Home.scss";

import { MiniEmail } from '../../components/MiniEmail/MiniEmail';
import { BigEmail } from '../../components/BigEmail/BigEmail';

import { DropDownFilter } from '../../components/DropDownFilter/DropDownFilter';
import { ICurrentFilters, IEmail } from '../../modals/modals';
import { EmailContext } from '../../contexts/EmailContext';

import {
  Routes,
  Route,
} from "react-router-dom";

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}) => {
        const [currentEmail, setCurrentEmail] = useState<number | null>(1);
        const [currentFilters, setCurrentFilters] = useState<ICurrentFilters>({type: "", date: ""});
        const { inboxEmails } = useContext(EmailContext);

        const FilteredSortedEmails = (props: any): JSX.Element => {
                const {type, date} = props.currentFilters;
                let emailsTemp = [...inboxEmails].filter(email => props.isDeletedEmails ? email.isDeleted : !email.isDeleted);
                if (type == "Personal") {
                        emailsTemp = emailsTemp.filter(email => email.type == "Personal");
                } else if (type == "Work") {
                        emailsTemp = emailsTemp.filter(email => email.type == "Work");
                }
                if (date == "Oldest") {
                        emailsTemp = emailsTemp.sort((a: IEmail, b: IEmail) => a.date.getTime() - b.date.getTime());
                } else if (date == "Most Recent") {
                        emailsTemp = emailsTemp.sort((a: IEmail, b: IEmail) => b.date.getTime() - a.date.getTime());
                }
                return (
                        <>
                                {emailsTemp.map(email => <MiniEmail email={email} setCurrentEmail={setCurrentEmail} isActive={email.id == currentEmail} key={email.id} />)}
                        </>
                )
        }

        return (

                        <div className="home">
                                <div className="home__btns">
                                        <button className="home__btns__compose">Compose +</button>
                                        <DropDownFilter 
                                        title={"Filter By"} 
                                        filterOptions={[
                                                {name: "type", options: ["Personal", "Work"]},
                                                {name: "date", options: ["Most Recent", "Oldest"]},

                                                ]} 
                                        setCurrentFilters={setCurrentFilters}
                                        currentFilters={currentFilters}
                                        />
                                </div>
                                <BigEmail email={currentEmail ? inboxEmails[currentEmail - 1] : null}  currentEmail={currentEmail} setCurrentEmail={setCurrentEmail} />
                        
                                        <ul className="home__email-lists" data-cy="mini-emails">
                                                <Routes>
                                                        <Route path="/" element={<FilteredSortedEmails currentFilters={currentFilters} isDeletedEmails={false} />} />
                                                        <Route path="Trash" element={<FilteredSortedEmails currentFilters={currentFilters} isDeletedEmails={true} />} />
                                                </Routes>
                                        </ul>
                        </div>
        );
}