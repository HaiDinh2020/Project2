var express = require("express")
var connection = require("./database")
var cors = require("cors")
var bodyParser = require("body-parser")
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

app.post('/signup', function (req, res) {
    const userName = req.body.userName;
    const email = req.body.email
    const password = req.body.password; 
    connection.query("INSERT INTO user ( userName, email, password) VALUES(?, ?, ?)",[userName, email, password], 
    function(err, result){
        if (result) {
            res.send({message:"success"});
        } else {
            res.send({message: "ENTER CORRECT ASKED DETAILS"})
        } 
    }
    )
})

app.post('/login', function (req, res) {
    const userName = req.body.userName;
    const password = req.body.password;
    connection.query("SELECT * FROM user WHERE userName = ? and password = ?",[userName, password], 
    (err, result) => {
        
        if (result.length>0) {
            res.send({message:"success", userInfor: result[0]})
        } else 
        res.send({message: "WRONG USERNAME OR PASSWORD"})
    }
    )
    
})

app.post('/updateInfor', upload.single('avatar'), function (req, res) {
    console.log(req)
    const id = req.body.id;
    const userName = req.body.userName;
    const gender = req.body.gender;
    const dateOfBirth = req.body.dateOfBirth;

    // const password = req.body.password;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    const avatar = req.file.path + '';
    connection.query('UPDATE user SET userName = ? , gender = ?, dateOfBirth = ?,  email = ?, phoneNumber = ?, address = ?, avatar = ? WHERE id = ?',
        [userName, gender, dateOfBirth, email, phoneNumber, address, avatar, id ],
        (err, result) => {
            if(err) {
                res.send({message:"error update"})
            } else {
                res.send({message:"success", avatar: avatar});
            }
        })
})

app.get("/", function (req, res) {
    var sql = "SELECT * from user";
    connection.query(sql, function (err, result) {
        if(err) {
            console.log("error")
        } else {
            res.send(result);
        }
    })
})

app.listen(5000, function () {
    console.log("listen on port 5000")
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database connected!');
    })
})

