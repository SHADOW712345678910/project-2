import "./yoga2.css";
import "./iphoneXR.css";

import "../component/card.css";

import ALL from "../component/all";
import React, { useState } from "react";
import Meditation from "../component/Meditations";

import HathaYogas from "../component/Hatha Yoga";
import PowerYogas from "../component/Power Yoga";
import AshtangaYogas from "../component/Ashtanga Yoga";
import Carousal from "../component/carousal";

import Cards from "../component/card_carousal";

const Home = () => {
  const [Menu, SetMenu] = useState("ALL");

  var btnContainer = document.getElementById("myDIV");

  var btns = document.getElementsByClassName("optionbtn");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }

  const active = (e) => {
    SetMenu(e.target.id);
  };

  return (
    <>
      {/* -----------------------------------------------------------------------------------------nav --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <nav className="d-flex justify-content-around pt-2 pb-4">
        <span
          className="pt-3  navtextbig  XRlogo"
          style={{
            width: "625%",
            fontSize: "1.042vw",
            fontWeight: "bolder",
            marginLeft: "16.406vw",
          }}
        >
          SERENITY<span style={{ color: "#70C2CC" }}>.</span>
        </span>

        <ul
          className="d-flex  list-unstyled  ulnav12   ulnav "
          id=""
          style={{ display: "noe" }}
        >
          <li
            id="show"
            className="pl-3 pr-3 pt-4  textli "
            style={{
              fontSize: "0.833vw",
              fontFamily: "Noto Sans",
              display: "noe",
            }}
          >
            Home
          </li>
          <li
            id="show"
            className="pl-3 pr-3 pt-4 textli"
            style={{
              fontSize: "0.833vw",
              fontFamily: "Noto Sans",
              display: "noe",
            }}
          >
            About
          </li>
          <li
            id="show"
            className="pl-3 pr-3 pt-4 textli"
            style={{
              fontSize: "0.833vw",
              fontFamily: "Noto Sans",
              display: "non",
            }}
          >
            Classes
          </li>
          <li
            id="show"
            className="pl-3 pr-3 pt-4 textli"
            style={{
              fontSize: "0.833vw",
              fontFamily: "Noto Sans",
              display: "non",
            }}
          >
            Instructors
          </li>
          <li
            id="show"
            className="pl-3 pr-3 pt-4 textli"
            style={{
              fontSize: "0.833vw",
              fontFamily: "Noto Sans",
              display: "non",
            }}
          >
            Contact
          </li>
          <li
            id="show"
            className="pl-3 pr-3 pt-4 textli"
            style={{
              fontSize: "0.833vw",
              fontFamily: "Noto Sans",
              display: "non",
            }}
          >
            Login
          </li>
          <li
            id="show"
            className=" pt-3  btnli "
            style={{ fontSize: "0.833vw", fontFamily: "Noto Sans" }}
          >
            <button
              id="show"
              className="btn   btnli2"
              style={{
                width: "154px",
                background: "#70C2CC",
                marginRight: "1px",
                height: "40px",
              }}
            >
              <span
                style={{ fontFamily: "Noto Sans" }}
                className="textlibtn  text-dark "
              >
                Get Started
              </span>
            </button>
          </li>
        </ul>

        <div style={{ display: "none" }} className="pt-4 menu XRmenu">
          <img className="XRMENUE1" src="\Menu.png" alt="" />
        </div>
      </nav>

      {/* __________-------------------------------------------------------------------------------------------left col------------------------------------------------------------------------------------------------------------- */}

      <div className="row  XRROW">
        <div
          className="col-7 d-flex flex-column  align-items-center justify-content-start    "
          style={{ marginBottom: "250px", paddingRight: "1vw" }}
        >
          <h1
            className=" mh1   xrH1"
            style={{
              fontWeight: "700",
              fontSize: "2.7vw",
              paddingRight: "",
              height: "",
              width: "26.354vw",
              marginLeft: "",
              paddingTop: "160px",
            }}
          >
            Release your stress and anger by practicing yoga.
          </h1>

          <div
            className=""
            style={{
              paddingTop: "20px",
              width: "31vw",
              marginRight: "300px",
              marginLeft: "298px",
            }}
          >
            <div
              className="container_textm"
              style={{ marginLeft: "58px", fontSize: "20px" }}
            >
              <p
                className="mptext  XRPARA"
                style={{
                  width: "31vw",
                  paddingRight: "2.865vw",

                  fontFamily: "Open Sans",
                  color: "#1F2326",

                  fontWeight: "300",
                  opacity: "75%",
                  lineHeight: "25px",
                }}
              >
                The purpose of yoga is to build strength, awareness and harmony
                in both the mind and body
              </p>
            </div>

            <div
              className=" d-flex"
              style={{ marginLeft: "56px", marginTop: "56px" }}
            >
              <div
                className="btnmq   XRBTN"
                style={{ width: "10.417vw", height: "5.4vh", fontSize: "12px" }}
              >
                <p
                  className="btnmq1 XRBTN1"
                  style={{
                    width: "10.417vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                    fontSize: "100%",
                    height: "5.4vh",
                    backgroundColor: "#70C2CC",
                  }}
                >
                  Practice With Us
                </p>
              </div>

              <div className="container  btnmq2 XRBTNcon ">
                <p
                  className="btnmq2  pl-5 pt-2   XRBTN2"
                  style={{ fontSize: "1em" }}
                >
                  <u>View Programs</u>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////right side col  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="col-5 container-fluid  nav_img  xRimg1">
          <img
            className="nav_img  xRimg"
            style={{ height: "85%", width: "100%" }}
            src="\Hero Image3.png"
            alt=""
          />
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------section 1 yoga videos ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h1
        className="sec1_h1  h1header   XRh1vid  "
        style={{
          fontWeight: "700",
          height: "54px",
          textAlign: "center",
          fontSize: "2vw",
        }}
      >
        Popular Programs
      </h1>

      <div
        className="container d-flex pt-5  section_video   option2    XRVIDEOSECTION"
        style={{ position: "relative" }}
      >
        <div
          className=" border-right option  boredr_option optioncolumn  XROPTIONCOLUMN  myDIV"
          style={{ height: "248px", fontSize: " 100VW", width: "8.75vw" }}
        >
          <p
            className="hover pr-2  option2   option3  optionbtn active   XROPTION"
            style={{
              marginLeft: "10px",
              textAlign: "end",
              lineHeight: "24.51px",
              fontFamily: "Open Sans",
              fontWeight: "400",
              fontSize: "1rem",
            }}
            onClick={active}
            id="ALL"
          >
            ALL
          </p>
          <p
            className="hover  pr-2 option2  option3  optionbtn   XROPTION"
            style={{
              marginLeft: "10px",
              textAlign: "end",
              lineHeight: "24.51px",
              fontFamily: "Open Sans",
              fontWeight: "400",
              fontSize: "18px",
            }}
            onClick={active}
            id="Meditations"
          >
            Meditations
          </p>
          <p
            className="hover  pr-2 option2  option3   optionbtn   XROPTION"
            style={{
              marginLeft: "10px",
              textAlign: "end",
              lineHeight: "24.51px",
              fontFamily: "Open Sans",
              fontWeight: "400",
              fontSize: "18px",
            }}
            onClick={active}
            id="Ashtanga_Yoga"
          >
            Ashtanga Yoga
          </p>
          <p
            className="hover  pr-2 option2  option3  optionbtn   XROPTION"
            style={{
              marginLeft: "10px",
              textAlign: "end",
              lineHeight: "24.51px",
              fontFamily: "Open Sans",
              fontWeight: "400",
              fontSize: "18px",
            }}
            onClick={active}
            id="Hatha_Yoga"
          >
            Hatha Yoga
          </p>
          <p
            className="hover  pr-2 option2  option3  optionbtn   XROPTION"
            style={{
              marginLeft: "10px",
              textAlign: "end",
              lineHeight: "24.51px",
              fontFamily: "Open Sans",
              fontWeight: "400",
              fontSize: "18px",
            }}
            onClick={active}
            id="Power_Yoga"
          >
            Power Yoga
          </p>
        </div>

        <div className="">
          <div className="" style={{ height: "800px" }}>
            {Menu == "ALL" && <ALL />}
            {Menu == "Meditations" && <Meditation />}
            {Menu == "Ashtanga_Yoga" && <AshtangaYogas />}
            {Menu == "Hatha_Yoga" && <HathaYogas />}
            {Menu == "Power_Yoga" && <PowerYogas />}
          </div>

          <p
            className="d-block   uspara XRUS"
            style={{
              fontFamily: "Noto Sans",
              fontSize: "18px",
              fontWeight: "400",
              textAlign: "center",
              paddingRight: "200px",
            }}
          >
            {" "}
            <u>Practice With US</u>{" "}
          </p>
        </div>
      </div>

      <hr className="pt-5 pb-2" />

      <h1
        className="text-center pt-5  h1_yogacards  XRH1YOGACARD"
        style={{
          fontWeight: "700",
          fontSize: "2.083vw",
          paddingBottom: "48px",
        }}
      >
        The benefits of yoga in your life{" "}
      </h1>
      {/* --------------------------------------------------------------------------------------------------------------------------cards yoga---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <div
        className="card22 mqcard22   cardsyoga  XRYOGACARDS"
        style={{ gap: "100px" }}
      >
        {/* 1 */}

        <div
          className="XRYCARD"
          style={{
            backgroundColor: "rgba(112, 194, 204, 1)",
            width: "188px",
            height: "168px",
            background: "rgba(100, 150, 200, 0.06)",
            marginLeft: "",
          }}
        >
          <div
            className="container d-flex justify-content-center"
            style={{ opacity: "rgba(100, 150, 200, 0.6)" }}
          >
            <img
              src="\ReuceStressIcon.png"
              style={{
                color: "background: #1F2326",
                opacity: "rgba(100, 150, 200, 0.6)",
                width: "96px",
                height: "96px",
              }}
              alt="my imgeklfmskldm"
            />
          </div>

          <p
            className="text-center pt-3"
            style={{ fontWeight: "700", fontSize: "16px" }}
          >
            Reduce Stress
          </p>
        </div>

        {/* 2 */}

        <div
          className="XRYCARD"
          style={{
            backgroundColor: "rgba(112, 194, 204, 1)",
            width: "188px",
            height: "168px",
            background: "rgba(100, 150, 200, 0.06)",
          }}
        >
          <div
            className="container  d-flex justify-content-center"
            style={{ opacity: "rgba(100, 150, 200, 0.6)" }}
          >
            <img
              src="\QualitySleepIcon.png"
              style={{
                color: "background: #1F2326",
                opacity: "rgba(100, 150, 200, 0.6)",
                width: "96px",
                height: "96px",
              }}
              alt="my imgeklfmskldm"
            />
          </div>

          <p
            className="text-center pt-3"
            style={{ fontWeight: "700", fontSize: "16px" }}
          >
            Quality Sleep
          </p>
        </div>

        {/* 3 */}

        <div
          className="XRYCARD"
          style={{
            backgroundColor: "rgba(112, 194, 204, 1)",
            width: "188px",
            height: "168px",
            background: "rgba(100, 150, 200, 0.06)",
          }}
        >
          <div
            className="container   d-flex justify-content-center "
            style={{ opacity: "rgba(100, 150, 200, 0.6)" }}
          >
            <img
              src="\RelieveAnxietyIcon.png"
              style={{
                color: "background: #1F2326",
                opacity: "rgba(100, 150, 200, 0.6)",
                width: "96px",
                height: "96px",
              }}
              alt="my imgeklfmskldm"
            />
          </div>

          <p
            className="text-center pt-3  XRYP"
            style={{ fontWeight: "700", fontSize: "16px" }}
          >
            Relieves Anxiety
          </p>
        </div>

        {/* 4 */}

        <div
          className="XRYCARD"
          style={{
            backgroundColor: "rgba(112, 194, 204, 1)",
            width: "188px",
            height: "168px",
            background: "rgba(100, 150, 200, 0.06)",
          }}
        >
          <div
            className="container   d-flex justify-content-center"
            style={{ opacity: "rgba(100, 150, 200, 0.6)" }}
          >
            <img
              src="\FightDepressionIcon.png"
              style={{
                color: "background: #1F2326",
                opacity: "rgba(100, 150, 200, 0.6)",
                width: "96px",
                height: "96px",
              }}
              alt="my imgeklfmskldm"
            />
          </div>

          <p
            className="text-center pt-3"
            style={{ fontWeight: "700", fontSize: "16px" }}
          >
            Fight Depression
          </p>
        </div>
      </div>

      <h1
        className="text-center  Carousal-h1 XRH1CAROUSAL1"
        style={{ fontWeight: "700", fontSize: "40px", paddingTop: "132px" }}
      >
        What members are saying
      </h1>

      <div
        className="cardrow1"
        id="cardrow"
        style={{ paddingTop: "48px", gap: "180px" }}
      >
        {/* =========================================================================================  cards carousal 1--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  */}

        {<Cards />}
      </div>

      <h1
        className="h1_carousal2  XRH1C2"
        style={{
          fontWeight: "700",
          fontSize: "40px",
          paddingTop: "132px",
          textAlign: "center",
          paddingBottom: "64px",
        }}
      >
        Meet our Yoga Instructors
      </h1>

      {/* --------------------------------------------------------------------------------------------------------------   carousal 2 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <section>
        <Carousal />
      </section>

      <h1
        className="XRUS22"
        style={{
          fontSize: "18px",
          fontWeight: "400px",
          textAlign: "center",
          marginBottom: "132px",
          position: "relative",

          bottom: "40px",
        }}
      >
        {" "}
        <u> Practice With US </u>
      </h1>

      <footer className="container-fluid  footer1  XRFOOTER1">
        <span
          className="pt-3   XRS"
          style={{
            fontSize: "20px",
            fontWeight: "bolder",
            marginLeft: "178px",
          }}
        >
          SERENITY<span style={{ color: "#70C2CC" }}>.</span>
        </span>

        <h1
          className="h1footer  XRH1FOOTER"
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginLeft: "168px",
            paddingTop: "24px",
          }}
        >
          Join the world of yoga
        </h1>

        <ul
          className="d-flex justify-content-center  XRULFOOTER"
          style={{
            listStyle: "none",
            paddingTop: "32px",
            width: "232px",
            marginLeft: "128px",
          }}
        >
          <li>
            <img src="\foundation_social-youtube.png" alt="" />
          </li>
          <li>
            <img src="\foundation_social-facebook.png" alt="" />
          </li>
          <li>
            <img src="\foundation_social-twitter.png" alt="" />
          </li>
          <li>
            <img src="\foundation_social-instagram.png" alt="" />
          </li>
          <li>
            <img src="\foundation_social-blogger.png" alt="" />
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Home;
