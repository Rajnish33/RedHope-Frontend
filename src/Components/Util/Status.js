import React, { useState } from 'react'
import axios from "../Api"

const Status = (props) => {
    const [status, setStatus] = useState(props.status);
    const choices = ['Pending', 'Approved', 'Denied', (props.handle == "donations" ? 'Donated' : "Completed")];

    const getStatusClass = () => {
        if (status === "Denied") return "tag-danger";
        if (status === "Pending") return "tag-neutral";
        if (status === "Approved") return "tag-success";
        return "tag-success";
    };
    return (
        <div >
            <select name="status" id="status" value={status} className={`pill-chip ${getStatusClass()} border-2 px-4 py-2 rounded-xl hover:shadow-md cursor-pointer`} onChange={async (k) => {
                if (k.target.value === "Donated") {
                    await axios.put(`/bank/updateStock`, { bloodGroup: props.bloodGroup, units: props.units })
                        .then(async (response) => {
                            alert("Stock Updated");
                            await axios.put(`/bank/${props.handle}`, { id: props.id, status: k.target.value })
                                .then(async (response) => {
                                    setStatus(k.target.value);
                                    props.setId(props.i);
                                    props.setStatus(k.target.value);
                                }, (error) => {
                                    alert("Something went wrong");
                                });
                        }, (error) => {
                            alert("Something went wrong");
                        });
                } else if (k.target.value === "Completed") {
                    await axios.put(`/bank/deleteStock`, { bloodGroup: props.bloodGroup, units: props.units })
                        .then(async (response) => {
                            alert("Stock Updated");
                            await axios.put(`/bank/${props.handle}`, { id: props.id, status: k.target.value })
                                .then(async (response) => {
                                    setStatus(k.target.value);
                                    props.setId(props.i);
                                    props.setStatus(k.target.value);
                                }, (error) => {
                                    alert("Something went wrong");
                                });
                        }, (e) => {
                            alert(e.request.status == 404 ? "Not Enough Blood" : "Something went wrong");
                        });
                } else {
                    await axios.put(`/bank/${props.handle}`, { id: props.id, status: k.target.value })
                        .then(async (response) => {
                            setStatus(k.target.value);
                            props.setId(props.i);
                            props.setStatus(k.target.value);
                        }, (error) => {
                            alert("Something went wrong");
                        });
                }
            }}
                disabled={status == "Denied" || status == "Donated" || status == "Completed"}
            >
                {
                    choices.map((e) =>
                        <option value={e}>{e}</option>
                    )
                }
            </select>
        </div >
    )
}

export default Status