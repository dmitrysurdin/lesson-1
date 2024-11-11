import { Video } from './video.types';
import {
  isValidAuthor,
  isValidCanBeDownloaded,
  isValidMinAgeRestriction, isValidPublicationDate,
  isValidResolution,
  isValidTitle
} from './validation.helpers';

interface ValidationErrorType {
  field: string,
  message: string
}

export const validateVideoFields = (video: Omit<Video, 'id' | 'createdAt'>): Array<ValidationErrorType> => {
  const errorsMessages: Array<ValidationErrorType> = [];

  if (!isValidTitle(video.title)) {
    errorsMessages.push({
      field: 'title',
      message: 'title field is not correct'
    });
  }

  if (!isValidAuthor(video.author)) {
    errorsMessages.push({
      field: 'author',
      message: 'author field is not correct'
    });
  }

  if (!isValidResolution(video.availableResolutions)) {
    errorsMessages.push({
      field: 'availableResolutions',
      message: 'availableResolutions field is not correct'
    });
  }

  if (!isValidCanBeDownloaded(video?.canBeDownloaded)) {
    errorsMessages.push({
      field: 'canBeDownloaded',
      message: 'canBeDownloaded field is not correct'
    });
  }

  if (!isValidMinAgeRestriction(video?.minAgeRestriction)) {
    errorsMessages.push({
      field: 'minAgeRestriction',
      message: 'minAgeRestriction field is not correct'
    });
  }

  if (!isValidPublicationDate(video?.publicationDate)) {
    errorsMessages.push({
      field: 'publicationDate',
      message: 'publicationDate field is not correct'
    });
  }

  return errorsMessages;
};
