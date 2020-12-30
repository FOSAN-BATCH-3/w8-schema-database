const DepartemenModel = require (`../Model/departemenModel`);
const DepartemenView = require (`../View/departemenView`);

class DepartemenController {

    static createD(departname,){
        DepartemenModel.createD(departname,function(hasil){
            DepartemenView.showCreate(hasil)
        })
    }

    static list(){
        DepartemenModel.list(function(data){
            DepartemenView.showData(data)
        })
    }

    static pointM(dept_name,manager){
        DepartemenModel.pointMg(dept_name, manager, function(data){
            DepartemenView.showData(data)
        })
    }

    static addMember(dept_name, member){
        DepartemenModel.addMember(dept_name, member,function(data){
            DepartemenView.showData(data)
        })
    }

    static edit(dept_name, position, nik){
        DepartemenModel.edit(dept_name, position, nik,function(data){
            DepartemenView.showData(data)
        })
    }

    static delete (dept_name, position, nik){
        DepartemenModel.hapus(dept_name, position, nik, function(data){
            DepartemenView.showData(data)
        })
    }
    static test (){
        DepartemenModel.test(function(data){
            DepartemenView.showData(data)
        })
    }
}


module.exports = DepartemenController ;
