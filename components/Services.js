import React from 'react';

function Services() {
  return <>
    <div className="services" id="services">

        <h2>🤴 Services 👸</h2>
        <div className="services-flexbox">
            <img src={require("../images/saffu-services.jpg")} alt="A clock is held in the hand of a person" />
            <p>Always at your service! We fulfill expectations, you did not even know you even had! First of all, we will discuss your idea, general goals and timeline. Then we will get back to you shortly with a first concept. After settling an agreement on product result and price, we get to work. When finished, we present you the final result and sadly then comes the time to say goodbye.. Oh well, of course only until your next project comes along!</p>
        </div>
        
    </div>
  </>;
}

export default Services;
