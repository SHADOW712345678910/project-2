import "./all2.css";

const ALL = () => {
  const Videos = [
    {
      title: "15 Minute Guided Meditation To Find Peace In Uncertain Times",
      Img: "https://i.ytimg.com/vi/W19PdslW7iw/maxresdefault.jpg",
      Id: "#exampleModal",
      time: "16:5",
      video:
        "https://www.youtube.com/embed/W19PdslW7iw?si=YCQapzwXMa6ajjk6&mute=1",
      id2: "exampleModal",
    },
    {
      title: "Maria Villella: Surya Namaskara A of Ashtanga Yoga",

      Img: "https://i.ytimg.com/vi/hVKQotzu-DY/maxresdefault.jpg",
      Id: "#exampleModal1",
      time: "1:06",
      video:
        "https://www.youtube.com/embed/hVKQotzu-DY?si=AhSTIsusPeuHm3Ak&mute=1",
      id2: "exampleModal1",
    },
    {
      title: "35 min Full Body Yoga Workout | Hatha + Vinyasa Flow",

      Img: "https://i.ytimg.com/vi/c7sUpBo7-qE/sddefault.jpg?v=662f8000",
      Id: "#exampleModal2",
      time: "36:29",
      video:
        "https://www.youtube.com/embed/c7sUpBo7-qE?si=7ghunidA2xMY1dR3&mute=1",
      id2: "exampleModal2",
    },
    {
      title:
        "45 Min Power Yoga For Full Body Toning & Flexibility | Fiery Yoga Flow To Feel Fantastic",

      Img: "https://i.ytimg.com/vi/1jgHI4HKDyg/maxresdefault.jpg",
      Id: "#exampleModal3",
      time: "50:05",
      video:
        "https://www.youtube.com/embed/1jgHI4HKDyg?si=IN2sY-xisk1uNdvE&mute=1",
      id2: "exampleModal3",
    },
    {
      title: "15 Min Full Body Stretch for Sore Muscles & Tension Relief",

      Img: "https://i.ytimg.com/vi/TDTR9iNWW_0/maxresdefault.jpg",
      Id: "#exampleModal4",
      time: "16:28",
      video:
        "https://www.youtube.com/embed/TDTR9iNWW_0?si=w7BX1zYh_G0s5xL3&mute=1",
      id2: "exampleModal4",
    },
    {
      title: "20 Minute Restorative Yoga Full Body Stretch | 30 Days Of Yoga",

      Img: "https://i.ytimg.com/vi/o_XzGf_EDF0/maxresdefault.jpg",
      Id: "#exampleModal5",
      time: "22:21",
      video:
        "https://www.youtube.com/embed/o_XzGf_EDF0?si=wjHH7F9g5vLWrq_4&mute=1",
      id2: "exampleModal5",
    },
  ];

  return (
    <>
      <div className="card-container  videocards   video1">
        {Videos.map((item, index) => (
          <div
            key={index}
            className=" col-3 border-0 video2   sectionVID"
            style={{

              
          
              height: "256px",
              width: "110px",
              // width: "calc(50% - 10px)",
        
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
            <div className="card-body card_body "  style={{width:"260px", backgroundColor:"rgba(112, 194, 204, 1)", background: "rgba(100, 150, 200, 0.06)"   }}>
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
            className="modal fade videocontent  XRVIDEOCONTENT "
            id={item2.id2}
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ marginRight: "500px" }}
          >
            <div className="modal-dialog   " role="document">
              <div
                className=" modal-content bg-transparent  border-0   "
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
                  className="modal-body d-flex justify-content-center   bodyvideo  XRBODY  "
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

export default ALL;
