import "./all2.css";

const AshtangaYogas = () => {
  const Videos = [
    {
      title: "The Impossible | Ashtanga Yoga Demo by Laruga Glaser",
      Img: "https://i.ytimg.com/vi/SZCxKjgReQ4/maxresdefault.jpg",
      Id: "#exampleModal",
      time: "4:58",
      video:
        "https://www.youtube.com/embed/SZCxKjgReQ4?si=wBJyosnswYPXwGM0mute=1",
      id2: "exampleModal",
    },
    {
      title: "Ashtanga Yoga Half Primary Series with Deepika Mehta",

      Img: "https://i.ytimg.com/vi/pm7tY6NSmng/maxresdefault.jpg",
      Id: "#exampleModal1",
      time: "57:54",
      video:
        "https://www.youtube.com/embed/pm7tY6NSmng?si=L7a2xUoJ60Yft2Xlmute=1",
      id2: "exampleModal1",
    },
    {
      title:
        "20 Min Ashtanga Inspired Yoga | Total Body Yoga Flow For Flexibility, Strength, & Peace ☮",

      Img: "https://i.ytimg.com/vi/LgYhObQSwdY/maxresdefault.jpg",
      Id: "#exampleModal2",
      time: "21:59",
      video:
        "https://www.youtube.com/embed/LgYhObQSwdY?si=EhVpm7__nTkTS01o&mute=1",
      id2: "exampleModal2",
    },
    {
      title: "Ashtanga Yoga Full Primary Series with Laruga Glaser",

      Img: "https://i.ytimg.com/vi/IyQuAJgpozs/maxresdefault.jpg",
      Id: "#exampleModal3",
      time: "1:26:46",
      video:
        "https://www.youtube.com/embed/IyQuAJgpozs?si=k4O7954TuwAUrV5G&mute=1",
      id2: "exampleModal3",
    },
    {
      title: "Ashtanga Yoga Full Intermediate Series with Laruga Glaser",

      Img: "https://i.ytimg.com/vi/8gECJx6YWCI/sddefault.jpg",
      Id: "#exampleModal4",
      time: " 1:19:20",
      video:
        "https://www.youtube.com/embed/8gECJx6YWCI?si=k6dfvvsEJBR08l2l&mute=1",
      id2: "exampleModal4",
    },
    {
      title: "1 Hour Ashtanga Yoga Class (Honor and Respect)",

      Img: "https://i.ytimg.com/vi/_e2Xcij207w/maxresdefault.jpg",
      Id: "#exampleModal5",
      time: "56:49",
      video:
        "https://www.youtube.com/embed/_e2Xcij207w?si=thu7AvntEm-4SHDy&mute=1",
      id2: "exampleModal5",
    },
  ];

  return (
    <>
      <div className="card-container videocards video1 ">
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
            <div className="card-body  card_body"     style={{width:"260px", backgroundColor:"rgba(112, 194, 204, 1)", background: "rgba(100, 150, 200, 0.06)"   }}>
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
            className="modal fade videocontent   XRVIDEOCONTENT "
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
                <div className="close   XRCLOSE " style={{ marginRight: "50px" }}>
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
                  className="videoyoutube   XRVIDEOYOUTUBE"
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

export default AshtangaYogas;
