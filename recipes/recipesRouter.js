const express = require('express');

const helper = require('./helper-functions.js');

const router = express.Router();


router.get('/', (req, res) => {
    
    helper
    
     .getRecipes()
     .then(recipe => {
        res.status(200).json(recipe);
     })
     .catch(err => {
         res.status(500).json({ message: "There was and error retrieving the recipes." });
     })
});

// router.get('/:id', (res, req) => {

// });

// router.get('/', (res, req) => {

// });

// router.post('/', (res, req) => {

// });

// router.post('/:id', (res, req) => {

// });

// router.put('/:id', (res, req) => {

// });

// router.delete('/:id', (res, req) => {

// });


module.exports = router;