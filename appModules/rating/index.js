const config = require("./config")
const makeRatingFile = require("./rating-file")
const updateRating = require("./calculations")
const createRating = require("./calculations")


module.exports = {
    config,
    makeRatingFile,
    createRating, 
    updateRating
}