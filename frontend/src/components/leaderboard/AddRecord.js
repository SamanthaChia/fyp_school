import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { backendUrl } from "../../static/js/const";
import { authAxios } from "../../static/js/util";

const AddRecord = (props) => {
    const { id } = props.match.params;
    const [nameVal, setNameVal] = useState("");
    const [pointsVal, setPointsVal] = useState(0);

    const history = useHistory();

    const AddUserLeaderboard = async () => {

        await authAxios.post(`${backendUrl}/boards/leaderboards/`, {
            board: id,
            user: nameVal,
            points: pointsVal
        }).then((response) => {
            console.log(response);
            history.push(`/b/${id}/l`);
        });
    }

    return (
        <div className="leaderboard-wrapper">
            <section id="leaderboard">
                <nav className="ladder-nav">
                    <div className="ladder-title">
                        <i className="fal fa-plus"></i> Add User to the leadership board
                    </div>
                </nav>

                <div style={{ display: "block" }}>
                    <input
                        className="sidebar-input border--gray border--onHoverBrown"
                        type="text"
                        placeholder="Please enter a name"
                        name="nameVal"
                        value={nameVal}
                        onChange={(e) => setNameVal(e.target.value)}
                    />
                    <input
                        className="sidebar-input border--gray border--onHoverBrown"
                        type='number'
                        placeholder='points to add'
                        name="pointsVal"
                        value={pointsVal}
                        onChange={(e) => setPointsVal(e.target.value)}
                    />
                    <br/>
                    <button
                        className="btn"
                        onClick={AddUserLeaderboard}
                    >
                        <i className="fal fa-plus"></i> Add User to Leaderboard
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AddRecord;