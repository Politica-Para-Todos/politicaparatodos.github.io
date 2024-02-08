import { Alert, Card, Col, Row, Table } from 'antd';

const debateDates = [
  {
    key: '1',
    data: '2 de Janeiro',
    partidos: 'PS x Livre',
    canal: 'RTP1/RTP3'
  },
  {
    key: '2',
    data: '2 de Janeiro',
    partidos: 'BE x Chega',
    canal: 'SIC Notícias'
  },
  {
    key: '3',
    data: '3 de Janeiro',
    partidos: 'PSD x Chega',
    canal: 'SIC'
  },
  {
    key: '4',
    data: '4 de Janeiro',
    partidos: 'BE x Livre',
    canal: 'SIC Notícias'
  },
  {
    key: '5',
    data: '4 de Janeiro',
    partidos: 'PS x CDU',
    canal: 'TVI'
  },
  {
    key: '6',
    data: '4 de Janeiro',
    partidos: 'CDS x PAN',
    canal: 'RTP3'
  },
  {
    key: '7',
    data: '5 de Janeiro',
    partidos: 'CDS x IL',
    canal: 'RTP3'
  },
  {
    key: '8',
    data: '5 de Janeiro',
    partidos: 'PSD x BE',
    canal: 'SIC'
  },
  {
    key: '9',
    data: '5 de Janeiro',
    partidos: 'Chega x Livre',
    canal: 'CNN Portugal'
  },
  {
    key: '10',
    data: '6 de Janeiro',
    partidos: 'PS x Chega',
    canal: 'RTP1/RTP3'
  },
  {
    key: '11',
    data: '6 de Janeiro',
    partidos: 'BE x IL',
    canal: 'SIC Notícias'
  },
  {
    key: '21',
    data: '7 de Janeiro',
    partidos: 'IL x PAN',
    canal: 'SIC Notícias'
  },
  {
    key: '12',
    data: '7 de Janeiro',
    partidos: 'PSD x CDS',
    canal: 'TVI'
  },
  {
    key: '13',
    data: '8 de Janeiro',
    partidos: 'PS x PAN',
    canal: 'TVI'
  },
  {
    key: '14',
    data: '8 de Janeiro',
    partidos: 'PSD x Livre',
    canal: 'RTP1/RTP3'
  },
  {
    key: '15',
    data: '9 de Janeiro',
    partidos: 'PS x CDS',
    canal: 'SIC'
  },
  {
    key: '16',
    data: '9 de Janeiro',
    partidos: 'IL x Chega',
    canal: 'RTP3'
  },
  {
    key: '17',
    data: '9 de Janeiro',
    partidos: 'PAN x Livre',
    canal: 'SIC Notícias'
  },
  {
    key: '18',
    data: '10 de Janeiro',
    partidos: 'BE x PAN',
    canal: 'RTP3'
  },
  {
    key: '19',
    data: '10 de Janeiro',
    partidos: 'PSD x IL',
    canal: 'SIC'
  },
  {
    key: '20',
    data: '10 de Janeiro',
    partidos: 'CDS x Livre',
    canal: 'CNN'
  },
  {
    key: '22',
    data: '11 de Janeiro',
    partidos: 'PS x BE',
    canal: 'RTP1/RTP3'
  },
  {
    key: '23',
    data: '12 de Janeiro',
    partidos: 'CDS x Chega',
    canal: 'CNN'
  },
  {
    key: '24',
    data: '12 de Janeiro',
    partidos: 'PSD x CDU',
    canal: 'SIC'
  },
  {
    key: '25',
    data: '12 de Janeiro',
    partidos: 'IL x Livre',
    canal: 'SIC Notícias'
  },
  {
    key: '26',
    data: '13 de Janeiro',
    partidos: 'PS x PSD',
    canal: 'RTP1/SIC/TVI'
  },
  {
    key: '27',
    data: '14 de Janeiro',
    partidos: 'PAN x Chega',
    canal: 'SIC Notícias'
  },
  {
    key: '28',
    data: '14 de Janeiro',
    partidos: 'PS x IL',
    canal: 'TVI'
  },
  {
    key: '29',
    data: '14 de Janeiro',
    partidos: 'BE x CDS',
    canal: 'RTP3'
  },
  {
    key: '30',
    data: '15 de Janeiro',
    partidos: 'PSD x PAN',
    canal: 'RTP1/RTP3'
  },
  {
    key: '31',
    data: '17 de Janeiro',
    partidos: 'Partidos com assento parlamentar (incluindo Livre)',
    canal: 'RTP1/RTP3'
  },
  {
    key: '32',
    data: '18 de Janeiro',
    partidos: 'Partidos sem assento parlamentar',
    canal: 'RTP1/RTP3'
  },
  {
    key: '33',
    data: '20 de Janeiro',
    partidos: 'Partidos com assento parlamentar (incluindo Livre)',
    canal: 'RR/Antena1/TSF'
  },
]

const tableColumns = [
  {
    title: 'Data',
    dataIndex: 'data',
    key: 'data',
  },
  {
    title: 'Partidos',
    dataIndex: 'partidos',
    key: 'partidos',
  },
  {
    title: 'Canal',
    dataIndex: 'canal',
    key: 'canal',
  },
]

const DebatesPage = () => {
  return (
    <section className='debates'>
      <Row typeof='flex' justify='space-between' align='middle'>
        <Col span={24} lg={24} className='home-our-mission-text'>
          <Alert
            message='Atenção'
            description='Esta é a programação conhecida de momento. A agenda poderá ser alterada pelos partidos e televisões.'
            type='info'
          />
        </Col>
      </Row>
      <Row typeof='flex' justify='space-between' align='middle' className='debates_list'>
        <Col span={24} lg={24} className='home-our-mission-text'>
          <h1>Debates televisivos</h1>
          <p>Participam nos debates televisivos todos os partidos que, nas últimas eleições Legislativas (2019), conquistaram lugares parlamentares em várias rondas frente a frente. No final, ainda serão realizados dois debates com todos os partidos eleitos em 2019 (televisão e rádio) e outro com partidos não eleitos há dois anos.</p>
          <p>Subscreve o nosso calendário com horários dos debates actualizados:
            <a
              href='https://bit.ly/debates22-PPT'
              target='_blank'
              rel='noopener noreferrer'> Calendário Google de debates 2022
            </a>
          </p>
          <Table dataSource={debateDates} columns={tableColumns} className='debates__table' />
          <Card title='Perdeste um debate?'>
            <p>A RTP Play disponibiliza todos os debates independentemente do canal que tenha exibido. Aproveita para rever o debate que procuras:</p>
            <ul>
              <li>
                <a
                  href='https://www.rtp.pt/play/p9711/legislativas-2022-debates-rtp'
                  target='_blank'
                  rel='noopener noreferrer'>Debates RTP/RTP3
                </a>
              </li>
              <li>
                <a
                  href='https://www.rtp.pt/play/p9787/legislativas-2022-debates-sic-sic-noticias'
                  target='_blank'
                  rel='noopener noreferrer'>Debates SIC/SIC Notícias
                </a>
              </li>
              <li>
                <a
                  href='https://www.rtp.pt/play/p9788/legislativas-2022-debates-tvi-cnn'
                  target='_blank'
                  rel='noopener noreferrer'>Debates TVI/CNN Portugal
                </a>
              </li>
              <li>
                <a
                  href='https://www.rtp.pt/play/p9596/eleicoes-legislativas-2022-entrevistas-lideres-partidarios'
                  target='_blank'
                  rel='noopener noreferrer'>Entrevista a lideres partidários
                </a>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default DebatesPage;
