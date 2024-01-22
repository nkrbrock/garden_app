import React, { Fragment, useEffect } from "react";

const Alert = ({alertMessage, alertType}) => {
    const appendAlert = (message, type) => {
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        if (alertPlaceholder) {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        }
    }

    useEffect(() => {
        appendAlert(alertMessage, alertType);
    }, [alertMessage, alertType]);

    return(
        <Fragment>
            <div id='liveAlertPlaceholder'></div>
        </Fragment>
    );
}

export default Alert;
