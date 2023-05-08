import SkillItemEntry from './SkillItemEntry';

class HardSkillsEntry {
  constructor(
    public cloud: SkillItemEntry[],
    public frontEnd: SkillItemEntry[],
    public backEnd: SkillItemEntry[],
    public devOps: SkillItemEntry[],
    public tools: SkillItemEntry[]
  ) {}
}

export default HardSkillsEntry;
