import { ObjectMapper } from "jackson-js";
import { DeputyActivities, DeputyActivity } from "../../dtos/deputy-activities/deputy-activities";

const Hemicycle = (props: any) => {
  const mapper = new ObjectMapper();

  const { deputyActivitiesResponse } = props;
  const deputyActivities: DeputyActivities = mapper.parse<DeputyActivities>(JSON.stringify(deputyActivitiesResponse.ArrayOfAtividadeDeputado), { mainCreator: () => [DeputyActivities] })
  const deputies = deputyActivities.activities.map((activity: DeputyActivity) => activity.deputy);
  const hemicyleDeputies = deputies.filter(dep => !dep.position);
  
  return (
    <div>
      {/* <div>
        <h3>Partidos:</h3>
        {
          legislature.parlamentaryGroup.details.map((party: ParlamentaryGroupDetails) => (
            <ol key={party.acronym}>{party.name}</ol>
          ))
        }
        <h3>Total: {legislature.parlamentaryGroup.details.length - 1}</h3>
      </div> */}
      {/* <div>
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
      </div> */}
      <div>
        <h3>Deputados</h3>
        <ul>
          {
            hemicyleDeputies.map(dep => 
              <li key={dep.id}>{dep.id} - {dep.chairId} - {dep.fullName} - {dep.parlamentaryGroup.details.acronym} - {dep.situation.deputySituationDetails[dep.situation.deputySituationDetails.length-1].description}</li>
            )
          }
        </ul>
        <h3>Total: { hemicyleDeputies.length }</h3>
      </div>
    </div>
  )
}

export default Hemicycle;
