import { any } from "prop-types";

export enum Legislature {
  Current = 'XV',
  XIV = 'XIV'
}

export const BASE_INFO_ENDPOINT = (legislature: string) => `https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394a626d5a76636d3168773666446f32386c4d6a424359584e6c4c3168574a5449775447566e61584e7359585231636d45765357356d62334a7459574e6862304a6863325659566c3971633239754c6e523464413d3d&fich=InformacaoBase${legislature}_json.txt&Inline=true`;
export const DEPUTY_ACTIVITIES_ENDPOINT = (legislature: string) => `https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394264476c32615752685a47556c4d6a426b62334d6c4d6a42455a5842316447466b62334d765746596c4d6a424d5a57647063327868644856795953394264476c32615752685a4756455a5842316447466b623168575832707a6232347564486830&fich=AtividadeDeputado${legislature}_json.txt&Inline=true`;

export const buildArray = (input: any) => input.constructor.name === 'Array' ? input : [input];
