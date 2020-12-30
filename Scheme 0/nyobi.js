static pointMg(dept_name, nik,cb,cb2){
    let query = `SELECT COUNT (departemen.position) as jumlah
    FROM Departemen
    WHERE departemen.position = 'manager'
    ;`;

    let query2 = `INSERT INTO Departemen (dept_name, nik)
    WHERE dept_name = $1 AND $3 = 0
    VALUES ($1,$2,$3);`

    let value = [dept_name,nik,cb]

    koneksi.query(query,value,function(err,res){
        if (err){
            cb(err)
        }else{
            cb(res.rowCount)
            koneksi.query2(query2,value,function(errr,ress,cb2){
                if(err2){
                    cb2(errr)
                }else{
                    cb2(ress.rowCount)
                }
            })
        }
        
        
    })
}


let query = `INSERT INTO departemen (dept_name, nik, position)
        departemen.position = 'manager'    
        WHERE (
            SELECT COUNT (departemen.position)
            FROM departemen 
            WHERE departemen.position = 'manager' AND dept_name = $2) = 0
        VALUES ($1,$2);`;