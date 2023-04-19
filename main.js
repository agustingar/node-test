const fs = require("fs");


const schema = require('./mock_application.json');
const schemaJSON = JSON.parse(JSON.stringify(schema));

class DeleteDuplicates {
    deleteObjectsFields(objects, isObjects = true) {
        Object.keys(objects).forEach((key) => {
            const object = objects[key];
            const objs = isObjects == true ? object.fields : object.views
            
            for (let index = 0; index < objs.length; index++) {
                const obj1 = objs[index];
                
                for (let index2 = 0; index2 < objs.length; index2++) {
                    const obj2 = objs[index2];
                    if (index != index2){
                        if (obj1.key == obj2.key){
                            objs.splice(index2, 1)
                            index2--
                            index--
                        }
                    }
                }
            }
        });
        return objects
        
    }
}



let del = new DeleteDuplicates;

schemaJSON.versions[0].objects = del.deleteObjectsFields(schemaJSON.versions[0].objects, true)
schemaJSON.versions[0].scenes = del.deleteObjectsFields(schemaJSON.versions[0].scenes, false)





const jsonString = JSON.stringify(schemaJSON)
fs.writeFile('./clean_application.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})
module.exports = DeleteDuplicates