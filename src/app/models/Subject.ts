export default class Subject {
  constructor(
    public id: number,
    public career_id: number,
    public name: string,
    public credits: number,
    public credits_percentage_required: number,
    public semester: number
  ) {}
}
