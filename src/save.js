let db=require('./db.js');
let User=require('./user.js');

let student=new User({
    name:'cher',
    age:12,
    admin:true
});

db.connect();

student.save(function (err) {
    if(err) throw err;

    console.log('student has saved!');
    db.close();
});

