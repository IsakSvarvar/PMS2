exports.getAllPrompts = (req, res) => {
    res.send("Get all prompts");
  };
  
  exports.createPrompt = (req, res) => {
    res.send("Create a new prompt");
  };
  
  exports.getPromptById = (req, res) => {
    res.send(`Get prompt with ID: ${req.params.id}`);
  };
  
  exports.updatePrompt = (req, res) => {
    res.send(`Update prompt with ID: ${req.params.id}`);
  };
  
  exports.deletePrompt = (req, res) => {
    res.send(`Delete prompt with ID: ${req.params.id}`);
  };
  