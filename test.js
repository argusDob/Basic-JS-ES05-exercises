const Article = require("./product.model.js");

//Create new Article
exports.create = function(req, res) {
  // Request validation
  if (!req.body) {
    return res.status(400).send({
      message: "Article content can not be empty"
    });
  }

  // Initialize an article
  const article = new Article({
    title: req.body.title || "one more try",
    bodyText: req.body.bodyText || "One more try with the amazing article",
    keywords: req.body.keywords || ["key1", "key2"],
    licenceTypes: req.body.licenceTypes || ["type1", "type2", "typen"],
    isAudit: req.body.isAudit || true,
    hasQuizStructure: req.body.hasQuizStructure || false,
    locationTypes: req.body.locationTypes || ["type1", "type2", "typen"],
    qmsType: req.body.qmsType,
    linkToQMS: req.body.linkToQMS || "www.one2ten.com",
    requiredPrivilleges: req.body.requiredPrivilleges
  });

  // Save Articles in the database
  article
    .save()
    .then(data => {
      //convert it to es5
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something wrong while creating the articles."
      });
    });
};

// Retrieve all articles from the database.
exports.findAll = function(req, res) {
  Article.find()
    .sort(req.params.title)
    .then(article => {
      res.send(article);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something wrong while retrieving articles."
      });
    });
};

// Find a single articles with a articleid
exports.findOne = function(req, res) {
  Article.findById(req.params.articleId)
    .then(article => {
      if (!article) {
        return res.status(404).send({
          message: "Article not found with id " + req.params.articleId
        });
      }
      res.send(article);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Article not found with id " + req.params.articleId
        });
      }
      return res.status(500).send({
        message:
          "Something wrong retrieving article with id " + req.params.articleId
      });
    });
};

// Update a article
exports.update = function(req, res) {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: "Article content can not be empty"
    });
  }

  // Find and update article with the request body
  Article.findByIdAndUpdate = (req.params.articleId,
  {
    title: req.body.title || "I am an updated article number 2",
    bodyText: req.body.bodyText || "I have update my content",
    keywords: req.body.keywords || ["key1", "key2"],
    licenceTypes: req.body.licenceTypes || ["type1", "type2", "typen"],
    isAudit: req.body.isAudit || true,
    hasQuizStructure: req.body.hasQuizStructure || false,
    locationTypes: req.body.locationTypes || ["type1", "type2", "typen"],
    qmsType: req.body.qmsType || ["qtype1", "qtype2", "qtype3", "qtypen"],
    linkToQMS: req.body.linkToQMS || "www.one2ten.com",
    requiredPrivilleges: req.body.requiredPrivilleges
  },
  { new: true })
    .then(article => {
      if (!article) {
        return res.status(404).send({
          message: "Article not found with id " + req.params.articleId
        });
      }
      res.send(article);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Article not found with id " + req.params.articleId
        });
      }
      return res.status(500).send({
        message:
          "Something wrong updating article with id " + req.params.articleId
      });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = function(req, res) {
  Article.findByIdAndRemove(req.params.articleId)
    .then(article => {
      if (!article) {
        return res.status(404).send({
          message: "Article not found with id " + req.params.articleId
        });
      }
      res.send({ message: "Article deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Article not found with id " + req.params.articleId
        });
      }
      return res.status(500).send({
        message: "Could not delete article with id " + req.params.aricleId
      });
    });
};
