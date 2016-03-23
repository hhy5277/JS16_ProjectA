module.exports = {
    /**
     * @api {post} /api/characters/plod/find Find characters PLOD
     * @apiVersion 0.0.1
     * @apiName FindCharactersPlod
     * @apiGroup CharactersPlod
     *
     * @apiSuccessExample {json} Success-Response
     *     HTTP/1.1 200 OK
     *     {"message" : "Success", "data" : characterplod}
     *
     * @apiError (404) NotFound No character with that data existing!
     * @apiErrorExample {json} NotFound
     *      HTTP/1.1 404
     *      {
     *          "message": "Failure. No character with that data existing!",
     *          "data": message
     *      }
     *
     * @apiError (400) BadRequestError A value for a property is not valid to the underlying schema.
     * @apiErrorExample {json} BadRequestError
     *     HTTP/1.1 400
     *     {"message" : "Error: Bad request. Usage of non existing schema property!", "error" : err}
     *
     * @apiDescription Find characters matching the search criteria.
     * Check the <a href="https://github.com/Rostlab/JS16_ProjectA/blob/master/app/models/characterplod.js" target="_blank">character PLOD model</a>.
     */
    get: function(req,res) {
        var charactersPlodStore = require('../stores/charactersPlod');
        charactersPlodStore.get(req.body, function(success, message) {
            if(success == 1)
                res.status(200).json({ message: 'Success', data: message });
            else if (success == 3)
                res.status(404).json({ message: 'Failure. No character PLOD with that data existing!',data: message });
            else
                res.status(400).json({ message: 'Error: Bad request. Usage of non existing schema property!', errorProperty: message });
        });
    },

    /**
     * @api {get} /api/characters/plod Get all characters PLOD
     * @apiVersion 0.0.1
     * @apiName GetAllCharactersPlod
     * @apiGroup CharactersPlod
     *
     * @apiSuccessExample {json} Success-Response
     *     HTTP/1.1 200 OK
     *     [{CharactersPlodModel},..,{..}]
     * @apiSuccessExample {json} Empty-Success-Response
     *     HTTP/1.1 200 OK
     *     []
     *
     * @apiDescription Get all the characters PLOD currently stored.
     */
    getAll: function (req, res) {
        var charactersPlodStore = require('../stores/charactersPlod');

        charactersPlodStore.getAll(function(success,characters) {
            res.status(200).json(characters);
        });
    },

    /**
     * @api {get} /api/characters/plod/:count Get list of top-x characters by PLOD
     * @apiVersion 0.0.1
     * @apiName GetByPLOD
     * @apiGroup CharactersPlod
     *
     * @apiSuccessExample {json} Success-Response
     *     HTTP/1.1 200 OK
     *     {"message" : "Success", "data" : charactersplod}
     *
     * @apiError (404) NotFound No character with that data existing!
     * @apiErrorExample {json} NotFound
     *      HTTP/1.1 404
     *      { "message": "Failure. No character with that data existing!"};
     *
     * @apiDescription Return a list of top-x PLOD-characters
     */
    getByPLOD: function(req, res) {
        var charactersPlodStore = require('../stores/charactersPlod');

        charactersPlodStore.getByPLOD(req.params.count, function(success, message) {
            if(success)
                res.status(200).json({ message: 'Success', data: message });
            else
                res.status(404).json({ message: 'Failure. No character PLOD with that data existing!'});
        });
    },

    /**
     * @api {get} /api/characters/plod/:id Get character by PLOD id
     * @apiVersion 0.0.1
     * @apiName GetById
     * @apiGroup CharactersPlod
     *
     * @apiSuccessExample {json} Success-Response
     *     HTTP/1.1 200 OK
     *     {"message" : "Success", "data" : character}
     *
     * @apiError (404) NotFound No character with that data existing!
     * @apiErrorExample {json} NotFound
     *      HTTP/1.1 404
     *      { "message": "Failure. No character with that data existing!", "data": err };
     *
     * @apiDescription Return the character PLOD with the specific :id.
     */
    getById: function(req, res) {
        var charactersPlodStore = require('../stores/charactersPlod');

        charactersPlodStore.getById(req.params.id, function(success, message) {
            if(success == 1)
                res.status(200).json({ message: 'Success', data: message });
            else
                res.status(404).json({ message: 'Failure. No character with that data existing!',data: message });
        });
    },

    /**
     * @api {get} /api/characters/plod/:description Get character by plod description
     * @apiVersion 0.0.1
     * @apiName GetByDescription
     * @apiGroup CharactersPlod
     *
     * @apiSuccessExample {json} Success-Response
     *     HTTP/1.1 200 OK
     *     {"message" : "Success", "data" : character}
     *
     * @apiError (404) NotFound No character with that data existing!
     * @apiErrorExample {json} NotFound
     *      HTTP/1.1 404
     *      { "message": "Failure. No character PLOD with that data existing!", "data": err };
     *
     * @apiDescription Return the character PLOD with the specific :description.
     */
    getByDescription: function(req, res) {
        var charactersPlodStore = require('../stores/charactersPlod');

        charactersPlodStore.getByDescription(req.params.description, function(success, message) {
            if(success == 1)
                res.status(200).json({ message: 'Success', data: message });
            else
                res.status(404).json({ message: 'Failure. No character PLOD with that data existing!',data: message });
        });
    }
};
