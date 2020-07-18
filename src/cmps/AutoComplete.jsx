import React from 'react';
import { footballService } from '../services/footballService';
import { useDispatch, useSelector } from 'react-redux';
import { eventBus } from '../services/eventBusService';
import { useState } from 'react';
import { setFilter } from '../store/actions/footballActions';


export function AutoComplete() {
    useSelector(state => state.footballApp.teams);
    const dispatch = useDispatch();
    const [autoCmpState, setautoCmpState] = useState({
        txt: '',
        options: [],
        showOptions: false
    });


    function setOption(location) {
        setautoCmpState({ txt: location.Name, showOptions: false });
        try {
            dispatch(setFilter(location.AreaId))
        } catch (error) {
            eventBus.emit('show-msg', {
                type: 'error',
                txt: error.message
            })
        }

    }

    async function onChange({ target }) {
        try {
            await getLocations(target.value);

        } catch (error) {
            eventBus.emit('show-msg', {
                type: 'error',
                txt: error.message
            })
        }
    }

    async function getLocations(term) {
        const locations = await footballService.getLocations(term);
        const showOptions = (locations.length === 0 || term.length === 0) ? false : true;
        setautoCmpState({ txt: term, options: locations, showOptions });
        if (term === '') setOption(term);
    }


    const { showOptions, options, txt } = autoCmpState;

    return (
        <div className="autocomplete-cont flex column align-center" >
            <input type="text" value={txt} onChange={onChange} placeholder="teams by  location e.g spain" />
            <ul className="autocomplete-results align-start clean-list flex column align-">
                {showOptions && options.map((option, idx) => <li onClick={() => setOption(option)} value={option.AreaId} key={idx}>{option.Name}</li>)}
            </ul>
        </div>
    )
}



