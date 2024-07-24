const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");



const actorsControllerApi = {
    'list': (req, res) => {

      const countAllActors = db.Actor.count({
        attributes:{
          exclude: ["created_at","updated_at"]
        }          
    })
    const listActors = db.Actor.findAll({
        attributes:{
          exclude: ["created_at","updated_at"]
        }          
    })

    Promise.all([countAllActors, listActors])
        .then(([count, actors]) => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: count,
                    url: "api/actors"
                },
                data: {
                    listActors: actors
                }
            })
        })
        .catch((err) => {
            res.status(500).json({
              ok: false,
              msg: err.message,
            });
          });

    },
    'detail': (req, res) => {
      db.Actor.findByPk(req.params.id, {
        attributes:{
          exclude: ["created_at","updated_at"]
        }          
    })
    .then(actor => {
            if (!actor) {
                return res.status(404).json({ error: "Actor/actriz no encontrado/a" });
            }
            const actorData = {
                id: actor.id,
                first_name: actor.first_name,
                last_name: actor.last_name,
                rating: actor.rating,
                favorite_movie_id: actor.favorite_movie_id
            };

            res.status(200).json({ok: true, data: actorData});
    })
    .catch((err) => {
        res.status(500).json({
          ok: false,
          msg: err.message,
        });
      });
}


}



module.exports = actorsControllerApi;