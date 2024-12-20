import React from "react";
import "../Member.css"; // Import the CSS file

const members = [
  {
    name: "Shaswat Tripathi",
    year: "Organizer",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/saswatcrop.JPG",
  },
  {
    name: "Shubham Srivastav",
    year: "Co-Organizer",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/shubham.jpg",
  },
  {
    name: "Ayush Singh",
    year: "Content Team",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/ayush2.jpg",
  },
  {
    name: "Priyanshi Dubey",
    year: "PR & Marketing",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/priyanshi2.JPG",
  },
  {
    name: "Piush Praharaj",
    year: "Sponsorship",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/piush.jpg",
  },
  {
    name: "Puja Mahato",
    year: "Social Media",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/puja2.jpg",
  },
  {
    name: "Gomesh Aggrawal",
    year: "Graphics",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/team/gomesh.jpg",
  },
  {
    name: "Anmol Singh",
    year: "Logistics",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/anmol.JPG",
  },
   {
    name: "M.Flora",
    year: "Creative & Technical",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/flora.jpg",
  },
   {
    name: "Harish Bandia",
    year: "Production",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/harish.jpg",
  },
   {
    name: "Ayushman Shaw",
    year: "Web",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/ayushman.jpg",
  },
  
];

const Leads = () => {
  window.scrollTo(0,0)
  return (
    <div className="bg-black font-anton overflow-x-hidden">
      {/* <h1 className="text-white text-center">WEB TEAM</h1> */}
       <h1
        className="text-center p-5 text-white text-7xl font-bold font-redressed lg:text-8xl"
        id="team-text"
      >
        Lea<span className="text-red-500">ds</span>
      </h1>{" "}
      <div className="grid-container">
        {members.map((member, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="flip-card-back">
                <img src={member.img2} />
                <h2>{member.name}</h2>
                <h3>{member.year}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leads;
