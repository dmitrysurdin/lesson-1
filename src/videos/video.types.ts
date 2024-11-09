export interface Video {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  availableResolutions: Array<Resolution> | null;
  canBeDownloaded?: boolean;
  minAgeRestriction?: number | null;
  publicationDate?: string;
}

export enum Resolution {
  P144 = 'P144',
  P240 = 'P240',
  P360 = 'P360',
  P480 = 'P480',
  P720 = 'P720',
  P1080 = 'P1080',
  P1440 = 'P1440',
  P2160 = 'P2160',
}
