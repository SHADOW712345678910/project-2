import "./all2.css";

const HathaYogas = () => {
  const Videos = [
    {
      title:
        "Hatha Yoga | Traditional Yoga Practice | Full Body Class (All Levels)",
      Img: "https://i.ytimg.com/vi/jsbAwAJz4tM/hqdefault.jpg?v=661ea968",
      Id: "#exampleModal",
      time: " 3:19 ",
      video:
        "https://www.youtube.com/embed/jsbAwAJz4tM?si=7fhLBhHGTWCHHc1M&mute=1",
      id2: "exampleModal",
    },
    {
      title:
        "Hatha Yoga for Beginners | 20 Min Gentle Beginners Yoga Class | ChriskaYoga",

      Img: "https://i.ytimg.com/vi/uH2N2gmjhl0/maxresdefault.jpg",
      Id: "#exampleModal1",
      time: "21:03",
      video:
        "https://www.youtube.com/embed/uH2N2gmjhl0?si=JtUBYE4hbCAUDe_-&mute=1",
      id2: "exampleModal1",
    },
    {
      title: "Hatha Yoga Flow Ft. Nupur Biswas I Hauterfly",

      Img: "https://i.ytimg.com/vi/qmJKwAVjsrs/maxresdefault.jpg",
      Id: "#exampleModal2",
      time: " 7:03",
      video:
        "https://www.youtube.com/embed/qmJKwAVjsrs?si=w6Vx9r4_PKefaR0R&mute=1",
      id2: "exampleModal2",
    },
    {
      title:
        "10 Minute Hatha Yoga Flow to FEEL INCREDIBLE! - Intermediate Yoga",

      Img: "https://i.ytimg.com/vi/33DNzHDEzyI/maxresdefault.jpg",
      Id: "#exampleModal3",
      time: " 8:23",
      video:
        "https://www.youtube.com/embed/33DNzHDEzyI?si=q0F9WTG7hDQ8ZN-k&mute=1",
      id2: "exampleModal3",
    },
    {
      title:
        "20 Min Hatha Yoga for Feeling INCREDIBLE | Experience What Yoga Is Really All About 🧘",

      Img: "https://i.ytimg.com/vi/f0umUZs1m7s/maxresdefault.jpg",
      Id: "#exampleModal4",
      time: "23:35",
      video:
        "https://www.youtube.com/embed/f0umUZs1m7s?si=6EY6u0OrHk-L8txz&mute=1",
      id2: "exampleModal4",
    },
    {
      title: "20 Min Hatha Yoga Flow (Intermediate Yoga)",

      Img: "https://i.ytimg.com/vi/ILfVjpt3no8/maxresdefault.jpg",
      Id: "#exampleModal5",
      time: "22:23",
      video:
        "https://www.youtube.com/embed/ILfVjpt3no8?si=7peIPhtr3K6CqSqt&mute=1",
      id2: "exampleModal5",
    },
  ];

  return (
    <>
      <div className="card-container  videocards video1">
        {Videos.map((item, index) => (
          <div
            key={index}
            className=" col-3 border-0 video2"
            style={{
             
              height: "256px",
              width: "110px",
              marginBottom: "50px",
            }}
            data-toggle="modal"
            data-target={item.Id}
          >
            <img
              className="card-img  mgiamge"
              src={item.Img}
              alt="Card image cap"
              style={{ height: "168px", width: "258px" }}
            />
            <div class="card-img-overlay">
              <span
                className="badge badge-dark"
                style={{ marginTop: "120px" }}
              >
                {item.time}
              </span>
            </div>
            <div className="card-body card_body"  style={{width:"260px", backgroundColor:"rgba(112, 194, 204, 1)", background: "rgba(100, 150, 200, 0.06)"   }} >
              <p className="card-text " style={{ fontWeight: "bolder" }}>
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <>
        {Videos.map((item2, index) => (
          <div
            className="modal fade  videocontent  XRVIDEOCONTENT"
            id={item2.id2}
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ marginRight: "500px" }}
          >
            <div className="modal-dialog" role="document">
              <div
                className=" modal-content bg-transparent  border-0"
                style={{
                  height: "550px",
                  width: "1000px",
                  marginRight: "500px",
                }}
              >
                <div className="close XRCLOSE" style={{ marginRight: "50px" }}>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <button
                      className="bg-danger btn-danger p-3"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </button>
                </div>
                <div
                  className="modal-body d-flex justify-content-center  XRBODY"
                  style={{ height: "550px", width: "1000px" }}
                >
                  <iframe
                  className="videoyoutube  XRVIDEOYOUTUBE"
                    style={{ height: "550px", width: "1000px" }}
                    src={item2.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    </>
  );
};

export default HathaYogas;
