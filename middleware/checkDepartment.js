module.exports = department => {
    return (req, res, next) => {
        if (req.user) {
            console.log(req.user)
            if (
                req.user.department &&
                req.user.department.includes(department)
                ) {
                console.log('success')
                next()
            }
            else {
                res.status(401).json('nah')
            }
        }
        else {
            res.status(401).json('You cannot pass')
        }
    }
}