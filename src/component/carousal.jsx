import "./carousal2.css";

const Carousal = () => {
  

  var Prev = () => {
    var sliderMain2 = document.getElementById("slider-main2");

    var item = document.getElementsByClassName("item");

    sliderMain2.prepend(item[item.length - 1]);
  };

  var Next = () => {
    var sliderMain2 = document.getElementById("slider-main2");

    var item = document.getElementsByClassName("item");

    sliderMain2.append(item[0]);
  };

  return (
    <>
      <section className="product">
        <div className="container-fluid fluid">
          <div className="slider-wrap  wrap1   XRC2WRAP ">
            <div className="slider-main  main1  XRMAIN2" id="slider-main2">
              <div className="item  itemCaroual  XRITEM3">
                <div className="text  XRT">
                  <img
                    className="image  image2   XRIMG"
                    src="\Instructor1.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="item  itemCaroual  XRITEM3">
                <div className="text   XRT">
                  <img
                    className="image   image2    XRIMG"
                    src="\katee-lue-oPpSdpZgeb4-unsplash 1.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="item  itemCaroual  XRITEM3">
                <div className="text  XRT">
                  <img
                    className="image   image2   XRIMG"
                    src="\hristina-satalova-0N9hBusgVYU-unsplash 1.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="item  itemCaroual  XRITEMDELTE">
                <div className="text">
                  <img className="image  image2" src="\960x0.webp" alt="" />
                </div>
              </div>

              <div className="item  itemCaroual  XRITEMDELTE">
                <div className="text">
                  <img
                    className="image  image2"
                    src="\young-woman-practicing-yoga-home.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="item  itemCaroual  XRITEM3">
                <div className="text   XRT">
                  <img
                    className="image  image2   XRIMG"
                    src="\1000_F_207527715_0qxLzshltBZQ5YDr02WzdMYSYjzxe3PV.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="btn-area   btn_area2   XRAREA3">
              <button
                contenteditable="true"
                type="button"
                className="slider-btnPP   arrowbtnP"
                onClick={Prev}
              >
                <i class="bi bi-arrow-left"></i>
              </button>
              <button
                contenteditable="true"
                type="button"
                className="slider-btnNN   arrowbtnN"
                onClick={Next}
              >
                <i class="bi bi-arrow-right  right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousal;
