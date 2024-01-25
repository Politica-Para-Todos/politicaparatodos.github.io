import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { YOUTUBE_VIDEO_EP1, YOUTUBE_VIDEO_EP2, YOUTUBE_VIDEO_EP3, YOUTUBE_VIDEO_EP4 } from "../../src/utils/constants";

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

const HomeMedia = () => {
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [isPlayerHidden, setIsPlayerHidden] = useState(true);
  const { url, caption } = videos[currentEpisode];

  useEffect(() => {
    setIsPlayerHidden(false)
  }, []);

  if (isPlayerHidden) {
    return null;
  }

  return (
    <section className="home-videos">
      <Row>
        <Col span={24} className="home-videos-title">
          <h2>Como funcionam as Eleições Legislativas</h2>
        </Col>
        <Col span={24} lg={18} className="home-videos__wrapper">
          <ReactPlayer
            className="home-videos-react-player"
            url={url}
            controls
            pip
          />
        </Col>
        <Col span={24} md={16}>
          <p>{caption}</p>
        </Col>
        <Col>
          {videos.map((_, index) => {
            const buttonClassNames = ["home-videos__episode-button"];

            if (currentEpisode === index) {
              buttonClassNames.push("button--grey");
            } else {
              buttonClassNames.push("button--white");
            }

            return (
              <Button
                key={`episode-${index}`}
                className={buttonClassNames.join(" ")}
                onClick={() => setCurrentEpisode(index)}
              >
                Ep. {index + 1}
              </Button>
            );
          })}
        </Col>
      </Row>
    </section>
  );
};

export default HomeMedia;
