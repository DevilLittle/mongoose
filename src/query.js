let db = require('./db.js');

db.connect();

let User = require('./user.js');

User.find({}, function (err, users) {
    if (err) throw err;
    console.log('All users:');
    console.log(users);
});

User.find({name: 'cher'}, function (err, user) {
    if (err) throw err;
    console.log('Specify User:');
    console.log(user);
});

User.find({name: 'Non-existent-user'}, function (err, user) {
    if (err) throw err;
    console.log('Find Non-existent-user:');
    console.log(user);
});

User.findOne({name: 'Non-existent-user'}, function (err, user) {
    if (err) throw err;
    console.log('Find Non-existent-user or null:');
    console.log(user);
});