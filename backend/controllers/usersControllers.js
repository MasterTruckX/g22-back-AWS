const registerUser = (req, res) => {
    res.json({ message: 'Crear usuario' })
}

const loginUser = (req, res) => {
    res.json({ message: 'Login usuario' })
}

const getUserData = (req, res) => {
    res.json({ message: 'Mis Datos de usuario' })
}

module.exports = {
    registerUser,
    loginUser,
    getUserData
}

