import PropTypes from "prop-types";
import React from "react";
import "./button.css";

export const ButtonSecondary = ({ className, divClassName, text = "ORDER NOW" }) => {
    return (
        <div className={`button-secondary ${className}`}>
            <div className={`ORDER-NOW ${divClassName}`}>{text}</div>
        </div>
    );
};

ButtonSecondary.propTypes = {
    text: PropTypes.string,
};
