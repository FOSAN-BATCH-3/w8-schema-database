const db = require('../connection.js')

class VotecountModel{
    static all(cb){
        let query = ` SELECT * FROM VoteCount`

        db.query(query,function(err,res){
            if (err){
                cb(err)
            }else{
                cb(res.rows)
            }
        })
    }

    static Vote(voterId, poliId,cb){
        let query = `INSERT INTO Votecount (voters, candidates)
        VALUES ( $1, $2);`;

        let value = [voterId,poliId]

        db.query(query,value, function(err,res){
            if(err){
                cb(err)
            }else{
                cb(res.rowCount)
            }
        })
    }

    static delete(cb){
        let query = ` DELETE
        FROM VoteCount;`;


        db.query(query,function(err,res){
            if (err){
                cb(err)
            }else(
                cb(res.rowCount)
            )
        })
    }

    static status(cb){
        let query = `SELECT COUNT (Candidates), Politician.name
        FROM VoteCount  RIGHT JOIN Politician ON (Votecount.Candidates = politician.PoliId)
        GROUP BY Candidates, PoliId
        ORDER BY Count DESC;`;

        db.query(query,function (err,res) {
            if (err){
                cb(err)
            }else{
                cb(res.rows)
            }
        })
    }
    


}

module.exports= VotecountModel;