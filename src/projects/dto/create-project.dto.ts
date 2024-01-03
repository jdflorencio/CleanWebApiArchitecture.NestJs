export class CreateProjectDto {
  //objeto de tranferencia de dados
  name: string;
  description: string;
  started_at: Date | null;
  cancelled_at: Date | null;
  finished_at: Date | null;
  forecasted_at?: Date | null;
}
