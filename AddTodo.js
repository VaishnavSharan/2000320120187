import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [trainDetails, setTrainDetails] = useState({
        trainName: "",
        trainNumber: "",
        departureTime: {
            Hours: 0,
            Minutes: 0,
            Seconds: 0
        },
        seatsAvailable: {
            sleeper: 0,
            AC: 0
        },
        price: {
            sleeper: 0,
            AC: 0
        },
        delayedBy: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrainDetails((prevTrainDetails) => ({
            ...prevTrainDetails,
            [name]: value
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        if (!trainDetails.trainName || !trainDetails.trainNumber) {
            alert("Train Name or Train Number cannot be blank");
        } else {
            addTodo(trainDetails);
            setTrainDetails({
                trainName: "",
                trainNumber: "",
                departureTime: {
                    Hours: 0,
                    Minutes: 0,
                    Seconds: 0
                },
                seatsAvailable: {
                    sleeper: 0,
                    AC: 0
                },
                price: {
                    sleeper: 0,
                    AC: 0
                },
                delayedBy: 0
            });
        }
    };

    return (
        <div className="container my-3">
            <h3>Add a Train Details</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="trainName" className="form-label">Train Name</label>
                    <input
                        type="text"
                        name="trainName"
                        value={trainDetails.trainName}
                        onChange={handleChange}
                        className="form-control"
                        id="trainName"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="trainNumber" className="form-label">Train Number</label>
                    <input
                        type="text"
                        name="trainNumber"
                        value={trainDetails.trainNumber}
                        onChange={handleChange}
                        className="form-control"
                        id="trainNumber"
                    />
                </div>
                {/* Add other train detail fields here, e.g., departureTime, seatsAvailable, price, delayedBy */}
                <button type="submit" className="btn btn-sm btn-success">Add Train Details</button>
            </form>
        </div>
    );
};



