import SkillItemEntry from './SkillItemEntry';

class ProjectItemEntry {
  constructor(
    public titles: string[],
    public description: string | null,
    public responsibilities: string[],
    public stack?: SkillItemEntry[]
  ) {}
}

export default ProjectItemEntry;
