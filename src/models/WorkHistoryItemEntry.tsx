import ProjectItemEntry from './ProjectItemEntry';

class WorkHistoryItemEntry {
  constructor(
    public fromMonth: string,
    public fromYear: number,
    public toMonth: string | null,
    public toYear: number | null,
    public position: string,
    public routine: 'On-Site' | 'Remote' | 'Hybrid',
    public workType: 'Employment' | 'Freelance' | 'Contract',
    public company: string,
    public companyWebsite: string,
    public projects: ProjectItemEntry[]
  ) {}
}

export default WorkHistoryItemEntry;
