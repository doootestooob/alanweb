const callhomeitem = `<div id="homeitem"><img src="homeitem.png" width="70%" height="70%">
<div>
    <span style="--i:1">你</span>
    <span style="--i:2">好</span>
    <span style="--i:3">！</span>
    <br>
    <span style="--i:4">我</span>
    <span style="--i:5">是</span>
    <span style="--i:6">A</span>
    <span style="--i:7">l</span>
    <span style="--i:8">a</span>
    <span style="--i:9">n</span>
    <span style="--i:10">T</span>
    <span style="--i:11">s</span>
    <span style="--i:12">a</span>
    <span style="--i:13">i</span>
</div>
</div>`


const callregister = `<div id="registercontainer">
<form action="/auth/register" method="post">
    <div id="title">註冊</div>
    <div id="name">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="blue"
            class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
        <input type="text" name="name" id="name" placeholder="名稱" required>
    </div>
    <div id="email">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="green"
            class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
            <path
                d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
            <path
                d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
        </svg>
        <input type="email" name="email" id="email" placeholder="信箱" required>
    </div>
    <div id="passqord">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="red"
            class="bi bi-lock-fill" viewBox="0 0 16 16">
            <path
                d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        </svg>
        <input type="password" name="password" id="password" placeholder="密碼" required>
    </div>
    <div id="passwordconfirm">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="orange"
            class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
        </svg>
        <input type="password" name="passwordconfirm" id="passwordconfirm" placeholder="確認密碼" required>
    </div>
    <div id="registerbtn">
        <input type="submit" name="loginbtn" id="loginbtn" value="註冊">
        <a  id="gotologin">已有帳號，點擊登入</a>
    </div>
</form>
</div>

</div>`


const calllogin = `<div id="logincontainer">
<form action="/auth/login" method="post">
    <div id="title">登入</div>

    <div id="email">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="green"
            class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
            <path
                d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
            <path
                d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
        </svg>
        <input type="email" name="email" id="email" placeholder="信箱" required>
    </div>
    <div id="passqord">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="red"
            class="bi bi-lock-fill" viewBox="0 0 16 16">
            <path
                d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        </svg>
        <input type="password" name="password" id="password" placeholder="密碼" required>
    </div>

    <div id="loginbtn">
        <input type="submit" name="loginbtn" id="loginbtn" value="登入">
        <a id="gotoregister">沒有帳號，點擊註冊</a>
    </div>
</form>
</div>`


var aboutcontainer1 = `
                        <div id="aboutcontainer">
                            <div id="prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="gray" class="bi bi-caret-left-fill"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                </svg>
                            </div>

                            <div id="aboutcontent">
                                <div id="abouttitle">About</div>
                                <div id="abouttext">關於內容1</div>
                            </div>

                            <div id="next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="gray"
                                    class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                </svg>
                            </div>

                        </div>
                    `

function aboutpage() {
    if (animationboolen === 0) {
        content.style.animation = 'up 1.5s';
        animationboolen = 1;
        setTimeout(() => {
            animationboolen = 0;
            content.style.animation = '';
        }, 1500);
    }
    content.innerHTML = aboutcontainer1
}


var content = document.getElementById('content')
window.onload = () => {
    if (animationboolen === 0) {
        content.style.animation = 'up 1.5s';
        animationboolen = 1;
        setTimeout(() => {
            animationboolen = 0;
            content.style.animation = '';
        }, 1500);
    }

}

var animationboolen = 0

window.addEventListener('click', (event) => {
    const targetID = event.target.id;

    if (targetID === 'gotoregister' || targetID === 'gotologin') {
        if (animationboolen === 0) {
            content.style.animation = 'up 1.5s';
            animationboolen = 1;
            if (targetID === 'gotoregister') {
                content.innerHTML = callhomeitem + callregister;
            } else if (targetID === 'gotologin') {
                content.innerHTML = callhomeitem + calllogin;
            }
            setTimeout(() => {
                animationboolen = 0;
                content.style.animation = '';
            }, 1500);
        }
    }
});






