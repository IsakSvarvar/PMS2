const express = require('express');
const router = express.Router();


//GET all prompts
router.get('/', async (req,res) => {
    try {
        const prompts = await prompt.find();
        res.send(prompts);
    } catch (error) {
        res.status(500).send({msg: error.message});
    };
});

/*
//POST create new prompt
router.post('/', async (req,res) => {
    try {
        const prompt = new Prompt({
            prompt: req.body.prompt
        });

        const newPrompt = await prompt.save();
        res.send({msg: "prompt saved", newPrompt});

    } catch (error) {
        res.status(500).send({msg: error.message});
    };

});
*/

module.exports = router;