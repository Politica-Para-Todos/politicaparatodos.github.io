import { Col, Row, Button } from "antd"
import Countdown from 'react-countdown-now'
import Voting from '../../public/voting.svg';
import Image from 'next/image'
import CountdownRenderer from "./countdown-renderer";
import Link from "next/link";

const HomeCountdown = () => {
  return (
    <section className="home-voting-countdown section--grey">
      <Row>
        <Col span={24} lg={24}>
          <Image alt="voting" src={Voting} />
          <Countdown date="2022-01-30T09:00:00" renderer={CountdownRenderer} />
          <Link href='https://www.portaldoeleitor.pt/Default.aspx' target='_blank' rel='noopener noreferrer' >
            <Button className="button--grey" size="large">
              Como votar?
            </Button>
          </Link>
        </Col>
      </Row>
    </section >
  )
}

export default HomeCountdown;
