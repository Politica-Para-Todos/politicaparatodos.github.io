'use client';

import { Button, Col, Row } from "antd";
import Link from "next/link";
import Countdown from "react-countdown-now";
import { VotingImage } from "../global/logos";
import CountdownRenderer from "./countdown-renderer";

const HomeCountdown = () => {
  const legislativeElectionDate = new Date(2024, 2, 10);

  return (
    <section className="home-voting-countdown section--grey">
      <Row>
        <Col span={24} lg={24}>
          <VotingImage />
          <Countdown date={legislativeElectionDate} renderer={CountdownRenderer} />
          <Link
            href={"PORTAL_ELEITOR_URL"}
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
  )
}

export default HomeCountdown;
