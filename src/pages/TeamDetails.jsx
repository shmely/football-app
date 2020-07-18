
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { setTeam } from '../store/actions/footballActions';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loader from 'react-loader-spinner';

export function TeamDetails() {
    let { id } = useParams();
    const team = useSelector(state => state.footballApp.currTeam);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTeam(id));

    }, [dispatch, id])


    if (!team) return (<div className="flex column align-center">
        <Loader secondaryColor="#2196f3d9" type="Circles" color="#2196F3"
            className="loader" height={60} width={60} />
        <p>Loading...</p>
    </div>)
    return (
        <section className="team-details">
            <div className=" flex column">
                <header className="flex align-center justify-center">
                    <LazyLoadImage src={team.WikipediaLogoUrl} alt={team.Name} title={team.Name} />
                    <h1>{team.Name}</h1>
                </header>
                <div className="content flex space-evenly wrap">
                    <div>
                        <h2>{`Founded: ${team.Founded}`}</h2>
                        <div className="flex wrap">
                            <p>Website:</p>
                            <a href={team.Website}>{team.Website}</a>
                        </div>


                        <div className="flex wrap">
                            <p>{`Address: ${team.Address}, ${team.City}, ${team.AreaName}`}</p>
                        </div>

                    </div>
                    <div>
                        <h2>Players:</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Jersey</th>
                                </tr>
                            </thead>
                            <tbody>
                                {team.players.map(player => (<tr key={player.PlayerId}>
                                    <td><img src={player.PhotoUrl} alt={player.Name}></img></td>
                                    <td>{player.CommonName}</td>
                                    <td>{player.Jersey}</td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </section>
    )


}
