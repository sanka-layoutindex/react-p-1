import React from "react";
import person1 from "../../assets/images/person-1.png";
import person2 from "../../assets/images/person-2.png";
import person3 from "../../assets/images/person-3.png";
import person4 from "../../assets/images/person-4.png";
import person5 from "../../assets/images/person-5.png";
import person6 from "../../assets/images/person-6.png";

var teamData = [
  {
    id: 1,
    image: person1,
    title: "Blake Matthews",
    description: "CEO & Co-Founder",
  },
  {
    id: 2,
    image: person2,
    title: "Jack Newman",
    description: "CTO",
  },
  {
    id: 3,
    image: person3,
    title: "Sarinia Martins",
    description: "Marketing",
  },
  {
    id: 4,
    image: person4,
    title: "Spencer Wright",
    description: "Project management",
  },
  {
    id: 5,
    image: person5,
    title: "Caroline Ming",
    description: "Sales",
  },
  {
    id: 6,
    image: person6,
    title: "Anna Mills",
    description: "Design lead",
  },
];

function SectionD() {
  return (
    <div className="paddingGlobal sectionD sectionTb">
      <div className="containerLarge">
        <div className="content">
          <div className="left">
            <div className="titleWrapper">
            <h2 className="fcPrimary fw700">Our talented Team</h2>
            </div>
            <p className="textMedium fcPrimary">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore.
            </p>
          </div>
          <div className="right">
            {teamData.map((team) => {
              return (
                <div className="card" key={team.id}>
                  <div className="img-box">
                    <img
                      className="img-fluid"
                      src={team.image}
                      alt={team.title}
                    />
                  </div>
                  <div className="card-body">
                    <h6 className="fcPrimary fw700">{team.title}</h6>
                    <p className="textNormal">{team.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionD;
