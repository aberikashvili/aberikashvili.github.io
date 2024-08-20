import ProjectItemEntry from './ProjectItemEntry';

export type Month =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec';

class WorkHistoryItemEntry {
  public id = '';

  constructor(
    public fromMonth: Month,
    public fromYear: number,
    public toMonth: Month | null,
    public toYear: number | null,
    public position: string,
    public routine: 'On-Site' | 'Remote' | 'Hybrid' | 'Remote Part-Time',
    public workType:
      | 'Full-Time Employment'
      | 'Freelance'
      | 'Freelance, One-Time Project'
      | 'Contract',
    public company: string,
    public companyWebsite: string,
    public projects: ProjectItemEntry[]
  ) {
    this.id = `${fromYear}-${fromMonth}-${company}-${position}`
      .replace(/ /gi, '-')
      .replace(/[\(\),]/gi, '')
      .toLowerCase();
  }

  public period() {
    const dateFrom = new Date(`${this.fromYear}-${this.fromMonth}-28`).getTime();
    const dateTo = (
      this.toYear && this.toMonth ? new Date(`${this.toYear}-${this.toMonth}-1`) : new Date()
    ).getTime();
    const diffTime = Math.abs(dateTo - dateFrom);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 25) {
      return `${diffDays} days`;
    }

    if (diffDays < 360) {
      const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
      return `${diffMonths} months`;
    }

    const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));

    return `${diffYears} years`;
  }
}

export default WorkHistoryItemEntry;
