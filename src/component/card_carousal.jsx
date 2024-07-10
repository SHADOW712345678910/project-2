import "./card.css";

const Cards = () => {
  let Next = () => {
    let sliderMain = document.getElementById("slider-main1");

    let item = document.getElementsByClassName("item2");

    sliderMain.appendChild(item[0]);

 
  };

  let Prev = () => {
    var sliderMain = document.getElementById("slider-main1");

    var item = document.getElementsByClassName("item2");

    sliderMain.prepend(item[item.length - 1]);
  };

  return (
    <>
      <div
        className="slider-wrap  wrapmqslider  XRWRAP"
        style={{ width: "100%" }}
      >
        <div className="slider-main2  smain2   XRSMAIN2" id="slider-main1">
          <div
            className="item2 carditem1  XRITEM "
            style={{
              backgroundColor: "rgba(112, 194, 204, 1)",
              background: "rgba(100, 150, 200, 0.06)",
              marginLeft: "",
            }}
          >
            <div
              className="container d-flex flex-column  container_cards"
              style={{ width: "13.958vw" }}
            >
              <img
                style={{
                  width: "40px ",
                  alignSelf: "center",
                  paddingBottom: "24px",
                }}
                className="pt-5"
                src="\“.png"
                alt=""
              />
              <h1
                className="headercards   h1cards  xrh1c"
                style={{
                  fontWeight: "600",

                  textAlign: "center",
                }}
              >
                Easy access to all yoga trainings. Yoga helped me become a
                better person
              </h1>
            </div>

            <div
              className="conteiner d-flex flex-column  section-O "
              style={{ alignItems: "center" }}
            >
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  paddingTop: "64px",
                }}
              >
                Paula Drake
              </span>

              <span style={{ fontWeight: "300", fontSize: "12px" }}>Actor</span>

              <img
                className="cardimg    cardimg2 "
                style={{ paddingTop: "20px", width: "8.542vw" }}
                src="\meritt-thomas-aoQ4DYZLE_E-unsplash 1.png "
                alt=""
              />
            </div>
          </div>

          <div
            className=" carditem1 item2   XRITEM"
            style={{
              backgroundColor: "rgba(112, 194, 204, 1)",
              background: "rgba(100, 150, 200, 0.06)",
            }}
          >
            <div
              className="container d-flex flex-column   container_cards"
              style={{ width: "13.958vw", paddingTop: "13px" }}
            >
              <img
                style={{
                  width: "40px ",
                  alignSelf: "center",
                  paddingBottom: "10px",
                  marginBottom: "30px",
                }}
                className="pt-5"
                src="\“.png"
                alt=""
              />
              <h1
                className="headercards  h1cards xrh1c"
                style={{
                  fontWeight: "600",

                  textAlign: "center",
                }}
              >
                Practicing yoga with Serenity changed my life!
              </h1>
            </div>

            <div
              className="conteiner d-flex flex-column section-O "
              style={{ alignItems: "center" }}
            >
              <span
                className="catogry"
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  paddingTop: "64px",
                }}
              >
                Kate Castle
              </span>

              <span
                className="catogry"
                style={{ fontWeight: "300", fontSize: "12px" }}
              >
                Model
              </span>

              <img
                className="cardimg  cardimgcenter"
                style={{ paddingTop: "10px", width: "8.542vw" }}
                src="\carlos-lindner-zvZ-HASOA74-unsplash 1.png"
                alt=""
              />
            </div>
          </div>

          <div
            className="carditem1 item2  XRITEM"
            style={{
              backgroundColor: "rgba(112, 194, 204, 1)",
              background: "rgba(100, 150, 200, 0.06)",
            }}
          >
            <div
              className="container d-flex flex-column   container_cards"
              style={{ width: "13.958vw" }}
            >
              <img
                style={{
                  width: "40px ",
                  alignSelf: "center",
                  paddingBottom: "24px",
                }}
                className="pt-5"
                src="\“.png"
                alt=""
              />
              <h1
                className="headercards  h1cards  xrh1c"
                style={{
                  fontWeight: "600",

                  textAlign: "center",
                  overflow: "hidden",
                }}
              >
                Yoga is both attractive and highly adaptable. Thank you!
                Serenity.
              </h1>
            </div>

            <div
              className="conteiner d-flex flex-column section-O "
              style={{ alignItems: "center" }}
            >
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  paddingTop: "64px",
                }}
              >
                Edith Hunt
              </span>

              <span style={{ fontWeight: "300", fontSize: "12px" }}>
                Painter
              </span>

              <img
                className="cardimg   cardimg2 "
                style={{ paddingTop: "20px", width: "8.542vw" }}
                src="\christiana-rivers-O_XIvDy0pcs-unsplash 1.png"
                alt=""
              />
            </div>
          </div>

          <div className="btn-area1   btn_areamq1   XRAREA">
            <button
              type="button"
              className="slider-btnP    sliderbtnP1  XRBTNSP"
              onClick={Prev}
            >
              <i class="bi bi-arrow-left"></i>
            </button>
            <button
              id="btnN"
              type="button"
              className="slider-btnN    sliderbtnN1   XRBTNSN"
              onClick={Next}
            >
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
