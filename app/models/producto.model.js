module.exports = (sequelize, Sequelize) => {

    const Producto = sequelize.define("producto",{
nombre: {
    type: Sequelize.STRING
},
stock: {
    type: Sequelize.INTEGER
},

precio: {
    type: Sequelize.DOUBLE
},
categoria: {
    type: Sequelize.STRING
},

status:{
    type:Sequelize.BOOLEAN
}

    } );
    return Producto;
};