const saveRegitroCtrl = {};

saveRegitroCtrl.saveRegitro = async (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Registro guardado'
    });
};

// module.exports = saveRegitroCtrl;

export default saveRegitroCtrl;