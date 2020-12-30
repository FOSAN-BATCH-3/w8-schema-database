//bikin tabel

const koneksi = require('./connection.js');

let query = `CREATE TABLE Karyawan (
	NIK serial PRIMARY KEY,
    nama_depan VARCHAR ( 50 ) NOT NULL,
    nama_belakang VARCHAR ( 50 ) NOT NULL,
    jenisKelamin VARCHAR (15) NOT NULL,
    email VARCHAR ( 50 ) UNIQUE NOT NULL,
    pNumber VARCHAR ( 15 ) UNIQUE NOT NULL
);`;

let query2 = `CREATE TABLE Departemen (
    deptId serial PRIMARY KEY,
    Dept_name VARCHAR ( 50 ) NOT NULL,
    NIK INT,
    position VARCHAR ( 50 ),
    FOREIGN KEY (nik)
    REFERENCES Karyawan(NIK)

);`;

let query3 = `CREATE TABLE Project (
    deptId serial PRIMARY KEY,
    Project_name VARCHAR ( 50 ) NOT NULL,
    member INT, 
    FOREIGN KEY (member)
    REFERENCES Karyawan(NIK)
);`;

koneksi.query(query, function(err, res){
    if(err){
        console.log(err)
    }else{
        console.log('Berhasil membuat database Karyawan')
        koneksi.query(query2, function(err, res){
            if(err){
                console.log(err)
            }else{
                console.log('Berhasil membuat database Departemen')
                koneksi.query(query3, function(err, res){
                    if(err){
                        console.log(err)
                    }else{
                        console.log('Berhasilmembuat database Project')
                    }
                })
            }
        })
        
    }
})


