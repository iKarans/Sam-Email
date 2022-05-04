import React, { useState } from 'react';
import { ICurrentFilters, IFilter } from '../../modals/modals';
import { DropDownFilterOption } from '../DropDownFilterOption/DropDownFilterOption';
import "./DropDownFilter.scss";

import { BsFilterCircle } from 'react-icons/bs';

interface DropDownFilterProps {
    title: string,
    filterOptions: IFilter[],
    setCurrentFilters: React.Dispatch<React.SetStateAction<ICurrentFilters>>
    currentFilters: ICurrentFilters,
}

export const DropDownFilter: React.FC<DropDownFilterProps> = ({title, filterOptions, setCurrentFilters, currentFilters}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

        return (
                <div className="drop-down-filter" onClick={() => setIsOpen(!isOpen)} data-cy="dropdown" >
                        <h3 className="drop-down-filter__title" >
                            {title}
                        </h3>
                        {
                            isOpen &&                         <ul className="drop-down-filter__list" data-cy="dropdown-box">
                            {filterOptions.map(filterOption => <DropDownFilterOption filterOption={filterOption} key={filterOption.name} setCurrentFilters={setCurrentFilters} currentFilters={currentFilters} />)}
                        </ul>
                        }
                </div>
        );
}