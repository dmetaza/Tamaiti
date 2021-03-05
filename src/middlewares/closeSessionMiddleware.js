function closeSessionMiddleware (req, res, next){
    if(req.session.usuarioLogueado == undefined) {
        next();
    }else{
        req.session.destroy(()=>{
            console.log("Se ha cerrado sesión")
            return res.redirect("/")
        })
    }
}
module.exports = closeSessionMiddleware