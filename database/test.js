mongodb+srv://uga:uga456@cluster0.rgl68zc.mongodb.net/

mongodb+srv://uga:uga456@cluster0.rgl68zc.mongodb.net/?retryWrites=true&w=majority

mongosh "mongodb+srv://cluster0.rgl68zc.mongodb.net/" --apiVersion 1 --username uga


db.sectores.insertMany([
    {
        
        "_id": ObjectId("611330eda47fd4001e1f2cef"),
        "SectorNombre": "SECTOR 1",
    },
    {
        
        "_id": ObjectId("611330eda47fd4001e1f2cf0"),
        "SectorNombre": "SECTOR 2",
    },
    {
        
        "_id": ObjectId("611330eda47fd4001e1f2cf1"),
        "SectorNombre": "SECTOR 3",
    },
    {
        
        "_id": ObjectId("611330eda47fd4001e1f2cf2"),
        "SectorNombre": "SECTOR 4",
    },
    {
        
        "_id": ObjectId("611330eda47fd4001e1f2cf3"),
        "SectorNombre": "SECTOR 5",
    },
    {
        
        "_id": ObjectId("611330eda47fd4001e1f2cf4"),
        "SectorNombre": "SECTOR 6",
    },
    {
        
        "_id": ObjectId("611330eda47fd4001e1f2cf5"),
        "SectorNombre": "SECTOR 7",
    },
    {
        
        "_id": ObjectId("611330eda47fd4001e1f2cf6"),
        "SectorNombre": "SECTOR 8",
    },
    {
        
        "_id": ObjectId("611330eda47fd4001e1f2cf8"),
        "SectorNombre": "SECTOR 10",
    },
    {
        
        "_id": ObjectId("611330eda47fd4001e1f2cf9"),
        "SectorNombre": "SECTOR 11",
    }

]);

    db.orders.insertMany([
    {
        
        "_id": ObjectId("611330eda47fd4001e1f2cef"),
        "SectorNombre": ObjectId("611d96c7a142022f902dddec"),
        "direccion": "direcion 1",
        "email": "mou@gmail.com",
        "cart": [
            {
                "_id":ObjectId("611725a51849bad5f3c21aa2"),
                "nombreProducto": "Producto Farmancia 1",
                "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                "precio": 999949.99,
                "imagenProducto": "/assets/img/products/1.png",
                "cantidad": 1,
                "disponible": true
            }
        ]
    }
]);


re_Q5w7XEgd_8CRWrjyCeroo9y5x6jqxAzqx



//************************************************************************* */

-- Active: 1700249246012@@127.0.0.1@27017@sectores

db('sectores').collection('').find({}).limit(100).toArray();

db.sectores.insertMany([ 
    {"SectorNombre":"SECTOR 1"},
    {"SectorNombre":"SECTOR 2"},
    {"SectorNombre":"SECTOR 4"},
    {"SectorNombre":"SECTOR 5"},
    {"SectorNombre":"SECTOR 6"},
    {"SectorNombre":"SECTOR 7"},
    {"SectorNombre":"SECTOR 8"},
    {"SectorNombre":"SECTOR 10"},
    {"SectorNombre":"SECTOR 11"}
]);

db.subsectores.insertMany([
{"SectorID": ObjectId("65610bbd8e5872613d0e9176"),"SubSectorNombre": "Cultivos","Tipo": "A"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9176"),"SubSectorNombre": "Beneficiado","Tipo": "B"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9176"),"SubSectorNombre": "Zootecnia","Tipo": "C"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9176"),"SubSectorNombre": "Acuicultura","Tipo": "D"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9176"),"SubSectorNombre": "Avícola","Tipo": "E"},

{"SectorID": ObjectId("65610bbd8e5872613d0e9177"),"SubSectorNombre": "Producción de Plántulas","Tipo": "A"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9177"),"SubSectorNombre": "Industria Maderera","Tipo": "B"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9177"),"SubSectorNombre": "Producción de carbón","Tipo": "C"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9177"),"SubSectorNombre": "Fabricación de papel y productos de papel","Tipo": "D"},

{"SectorID": ObjectId("65610bbd8e5872613d0e9178"),"SubSectorNombre": "Hidrocarburos","Tipo": "B"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9179"),"SubSectorNombre": "Industria de alimentos y bebidas","Tipo": "A"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9179"),"SubSectorNombre": "Fabricación de productos textiles","Tipo": "B"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9179"),"SubSectorNombre": "Curtido y adobo de cueros","Tipo": "C"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9179"),"SubSectorNombre": "Industria Química","Tipo": "D"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9179"),"SubSectorNombre": "Fabricación de productos con materiales sintéticos","Tipo": "E"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9179"),"SubSectorNombre": "Fabricación de productos minerales no metálicos","Tipo": "F"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9179"),"SubSectorNombre": "Industria metálica","Tipo": "G"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9179"),"SubSectorNombre": "Industria Electrónica","Tipo": "H"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9179"),"SubSectorNombre": "Industria automotriz","Tipo": "J"},
{"SectorID": ObjectId("65610bbd8e5872613d0e9179"),"SubSectorNombre": "Industria del reciclado","Tipo": "K"},

{"SectorID": ObjectId("65610bbd8e5872613d0e917a"),"SubSectorNombre": "Generación de Energía","Tipo": "A"},
{"SectorID": ObjectId("65610bbd8e5872613d0e917a"),"SubSectorNombre": "Transmisión de Energía","Tipo": "B"},
{"SectorID": ObjectId("65610bbd8e5872613d0e917a"),"SubSectorNombre": "Distribución de Energía Eléctrica","Tipo": "C"},
{"SectorID": ObjectId("65610bbd8e5872613d0e917a"),"SubSectorNombre": "MicroRedes de Energía Eléctrica","Tipo": "D"},

{"SectorID": ObjectId("65610bbd8e5872613d0e917b"),"SubSectorNombre": "Telecomunicaciones","Tipo": "A"},

{"SectorID": ObjectId("65610bbd8e5872613d0e917c"),"SubSectorNombre": "Servicios", "Tipo": "A" },
{"SectorID": ObjectId("65610bbd8e5872613d0e917c"),"SubSectorNombre": "Talleres", "Tipo": "B" },

{"SectorID": ObjectId("65610bbd8e5872613d0e917d"),"SubSectorNombre": "Infraestructura","Tipo": "A"},
{"SectorID": ObjectId("65610bbd8e5872613d0e917d"),"SubSectorNombre": "Construcción","Tipo": "B"},
{"SectorID": ObjectId("65610bbd8e5872613d0e917d"),"SubSectorNombre": "Vivienda", "Tipo": "C" },
{"SectorID": ObjectId("65610bbd8e5872613d0e917d"),"SubSectorNombre": "Hospitalario","Tipo": "D"},
{ "SectorID": ObjectId("65610bbd8e5872613d0e917d"),"SubSectorNombre": "Turismo", "Tipo": "E" },

{"SectorID": ObjectId("65610bbd8e5872613d0e917e"),"SubSectorNombre": "Gestión de Residuos","Tipo": "A"},
{"SectorID": ObjectId("65610bbd8e5872613d0e917e"),"SubSectorNombre": "Gestión de Aguas Residuales","Tipo": "B"}
]);




    '0': ObjectId("65610bbd8e5872613d0e9176"),
    '1': ObjectId("65610bbd8e5872613d0e9177"),
    '2': ObjectId("65610bbd8e5872613d0e9178"),
    '3': ObjectId("65610bbd8e5872613d0e9179"),
    '4': ObjectId("65610bbd8e5872613d0e917a"),
    '5': ObjectId("65610bbd8e5872613d0e917b"),
    '6': ObjectId("65610bbd8e5872613d0e917c"),
    '7': ObjectId("65610bbd8e5872613d0e917d"),
    '8': ObjectId("65610bbd8e5872613d0e917e")


db.sectores.insertOne({
    "SectorNombre": "SECTOR 11"
})


db.sectores.find().pretty()



-- Active: 1700249246012@@127.0.0.1@27017
db("uga").createCollection("collection")

db.createCollection('sectores');


//************************************************************************* */
//************************************************************************* */
Subsectores

db.subsectores.insertMany([

    [
        {
          "SectorID": 6557c364f7caa01c7fadf5b1,
          "SubSectorId": 1,
          "SubSectorNombre": "Cultivos",
          "SectorSubSectorTipo": "A"
        },
        {
          "SectorID": 6557c364f7caa01c7fadf5b1,
          "SubSectorId": 2,
          "SubSectorNombre": "Beneficiado",
          "SectorSubSectorTipo": "B"
        },
        {
          "SectorID": 6557c364f7caa01c7fadf5b1,
          "SubSectorId": 3,
          "SubSectorNombre": "Zootecnia",
          "SectorSubSectorTipo": "C"
        },
        {
          "SectorID": 6557c364f7caa01c7fadf5b1,
          "SubSectorId": 4,
          "SubSectorNombre": "Acuicultura",
          "SectorSubSectorTipo": "D"
        },
        {
          "SectorID": 6557c364f7caa01c7fadf5b1,
          "SubSectorId": 5,
          "SubSectorNombre": "Avícola",
          "SectorSubSectorTipo": "E"
        },
        {
          "SectorID": 6557c3fbf7caa01c7fadf5b2,
          "SubSectorId": 1,
          "SubSectorNombre": "Producción de Plántulas",
          "SectorSubSectorTipo": "A"
        },
        {
          "SectorID": 6557c3fbf7caa01c7fadf5b2,
          "SubSectorId": 2,
          "SubSectorNombre": "Industria Maderera",
          "SectorSubSectorTipo": "B"
        },
        {
          "SectorID": 6557c3fbf7caa01c7fadf5b2,
          "SubSectorId": 3,
          "SubSectorNombre": "Producción de carbón",
          "SectorSubSectorTipo": "C"
        },
        {
          "SectorID": 6557c3fbf7caa01c7fadf5b2,
          "SubSectorId": 4,
          "SubSectorNombre": "Fabricación de papel y productos de papel",
          "SectorSubSectorTipo": "D"
        },
        {
          "SectorID": 6557c3fbf7caa01c7fadf5b3,
          "SubSectorId": 1,
          "SubSectorNombre": "Hidrocarburos",
          "SectorSubSectorTipo": "B"
        },
        {
          "SectorID": 6557c485f7caa01c7fadf5b5,
          "SubSectorId": 1,
          "SubSectorNombre": "Industria de alimentos y bebidas",
          "SectorSubSectorTipo": "A"
        },
        {
          "SectorID": 6557c485f7caa01c7fadf5b5,
          "SubSectorId": 2,
          "SubSectorNombre": "Fabricación de productos textiles",
          "SectorSubSectorTipo": "B"
        },
        {
          "SectorID": 6557c485f7caa01c7fadf5b5,
          "SubSectorId": 3,
          "SubSectorNombre": "Curtido y adobo de cueros",
          "SectorSubSectorTipo": "C"
        },
        {
          "SectorID": 6557c485f7caa01c7fadf5b5,
          "SubSectorId": 4,
          "SubSectorNombre": "Industria Química",
          "SectorSubSectorTipo": "D"
        },
        {
          "SectorID": 6557c485f7caa01c7fadf5b
      



)}