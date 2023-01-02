import Image from "next/image";
import Link from "next/link";
import { Col, Row, Button } from "antd";
import Countdown from "react-countdown-now";
import CountdownRenderer from "../countdown-renderer";
import { PORTAL_ELEITOR_URL } from "../../utils/constants";
import { VotingImage } from "../logos";

const HomeCountdown = () =>
  <section className="home-voting-countdown section--grey">
    <Row>
      <Col span={24} lg={24}>
        <VotingImage />
        <Countdown date="2022-01-30T09:00:00" renderer={CountdownRenderer} />
        <Link
          href={PORTAL_ELEITOR_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="button--grey" size="large">
            Como votar?
          </Button>
        </Link>
      </Col>
    </Row>
  </section>

export default HomeCountdown;
