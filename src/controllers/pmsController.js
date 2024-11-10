//Array for storing prompts. Temporary solution until db implemented
let prompts = [];
let nextId = 1; 

//Get all prompts
exports.getAllPrompts = (req, res) => {
  try {
    res.json(prompts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve prompts' });
  }
};

//Get prompt by ID
exports.getPromptById = (req, res) => {
  try {
    const { id } = req.params;
    const prompt = prompts.find((p) => p.id === parseInt(id));
    if (!prompt) {
      return res.status(404).json({ message: 'Prompt not found' });
    }
    res.json(prompt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve prompt' });
  }
};

//Post prompt
exports.createPrompt = (req, res) => {
  try {
    const { text } = req.body;
    const newPrompt = { id: nextId++, text };
    prompts.push(newPrompt);
    res.status(201).json(newPrompt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create prompt' });
  }
};


//Update prompt
exports.updatePrompt = (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const prompt = prompts.find((p) => p.id === parseInt(id));
    if (!prompt) {
      return res.status(404).json({ message: 'Prompt not found' });
    }
    prompt.text = text;
    res.json(prompt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update prompt' });
  }
};

//Delete prompt
exports.deletePrompt = (req, res) => {
  try {
    const { id } = req.params;
    const index = prompts.findIndex((p) => p.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: 'Prompt not found' });
    }
    const deletedPrompt = prompts.splice(index, 1);
    res.json(deletedPrompt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete prompt' });
  }
};
