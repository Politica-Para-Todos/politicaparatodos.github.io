import { ObjectMapper } from "jackson-js";
import { DeputyDetails, Legislature, ParlamentaryGroupDetails } from "../../dtos/base-info";

const Hemicycle = (props: any) =>{
  const mapper = new ObjectMapper();

  const { baseInfoResponse } = props;
  const legislature: Legislature = mapper.parse<Legislature>(JSON.stringify(baseInfoResponse.Legislatura), { mainCreator: () => [Legislature] })

  return (
    <div>
      <div>
        <h3>Partidos:</h3>
        {
          legislature.parlamentaryGroup.details.map((party: ParlamentaryGroupDetails) => (
            <ol key={party.acronym}>{party.name}</ol>
          ))
        }
        <h3>Total: {legislature.parlamentaryGroup.details.length-1}</h3>
      </div>
      <div>
        <h3>Parlamentares</h3>
        <ul>
          {
            legislature.deputy.details.map((deputy: DeputyDetails) => {
              if (deputy.position) {
                return <li key={deputy.id}>{deputy.fullName} - {deputy.position.details.description} - {deputy.parlamentaryGroup.details.acronym}</li>
              }
            })
          }
        </ul>
        <h3>Total: {legislature.deputy.details.filter(deputy => deputy.position).length}</h3>
      </div>
      <div>
        <h3>Deputados</h3>
        <ul>
          {
            legislature.deputy.details.map((deputy: DeputyDetails) => {
              if (!deputy.position && !deputy.situation.deputySituationDetails.endDate) {
                return <li key={deputy.id}>{deputy.fullName} - {deputy.parlamentaryGroup.details.acronym}</li>
              }
            })
          }
        </ul>
        <h3>Total: {legislature.deputy.details.filter(deputy => !deputy.position && !deputy.situation.deputySituationDetails.endDate).length}</h3>
      </div>
    </div>
  )
}

export default Hemicycle;
