import { httpService } from './httpService';
import storageService from './storageService';
const API_KEY = '5c458d8273b14258986fc51cb35ad662';
const TEAMS = 'TEAMS';
const LOCATIONS = 'LOCATIONS';






async function getTeams(term = '') {
    let teams = storageService.loadFromStorage(TEAMS);
    if (!teams) {
        const teams = await httpService.get(`Teams?key=${API_KEY}`);
        storageService.saveToStorage(TEAMS, teams);
    }
    if (term) return teams.filter(team => team.AreaId === term);
    return teams;
}

async function getTeamWithPlayers(teamId) {
    let team = storageService.loadFromStorage(TEAMS + teamId);
    if (!team) {
        const allTeams = storageService.loadFromStorage(TEAMS);
        team = allTeams.find(selectedTeam => selectedTeam.TeamId === +teamId);
        const players = await httpService.get(`playersByTeam/${teamId}?key=${API_KEY}`);
        team.players = players;
        storageService.saveToStorage(TEAMS + teamId, team);
    }
    return team;
}

async function getLocations(term) {
    let locations = storageService.loadFromStorage(LOCATIONS);
    if (!locations) {
        locations = await httpService.get(`areas?key=${API_KEY}`);
        storageService.saveToStorage(LOCATIONS, locations);
    }
    locations = term ? locations.filter(location => location.Name.toLowerCase().includes(term.toLowerCase())) : locations;
    return locations;

}

export const footballService = {
    getTeams,
    getTeamWithPlayers,
    getLocations

}