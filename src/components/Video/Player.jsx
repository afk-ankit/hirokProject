import { useState } from "react";
import "./Player.css";
import PlayerCourse from "./PlayerCourse";

const Player = () => {
  const [video, setVideo] = useState(
    "https://player.vimeo.com/video/883775791?h=3735cfbee6&title=0&byline=0&portrait=0"
  );
  return (
    <div className="player">
      <div>
        <iframe
          src={video}
          width="100%"
          height="380"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div>
          <h2>Video Title</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            laboriosam quidem, numquam, ipsum doloremque vitae magnam
            praesentium, dicta nam eos quis consectetur? Sequi, ipsa!
            Necessitatibus architecto vero unde. Ad velit quaerat aspernatur
            provident obcaecati!
          </p>
        </div>
      </div>
      <div>
        <h2 className="player_course_heading" style={{ marginBottom: "1rem" }}>
          Course Content
        </h2>
        <div>
          <PlayerCourse
            videoTitle={"First Video"}
            videoDuration={5}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/883775791?h=3735cfbee6&title=0&byline=0&portrait=0"
            }
          />

          <PlayerCourse
            videoTitle={"Second Video"}
            videoDuration={7}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/861153826?h=9cdd1907eb&color=0B8946&title=0&byline=0&portrait=0"
            }
          />
          <PlayerCourse
            videoTitle={"Third Video"}
            videoDuration={53}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/883322180?h=4692d2b962&title=0&byline=0&portrait=0"
            }
          />
          <PlayerCourse
            videoTitle={"First Video"}
            videoDuration={5}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/883775791?h=3735cfbee6&title=0&byline=0&portrait=0"
            }
          />

          <PlayerCourse
            videoTitle={"Second Video"}
            videoDuration={7}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/861153826?h=9cdd1907eb&color=0B8946&title=0&byline=0&portrait=0"
            }
          />
          <PlayerCourse
            videoTitle={"Third Video"}
            videoDuration={53}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/883322180?h=4692d2b962&title=0&byline=0&portrait=0"
            }
          />
          <PlayerCourse
            videoTitle={"First Video"}
            videoDuration={5}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/883775791?h=3735cfbee6&title=0&byline=0&portrait=0"
            }
          />

          <PlayerCourse
            videoTitle={"Second Video"}
            videoDuration={7}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/861153826?h=9cdd1907eb&color=0B8946&title=0&byline=0&portrait=0"
            }
          />
          <PlayerCourse
            videoTitle={"Third Video"}
            videoDuration={53}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/883322180?h=4692d2b962&title=0&byline=0&portrait=0"
            }
          />
          <PlayerCourse
            videoTitle={"First Video"}
            videoDuration={5}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/883775791?h=3735cfbee6&title=0&byline=0&portrait=0"
            }
          />

          <PlayerCourse
            videoTitle={"Second Video"}
            videoDuration={7}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/861153826?h=9cdd1907eb&color=0B8946&title=0&byline=0&portrait=0"
            }
          />
          <PlayerCourse
            videoTitle={"Third Video"}
            videoDuration={53}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/883322180?h=4692d2b962&title=0&byline=0&portrait=0"
            }
          />
          <PlayerCourse
            videoTitle={"First Video"}
            videoDuration={5}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/883775791?h=3735cfbee6&title=0&byline=0&portrait=0"
            }
          />

          <PlayerCourse
            videoTitle={"Second Video"}
            videoDuration={7}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/861153826?h=9cdd1907eb&color=0B8946&title=0&byline=0&portrait=0"
            }
          />
          <PlayerCourse
            videoTitle={"Third Video"}
            videoDuration={53}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/883322180?h=4692d2b962&title=0&byline=0&portrait=0"
            }
          />
          <PlayerCourse
            videoTitle={"First Video"}
            videoDuration={5}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/883775791?h=3735cfbee6&title=0&byline=0&portrait=0"
            }
          />

          <PlayerCourse
            videoTitle={"Second Video"}
            videoDuration={7}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/861153826?h=9cdd1907eb&color=0B8946&title=0&byline=0&portrait=0"
            }
          />
          <PlayerCourse
            videoTitle={"Third Video"}
            videoDuration={53}
            setVideo={setVideo}
            videoLink={
              "https://player.vimeo.com/video/883322180?h=4692d2b962&title=0&byline=0&portrait=0"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
