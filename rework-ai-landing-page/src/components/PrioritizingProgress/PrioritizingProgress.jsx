import React from "react";
import "./PrioritizingProgress.css";
import arrow from "../../assets/right.svg";
import ai from "../../assets/ai.png";
import ai_small from "../../assets/ai-small.png";
import handandheart from "../../assets/hand-heart.png";
import handandheart_small from "../../assets/hand-heart-small.png";

const PrioritizingProgress = () => {
  return (
    <>
      <section className="prioritizing-progress" id="prioritizing-progress">
        <div className="prioritizing-progress-left">
          <div className="priority-heading">
            <h1>
              unleashing the power of{" "}
              <span className="highlight">artificial intelligence</span>
            </h1>
            <img src={ai_small} alt="" />
            <p>
              Zero overhead in the hiring process - promise! Source top quality
              candidates for some of the best companies and maximize your
              earning
            </p>
          </div>
          <button className="getting-started" style={{ marginTop: "4.5rem" }}>
            get started{" "}
            <span style={{ display: "flex" }}>
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>
        <div className="prioritizing-progress-right">
          <img src={ai} alt="" />
        </div>
      </section>
      <section className="prioritizing-progress2" id="prioritizing-progress">
        <div className="prioritizing-progress-left">
          <div className="priority-heading">
            <h1>
              prioritizing progress of the{" "}
              <span className="highlight">community</span>
            </h1>
            <img src={handandheart_small} alt="" />
            <p>
              Zero overhead in the hiring process - promise! Source top quality
              candidates for some of the best companies and maximize your
              earning
            </p>
          </div>
          <button className="getting-started" style={{ marginTop: "4.5rem" }}>
            get started{" "}
            <span style={{ display: "flex" }}>
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>
        <div className="prioritizing-progress-right">
          <img src={handandheart} alt="" />
        </div>
        <button className="getting-started2" style={{ marginTop: "4.5rem" }}>
            get started{" "}
            <span style={{ display: "flex" }}>
              <img src={arrow} alt="" />
            </span>
          </button>
      </section>
    </>
  );
};

export default PrioritizingProgress;
