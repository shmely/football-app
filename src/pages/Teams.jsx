import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeams } from '../store/actions/footballActions';
import { AutoComplete } from '../cmps/AutoComplete'
import { TeamPreview } from '../cmps/TeamPreview';

export const Teams = () => {
    const teams = useSelector(state => state.footballApp.teams);
    const filter = useSelector(state => state.footballApp.filter);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getTeams(filter))
    }, [dispatch, filter]);




    return (
        <main className="teams-cont flex column justify-center">
            <AutoComplete></AutoComplete>
            <div className="teams-list">
                {teams && teams.map((team, idx) => <TeamPreview team={team} key={idx}></TeamPreview>)}
            </div>
        </main>
    )
}


