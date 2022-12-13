import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import YouTubePlayer from "react-player/youtube";
// import YouTubePlayer from "react-player/lib/players/YouTube";
import VideoMask from "../../../public/video_mask.jpg";
import ReactPlayer from "react-player/youtube";
import { YOUTUBE_VIDEO_EP1, YOUTUBE_VIDEO_EP2, YOUTUBE_VIDEO_EP3, YOUTUBE_VIDEO_EP4 } from "../../utils/constants";

interface Video {
  url: string;
  caption: string;
}

const videos: Video[] = [
  {
    url: YOUTUBE_VIDEO_EP1,
    caption:
      "Mas afinal para que serve votar? Este é o primeiro de uma série de vídeos que explicam como funcionam as eleições legislativas e a nossa Assembleia da República.",
  },
  {
    url: YOUTUBE_VIDEO_EP2,
    caption:
      "Em semana de eleições continuamos a desconstruir o que está em causa no próximo dia 6 de Outubro, com este episódio a focar-se na Assembleia da República e os Círculos Eleitorais.",
  },
  {
    url: YOUTUBE_VIDEO_EP3,
    caption:
      "Depois de no último vídeo nos termos debruçado sobre a Assembleia da República e os círculos eleitorais, neste episódio hoje ficarás a saber como se convertem os votos em mandatos.",
  },
  {
    url: YOUTUBE_VIDEO_EP4,
    caption:
      "No quarto e último episódio desta série, explicamos-te como é que, após as eleições legislativas, é formado o Executivo.",
  },
];

const renderEpisodeButtons = (currentEpisode: number, setState: any) => {
  return videos.map((video: Video, index: number) => {
    let classNames = "home-videos__episode-button";

    if (currentEpisode === index) {
      classNames += " button--grey";
    } else {
      classNames += " button--white";
    }
    return (
      <Button
        key={`episode-${index}`}
        className={classNames}
        onClick={() => setState({ currentEpisode: index })}
      >
        Ep. {index + 1}
      </Button>
    );
  });
};

const HomeMedia = () => {
  const [media, setMedia] = useState({
    currentEpisode: 0,
    hasMounted: false,
  });

  useEffect(() => {
    setMedia((prevMedia) => ({
      ...prevMedia,
      hasMounted: true,
    }));
  }, []);

  if (!media.hasMounted) {
    return null;
  }

  const { url, caption } = videos[media.currentEpisode];

  return (
    <section className="home-videos">
      <Row>
        <Col span={24} className="home-videos-title">
          <h2>Como funcionam as Eleições Legislativas</h2>
        </Col>
        <Col span={24} lg={18}>
          <div className="home-videos-player-wrapper">
            <ReactPlayer
              className="home-videos-react-player"
              url={`https://www.youtube.com/embed/up0Gfd5c0cM?autoplay=0&mute=0&controls=1&origin=https%3A%2F%2Fwww.politicaparatodos.pt&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1`}
              light={VideoMask.src}
              width="100%"
              height="100%"
              controls={true}
              pip={true}
            />
          </div>
        </Col>
        <Col span={24} md={16}>
          <p>{caption}</p>
        </Col>
        <Col>{renderEpisodeButtons(media.currentEpisode, setMedia)}</Col>
      </Row>
    </section>
  );
};

export default HomeMedia;
