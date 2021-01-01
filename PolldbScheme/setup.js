//bikin tabel

const koneksi = require('./connection.js');

let query = `CREATE TABLE Voters (
	VotersId serial PRIMARY KEY,
    nama_depan VARCHAR ( 50 ) NOT NULL,
    nama_belakang VARCHAR ( 50 ) NOT NULL,
    gender VARCHAR (15) NOT NULL,
    age INT  NOT NULL
);`;

let query2 = `CREATE TABLE Politician (
    PoliId serial PRIMARY KEY,
    Name VARCHAR (50) NOT NULL,
    Partai VARCHAR ( 50 ) NOT NULL,
    Location VARCHAR ( 50 )NOT NULL,
    grade_current INT
);`;

let query3 = `CREATE TABLE VoteCount (
    CountId serial PRIMARY KEY,
    Candidates INT REFERENCES Politician (PoliId),
    Voters INT REFERENCES Voters (VotersId)
);`;

koneksi.query(query, function(err, res){
    if(err){
        console.log(err)
    }else{
        console.log('Berhasil membuat database Voters')
        koneksi.query(query2, function(err, res){
            if(err){
                console.log(err)
            }else{
                console.log('Berhasil membuat database Politician')
                koneksi.query(query3, function(err, res){
                    if(err){
                        console.log(err)
                    }else{
                        console.log('Berhasilmembuat database VoteCount')
                    }
                })
            }
        })
        
    }
})


