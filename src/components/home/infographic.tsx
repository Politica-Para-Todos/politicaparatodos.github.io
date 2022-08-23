import { Col } from "antd"
import Image from "next/image"
import InfographicSvg from '../../public/infographic.svg'

const Infographic = () => {
  return (
    <Col span={24} lg={10} className="home-our-mission-img">
      <Image alt="infographic" src={InfographicSvg} />
    </Col>
  )
}

export default Infographic;
