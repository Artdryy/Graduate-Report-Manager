import KeywordsService from '../services/keywords.service.js';

class KeywordsController {
  createKeyword = async (req, reply) => {
    const { keyword } = req.body;
    const result = await KeywordsService.createKeyword({ keyword });
    reply.code(201).sendSuccess({ message: 'Keyword created', data: result });
  };

  getKeywords = async (req, reply) => {
    const result = await KeywordsService.getKeywords();
    reply.sendSuccess({ message: 'Keywords fetched', data: result });
  };

  updateKeyword = async (req, reply) => {
    const { keyword_id, keyword } = req.body;
    const result = await KeywordsService.updateKeyword({ keyword_id, keyword });
    reply.sendSuccess({ message: 'Keyword updated', data: result });
  };

  deleteKeyword = async (req, reply) => {
    const { keyword_id } = req.params;
    const result = await KeywordsService.deleteKeyword({ keyword_id });
    reply.sendSuccess({ message: result.message || 'Keyword deleted', data: null });
  };
}

export default new KeywordsController();