import React from "react";
import PropTypes from 'prop-types';
// import "../Message/Message.scss";

const IconReaded = ({ isMe, isReaded }) => (
    (isMe && (isReaded ? (
        <div className={"message__checked"}></div>
    ): (
        <div className={"message__unchecked"}></div>
    )))
);

IconReaded.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
};

export default IconReaded;