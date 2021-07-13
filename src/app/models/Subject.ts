export default class Subject {
  especial: string;
  def: string;
  constructor(
    public id: number,
    public career_id: number,
    public dpto: string,
    public name: string,
    public nivel: string,
    public semester: number,
    public credits: number,
    public credits_percentage_required: number
  ) {
    const especial = name?.split("(*)")[0].split("-")[1];
    this.especial = especial;
    this.def = name?.includes('(*)') ? '(*)': '';

    if (especial){
      this.especial = name?.split("(*)")[0].split("-")[0];
    }
  }
}
