import React, { Fragment } from "react";

const Delete = ({plant}) => {
    const host = "http://localhost:5000";

    const deletePlant = async e => {
        e.preventDefault();
        try {
            const response = await fetch(
                `${host}/dashboard/4c397315-3b56-4652-b673-f98219e4517e/${plant.id}`,
                {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"}
                }
            );

            window.location = '/dashboard';
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Fragment>
            <button 
                type="button" 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target={`#id${plant.id}`}>
                Delete
            </button>

            <div className="modal" id={`id${plant.id}`}>
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Delete Entry</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div className="modal-body">
                    Are you sure you want to delete {plant.sname}?
                </div>

                <div className="modal-footer">
                    <button type="button" 
                        className="btn btn-danger" 
                        data-bs-dismiss="modal"
                        onClick={deletePlant}
                    >
                        Yes
                    </button>
                    <button type="button" 
                        className="btn btn-primary" 
                        data-bs-dismiss="modal"
                    >
                        No
                    </button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    );
}

export default Delete;
