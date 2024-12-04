
export const isAdminUser = (req, res, next) => {
    if (req.userInfo.role !== "admin") {
        return res.status(403).json({
            success: false, 
            message: "Acccess denied! Admin rights required"
        })
    }
    next();   
}