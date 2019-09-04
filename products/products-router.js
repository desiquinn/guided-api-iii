const express = require('express');

const router = express.Router();

//routers can have middleware
router.use(express.json());

// router handles urls that begin with /products

//GET to /products/
router.get('/', (req, res) => {
    res.send('get to /products/')
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`get to /products/${id}`)
})

module.exports = router;