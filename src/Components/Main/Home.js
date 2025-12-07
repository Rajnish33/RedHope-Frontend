import React from 'react'
import { Link } from "react-router-dom";
import bg from "../../assets/background.jpg";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donation.jpg"
import g1 from "../../assets/donation/im2.jpg"
import g2 from "../../assets/donation/im3.jpg"
import g3 from "../../assets/donation/im1.jpg"
import g4 from "../../assets/donation/im4.jpg"
const Home = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", recieve: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
        { blood: "O-", donate: "Everyone", recieve: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
    ]
    const temp2 = [
        { title: "Registration", img: g1 },
        { title: "Seeing", img: g2 },
        { title: "Donation", img: g3 },
        { title: "Save Life", img: g4 },
    ]

    return (
        <div id='homeid' style={{ background: "linear-gradient(135deg, #ffe4e6, #fff9d6)", color: "var(--color-text)" }}>
            <section className="max-w-6xl mx-auto px-6 lg:px-10 py-12 space-y-12">
                <div className="glass-card overflow-hidden flex flex-col lg:flex-row items-center">
                    <img className="w-full lg:w-1/2 object-cover" style={{ maxHeight: "26rem" }} src={bg} alt="hero" />
                    <div className="p-10 space-y-4">
                        <p className='section-title'>Be the reason for someone's heartbeat</p>
                        <p className='section-subtitle'>Following a blood donation, the body begins to restore the lost blood by generating fresh blood cells. This process contributes to sustaining overall health and well-being.</p>
                        <div className="flex gap-4 flex-wrap">
                            <Link to="/register/donor" className='btn-primary inline-flex items-center justify-center'>Become a Donor</Link>
                            <Link to="/about" className='pill-chip inline-flex items-center justify-center'>Learn More</Link>
                        </div>
                    </div>
                </div>

              <div className='theme-card p-8 flex flex-col lg:flex-row gap-6 items-center'>
                    <img className='rounded-2xl w-full lg:w-1/2 object-cover' src={donationFact} alt="facts" />
                    <div className='w-full overflow-x-auto'>
                        <table className='w-full border-collapse'>
                            <thead>
                                <tr>
                                    <th className='text-left py-3 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wide'>Blood Type</th>
                                    <th className='text-left py-3 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wide'>Donate Blood To</th>
                                    <th className='text-left py-3 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wide'>Receive Blood From</th>
                                </tr>
                            </thead>
                            <tbody>
                                {temp.map((e) => (
                                    <tr key={e.blood} className='border-t border-slate-200'>
                                        <td className='py-3 px-4 font-semibold'>{e.blood}</td>
                                        <td className='py-3 px-4 text-gray-600'>{e.donate}</td>
                                        <td className='py-3 px-4 text-gray-600'>{e.recieve}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='text-center space-y-3'>
                    <p className='section-title'>Blood Donation Process</p>
                    <p className='section-subtitle'>A simplified journey that keeps every donor informed and confident from registration to saving a life.</p>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                    {temp2.map((e, i) => {
                        let description = "";
                        if (e.title == "Registration") {
                            description = "Register through the donor section by filling up your details like Name, Age, and Blood Group.";
                        }
                        else if (e.title == "Seeing") {
                            description = "Head to the camp at your scheduled time and complete the on-site health screening.";
                        }
                        else if (e.title == "Donation") {
                            description = "Donate blood under expert supervision; the process is safe, quick, and compassionate.";
                        }
                        else if (e.title == "Save Life") {
                            description = "Your contribution powers urgent treatments and inspires others to join the cause.";
                        }

                        return (
                            <div className='theme-card overflow-hidden' key={i}>
                                <img src={e.img} draggable={false} className='w-full object-cover h-60' alt={e.title} />
                                <div className='p-6 space-y-2'>
                                    <div className='pill-chip inline-flex items-center gap-2'>
                                        <span>{i + 1}</span>
                                        <span>{e.title}</span>
                                    </div>
                                    <h1 className='text-xl font-semibold'>{e.title}</h1>
                                    <p className='text-gray-600'>{description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <footer className='text-center py-8 text-sm text-gray-500'>
                <code> RedHope @ {new Date().getFullYear()} || Made by Rajneesh</code>
            </footer>
        </div>
    )
}

export default Home