import { ObjectMapper } from "jackson-js";
import { Legislature, Deputy, DeputyDetails } from "../src/dtos/base-info";
import * as json from '../src/dtos/InformacaoBaseXV.json';

function Parlament(data: any) {

  const mapper = new ObjectMapper();
  const legislature: Legislature = mapper.parse<Legislature>(JSON.stringify(data), {mainCreator: () => [Legislature]})

  console.log(legislature);
  return (
    <div>
      <ul>
        {
          legislature.deputy.details.map((dep: DeputyDetails) => (
            // eslint-disable-next-line react/jsx-key
            <li accessKey={ dep.id.toString() }>{ dep.fullName } - { dep.parlamentaryGroup.details.acronym }</li>
          ))
        }
      </ul>
    </div>
  )
}

export async function getServerSideProps() {

  try {
    const request = await fetch('https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394a626d5a76636d3168773666446f32386c4d6a424359584e6c4c3168574a5449775447566e61584e7359585231636d45765357356d62334a7459574e6862304a6863325659566c3971633239754c6e523464413d3d&fich=InformacaoBaseXV_json.txt&Inline=true');
    const response = await request.json();

    //const response = JSON.stringify(json)

    return { props: response.Legislatura };
  } catch (error) {
    throw error;
  }
}

export default Parlament
