export interface IAgendaProps {
  stationName: string;
  companyName: string;
  companyEmailDomain: string;
  playerShipName: string;
}

export interface IAgenda {
  Agenda: (props: IAgendaProps) => React.ReactNode;
  id: string;
  title: string;
}
