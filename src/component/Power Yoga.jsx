import "./all2.css";

const PowerYogas = () => {
  const Videos = [
    {
      title: "30-Minute Power Yoga Flow For Tight Abs and a Toned Butt",
      Img: "https://i.ytimg.com/vi/S9p5yhE6_fk/hqdefault.jpg",
      Id: "#exampleModal",
      time: "28:49",
      video:
        "https://www.youtube.com/embed/S9p5yhE6_fk?si=MgrUsy6we7tZPmm8&mute=1",
      id2: "exampleModal",
    },
    {
      title: "20-Minute Intermediate Power Yoga",

      Img: "https://i.ytimg.com/vi/ZbtVVYBLCug/maxresdefault.jpg",
      Id: "#exampleModal1",
      time: "23:30",
      video:
        "https://www.youtube.com/embed/ZbtVVYBLCug?si=GxkK6JXetz--WI7I&mute=1",
      id2: "exampleModal1",
    },
    {
      title:
        "30 Min Morning Yoga Flow | Stretch, Reconnect, & Start Your Day Right",

      Img: "https://i.ytimg.com/vi/jXYEGJAovDc/hqdefault.jpg",
      Id: "#exampleModal2",
      time: "32:01",
      video:
        "https://www.youtube.com/embed/jXYEGJAovDc?si=F6d9C1rQQWEaREk_&mute=1",
      id2: "exampleModal2",
    },
    {
      title:
        "30 Min Vinyasa Yoga Flow | Full Body Stretch and Strength Practice",

      Img: "https://i.ytimg.com/vi/roX0DUklnEo/maxresdefault.jpg",
      Id: "#exampleModal3",
      time: "34:01",
      video:
        "https://www.youtube.com/embed/roX0DUklnEo?si=FZrKxOCIXRWiLN9w&mute=1",
      id2: "exampleModal3",
    },
    {
      title:
        "Power Yoga Workout | 15 Min Yoga Class To Bring You Back To Yourself Gloriously",

      Img: "https://i.ytimg.com/vi/nOrfps-dtac/maxresdefault.jpg",
      Id: "#exampleModal4",
      time: "18:31",
      video:
        "https://www.youtube.com/embed/nOrfps-dtac?si=ACJ90tUbMYqnxYsg&mute=1",
      id2: "exampleModal4",
    },
    {
      title:
        "10 Min Morning Power Yoga | Get Fit, Lose Weight, Start Your Every Day Great",

      Img: "https://i.ytimg.com/vi/5sxRR78b5D0/maxresdefault.jpg",
      Id: "#exampleModal5",
      time: "12:27",
      video:
        "https://www.youtube.com/embed/5sxRR78b5D0?si=-XrAJVdbyloHoId_&mute=1",
      id2: "exampleModal5",
    },
  ];

  return (
    <>
      <div className="card-container  videocards  video1 ">
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
              className="card-img   mgiamge"
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
            <div className="card-body  card_body"    style={{width:"260px", backgroundColor:"rgba(112, 194, 204, 1)", background: "rgba(100, 150, 200, 0.06)"   }}   >
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
                <div className=" close XRCLOSE" style={{ marginRight: "50px" }}>
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

export default PowerYogas;










