import React from "react";

export const Image = ({ type, src, alt, classStyle }) => {
    return (
        <>
            <img type={type} src={src} alt={alt} className={classStyle} />
        </>
    );
};
