import ProjectItemEntry from './ProjectItemEntry';

class WorkHistoryItemEntry {
  constructor(
    public fromMonth: string,
    public fromYear: number,
    public toMonth: string,
    public toYear: number,
    public position: string,
    public routing: 'On-Site' | 'Remote' | 'Hybrid',
    public company: string,
    public companyWebsite: string,
    public projects: ProjectItemEntry[]
  ) {}
}

export default WorkHistoryItemEntry;
