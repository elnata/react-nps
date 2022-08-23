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
            uri: 'https://bf53-168-0-235-145.ngrok.io/datepicker-simple?userId=676683b8b96e0bffa8aef053&conversationId=28d26e4fb397c4c12fad9dfd',
            fallback: 'https://smooch.io',
        }
    ]
};

apiInstance.postMessage("5f91e8f53a43f1000c6296b0", "28d26e4fb397c4c12fad9dfd", data)
    .then(response => console.log(response.messages[0].content))
    .catch(error => console.log(error));


