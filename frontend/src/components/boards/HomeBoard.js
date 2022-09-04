import React from "react";
import { Link } from "react-router-dom";

import { authAxios } from "../../static/js/util";
import { backendUrl } from "../../static/js/const";

const HomeBoard = ({ board, replaceBoard }) => {
    const toggleFavorite = async (e) => {
        e.preventDefault(); // Prevent anchor link wrapped around board from redirecting us
        await authAxios.post(`${backendUrl}/boards/star/`, {
            board: board.id,
        });
        replaceBoard({
            ...board,
            is_starred: !board.is_starred,
        });
    };

    return (
        <Link to={`/b/${board.id}`} className="board-preview">
            <button
                className={`board-preview__star${
                    board.is_starred ? " board-preview__star--starred" : ""
                }`}
                onClick={toggleFavorite}
            >
                {!board.is_starred ? (
                    <i className="fal fa-star"></i>
                ) : (
                    <i className="fas fa-star"></i>
                )}
            </button>

            {board.color ? (
                <div
                    className="board-preview__color"
                    style={{ backgroundColor: `#${board.color}` }}
                ></div>
            ) : (
                <div className="board-preview__image">
                    <img src={board.image || board.image_url} alt="boardImg" />
                </div>
            )}
            <p
                className="board-preview__title"
                style={{ marginBottom: 0 }}
            >
                {board.title}
            </p>
        </Link>
    );
};

export default HomeBoard;
