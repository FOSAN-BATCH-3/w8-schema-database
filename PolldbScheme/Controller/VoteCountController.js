const VotecountModel = require(`../Model/VotecountModel.js`);
const VotecountView = require (`../View/VotecountView.js`);


class VotecountController{

    static allVC(){
        VotecountModel.all(function(data){
            VotecountView.show(data)
        })
    }

    static Vote(voters,candidates){
        VotecountModel.Vote(voters,candidates,function(data){
            VotecountView.show(data)
        })
    }

    static deleteAll(){
        VotecountModel.delete(function(data){
            VotecountView.show(data)
        })
    }

    static status(){
        VotecountModel.status(function(data){
            VotecountView.showStatus(data)
        })
    }
    

}

module.exports = VotecountController; 