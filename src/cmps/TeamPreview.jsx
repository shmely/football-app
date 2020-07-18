import React from 'react';
import Button from '@material-ui/core/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom'



export function TeamPreview(props) {

    const { team } = props;

    return (
        <section className="card flex column ">
            <LazyLoadImage src={team.WikipediaLogoUrl} alt={team.Name}></LazyLoadImage>
            <h1>{team.Name}</h1>
            <h2>{`Founded: ${team.Founded}`}</h2>
            <p>{`Address: ${team.Address}, ${team.City}, ${team.AreaName}`}</p>
            <div className="actions">
                <Link style={{ "color": "black" }} to={`/team/${team.TeamId}`}> <Button component='button' variant="contained" color="primary">
                    Team Details
            </Button></Link>

            </div>

        </section>
    )
}