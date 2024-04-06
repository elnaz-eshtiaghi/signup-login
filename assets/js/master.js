
let _main = document.getElementsByTagName('main')[0]
let _mood = document.getElementsByClassName('changemood')[0]
let _inp = document.querySelectorAll('input')
let _btn = document.querySelectorAll('button')
let _sec = document.querySelectorAll('section')
let _icon = document.getElementsByClassName('icon')[0]
let _label = document.getElementsByTagName('label')[0]
let _p = document.getElementsByTagName('p')[0]
let _signlog = document.getElementsByClassName('signlog')[0]
let _pa = ''
let _pa2 = ''

let _padmin = document.getElementsByClassName('padmin')[0]
let _puser = document.getElementsByClassName('puser')[0]


console.log(_inp)
console.log(_btn)

// .....change mood .....
function m() {

}


// .....signup/login......

function _login() {
    _inp[0].style.transform = 'translatex(200%)'
    _inp[3].style.transform = 'translatex(200%)'
    _signlog.children[0].children[0].style.color = 'blueviolet'
    _signlog.children[0].children[1].style.color = 'gray'
    _signlog.children[0].children[2].classList.add('start-50')
    _signlog.children[0].children[2].classList.remove('start-0')
    _btn[0].innerHTML = 'Login'
    _p.innerHTML = 'dont have any account? <strong>Sign Up </strong>'
    _label.innerHTML = 'admin email is : elnaz.eshtiyaghi@gmail.com & user email is : your email '
}

function _signup() {
    _inp[0].style.transform = 'translatex(00%)'
    _inp[3].style.transform = 'translatex(00%)'
    _signlog.children[0].children[1].style.color = 'blueviolet'
    _signlog.children[0].children[0].style.color = 'gray'
    _signlog.children[0].children[2].classList.add('start-0')
    _signlog.children[0].children[2].classList.remove('start-50')
    _btn[0].innerHTML = 'Sign up'
    _p.innerHTML = 'already have an account? <strong>Log In </strong>'
    _label.innerHTML = ''
}

// ....signup.....

_signlog.children[0].children[0].addEventListener('click', (e) => {
    _signup()

})

// ......login.......


_signlog.children[0].children[1].addEventListener('click', (e) => {
    _login()

})

// .......change p......

let i = 1
_p.addEventListener('click', (e) => {
    if (i % 2) {

        _login()
    }
    else {

        _signup()
    }
    i++
})




let n = 0
let j = 1

_btn[0].addEventListener('click', (e) => {
    // if( j % 2){
    //     _login()
    // }

    let _name = _inp[0].value
    let _email = _inp[1].value
    let _pass = _inp[2].value
    let _rpass = _inp[3].value

    // .....signup.....

    if (_btn[0].innerHTML != 'Login') {


        fetch('https://65a2844242ecd7d7f0a7c0c5.mockapi.io/generateuser')
            .then(res => res.json())
            .then(_data => {
                _data.map((val) => {
                    if ((_email == (val.email)) || ((_inp[2].value.length) < 4) || ((_inp[2].value) != (_inp[3].value)) && (_name == '')) {
                        n++
                    }

                })

                if (n == 0) {
                    fetch('https://65a2844242ecd7d7f0a7c0c5.mockapi.io/generateuser', {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },

                        body: JSON.stringify({
                            fullname: _name,
                            email: _email,
                            password: _pass,
                            rpassword: _rpass
                        })
                    }).then(res => {
                        if (res.ok) {
                            return res.json();
                        }
                    }).then(task => {
                        _login()

                    }).catch(error => {
                        alert('error')
                    })




                }
                else {
                    _label.innerHTML = 'please fill all fields ​​correctly'
                }





            })

    }
    // ......login.....
    else {
        if (_email != "" || _pass != "") {

            fetch('https://65a2844242ecd7d7f0a7c0c5.mockapi.io/users')
                .then(res => res.json())
                .then(_user2 => {

                    // .....admin.....
                    if (_email == 'elnaz.eshtiyaghi@gmail.com') {
                        _user2.map((val) => {
                            _pa2 = document.createElement('div')
                            console.log(_pa2)
                            _pa2.innerHTML = `

                                <figure class="col-10  rounded-3 py-3 position-relative mx-2">
                                    <div
                                        class="position-absolute border col-2 rounded-3 d-flex align-items-center justify-content-center">
                                        <img src="${val.img}" alt="${val.job}"
                                         class="col-10">
                                    </div>
                                    <figcaption class="mt-5">
                                     <div class="row">
                                            <strong class=" my-2 text-center text-capitalize">${val.name}</strong>
                                            <span class=" my-2 text-center text-capitalize">${val.job}</span>
                                            <ul class=" mt-4 d-flex flex-wrap justify-content-center w-100">
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-person-fill"></i>
                                                    <span>${val.birthday}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-instagram"></i>
                                                    <span>${val.instagram}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-github"></i>
                                                    <span>${val.github}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-linkedin"></i>
                                                    <span>${val.linkedin}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-envelope-fill"></i>
                                                    <span>${val.email}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-lock-fill"></i>
                                                    <span>${val.password}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-telephone-fill"></i>
                                                    <span>${val.phone}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-pin-map-fill"></i>
                                                    <span>${val.country},${val.city},${val.street}</span>
                                                    </li>
                                            </ul>
                                            <button
                                                class="text-capitalize col-4 col-md-2 text-center ms-auto me-2 mt-4 rounded-2 p-1 bg-transparent" onclick="_close1(event)">back</button>
                                            <button
                                                class="text-capitalize col-4 col-md-2 text-center me-auto ms-2 mt-4 rounded-2 p-1 bg-transparent" onclick="_mydel(event)">delete</button>
                                        </div>
                                    </figcaption>
                                </figure>


                            `
                            function _myjob(e) {
                                e.target.parentElement.previousElementSibling.innerHTML = val.job
                            }
                            const myinsta = (e) => {
                                e.target.parentElement.previousElementSibling.innerHTML = val.insta
                            }
                            _padmin.appendChild(_pa2)
                            _sec[1].style.display = 'block'




                        })

                    }
                    // .....user.....


                }),

                fetch('https://65a2844242ecd7d7f0a7c0c5.mockapi.io/generateuser')
                    .then(res => res.json())
                    .then(_user => {

                        // .....admin.....

                        if (_email == 'elnaz.eshtiyaghi@gmail.com') {
                            _user.map((val) => {
                                _pa = document.createElement('div')
                                console.log(_pa)
                                _pa.innerHTML = `

                                <figure class="col-10  rounded-3 py-3 position-relative mx-2">
                                    <div
                                        class="position-absolute border col-2 rounded-3 d-flex align-items-center justify-content-center">
                                        <img src="${val.img}" alt="${val.job}"
                                         class="col-10">
                                    </div>
                                    <figcaption class="mt-5">
                                     <div class="row">
                                            <strong class=" my-2 text-center text-capitalize">${val.fullname}</strong>
                                            <span class=" my-2 text-center text-capitalize"></span>
                                            <ul class=" my-2 d-flex flex-wrap justify-content-center w-100">
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-person-fill"></i>
                                                    <span>${val.birthday}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-instagram"></i>
                                                    <span>${val.instagram}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-github"></i>
                                                    <span>${val.github}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-linkedin"></i>
                                                    <span>${val.linkedin}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-envelope-fill"></i>
                                                    <span>${val.email}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-lock-fill"></i>
                                                    <span>${val.password}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-telephone-fill"></i>
                                                    <span>${val.telephone}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-pin-map-fill"></i>
                                                    <span>${val.country},${val.city},${val.street}</span>
                                                    </li>
                                                </ul>
                                            <button
                                                class="text-capitalize col-4 col-md-2 text-center ms-auto me-2 mt-4 rounded-2 p-1 bg-transparent" onclick="_close1(event)">back</button>
                                            <button
                                                class="text-capitalize col-4 col-md-2 text-center me-auto ms-2 mt-4 rounded-2 p-1 bg-transparent" onclick="_mydel(event, ${val.id})">delete</button>

                                        </div>
                                    </figcaption>
                                </figure>


                            `
                                _padmin.appendChild(_pa)



                            })

                        }

                        // .....user.....

                        else {
                            _user.map((val) => {
                                if ((val.email === _email) && (val.password === _pass)) {

                                    _sec[2].style.display = 'block'
                                    let _pus = document.createElement('div')
                                    _pus.innerHTML = `
                                   <figure class=" rounded-3 py-5 position-relative">
                                        <div
                                            class="position-absolute border col-2 rounded-3 d-flex align-items-center justify-content-center">
                                            <img src="${val.img}" alt=""
                                                class="col-10">
                                        </div>
                                        <figcaption class="mt-5">
                                            <div class="edit2 row">
                                                <strong class=" my-2 text-center text-capitalize">${val.fullname}</strong>
                                                <span class=" my-3 text-center text-capitalize">${val.job}</span>
                                                <ul class=" my-2 mt-4 d-flex flex-wrap justify-content-center w-100">
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-person-fill"></i>
                                                    <span>${val.birthday}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-instagram"></i>
                                                    <span>${val.instagram}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-github"></i>
                                                    <span>${val.github}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-linkedin"></i>
                                                    <span>${val.linkedin}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-envelope-fill"></i>
                                                    <span>${val.email}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-lock-fill"></i>
                                                    <span>${val.password}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-telephone-fill"></i>
                                                    <span>${val.phone}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-pin-map-fill"></i>
                                                    <span>${val.country},${val.city},${val.street}</span>
                                                    </li>
                                                </ul>
                                                <div class="back col-12 d-flex  justify-content-center">
                                                    <button
                                                    class="text-capitalize col-2 text-center  me-2 mt-4 rounded-2 p-1 bg-transparent " onclick = "_close2(event)">back</button>
                                                </div>

                                            </div>
                                        </figcaption>
                                    </figure>
                                   `
                                    _puser.appendChild(_pus)
                                    id = val.id
                                }
                                else {
                                    _label.innerHTML = 'The email address or password is incorrect'
                                    setTimeout((_signup()), 1000)

                                }
                            })
                        }






                    })


        }

    }

})
function _mydel(i) {
    fetch('https://65a2844242ecd7d7f0a7c0c5.mockapi.io/generateuser' + i, {
        method: 'DELETE',
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

    }).then(task => {

        alert('user deleted!')
        i.target.parentElement.parentElement.parentElement.remove()

    }).catch(error => {

    })
}
function _close1(e) {
    location.reload()

}
function _close2(e) {
    location.reload()

}



function _close3(id) {
    _sec[3].classList.add('d-none')

}


// .....change mood.....
_inp = document.querySelectorAll('input')
_btn = document.querySelectorAll('button')
_sec = document.querySelectorAll('section')
let _fig = document.querySelectorAll('figure')


let flag = 1
_mood.addEventListener('click', (e) => {
    if (flag % 2) {
        // ......switch....
        e.target.style.left = '0%'
        // .....background&shadow.....
        e.target.style.background = '#222222'
        e.target.style.boxShadow = '9.91px 9.91px 9px #000, -9.91px -9.91px 9px #333333'
        e.target.parentElement.style.boxShadow = 'inset 6.31px 6.31px 6px #000, inset -6.31px -6.31px 6px #333333'
        _main.style.backgroundImage = 'url(assets/img/SL-120722-54440-041.jpg)'
        _inp.forEach((val) => {
            val.style.boxShadow = ' inset 6.31px 6.31px 6px #000, inset -6.31px -6.31px 6px #333333'
        })
        _btn.forEach((val) => {
            val.style.boxShadow = '  6.31px 6.31px 6px #000,  -6.31px -6.31px 6px #333333'


        })
        _inp[4].style.boxShadow = 'inset 6.31px 6.31px 6px #B7B9BC, inset -6.31px -6.31px 6px #FFFFFF'
        _btn[1].style.boxShadow = '6.31px 6.31px 6px #B7B9BC, -6.31px -6.31px 6px #FFFFFF'

        _sec[0].style.boxShadow = '9.91px 9.91px 6px #000, -9.91px -9.91px 6px #333333'
        _icon.children[0].style.boxShadow = '6.31px 6.31px 6px #000, -6.31px -6.31px 6px #333333'
        _signlog.style.boxShadow = ' 4.91px 4.91px 4px #000,  -4.91px -4.91px 4px #333333'
        _signlog.children[0].children[2].style.boxShadow = 'inset 6.31px 6.31px 6px #000,inset  -3.31px -3.31px 6px #333333'
        _signlog.children[0].children[2].style.background = ' #222222'
        // .....text.....
        _p.classList.add('text-white')
        _p.classList.remove('text-muted')
        // ......mood......
        _mood.setAttribute('status', 'on')

    }
    else {
        // ......switch....
        e.target.style.left = '60%'
        // .....background&shadow.....
        e.target.style.background = '#F2F3F7'
        e.target.style.boxShadow = '9.91px 9.91px 9px #E1E3E7, -9.91px -9.91px 9px #FBFDFF'
        e.target.parentElement.style.boxShadow = 'inset 6.31px 6.31px 6px #B7B9BC, inset -6.31px -6.31px 6px #FFFFFF'
        _main.style.backgroundImage = 'url(assets/img/SL-120722-54440-04.jpg)'
        _inp.forEach((val) => {
            val.style.boxShadow = 'inset 6.31px 6.31px 6px #B7B9BC, inset -6.31px -6.31px 6px #FFFFFF'

        })
        _btn.forEach((val) => {
            val.style.boxShadow = ' 6.31px 6.31px 6px #B7B9BC,  -6.31px -6.31px 6px #FFFFFF'

        })


        _sec[0].style.boxShadow = '9.91px 9.91px 6px #B7B9BC, -9.91px -9.91px 6px #FFFFFF'
        _icon.children[0].style.boxShadow = '6.31px 6.31px 6px #B7B9BC, -6.31px -6.31px 6px #FFFFFF'
        _signlog.style.boxShadow = '4.91px 4.91px 4px #ADAEB1, -4.91px -4.91px 4px #FFFFFF'
        _signlog.children[0].children[2].style.boxShadow = 'inset 9.91px 9.91px 8px #ADAEB1, inset -9.91px -9.91px 8px #FFFFFF'
        _signlog.children[0].children[2].style.background = ' #FFFFFF'
        // ......text.....
        _p.classList.remove('text-white')
        _p.classList.add('text-muted')
        // .....mood.....
        _mood.setAttribute('status', 'off')

    }

    flag++
})


_btn[1].addEventListener('click', (e) => {


    let temp = _inp[4].value
    if (temp == '') {
        _padmin.innerHTML = ''
    }
    else {

        fetch('https://65a2844242ecd7d7f0a7c0c5.mockapi.io/users')

            .then(res => res.json())
            .then(_user3 => {

                
                _padmin.innerHTML = ''


                _user3.map((val) => {
                    console.log(val.name)
                    if (
                        val.name == temp
                    ) {




                        fetch('https://65a2844242ecd7d7f0a7c0c5.mockapi.io/users')
                            .then(res => res.json())
                            .then(_user2 => {



                                _pa2 = document.createElement('div')

                                _pa2.innerHTML = `

                                <figure class="col-10  rounded-3 py-3 position-relative mx-2">
                                    <div
                                        class="position-absolute border col-2 rounded-3 d-flex align-items-center justify-content-center">
                                        <img src="${val.img}" alt="${val.job}"
                                         class="col-10">
                                    </div>
                                    <figcaption class="mt-5">
                                     <div class="row">
                                            <strong class=" my-2 text-center text-capitalize">${val.name}</strong>
                                            <span class=" my-2 text-center text-capitalize">${val.job}</span>
                                            <ul class=" mt-4 d-flex flex-wrap justify-content-center w-100">
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-person-fill"></i>
                                                    <span>${val.birthday}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-instagram"></i>
                                                    <span>${val.instagram}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-github"></i>
                                                    <span>${val.github}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-linkedin"></i>
                                                    <span>${val.linkedin}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-envelope-fill"></i>
                                                    <span>${val.email}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-lock-fill"></i>
                                                    <span>${val.password}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-telephone-fill"></i>
                                                    <span>${val.phone}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-pin-map-fill"></i>
                                                    <span>${val.country},${val.city},${val.street}</span>
                                                    </li>
                                            </ul>
                                            <button
                                                class="text-capitalize col-4 col-md-2 text-center ms-auto me-2 mt-4 rounded-2 p-1 bg-transparent" onclick="_close1(event)">back</button>
                                            <button
                                                class="text-capitalize col-4 col-md-2 text-center me-auto ms-2 mt-4 rounded-2 p-1 bg-transparent" onclick="_mydel(event)">delete</button>
                                        </div>
                                    </figcaption>
                                </figure>


                            `

                                _padmin.appendChild(_pa2)




                            }
                            )


                    }
                })

                // mockapi returns first 10 tasks that are not completed
            })
        fetch('https://65a2844242ecd7d7f0a7c0c5.mockapi.io/generateuser')

            .then(res => res.json())
            .then(_user4 => {

                
                _padmin.innerHTML = ''


                _user4.map((val) => {
                    console.log(val.fullname)
                    if (
                        val.fullname == temp
                    ) {




                        fetch('https://65a2844242ecd7d7f0a7c0c5.mockapi.io/generateuser')
                            .then(res => res.json())
                            .then(_user => {



                                _pa = document.createElement('div')

                                _pa.innerHTML = `

                                <figure class="col-10  rounded-3 py-3 position-relative mx-2">
                                    <div
                                        class="position-absolute border col-2 rounded-3 d-flex align-items-center justify-content-center">
                                        <img src="${val.img}" alt="${val.job}"
                                         class="col-10">
                                    </div>
                                    <figcaption class="mt-5">
                                     <div class="row">
                                            <strong class=" my-2 text-center text-capitalize">${val.fullname}</strong>
                                            <span class=" my-2 text-center text-capitalize">${val.job}</span>
                                            <ul class=" mt-4 d-flex flex-wrap justify-content-center w-100">
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-person-fill"></i>
                                                    <span>${val.birthday}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-instagram"></i>
                                                    <span>${val.instagram}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-github"></i>
                                                    <span>${val.github}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-linkedin"></i>
                                                    <span>${val.linkedin}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-envelope-fill"></i>
                                                    <span>${val.email}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-lock-fill"></i>
                                                    <span>${val.password}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-telephone-fill"></i>
                                                    <span>${val.phone}</span>
                                                    </li>
                                                <li class="mx-1 mx-md-2 list-unstyled position-relative"><i class="bi bi-pin-map-fill"></i>
                                                    <span>${val.country},${val.city},${val.street}</span>
                                                    </li>
                                            </ul>
                                            <button
                                                class="text-capitalize col-4 col-md-2 text-center ms-auto me-2 mt-4 rounded-2 p-1 bg-transparent" onclick="_close1(event)">back</button>
                                            <button
                                                class="text-capitalize col-4 col-md-2 text-center me-auto ms-2 mt-4 rounded-2 p-1 bg-transparent" onclick="_mydel(event)">delete</button>
                                        </div>
                                    </figcaption>
                                </figure>


                            `

                                _padmin.appendChild(_pa)




                            }
                            )


                    }
                })

                // mockapi returns first 10 tasks that are not completed
            })
    }




})

