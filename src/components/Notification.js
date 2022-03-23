import React, { useRef, useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, callback) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter({ children, callback }) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, callback);

    return <div ref={wrapperRef}>{children}</div>;
}
//
export const Notification = () => {
    const [notification, setNotification] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("weather") === null) {
            localStorage.setItem('weather', true);
        }
        setNotification(JSON.parse(localStorage.getItem("weather")))
    }, [])
    if (notification)
        return (
            <OutsideAlerter callback={() => {
                localStorage.setItem('weather', false);
                setNotification(false)
            }}>
                <div className="notification">
                    <h1>Click to see the different layers!</h1>
                </div>
            </OutsideAlerter>
        )
    return <></>;
};

export default Notification;
