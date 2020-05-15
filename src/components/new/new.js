import React, { useContext } from "react";
import "./newstyle.css";
import { Link } from "react-router-dom";
import { NewlinksContext } from "../../TheContext";

function New() {
  const [NewLinks, setNewLinks] = useContext(NewlinksContext);
  return (
    <div className='New'>
      <h4>New Sales</h4>
      <div className='cards'>
        {NewLinks.map((NewLink) => (
          <Link className='card-link' to={NewLink.goto}>
            <div
              key={NewLink.id}
              className='card'
              style={{ background: `${NewLink.color}` }}
            >
              <div className='card-contain'>
                <img src={NewLink.src} alt='icon' />
                <h3>{NewLink.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default New;
