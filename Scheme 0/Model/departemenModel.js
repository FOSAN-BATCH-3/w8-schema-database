const koneksi = require(`../connection.js`);

class DepartementModel{
    
    static createD(dept_name,cb){
        let query = `SELECT * 
        FROM departemen
        WHERE dept_name = $1;`;

        let value = [dept_name] 

        koneksi.query(query,value,function(err,res){
            if (err){
                cb(err)
            }else{
                if (res.rows !== []){
                    cb(0)
                }else{

                let query2 = `INSERT INTO departemen(dept_name)
                VALUES ($1);`;
                
                let value2 = [dept_name]
        
                koneksi.query(query2, value2, function(errr, ress){
                    if(errr){
                        cb(errr)
                    }else{
                        cb(ress.rowCount)
                    }
                })
            }
        }
        })
    }

    static pointMg(dept_name, nik,cb){
        let query = `SELECT COUNT (position) , dept_name
        FROM  departemen
        WHERE (dept_name = $1)
        GROUP BY position, dept_name;`;
        

        let value = [dept_name]

        koneksi.query(query,value,function(err,res){
            if (err){
                cb(err)
            }else{
                console.log(res.rows)
                if (res.rows[0].count !== '0'){
                    cb ('Departemen ini sudah memiliki Manager')
                }else{
                    let query2 = `UPDATE Departemen 
                    SET
                    dept_name = $1,
                    nik = $2,
                    position = 'Manager'
                    WHERE dept_name = $1;`;

                    let value2 = [dept_name,nik]

                    koneksi.query (query2,value2, function(errr,ress){
                        if (errr){
                            cb(errr,'phase 2')
                        }else {
                            cb(ress.rowCount)
                        }
                    })
                }
            }
        })
    }


    static list(cb){
        let query = `SELECT * FROM Departemen  LEFT JOIN Karyawan ON (departemen.nik = karyawan.nik );`;
        
        koneksi.query(query, function(err, res){
            if(err){
                cb(err)
            }else{
                cb(res.rows)
            }
        })
    }
    static addMember(dept_name, nik,cb){
        let query = `INSERT INTO Departemen (dept_name,nik, position)
        VALUES ($1, $2, $3);`;

        let value =[dept_name, nik, 'Member'] 
        
        koneksi.query(query,value, function(err, res){
            if(err){
                cb(err)
            }else{
                cb(res.rowCount)
            }
        })
    }

}

module.exports = DepartementModel;