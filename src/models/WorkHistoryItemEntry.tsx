import ProjectItemEntry from './ProjectItemEntry';

class WorkHistoryItemEntry {
  public id = '';

  constructor(
    public fromMonth: string,
    public fromYear: number,
    public toMonth: string | null,
    public toYear: number | null,
    public position: string,
    public routine: 'On-Site' | 'Remote' | 'Hybrid' | 'Remote Part-Time',
    public workType: 'Full-Time Employment' | 'Freelance' | 'Contract',
    public company: string,
    public companyWebsite: string,
    public projects: ProjectItemEntry[]
  ) {
    this.id = `${fromYear}-${fromMonth}-${company}-${position}`
      .replace(/ /gi, '-')
      .replace(/[\(\),]/gi, '')
      .toLowerCase();
  }
}

export default WorkHistoryItemEntry;
