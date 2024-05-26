'use strict'
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://studyprograms.informatics.ru/api/jsonstorage/?id=f7999363a3858932b920c811aa42e9e8', true);
xhr.send();
if (document.title == "main") {
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let photosArr2 = JSON.parse(xhr.responseText);
                let templateCode = `
            <div class="card">
                <img class="image" src="{{photoUrl}}">
                <div style="display:flex; margin-top:2%;">
                    <div class="author">
                        <img class="userPhotoUrl2" src="{{userPhotoUrl}}">
                        
                    </div>
                    
                    <div style="flex-direction:column">
                        <p class="cardText">Автор: {{userInformation}}</p>
                        <p>Описание: {{userText}}</p>
                    </div>
                    
                </div>
            </div>`
                let template = Handlebars.compile(templateCode);
                if (document.title == 'main') {
                    let productsContainer = document.querySelector('#box1');
                    productsContainer.innerHTML = '';
                    for (let photo of photosArr2) {
                        productsContainer.innerHTML += template(photo);
                    }
                }
            }
        }
    })
    buttonReload.addEventListener('click', function () {
        location.reload()
    })
    buttonDown.addEventListener('click', function () {
        document.getElementById("buttonReload").scrollIntoView({ behavior: "smooth" })
    })
}
if (document.title == "add") {
    send.addEventListener('click', function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let photosArr = JSON.parse(xhr.responseText);
            let arr = JSON.parse(xhrs.responseText);
            let l = arr.length
            let newPhoto = {
                photoUrl: '',
                userInformation: '',
                userPhotoUrl: '',
                userText: '',
                userlogin: ''
            }
            newPhoto.userInformation = nameInput.value;
            newPhoto.photoUrl = urlInput.value;
            newPhoto.userPhotoUrl = userPhotoInput.value;
            newPhoto.userText = userTextInput.value
            newPhoto.userlogin = arr[l - 1].login
            if (newPhoto.photoUrl == '') {
                alert('Ошибка отправки. Попробуйте еще раз.');
            } else {
                photosArr.push(newPhoto);
                let xhrSender = new XMLHttpRequest();
                xhrSender.open('PUT', 'https://studyprograms.informatics.ru/api/jsonstorage/?id=f7999363a3858932b920c811aa42e9e8', true);
                xhrSender.setRequestHeader("Content-type", "application/json");
                xhrSender.send(JSON.stringify(photosArr));
                xhrSender.addEventListener('readystatechange', function () {
                    if (xhrSender.readyState == 4) {
                        if (xhrSender.status == 200) {
                            alert('Ваше фото успешно добавлено!');
                        } else {
                            alert('Ошибка отправки. Попробуйте еще раз.');
                        }
                    }
                })
            }
        }

    });
}
let xhrr = new XMLHttpRequest();
xhrr.open('GET', 'https://studyprograms.informatics.ru/api/jsonstorage/?id=9db2df8a3f6d965e109a3fffee30dd63', true);
xhrr.send();
let flag1 = true
if (document.title == "register") {
    sendRegister.addEventListener('click', function () {
        let flag1 = true
        if (xhrr.readyState == 4 && xhrr.status == 200) {
            let usersArr = JSON.parse(xhrr.responseText);
            let newUser = {
                name: '',
                login: '',
                password: '',
                photo: ''
            }
            for (let i in usersArr) {
                if (aklogin.value == usersArr[i].login) {
                    akname.value = ''
                    aklogin.value = ''
                    akpassword.value = ''
                    flag1 = false
                    alert('Такой пользователь уже существует')
                    break
                }
            }
            if (flag1 == true) {
                newUser.name = akname.value;
                newUser.login = aklogin.value;
                newUser.password = akpassword.value;
                newUser.photo = akphoto.value
                usersArr.push(newUser);
                let xhrSenderr = new XMLHttpRequest();
                xhrSenderr.open('PUT', 'https://studyprograms.informatics.ru/api/jsonstorage/?id=9db2df8a3f6d965e109a3fffee30dd63', true);
                xhrSenderr.setRequestHeader("Content-type", "application/json");
                xhrSenderr.send(JSON.stringify(usersArr));
                xhrSenderr.addEventListener('readystatechange', function () {
                    if (xhrSenderr.readyState == 4) {
                        if (xhrSenderr.status == 200) {
                            alert('Пользователь успешно зарегестрирован!');
                            location.reload()
                        } else {
                            alert('Ошибка отправки. Попробуйте еще раз.');
                            location.reload()
                        }
                    }
                })
            }
        }
    });
}
let xhrs = new XMLHttpRequest();
xhrs.open('GET', 'https://studyprograms.informatics.ru/api/jsonstorage/?id=bf2f21228e152d9c28420c137a3f5525', true);
xhrs.send();
if (document.title == "enter") {
    sendEnter.addEventListener('click', function () {
        let flag1 = true
        if (xhrr.readyState == 4 && xhrr.status == 200 && xhrs.readyState == 4 && xhrs.status == 200) {
            let photosArrchek = JSON.parse(xhrr.responseText);
            let photosArrappend = JSON.parse(xhrs.responseText);
            for (let i in photosArrchek) {
                if (aklogin2.value == photosArrchek[i].login && akpassword2.value == photosArrchek[i].password) {
                    flag1 = false
                    let chek = {
                        profilephoto: '',
                        login: '',
                        islogin: '1'
                    }
                    chek.login = aklogin2.value;
                    chek.profilephoto = photosArrchek[i].photo
                    photosArrappend.push(chek);
                    let xhrsSender = new XMLHttpRequest();
                    xhrsSender.open('PUT', 'https://studyprograms.informatics.ru/api/jsonstorage/?id=bf2f21228e152d9c28420c137a3f5525', true);
                    xhrsSender.setRequestHeader("Content-type", "application/json");
                    xhrsSender.send(JSON.stringify(photosArrappend));
                    localStorage.clear()
                    localStorage.setItem('true', 1)
                    alert('Вы успешно вошли в аккаунт')
                    window.location.href = 'index3.html';
                    break
                }
                if (aklogin2.value == photosArrchek[i].login && akpassword2.value != photosArrchek[i].password) {
                    alert('Не верный пароль')
                    flag1 = false
                    break
                }
            }
            if (flag1 == true) {
                alert("Такого аккаунта не существует")
            }
        }
    })
}
var a = 0
if (document.title == "profile") {
    xhrs.addEventListener('readystatechange', function () {
        if (xhrs.status != 200) {
            location.reload()
        }
        if (xhr.status != 200) {
            location.reload()
        }
        let flag2 = true
        if (xhrs.readyState == 4 && xhrs.status == 200 && xhr.readyState == 4 && xhr.status == 200) {
            let arr = JSON.parse(xhrs.responseText);
            let arr2 = JSON.parse(xhr.responseText);
            if (localStorage.getItem('true') == 1) {
                localStorage.clear()
                localStorage.setItem('true', 0)
                localStorage.setItem('length', arr.length)
            }
            let templateCode = `
                <div class="boxb" id="boxb2">
                <div class="card">
                    <img class="image" src="{{photoUrl}}">
                    <div style="display:flex; margin-top:2%;">
                        <div class="author">
                            <img class="userPhotoUrl2" src="{{userPhotoUrl}}">
                            
                        </div>
                        
                        <div style="flex-direction:column">
                            <p class="cardText">Автор: {{userInformation}}</p>
                            <p>Описание: {{userText}}</p>
                        </div>
                        
                    </div>
                </div>
                </div>
                `
            let templateCode2 = `
                <div class="profilebox">
                    <img src="${arr[localStorage.getItem('length') - 1].profilephoto}" class="profilephot">
                    <p class="cardText" style="margin-left:3%;color:black;font-size:25px">Владелец аккаунта: ${arr[localStorage.getItem('length') - 1].login}</p>
                </div>`
            let template = Handlebars.compile(templateCode);
            let template2 = Handlebars.compile(templateCode2);
            let productsContainer2 = document.querySelector('#boxb');
            productsContainer2.innerHTML = '';
            productsContainer2.innerHTML += template2();
            for (let photo of arr2) {
                if (photo.userlogin == arr[localStorage.getItem('length') - 1].login) {
                    productsContainer2.innerHTML += template(photo);
                }
            }
        }
    })
}
