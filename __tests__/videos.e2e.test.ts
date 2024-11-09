import request from 'supertest';
import { app } from '../src/app';
import { video1, video2, videoToCreate, videoToUpdate } from './datasets';
import { db } from '../src/videos/db/db';
import { SETTINGS } from '../src/settings';

describe('Video API e2e tests', () => {
  beforeEach(() => {
    db.clearDb();
  });

  it('should create a new video', async () => {
    const response = await request(app)
      .post(SETTINGS.PATH.VIDEOS)
      .send(videoToCreate)
      .expect(201);

    expect(response.body).toEqual(
      expect.objectContaining({
        title: videoToCreate.title,
        author: videoToCreate.author,
        canBeDownloaded: videoToCreate.canBeDownloaded,
      })
    );
  });

  it('should return all videos', async () => {
    await request(app).post(SETTINGS.PATH.VIDEOS).send(video1);
    await request(app).post(SETTINGS.PATH.VIDEOS).send(video2);

    const response = await request(app)
      .get(SETTINGS.PATH.VIDEOS)
      .expect(200);

    expect(response.body.length).toBe(2);
  });

  it('should find a video by ID', async () => {
    const createdVideo = await request(app)
      .post(SETTINGS.PATH.VIDEOS)
      .send(videoToCreate)
      .expect(201);

    const videoId = createdVideo.body.id;

    const response = await request(app)
      .get(`${SETTINGS.PATH.VIDEOS}/${videoId}`)
      .expect(200);

    expect(response.body).toEqual(expect.objectContaining(videoToCreate));
  });

  it('should update a video', async () => {
    const createdVideo = await request(app)
      .post(SETTINGS.PATH.VIDEOS)
      .send(videoToCreate)
      .expect(201);

    const videoId = createdVideo.body.id;

    await request(app)
      .put(`${SETTINGS.PATH.VIDEOS}/${videoId}`)
      .send(videoToUpdate)
      .expect(204);

    const response = await request(app)
      .get(`${SETTINGS.PATH.VIDEOS}/${videoId}`)
      .expect(200);

    expect(response.body).toEqual(expect.objectContaining(videoToUpdate));
  });

  it('should delete a video by ID', async () => {
    const createdVideo = await request(app)
      .post(SETTINGS.PATH.VIDEOS)
      .send(videoToCreate)
      .expect(201);

    const videoId = createdVideo.body.id;

    await request(app)
      .delete(`${SETTINGS.PATH.VIDEOS}/${videoId}`)
      .expect(204);

    await request(app)
      .get(`${SETTINGS.PATH.VIDEOS}/${videoId}`)
      .expect(404);
  });

  it('should clear all videos', async () => {
    await request(app).post(SETTINGS.PATH.VIDEOS).send(video1);

    await request(app)
      .delete(`${SETTINGS.PATH.TESTING}/all-data`)
      .expect(204);

    const response = await request(app)
      .get(SETTINGS.PATH.VIDEOS)
      .expect(200);

    expect(response.body.length).toBe(0);
  });
});
