import { footballService } from '../../services/footballService.js';

export const GET_TEAMS = 'GET_TEAMS';
export const SET_TEAM = 'SET_TEAM';
export const SET_FILTER = 'FILTER';

export function getTeams(locationId) {
    return async dispatch => {
        const teams = await footballService.getTeams(locationId);
        dispatch({ type: GET_TEAMS, teams });
    }
}
export function setTeam(teamId) {
    return async dispatch => {
        const team = await footballService.getTeamWithPlayers(teamId)
        dispatch({ type: SET_TEAM, team });
    }
}
export function setFilter(locationId) {
    return async dispatch => {
        dispatch({ type: SET_FILTER, filter: locationId });
    }
}