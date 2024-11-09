import { Resolution, Video } from '../src/videos/video.types';

export const video1: Omit<Video, 'id' | 'createdAt'> = {
  title: 'Introduction to TypeScript',
  author: 'Tech Channel',
  canBeDownloaded: true,
  minAgeRestriction: null,
  availableResolutions: [Resolution.P1440, Resolution.P720]
};

export const video2: Omit<Video, 'id' | 'createdAt'> = {
  title: 'Advanced React Patterns',
  author: 'Frontend Masters',
  canBeDownloaded: false,
  minAgeRestriction: 16,
  availableResolutions: [Resolution.P1080, Resolution.P480, Resolution.P360]
};

export const videoToCreate: Omit<Video, 'id' | 'createdAt'> = {
  title: 'Testing Video',
  author: 'Tester',
  canBeDownloaded: true,
  minAgeRestriction: null,
  availableResolutions: [Resolution.P720]
};

export const videoToUpdate: Omit<Video, 'id' | 'createdAt'> = {
  title: 'Updated Video',
  author: 'New Author',
  canBeDownloaded: false,
  minAgeRestriction: null,
  availableResolutions: [Resolution.P240, Resolution.P360],
};
