import { Resolution } from './video.types';

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isValidTitle = (title: string) => {
  return isString(title) && !!title.trim() && title.length < 40;
};

export const isValidAuthor = (author: string) => {
  return isString(author) && !!author.trim() && author.length < 20;
};

export const isValidResolution = (resolutions: Array<string> | null) => {

  if (!resolutions) {
    return false;
  }

  const resolutionValues = Object.values(Resolution);
  return resolutions.every((resolution) => resolutionValues.includes(resolution as Resolution));
};

export const isValidCanBeDownloaded = (canBeDownloaded?: boolean) => {
  return typeof canBeDownloaded === 'boolean';
};

export const isValidMinAgeRestriction = (minAgeRestriction?: number | null) => {
  return (
    (minAgeRestriction === null || (typeof minAgeRestriction === 'number' && minAgeRestriction >= 1 && minAgeRestriction <= 18))
  );
};

export const isValidPublicationDate = (publicationDate?: string) => {
  if (!publicationDate) {
    return true;
  }

  const isoFormatRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

  return (
    !isNaN(new Date(publicationDate).getTime()) && isoFormatRegex.test(publicationDate)
  );
};
