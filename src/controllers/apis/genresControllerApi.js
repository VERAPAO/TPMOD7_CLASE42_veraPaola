const db = require('../../database/models');
const sequelize = db.sequelize;



const genresControllerApi = {
    'list': (req, res) => {
        const countAllGenres = db.Genre.count({
            attributes:{
              exclude: ["created_at","updated_at"]
            }          
        })
        const listGenres = db.Genre.findAll({
            attributes:{
              exclude: ["created_at","updated_at"]
            }          
        })

        Promise.all([countAllGenres, listGenres])
            .then(([count, genres]) => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: count,
                        url: "api/genres"
                    },
                    data: {
                        listGenres: genres
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
        db.Genre.findByPk(req.params.id, {
            attributes:{
              exclude: ["created_at","updated_at"]
            }          
        })
        .then(genre => {
                if (!genre) {
                    return res.status(404).json({ error: "Género no encontrado" });
                }
                const genreData = {
                    id: genre.id,
                    name: genre.name,
                    ranking: genre.ranking,
                    active: genre.active
                };

                res.status(200).json({ok: true, data: genreData});
        })
        .catch((err) => {
            res.status(500).json({
              ok: false,
              msg: err.message,
            });
          });
    }
    

}


module.exports = genresControllerApi;