let submitButton = document.getElementById("submit_button");
let mainMessage = document.getElementById("main_message");
let textboxToSend = document.getElementById("to_send");
let messageResult = document.getElementById("message_result");

submitButton.onclick = () => {
    // Update the text of the main message
    mainMessage.innerText = "Submitted!";
    setTimeout(()=> {
        console.log("After 3 seconds");
        mainMessage.innerText = "Hello there world!";
    }, 3000);

    messageResult.innerText = `Previous message sent: ${textboxToSend.value}`;
};