let pagetest = async function (ctx, next) {
  // let n = ctx.session.views || 0;
  // ctx.session.views = ++n;
  // ctx.body = n + ' views';
  await ctx.render('pages/test');
}

let userlist = ctx =>{
	// get userlist from redis
	let list = [1,2,3,4,5,6,7,8,9,4,1,2,3,6,5,4,8,9,442];
	ctx.body = list;

}

module.exports = {
	userlist,
	pagetest,
}