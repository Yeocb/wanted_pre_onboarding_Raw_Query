const postDao = require("../models/postDao");

const postJobPost = async (compaines_id, country, location, position, skill, compensation, description) => {
    const postJobPost = await postDao.postJobPost(compaines_id, country, location, position, skill, compensation, description);
    return postJobPost;
};
    
module.exports = {
  postJobPost,
};