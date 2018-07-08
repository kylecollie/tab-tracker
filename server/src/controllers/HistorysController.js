const {
  History,
  Song
} = require('../models');
const _ = require('lodash');

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id;
      const historys = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      })
        .map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song,
          history
        ));
      res.send(_.uniqBy(historys, 'title', 'artist'));
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the history.'
      });
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id;
      const { songId } = req.body;
      const history = await History.create({
        SongId: songId,
        UserId: userId
      });
      res.send(history);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the history.'
      });
    }
  }
};
