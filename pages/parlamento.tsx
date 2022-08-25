import { ObjectMapper } from "jackson-js";
import { GetStaticProps, NextPage } from "next";
import { Legislature, DeputyDetails } from "../src/dtos/base-info";

const Parlament: NextPage = (data: any) => {
  
  if (!data.null) {
    return <></>
  }
  
  const mapper = new ObjectMapper();
  const legislature: Legislature = mapper.parse<Legislature>(JSON.stringify(data.legislature), { mainCreator: () => [Legislature] })

  return (
    <div>
      <div>DEPUTIES - PARTIES</div>
      <ul>
        {
          legislature.deputy.details.map((dep: DeputyDetails) => (
            // eslint-disable-next-line react/jsx-key
            <li accessKey={dep.id.toString()}>{dep.fullName} - {dep.position?.details.description}</li>
          ))
        }
      </ul>
      <div>HEMICICLO</div>
      <div>
        <ul>
          {
            legislature.parlamentaryGroup.details.map((party: any) => (
              // eslint-disable-next-line react/jsx-key
              <li accessKey={party.acronym}>{party.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const baseInfoRequest = await fetch('https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394a626d5a76636d3168773666446f32386c4d6a424359584e6c4c3168574a5449775447566e61584e7359585231636d45765357356d62334a7459574e6862304a6863325659566c3971633239754c6e523464413d3d&fich=InformacaoBaseXV_json.txt&Inline=true');
  const baseInfoResponse = await baseInfoRequest.json();

  const deputyActivitiesRequest = await fetch('https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394264476c32615752685a47556c4d6a426b62334d6c4d6a42455a5842316447466b62334d765746596c4d6a424d5a57647063327868644856795953394264476c32615752685a4756455a5842316447466b623168575832707a6232347564486830&fich=AtividadeDeputadoXV_json.txt&Inline=true');
  const deputyActivitiesResponse = await deputyActivitiesRequest.json();

  const { status } = baseInfoResponse;

  if (status !== 201) {
    return { props: {
      null: null
    } }
  }

  return {
    props: {
      legislature: baseInfoResponse.Legislatura,
      deputyActivities: deputyActivitiesResponse.ArrayOfAtividadeDeputado
    }
  }
}

export default Parlament
