const postService = require('../services/postService');

const postJobPost = async (req, res) => {
    const { compaines_id, country, location, position, skill, compensation, description } = req.body
    await postService.postJobPost(compaines_id, country, location, position, skill, compensation, description);
    res.status(200).json({ message : "채용공고 등록완료"});
};

module.exports = {
    postJobPost,
}