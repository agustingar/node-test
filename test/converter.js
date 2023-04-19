
const DeleteDuplicates = require('../main.js');
const schema = require('../mock_application.json');
const schemaJSON = JSON.parse(JSON.stringify(schema));



describe("Test main", function() {
    it("Test the deleteObjectsFields function", function() {
        let del = new DeleteDuplicates;
        schemaJSON.versions[0].objects =  del.deleteObjectsFields(schemaJSON.versions[0].objects, true)
        schemaJSON.versions[0].scenes =  del.deleteObjectsFields(schemaJSON.versions[0].scenes, false)
        
        
    });
});