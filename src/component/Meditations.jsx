import "./all2.css";

const Meditation = () => {
  const Videos = [
    {
      title:
        "15 Min Guided Meditation For Healing & Recovery | Your Self-Healing Reset",
      Img: "https://i.ytimg.com/vi/7g96Zq9NSqo/maxresdefault.jpg",
      Id: "#exampleModal",
      time: "15:47",
      video:
        "https://www.youtube.com/embed/7g96Zq9NSqo?si=CnU36GdCrWfzmMBM&mute=1",
      id2: "exampleModal",
    },
    {
      title:
        "15 Minute Guided Meditation | Strength & Grounding In Stressful Times",

      Img: "https://i.ytimg.com/vi/z0GtmPnqAd8/maxresdefault.jpg",
      Id: "#exampleModal1",
      time: "15:28",
      video:
        "https://www.youtube.com/embed/z0GtmPnqAd8?si=-pJLNR2QW0U_lfQf&mute=1",
      id2: "exampleModal1",
    },
    {
      title:
        "Guided Morning Meditation | 10 Minutes To Start Every Day Perfectly ☮",

      Img: "https://i.ytimg.com/vi/FGO8IWiusJo/maxresdefault.jpg",
      Id: "#exampleModal2",
      time: "10:34",
      video:
        "https://www.youtube.com/embed/FGO8IWiusJo?si=U1uYwJ-JO8yWTL2H&mute=1",
      id2: "exampleModal2",
    },
    {
      title: "10-Minute Meditation For Healing",

      Img: "https://i.ytimg.com/vi/2FGR-OspxsU/maxresdefault.jpg",
      Id: "#exampleModal3",
      time: "10:15",
      video:
        "https://www.youtube.com/embed/2FGR-OspxsU?si=gubX8NVJa2Y4zVWZ&mute=1",
      id2: "exampleModal3",
    },
    {
      title: "Guided Meditation for Inner Peace and Calm | Mindful Movement",

      Img: "https://i.ytimg.com/vi/_iGWdUTifIQ/maxresdefault.jpg",
      Id: "#exampleModal4",
      time: "16:38",
      video:
        "https://www.youtube.com/embed/_iGWdUTifIQ?si=Uew8hjeWmG2aG7i-&mute=1",
      id2: "exampleModal4",
    },
    {
      title:
        "Guided Morning Meditation | 10 Minutes To Start Each Day Perfectly",

      Img: "https://i.ytimg.com/vi/8_f7ltCNSAQ/maxresdefault.jpg",
      Id: "#exampleModal5",
      time: "11:01",
      video:
        "https://www.youtube.com/embed/8_f7ltCNSAQ?si=n-sGa6ujVo3WFX4f&mute=1",
      id2: "exampleModal5",
    },
  ];

  return (
    <>
      <div className="card-container  videocards  video1">
        {Videos.map((item, index) => (
          <div
            key={index}
            className=" col-3 border-0  video2"
            style={{

              height: "256px",
              width: "110px",
              marginBottom: "50px",
            }}
            data-toggle="modal"
            data-target={item.Id}
          >
            <img
              className="card-img   mgiamge "
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
            <div className="card-body   card_body "   style={{width:"260px", backgroundColor:"rgba(112, 194, 204, 1)", background: "rgba(100, 150, 200, 0.06)"   }}    >
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
            className="modal fade  videocontent XRVIDEOCONTENT"
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
                <div className="close XRCLOSE " style={{ marginRight: "50px" }}>
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
                  className="modal-body d-flex justify-content-center XRBODY"
                  style={{ height: "550px", width: "1000px" }}
                >
                  <iframe

className="videoyoutube XRVIDEOYOUTUBE"
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

export default Meditation;
