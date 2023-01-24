const express = require('express');
const blogController = require('../controllers/blogController')
const router = express.Router(); 

// const app = express();
router.get('/', blogController.blog_index);
router.post('/',blogController.blog_create_post);
//redirect
router.get('/create',blogController.blog_create_get);
router.get('/:id',blogController.blog_details);
//delete request
router.delete('/:id',blogController.blog_delete);



module.exports = router;
