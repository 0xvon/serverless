exports.handler = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        statusDescription: '200 OK',
        isBase64Encoded: false,
        headers: {
            'Content-Type': 'text/html; charset=utf-8'
        },
        body: JSON.stringify('Hello from Lambda!'),
    };
    callback(null, response);
};