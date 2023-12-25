import React from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/portfolioItem";
import "./portfolio.css";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Portfolio = () => {
  return (
      <section className="portfolio">
        <h2 className="section__title">
          My <span>Portfolio</span>
        </h2>
        {/* <div className="portfolio__container container grid">
          {portfolio.map((item) => {
            return <PortfolioItem key={item.id} {...item} />;
          })}
        </div> */}
          <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work p-0"
          // contentStyle={{ color: "#3fad67" }}
          contentArrowStyle={{ borderRight: "7px solid #f4f7fa" }}
          // date={"4th December 2023"}
          // iconStyle={{ background: "#f4f7fa", color: "#45cfed" }}
          icon={<MdWork />}
        >
          <div class="grid-container">
            <div class="grid-item main-heading ">
              <h5>Title</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">ETAQ</div>
            <div class="grid-item main-heading ">
              <h5>Client</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">
              NDA (Non-Discloser Agreement)
            </div>
            <div class="grid-item main-heading ">
              {" "}
              <h5>Environment</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">
              {" "}
              ReactJs, JavaScript, Redux, Bootstrap, NodeJS, Express Js, API's,
              Mongo DB
            </div>
            <div class="grid-item main-heading ">
              {" "}
              <h5>Description</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">
              ETAQ is a comprehensive and user-friendly timesheet application
              featuring multiple modules for streamlined organizational
              management. The application includes modules for efficient
              handling of remote work requests, leave management, finance
              tracking, and an interactive employee performance dashboard.
              Additionally, I implemented a user-friendly timesheet tracking
              system with secure authentication and access controls. The
              application's responsive design ensures accessibility and
              functionality across various devices, highlighting me, Expertise
              in front-end development and commitment to enhancing HR processes
              and Organizational efficiency.
            </div>
            <div class="grid-item main-heading ">
              {" "}
              <h5>Responsibility</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">
              Developed HTML5 pages based on ReactJS, JavaScript, Bootstrap.
              Core team member of development team.<br></br>
              Designing and development of various components and models.
            </div>
            <div class="grid-item main-heading ">
              {" "}
              <h5>Role</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">UI UX development</div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work p-0"
          // contentStyle={{ color: "#3fad67" }}
          contentArrowStyle={{ borderRight: "7px solid #f4f7fa" }}
          // date={"4th December 2023"}
          // iconStyle={{ background: "#f4f7fa", color: "#45cfed" }}
          icon={<MdWork />}
        >
          <div class="grid-container">
            <div class="grid-item main-heading ">
              <h5>Title</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">
              Intelsat inflight services.
            </div>
            <div class="grid-item main-heading ">
              <h5>Client</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">Intelsat</div>
            <div class="grid-item main-heading ">
              {" "}
              <h5>Environment</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">
              {" "}
              ReactJs, JavaScript, Redux, Jenkins, Spinnaker, Spring boot, Jira,
              Lru, Jama, Confluence.
            </div>
            <div class="grid-item main-heading ">
              {" "}
              <h5>Description</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">
              air-to-ground (ATG) network is a cellular radio network (meaning
              that there is a hand-off when the aircraft moves between service
              areas) that has more than 200 towers in the continental U.S. and
              Canada. The ground stations consist of original Airphone
              air-ground phone relay stations and newer locations, using the 850
              MHz ATG band.[14][15] Unlike terrestrial cell sites, ATG ground
              station project a directional signal up into the air where
              airplanes are, rather than downward, terrestrial users are.
              However, the short wavelength used allows segmentation and other
              cellular technologies in the same way that terrestrial cell phone
              technology works. The aircraft communicates with the ground
              stations through an antenna installed on the underbelly of the
              fuselage. Equipment in the aircraft's avionics bay converts
              between proprietary Gogo protocols and standard WiFi, which is
              distributed into the passenger cabin through multiple interior
              wireless access point nodes.
            </div>
            {/* <div class="grid-item main-heading "> <h5>Responsibility</h5><span>:</span></div>
            <div class="grid-item main-content">
              Developed HTML5 pages based on ReactJS, JavaScript, Bootstrap.
              Core team member of development team.<br></br>
              Designing and development of various components and models.
            </div> */}
            <div class="grid-item main-heading ">
              {" "}
              <h5>Role</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">UI UX development</div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work p-0"
          // contentStyle={{ color: "#3fad67" }}
          contentArrowStyle={{ borderRight: "7px solid #f4f7fa" }}
          // date={"4th December 2023"}
          // iconStyle={{ background: "#f4f7fa", color: "#45cfed" }}
          icon={<MdWork />}
        >
          <div class="grid-container">
            <div class="grid-item main-heading ">
              <h5>Title</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">Vehicle Dealership</div>
            <div class="grid-item main-heading ">
              <h5>Client</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">
              NDA (Non-Discloser Agreement)
            </div>
            <div class="grid-item main-heading ">
              {" "}
              <h5>Environment</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">
              {" "}
              ReactJs, JavaScript, Redux, Bootstrap, NodeJS, Express Js, API's,
              MySQL
            </div>
            <div class="grid-item main-heading ">
              {" "}
              <h5>Description</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">
              This project has dealers wants them to view the Products available
              in their region on application.The dealers Should be able to view
              region-specific digital brochure - a list of the vehicles
              Available in their region. Dealers should be able to view vehicle
              details along with Color and variants available using intuitive
              images and videos. Dealers should also be able to generate leads
              inside the application by capturing Minimal information.
            </div>
            <div class="grid-item main-heading ">
              {" "}
              <h5>Responsibility</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">
              Developed HTML5 pages based on ReactJS, JavaScript, Bootstrap.
              <br></br>
              Core team member of development team.<br></br>
              Designing and development of various components and models.
            </div>
            <div class="grid-item main-heading ">
              {" "}
              <h5>Role</h5>
              <span>:</span>
            </div>
            <div class="grid-item main-content">UI UX development</div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </section>
  );
};

export default Portfolio;
