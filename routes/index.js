let index_page = async function (ctx, next) {
  // ctx.state = {
  //   session: this.session,
  //   title: 'app'
  // };
  await ctx.render('index');
}




module.exports = function(app){
	app.use(index_page);
}