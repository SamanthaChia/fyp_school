import React, { useState } from "react";
import useAxiosGet from "../hooks/useAxiosGet";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Leaderboard = (props) => {
    const { id } = props.match.params;
    const { data: leaderboards } = useAxiosGet(
        `/boards/leaderboards/?board=${id}`
    );
    return (
        <div className="leaderboard-wrapper">
            <section id="leaderboard">
                <nav className="ladder-nav">
                    <div className="ladder-title">
                        <i className="fal fa-crown"></i> Leadership Board
                    </div>
                </nav>
                <table id="rankings" className="leaderboard-results">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {leaderboards ? (
                            leaderboards.map((value, index) => (
                                <tr key={uuidv4()}>
                                    <td>{value.user}</td>
                                    <td>{value.points}</td>
                                </tr>
                            ))
                        ) :(
                        <tr>
                            <td>No Available Data</td>
                        </tr>
                        )}
                    </tbody>
                </table>
                <Link to={`/b/${id}/l/add`}>
                    <button
                        className="btn"
                    >
                        <i className="fal fa-plus"></i> Add Record
                    </button>
                </Link>
            </section>
        </div>
    )
};

export default Leaderboard;
