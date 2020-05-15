import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NewlinksContext, CardsContext } from "../TheContext";

function Dashboard() {
  const [NewLinks, setNewLinks] = useContext(NewlinksContext);
  const [Cards, setCards] = useContext(CardsContext);
  return (
    <div className='Dashboard'>
      <div className='dash-contain'>
        <div className='dash-title'>
          <h3>Dashboard</h3>
          <a href='#'>
            Edit Profile <i className='fa fa-edit'></i>{" "}
          </a>
        </div>
        <div className='emp-details'>
          <div className='credentials'>
            <div className='info'>
              <h1>Welcome Back, Brad Lee</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
                temporibus aliquid accusantium asasdaf
              </p>
              <a href='#'>View Profile</a>
            </div>
          </div>
          <img src='/images/man.svg' alt='' />
        </div>
        <div className='emp-title'>
          <h3>Employees</h3>
          <a href='#'>
            View All <i className='fa fa-angle-right'></i>{" "}
          </a>
        </div>
        <div className='cards'>
          {Cards.map((Card) => (
            <div
              key={Card.id}
              className='card'
              style={{ background: `${Card.color}` }}
            >
              <div className='card-contain'>
                <img src={Card.src} alt='icon' />
                <h3>{Card.name}</h3>
                <h1>{Card.num}</h1>
              </div>
              <i className='fa fa-ellipsis-v'></i>
            </div>
          ))}
        </div>
        <div className='emp-title'>
          <h3>Recent Orders</h3>
          <a href='#'>
            View All <i className='fa fa-angle-right'></i>{" "}
          </a>
        </div>
        <div className='buttons'>
          {NewLinks.slice(0, 3).map((NewLink) => (
            <Link className='button-link' to={NewLink.goto}>
              <div className='button'>
                <div className='sub-cat'>
                  <i className='fa fa-yin-yang'></i>
                  <h5 className='link-name'>{NewLink.name}</h5>
                  <h5 className='date'>Dec 13, 2019</h5>
                  <h5 className='time'>02 : 30 am</h5>
                </div>
                <i className='fa fa-trash'></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='others'>
        <div className='perfomance'>
          <h1 className='title'>Perfomance</h1>
          <h1 className='num'>75%</h1>
        </div>
        <div className='vendors'>
          <div className='vendc-title'>
            <h2>VENDORS</h2>{" "}
            <span>
              View All <i className='fa fa-angle-right'></i>{" "}
            </span>
          </div>
          <div className='vendor'>Vendor 1</div>
          <div className='vendor'>Vendor 2</div>
          <div className='vendor'>Vendor 3</div>
        </div>
        <div className='clients'>
          <div className='vendc-title'>
            <h2>CLIENTS</h2>{" "}
            <span>
              View All <i className='fa fa-angle-right'></i>{" "}
            </span>
          </div>
          <div className='client'>Client 1</div>
          <div className='client'>Client 2</div>
          <div className='client'>Client 3</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
