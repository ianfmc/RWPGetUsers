
var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    
	var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName : 'User'
    };
    docClient.scan(params, context.done);
};