
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};


exports.movie = function(req, res){
  res.render('movie', { title: 'Movie' })
};