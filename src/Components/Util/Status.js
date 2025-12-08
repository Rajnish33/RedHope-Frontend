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
                const newStatus = k.target.value;
                try {
                    if (newStatus === "Donated") {
                        await axios.put(`/bank/updateStock`, { bloodGroup: props.bloodGroup, units: props.units });
                        alert("Stock Updated");
                        await axios.put(`/bank/${props.handle}`, { id: props.id, status: newStatus });
                        setStatus(newStatus);
                        props.setId(props.i);
                        props.setStatus(newStatus);
                        window.location.reload();
                    } else if (newStatus === "Completed") {
                        await axios.put(`/bank/deleteStock`, { bloodGroup: props.bloodGroup, units: props.units });
                        alert("Stock Updated");
                        await axios.put(`/bank/${props.handle}`, { id: props.id, status: newStatus });
                        setStatus(newStatus);
                        props.setId(props.i);
                        props.setStatus(newStatus);
                        window.location.reload();
                    } else {
                        await axios.put(`/bank/${props.handle}`, { id: props.id, status: newStatus });
                        setStatus(newStatus);
                        props.setId(props.i);
                        props.setStatus(newStatus);
                        window.location.reload();
                    }
                } catch (e) {
                    console.error("Error updating status:", e);
                    if (e.response && e.response.status === 404 && e.config.url.includes("deleteStock")) {
                        alert("Not Enough Blood");
                    } else {
                        alert("Something went wrong");
                    }
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