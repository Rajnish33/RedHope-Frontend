import React from 'react'
import cc from "../../assets/cc.png"

const Contact = () => {
    const data = [
        {
            title: "Contact RedHope | Feedback & Support",
            body: [
                "Rajneesh (Project Lead)",
                "Location: Mumbai, India",
                "Phone: +91-96379-00970",
                "Email: rs9637900970@gmail.com",
                "We value your feedback and are here to help. Reach out for support, suggestions, or partnership opportunities."
            ]
        },
        {
            title: "Administrative & Health Queries",
            body: [
                "Health Directorate, 2nd Floor",
                "Pandit Nehru Complex, Gurkhabasti, Agartala, Tripura(W)",
                "Phone: (0381) 230 9496",
                "Email: admin@redhope.org",
                "National Health Mission, Ministry of Health & Family Welfare, New Delhi - 110011"
            ]
        },
    ];
    return (
        <div className="min-h-screen px-8 md:px-32 py-12 text-gray-900 font-sans" style={{ background: "linear-gradient(135deg, #ffe0e0, #fff6cc)" }}>
            <h1 className="text-center text-4xl font-extrabold text-teal-700 mb-8">Contact RedHope</h1>
            <div className="flex flex-col md:flex-row justify-around items-center gap-12">
                <div className="flex-1">
                    {data.map((e, idx) => (
                        <div key={idx} className="mb-8">
                            <p className="text-2xl font-bold text-blue-900 mb-2">{e.title}</p>
                            <div className="bg-white rounded-lg shadow-md p-4">
                                {e.body.map((k, i) => (
                                    <p key={i} className="text-md text-gray-700 mb-1">{k}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-1 flex justify-center">
                    <img src={cc} draggable={false} style={{height:"22rem",borderRadius:"1rem",boxShadow:"0 4px 24px rgba(20,184,166,0.2)"}} width="80%" alt="Contact illustration" />
                </div>
            </div>
        </div>
    );
}

export default Contact