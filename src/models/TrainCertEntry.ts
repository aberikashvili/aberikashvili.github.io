class TrainCertEntry {
  constructor(
    public state: 'Done' | 'Preparing' | 'Planning',
    public title: string,
    public location: 'Online' | { country: string; city: string },
    public icon?: string
  ) {}
}

export default TrainCertEntry;
