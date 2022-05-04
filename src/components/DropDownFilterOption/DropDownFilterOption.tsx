import React from 'react';
import { ICurrentFilters, IFilter } from '../../modals/modals';
import "./DropDownFilterOption.scss";

interface DropDownFilterOptionProps {
    filterOption: IFilter,
    setCurrentFilters: React.Dispatch<React.SetStateAction<ICurrentFilters>>,
    currentFilters: ICurrentFilters,
}

export const DropDownFilterOption: React.FC<DropDownFilterOptionProps> = ({filterOption, setCurrentFilters, currentFilters}) => {
    const {name, options} = filterOption;
    const handleRadioInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCurrentFilters({...currentFilters, [name]: e.target.id});
    }
        return (
            <li className="drop-down-filter-option">
                <h4 className="drop-down-filter-option__title">{name}</h4>
                <div className="drop-down-filter-option__filters-container">
                    {options.map(option => {
                    return (
                        <>
                            <input type="radio" name={name} id={option} className={ `drop-down-filter-option__check-${option}`} onChange={handleRadioInput} data-cy={`dropdown-box-${option.toLowerCase()}`}/>
                            <label htmlFor={option} className={ `drop-down-filter-option__label-${option}` }>{option}</label>
                        </>
                    )
                    })}
                </div>
            </li>
        );
}