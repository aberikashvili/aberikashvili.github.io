import SkillItemEntry from './SkillItemEntry';

class ProjectItemEntry {
  constructor(
    public titles: string[],
    public responsibilities: string[],
    public stack?: SkillItemEntry[]
  ) {}
}

export default ProjectItemEntry;
