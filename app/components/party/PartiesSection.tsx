import PartiesGrid from "./PartiesGrid";

export interface Party {
  id: string,
  acronym: string,
  name: string,
  logoFileName: string
}

const PartiesSection = async () => {
  // let sortedParties: HomePageParty[];
  const parties = await getAllParties();

  return (
    <section
      id="parties-section"
      className="section-home-parties-list section--grey"
    >
      <PartiesGrid parties={parties} />
    </section>
  );
};

export const getAllParties = async (): Promise<Party[]> => {
  return Promise.resolve<Party[]>([
    {
      id: 'id-1',
      acronym: 'PSD',
      logoFileName: 'psd-logo.jpg',
      name: 'Partido Social Democrata'
    },
    {
      id: 'id-2',
      acronym: 'PS',
      logoFileName: 'PS_logo.png',
      name: 'Partido Socialista'
    }
  ]);
}

export default PartiesSection;
