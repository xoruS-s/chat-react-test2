import React from "react";
import PropTypes from "prop-types";

import "./Avatar.scss";

const Avatar = ({ user }) => {
    if (user.avatar) {
        return (
            <img
                className="avatar"
                src={user.avatar}
                alt={""}
            />
        );
    } else {
        return (
            <img
                className="avatar"
                src={"https://cdn-icons-png.flaticon.com/512/59/59170.png"}
                alt={""}
            />
        )
    }
};

Avatar.propTypes = {
    className: PropTypes.string
};

export default Avatar;