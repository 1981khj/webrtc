
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};


exports.movie = function(req, res){
  res.render('movie', { title: 'WebRtcSample1' })
};

exports.moviecss3 = function(req, res){
  res.render('moviecss3', { title: 'WebRtcSample2' })
};