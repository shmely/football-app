import React from 'react';
import Button from '@material-ui/core/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';



export function TeamPreview(props) {

    const { team } = props;

    return (
        <section className="card flex column ">
            <LazyLoadImage src={team.WikipediaLogoUrl} alt={team.Name}></LazyLoadImage>
            <h1>{team.Name}</h1>
            <h2>{`Founded: ${team.Founded}`}</h2>
            <p>{`Address: ${team.Address}, ${team.City}, ${team.AreaName}`}</p>
            <div className="actions">
                <Button variant="contained" color="primary" href={`/football-app/team/${team.TeamId}`}>
                    Team Details
            </Button>
            </div>

        </section>
    )
}