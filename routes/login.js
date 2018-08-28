
let loginpage = async function (ctx) {
	console.log('L')
  await ctx.render('login');
}

let tologin = async function(ctx){
	console.log(ctx.request.body)
}



module.exports = {
	loginpage,
	tologin
}