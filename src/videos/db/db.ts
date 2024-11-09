import { Resolution, Video } from '../video.types';

interface DBType {
  videos: Array<Video>;
}

const dbData: DBType = {
  videos: [
    {
      id: 1,
      title: 'Introduction to TypeScript',
      author: 'Tech Channel',
      canBeDownloaded: true,
      minAgeRestriction: null,
      createdAt: "2024-11-07T19:48:35.502Z",
      publicationDate: "2024-11-07T19:48:35.502Z",
      availableResolutions: [Resolution.P720, Resolution.P1080],
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      author: 'Frontend Masters',
      canBeDownloaded: false,
      minAgeRestriction: 16,
      createdAt: "2024-11-07T20:48:35.502Z",
      publicationDate: "2024-11-07T12:48:35.502Z",
      availableResolutions: [Resolution.P1440, Resolution.P480, Resolution.P360],
    }
  ]
};

const clearDb = () => {
  dbData.videos = [];
};

const add = (video: Video) => {
  dbData.videos = [...dbData.videos, video];
};

const get = () => {
  return dbData.videos;
};

const find = (id: number) => {
  return dbData.videos.find((video) => video?.id === id);
};

const update = (id: number, updatedVideo: Omit<Video, 'id' | 'createdAt'>) => {
  const videoIndex = dbData.videos.findIndex((video) => video.id === id);

  if (videoIndex === -1) {
    return false;
  }

  dbData.videos[videoIndex] = {
    ...dbData.videos[videoIndex],
    ...updatedVideo
  };

  return true;
};

const remove = (id: number) => {
  const video = find(id);

  if (!video) {
    return false;
  }

  dbData.videos = dbData.videos.filter((video) => video.id !== id);
  return true;
};

export const db = {
  add,
  get,
  find,
  update,
  remove,
  clearDb
};

