import "./HowItWorks.css";
import how_it_works1 from "../../assets/how-it-works/how-it-works1.png";
import how_it_works2 from "../../assets/how-it-works/how-it-works2.png";
import how_it_works3 from "../../assets/how-it-works/how-it-works3.png";
import how_it_works4 from "../../assets/how-it-works/how-it-works4.png";
import arrow from "../../assets/right.svg";

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <div className="how-it-works">
        <h1>steps to earn</h1>
        <div className="how-it-works-cards">
          <div className="how-it-works-card">
            <div className="how-it-works-card-number">
              <p>1</p>
            </div>
            <img src={how_it_works1} alt="" />
            <div className="how-it-works-content">
              <div className="card-number">
                <span>1.</span> <h3>Sign Up</h3>
              </div>
              <p>
                Follow the link below to sign up and get access of the current
                job postings
              </p>
            </div>
          </div>
          <div className="how-it-works-card">
            <div className="how-it-works-card-number">
              <p>2</p>
            </div>
            <img src={how_it_works2} alt="" />
            <div className="how-it-works-content">
            <div className="card-number">
                <span>2.</span> <h3>Upload Details</h3>
              </div>
              {/* <h3>Upload Details</h3> */}
              <p>
                Shortlist the most qualified candidate and upload their details
                for the top companies
              </p>
            </div>
          </div>
          <div className="how-it-works-card">
            <div className="how-it-works-card-number">
              <p>3</p>
            </div>
            <img src={how_it_works3} alt="" />
            <div className="how-it-works-content">
            <div className="card-number">
                <span>3.</span> <h3>Selection Process</h3>
              </div>
              {/* <h3>Selection Process</h3> */}
              <p>
                Candidate profile goes through AI-powered shortlisting and
                selection process
              </p>
            </div>
          </div>
          <div className="how-it-works-card">
            <div className="how-it-works-card-number">
              <p>4</p>
            </div>
            <img src={how_it_works4} alt="" />
            <div className="how-it-works-content">
            <div className="card-number">
                <span>4.</span> <h3>Get Rewards</h3>
              </div>
              {/* <h3>Get Rewards</h3> */}
              <p>
                Viola! As soon as the candidate gets selected you get your
                benefits
              </p>
            </div>
          </div>
        </div>
        <button className="getting-started" style={{ marginTop: "4rem" }}>
          get started{" "}
          <span style={{ display: "flex" }}>
            <img src={arrow} alt="" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
