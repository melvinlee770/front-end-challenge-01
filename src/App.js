import "./App.css";

function App() {
  return (
    // set a big container for all the content
    <div className="flexBox-container">
      {/* the 1st content */}
      <div className="topBox">
        <h1 className="topBox-style" id="topBox-title">
          Join our community
        </h1>
        <h2 className="topBox-style" id="topBox-subtitle">
          30-day, hassle-free money back guarantee
        </h2>
        <h3 className="topBox-style" id="topBox-body">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </h3>
      </div>
      {/* set anothe small container inside the previous big container */}
      {/* the 1st content inside the smaller container but is the 2nd content in the big container */}
      <div className="flexBox-sub-container">
        <div className="bottomLeftBox">
          <h2 id="bottomLeftBox-title">Monthly Subscription</h2>
          <p>
            <b id="subscribFEE">$29</b>{" "}
            <text id="subscribPeriod">per month</text>
          </p>
          <p className="subscribINFO">Full access for less than $1 a day</p>
        </div>
        {/* the 2nd content inside the smaller container but is the 3rd content in teh big container */}
        <div className="bottomRightBox">
          <h2 id="bottomRightBox-title">Why Us</h2>
          <p id="bottomRightBox-description">
            Tutorials by industry experts Peer &amp; expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every week
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
