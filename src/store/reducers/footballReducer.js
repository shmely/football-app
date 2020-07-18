import { GET_TEAMS, SET_TEAM, SET_FILTER } from '../actions/footballActions';


const initialState = {
    teams: [],
    currTeam: null,
    filterdTeams: [],
    filter: ''

}

export function footballReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TEAMS:
            return {
                ...state,
                teams: action.teams
            }
        case SET_TEAM:
            {
                return {
                    ...state,
                    currTeam: action.team
                }
            }
        case SET_FILTER:
            {
                return {
                    ...state,
                    filter: action.filter,
                    filterTeams: state.teams.filter(team => team.AreaId === action.filter),

                }

            }

        default:
            return state;

    }
};