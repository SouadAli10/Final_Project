import React from "react";
import ReactDOM from "react-dom";
import "../../Style/mainpage/style.css";
import "../../Style/mainpage/style.sass";
import "./js1.js";
const Mainpage = () => (
  <div>
    <div id="site__bg" />
    <div className="main">
      <section className="site">
        <h1 className="site__title site__title--separator">Skillder</h1>
        <p className="site__description">
          Teach and Learn, Trade your skills and help your community{" "}
        </p>
        <a href="/sign_in">
          <button>become a member</button>
        </a>
        <br />
        <a href="/log_in">
          <button>Log In</button>
        </a>
      </section>
      <section className="episodes">
        <article className="episode">
          <h2 className="episode__number">01</h2>
          <div className="episode__media">
            <a href="detail.html" className="episode__image" />
          </div>
          <div className="episode__detail">
            <a href="detail.html" className="episode__title">
              <h4>Linda Watkins</h4>
            </a>
            <p className="episode__description">
              Linda talks about how machine learning models can be used as
              effective substitutes for classNameic data structures.
            </p>
          </div>
        </article>
        <article className="episode">
          <h2 className="episode__number">02</h2>
          <div className="episode__media">
            <a href="detail.html" className="episode__image" />
          </div>
          <div className="episode__detail">
            <a href="detail.html" className="episode__title">
              <h4>Dylan Perry</h4>
            </a>
            <p className="episode__description">
              Dylan talks to us about how he started programming, challenges he
              has faced and what keeps him hooked till this day.
            </p>
          </div>
        </article>
        <article className="episode">
          <h2 className="episode__number">03</h2>
          <div className="episode__media">
            <a href="detail.html" className="episode__image" />
          </div>
          <div className="episode__detail">
            <a href="detail.html" className="episode__title">
              <h4>Olivia Valdez</h4>
            </a>
            <p className="episode__description">
              Olivia talks about how machine learning models can be used as
              effective substitutes for classNameic data structures.
            </p>
          </div>
        </article>
      </section>
    </div>
  </div>
);
export default Mainpage;
