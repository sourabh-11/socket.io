const socket = io('http://localhost:8000');

const form  =  document.getElementById(send-container);
const messageInput  =  document.getElementById(messageINP);
const messageContainer = document.querySelector(".container")
const append = (message,position)=>{
    const messageElement  = document.createElement('div')
    messageElement.classList.add('message')
    messageElement.classList.add('position')
    messageContainer.append(messageElement);

}
const name  = prompt("enter the name of new user")
socket.emit('new-user-joined',name);

socket.on('user-joined',data=>{
    append(`${name}join the chat`)
})
socket.on('receive',data=>{
    append(`${data,message}:$(data.user)`,'right')
})
