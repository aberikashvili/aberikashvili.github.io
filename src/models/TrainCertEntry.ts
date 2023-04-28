class TrainCertEntry {
  constructor(
    public state: 'Done' | 'Attended' | 'Participated' | 'Preparing' | 'Planning' | 'Certified',
    public title: string,
    public location: 'Online' | { country: string; city: string },
    public icon?: string
  ) {}
}

export default TrainCertEntry;
