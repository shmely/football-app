import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeams } from '../store/actions/footballActions';
import { AutoComplete } from '../cmps/AutoComplete'
import { TeamPreview } from '../cmps/TeamPreview';
import Loader from 'react-loader-spinner';

export const Teams = () => {
    const teams = useSelector(state => state.footballApp.teams);
    const filter = useSelector(state => state.footballApp.filter);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getTeams(filter))
    }, [dispatch, filter]);



    if (!teams || teams.length === 0) return (<div className="loader-teams flex column align-center justify-center">
        <Loader secondaryColor="#2196f3d9" type="Circles" color="#2196F3"
            className="loader" height={60} width={60} />
        <p>Loading teams...</p>
    </div>)
    return (
        <main className="teams-cont flex column justify-center">
            <AutoComplete></AutoComplete>
            <div className="teams-list">
                {teams && teams.map((team, idx) => <TeamPreview team={team} key={idx}></TeamPreview>)}
            </div>
        </main>
    )
}


