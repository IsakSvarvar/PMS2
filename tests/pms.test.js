const request = require('supertest');
const app = require('../src/app');

describe('Prompt Management System', () => {

  //Test for get all
  it('GET /pms should return an empty array initially', async () => {
    const response = await request(app).get('/pms');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

   //Test for get by ID
   it('GET /pms/:id should retrieve a prompt by ID', async () => {
    const newPrompt = { text: 'Retrieve by ID' };
    const postResponse = await request(app)
      .post('/pms')
      .send(newPrompt)
      .set('Content-Type', 'application/json');
    
    const promptId = postResponse.body.id;
    const getResponse = await request(app).get(`/pms/${promptId}`);

    expect(getResponse.status).toBe(200);
    expect(getResponse.body).toMatchObject(newPrompt);
  });

  //Test for post new prompt
  it('POST /pms should create a new prompt', async () => {
    const newPrompt = { text: 'Test prompt' };
    const response = await request(app)
      .post('/pms')
      .send(newPrompt)
      .set('Content-Type', 'application/json');
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toMatchObject(newPrompt);
  });

  //Test for update(put) prompt
  it('PUT /pms/:id should update a prompt by ID', async () => {
    const newPrompt = { text: 'Original text' };
    const postResponse = await request(app)
      .post('/pms')
      .send(newPrompt)
      .set('Content-Type', 'application/json');

    const promptId = postResponse.body.id;
    const updatedText = { text: 'Updated text' };
    const putResponse = await request(app)
      .put(`/pms/${promptId}`)
      .send(updatedText)
      .set('Content-Type', 'application/json');

    expect(putResponse.status).toBe(200);
    expect(putResponse.body.text).toBe(updatedText.text);
  });

  //Test for delete prompt
  it('DELETE /pms/:id should delete a prompt by ID', async () => {
    const newPrompt = { text: 'To be deleted' };
    const postResponse = await request(app)
      .post('/pms')
      .send(newPrompt)
      .set('Content-Type', 'application/json');
    
    const promptId = postResponse.body.id;
    const deleteResponse = await request(app).delete(`/pms/${promptId}`);

    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body[0]).toMatchObject(newPrompt);

    const getResponse = await request(app).get(`/pms/${promptId}`);
    expect(getResponse.status).toBe(404);
  });
});
