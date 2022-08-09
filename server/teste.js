const SunshineConversationsApi = require("sunshine-conversations-client");
const defaultClient = SunshineConversationsApi.ApiClient.instance;
const apiInstance = new SunshineConversationsApi.MessagesApi();
const data = new SunshineConversationsApi.MessagePost();

const basicAuth = defaultClient.authentications["basicAuth"];
basicAuth.username = "app_5f91ec93de54b1000c771b8f";
basicAuth.password = "yMK-UvG_rmFnwhzPkVxWYk-y7Xsl2LkEXFphbWfNOIddiLqSJr7jtMxEzrS8ISPvEcglscGFcVDuPb61KcLjGA";

console.log(basicAuth)

data.author = {
    type: 'business'
};
data.authNames
data.content = {
    type: 'text',
    text: 'bora, escolhe uma data',
    actions: [
        {
            type: 'webview',
            size: 'full',
            text: 'botao da data', // This text is rendered as a button
            uri: 'https://f04a-168-0-235-117.ngrok.io/datepicker-simple?userId=d21c9464c11d8c80e12ba9da&conversationId=022a7da8afec3326fe8d805c',
            fallback: 'https://smooch.io',
        }
    ]
};

apiInstance.postMessage("5f91e8f53a43f1000c6296b0", "022a7da8afec3326fe8d805c", data)
    .then(response => console.log(response.messages[0].content))
    .catch(error => console.log(error));


