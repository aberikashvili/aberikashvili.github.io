import PersonalInfoItemEntry from './PersonalInfoItemEntry';

class PersonalInfoEntry {
  constructor(
    public location: PersonalInfoItemEntry,
    public address: PersonalInfoItemEntry,
    public born: PersonalInfoItemEntry,
    public skype: PersonalInfoItemEntry,
    public mobile: PersonalInfoItemEntry,
    public email: PersonalInfoItemEntry,
    public github: PersonalInfoItemEntry,
    public linkedin: PersonalInfoItemEntry,
    public website: PersonalInfoItemEntry
  ) {}
}

export default PersonalInfoEntry;
