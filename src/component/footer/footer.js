import PropTypes from "prop-types";
import React from "react";
import { Socials } from "../socials/socials";

import "./footer.css";

export const PropertyFooterWrapper = ({ property1, star = "image.svg" }) => {
    return (
        <div className="property-footer-wrapper">
            {property1 === "footer" && (
                <div className="frame">
                    <div className="rectangle" />
                    <div className="div">
                        <img className="img" alt="Rectangle" src="rectangle-29.svg" />
                        <div className="frame-2">
                            <div className="frame-3">
                                <div className="text-wrapper">Become a Partner</div>
                                <p className="p">
                                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                                    aliquet odio mattis.
                                </p>
                            </div>
                            <div className="button-secondary-wrapper">
                                <div className="button-secondary">
                                    <div className="ORDER-NOW">BECOME A PARTNER</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="frame-4">
                <div className="frame-5">
                    <div className="text-wrapper-2">IMURS</div>
                    <p className="text-wrapper-3">REIMAGINING THE MAGAZINES WITH A SWEET TOUCH</p>
                </div>
                <img className="star" alt="Star" src={property1 === "variant-2" ? star : "star-5.png"} style={{marginLeft:"5.9rem"}}/>
                <div className="frame-6">
                    <div className="frame-7">
                        <Socials className="socials-instance" property1="default" text="LINKEDIN" />
                        <Socials className="instance-node" property1="default" text="INSTAGRAM" />
                        <Socials className="instance-node" property1="default" text="FACEBOOK" />
                        <Socials className="frame-8" property1="default" text="TWITTER" />
                        
                    </div>
                    <div className="frame-9">
                        <div className="text-wrapper-4">PRIVACY POLICY</div>
                        <div className="text-wrapper-4">CANCELLATION &amp; REFUND POLICY</div>
                        <div className="text-wrapper-4">TERMS &amp; CONDITIONS</div>
                        <div className="text-wrapper-4">CONTACT US</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PropertyFooterWrapper.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "footer"]),
    star: PropTypes.string,
};
