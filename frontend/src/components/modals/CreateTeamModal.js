import React, { useEffect } from "react";
import teamwork from "../../static/img/teamwork.svg";
import { modalBlurHandler, authAxios } from "../../static/js/util";
import { backendUrl } from "../../static/js/const";

import { useForm } from "react-hook-form";

const CreateTeamModal = ({ setShowModal, addProject }) => {
    useEffect(modalBlurHandler(setShowModal), []);
    const { register, handleSubmit, errors, watch } = useForm();
    const titleValue = watch("title", "");

    const onSubmit = async (data) => {
        const invitedMembers =
            data.members !== ""
                ? data.members.split(",").map((user) => user.trim()) // usernames
                : [];

        try {
            const { data: resData } = await authAxios.post(
                backendUrl + "/projects/",
                data
            );
            if (invitedMembers.length !== 0) {
                await authAxios.post(
                    backendUrl + `/projects/${resData.id}/invite/`,
                    {
                        users: invitedMembers,
                    }
                );
            }
            addProject(resData);
        } catch (error) {
            console.log(error);
        }
        setShowModal(false);
    };

    return (
        <div className="create-team">
            <div className="create-team__form">
                <p className="create-team__title">Creating a Project Group</p>
                <p className="create-team__subtitle">
                    Currently creating group project
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="title">Project Name</label>
                    <input
                        name="title"
                        ref={register({ required: true })}
                        type="text"
                        placeholder="Group Name Here"
                    />

                    <label htmlFor="description">Project Description</label>
                    <textarea
                        name="description"
                        ref={register}
                        placeholder="project description should go here"
                    ></textarea>

                    <label htmlFor="members">Invite Members</label>
                    <input
                        name="members"
                        ref={register}
                        type="text"
                        placeholder="Type in username"
                    />

                    {titleValue.trim() !== "" ? (
                        <button type="submit" className="btn">
                            Create Project
                        </button>
                    ) : (
                        <button className="btn btn--disabled" disabled>
                            Create Project
                        </button>
                    )}
                </form>
            </div>
            <div className="create-team__bg">
                <button onClick={() => setShowModal(false)}>
                    <i className="fal fa-times"></i>
                </button>
                <img className="create-team__img" src={teamwork} />
            </div>
        </div>
    );
};

export default CreateTeamModal;
