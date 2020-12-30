const request = process.argv[2]
const param = process.argv.slice(3)

const karyawanController = require (`./Controller/karyawanController.js`);
const departemenController = require (`./Controller/departemenController.js`);
const projectController = require (`./Controller/projectController.js`);

switch (request){

    case 'register':
        karyawanController.register(param[0],param[1],param[2],param[3], param[4])
    break;
    case 'allKaryawan':
        karyawanController.list()
    break;
    case 'editKaryawan':
        karyawanController.edit(param[0], param[1])
    break;
    case 'hapusKaryawan':
        karyawanController.delete(param[0])
    break;
    case 'createDept':
        departemenController.createD(param[0])
    break;
    case 'pointM':
        departemenController.pointM(param[0],param[1])
    break;
    case 'DMember':
        departemenController.addMember(param[0],param[1])
    break;
    case 'allDept':
        departemenController.list()
    break;
    case 'createP':
        projectController.Create(param[0],param[1])
    break;
    case 'pMember':
        projectController.addMember(param[0],param[1])
    break;
    case 'allProject':
        projectController.list()
    break;
    case 'editP':
        projectController.hapus(param[0],param[1])
    break;
    case 'help':
        karyawanController.help()
    break;
    default:
        console.log('command tidak dikenali silahkan gunakan command help')
}