import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/Swiggy_logo.png";
import profile from "./images/profile_icon.png";

const function1 = <h2>This is my function</h2>;
const function2 = <h2>This is my function2</h2>;

const Title = () => (
  <h2 className="titleClass">
    {function2}
    This is title from first component
  </h2>
);

const Heading = () => (
  <div>
    {function1}
    <Title />
    {Title()}
    <Title></Title>
    <h2 id="heading" className="headingClass">
      This is heading from Heading component
    </h2>
  </div>
);

const Header = () => {
  return (
    <>
      <div className="items">
        <img src={logo} className="logo"></img>
        <input id="searchBar" type="text" placeholder="Please enter text to Search"></input>
        <img src={profile} className="logo"></img>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
