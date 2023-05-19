const form = document.querySelector('.form');
const arrayInput = form.querySelectorAll('input');
const listInputValue = {};
let msg = listInputValue;

const formInfo = () => {
    arrayInput.forEach(item => {
      if(item.type === 'text') {
        return listInputValue[item.name] = item.value;
      } else if(item.type === 'radio' && item.checked) {
        return listInputValue[item.name] = item.value;
      } else {
        return ;
      }
    })
};

const telegram = {
    "token": "6154114905:AAE5lxT4YveaJSGFB2C3BhLPpYuGiUs9ZJw",
    "chat": "-873919155"
}

const server = () => {
    fetch(`https://api.telegram.org/bot${telegram.token}/sendMessage?chat_id=${telegram.chat}&parse_mode=html&text=${JSON.stringify(msg).replace(/["{}]/g, '').replace(/,/g, '%0A')}`, {
        method: 'POST',
        'Content-Type': 'application/json',
    }) 
        .then(res => console.log(res))
        .catch(req => console.log(req))
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formInfo();
    server();
})