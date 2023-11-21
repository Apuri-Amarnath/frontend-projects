var username;
function getUserid() {
    var userInput = document.querySelector('#create-meeting-form input');
    var userInputvalue = userInput.value;
    if (userInputvalue !== null && userInputvalue !== "") {
        username = userInputvalue;
        return userInputvalue;

    }

}
function JoinMeeting() {
    var userNameInput = document.querySelector('#Username');
    var meetingIdInput = document.querySelector('#MeetingID')
    Username = userNameInput.value;
    var meetingid = meetingIdInput.value;
    if ((Username !== null && Username !== "") && (meetingid !== null && meetingid !== "")) {
        console.log(Username);
        console.log(meetingid);
        return Username, meetingid;

    }

}
function sendmessage() {
    var message = document.querySelector('#messagebox');
    var messageinfo = message.value;
    console.log(messageinfo);
    if (messageinfo !== null && messageinfo !== "") {
        const list = document.querySelector('#user-chats');
        var listItem = document.createElement('li');
        listItem.className = 'messages';
        var displayusernamelist = document.createElement('li');
        displayusernamelist.className = 'username';
        const messagelist = document.createTextNode(messageinfo);
        const usernamelist = document.createTextNode(username);
        listItem.appendChild(messagelist);
        list.appendChild(listItem);
        displayusernamelist.appendChild(usernamelist);
        list.appendChild(displayusernamelist);
        // Clear the text area
        message.value = ""
    }
}
