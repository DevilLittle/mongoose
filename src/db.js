let mongoose=require('mongoose');

module.exports={
    connect:function () {
      mongoose.connect('mongodb://localhost/mongoose');
    },
    close:function () {
        mongoose.connection.close();
    }
};