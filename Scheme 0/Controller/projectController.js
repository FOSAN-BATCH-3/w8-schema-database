const ProjectModel = require (`../Model/projectModel`);
const ProjectView = require (`../View/projectView`);

class ProjectController {

    static Create(Projectname,nik){
        ProjectModel.create(Projectname,nik,function(hasil){
            ProjectView.showData(hasil)
        })
    }

    static list(){
        ProjectModel.list(function(data){
            ProjectView.showData(data)
        })
    }

    static addM(Projectname,member){
        ProjectModel.pointMg(Projectname, member, function(data){
            ProjectView.showData(data)
        })
    }

    static addMember(Projectname, member){
        ProjectModel.addMember(Projectname, member,function(data){
            ProjectView.showData(data)
        })
    }

    static kickM(Projectname, nik){
        ProjectModel.kickM(Projectname, position, nik,function(data){
            ProjectView.showData(data)
        })
    }

    static deleteP (Projectname){
        ProjectModel.hapus(Projectname, function(data){
            ProjectView.showData(data)
        })
    }
    static test (){
        ProjectModel.test(function(data){
            ProjectView.showData(data)
        })
    }
}


module.exports = ProjectController ;
