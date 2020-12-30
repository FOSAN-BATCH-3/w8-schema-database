const koneksi = require('../connection.js')

class ProjectModel{

    static create(pjn,nik,cb){
        let query = `INSERT INTO Project (project_name,member)
        VALUES ($1, $2);`;

        let value = [pjn, nik]

        koneksi.query(query,value, function(err,res){
            if (err){
                cb(err)
            }else{
                cb(res.rowsCount)
            }
        })
    }

    static list(cb){
        let query = `SELECT * from project;`;
        
        koneksi.query(query, function(err, res){
            if(err){
                cb(err)
            }else{
                cb(res.rows)
            }
        })
    }

    static addMember(pjn,nik,cb){
        let query = ` INSERT INTO project (project_name, member)
        VALUES($1, $2);`;

        let value =[pjn, nik]

        koneksi.query(query, value, function(err,res){
            if(err){
                cb(err)
            }else{
                cb(res.rows)
            }
        })
    }

    static hapus (pjn,nik,cb){
        let query = ` DELETE FROM project
        WHERE (project_name = $1 AND member = $2;`;

        let value = [pjn,nik]

        koneksi.query(query,value,function(err,res){
            if (err){
                cb(err)
            }else{
                cb(res.rowCount)
            }
        })

    }
}

module.exports= ProjectModel;