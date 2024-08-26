import React from 'react';
import "./Services.css"
// ServiceCard component
const ServiceCard = ({ title, description }) => {
  return (
    <div className="col-md-4">
      <div className="service-card">
        <div className="title">{title}</div>
        <p className="bodyin">{description}</p>
      </div>
    </div>
  );
};

// Main component
const Services = () => {
  return (
    <div className="row" id="service">
      <h1 style={{ textAlign: 'center', paddingTop: '40px' }}>OUR SERVICES</h1>
      <div className="containerhr">
        <hr className="centered-hr" />
      </div>
      <ServiceCard
        title="HARDWARE SOLUTIONS:"
        description="We offer a wide range of hardware solutions tailored to meet the specific needs of your business. From sourcing and supplying high-quality hardware components to configuring and installing complex IT infrastructure, our expert team ensures that your hardware requirements are not just met but exceeded."
      />
      <ServiceCard
        title="MAINTENANCE & SUPPORT:"
        description="Our commitment to your success extends beyond the initial sale. We provide proactive maintenance and support services to keep your hardware infrastructure running smoothly. Our team of certified technicians is available around the clock to address any issues, perform routine maintenance, and ensure minimal downtime, maximizing your operational efficiency."
      />
      <ServiceCard
        title="CUSTOMIZED IT CONSULTATION:"
        description="We understand that every business is unique, and one-size-fits-all solutions rarely work. That's why we offer customized IT consultation services to help you make informed decisions about your hardware investments. Whether you're planning to expand your infrastructure or optimize your existing setup, our IT experts are here to guide you through the process, ensuring that your IT strategy aligns with your business goals."
      />
    </div>
  );
};

export default Services;
