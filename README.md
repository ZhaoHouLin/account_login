###### Tags: `Node.js` `Express.js` `Handlebars` `stylus`

# 登入頁面
簡單功能的登入頁面

---
## 網頁畫面
![image](https://github.com/ZhaoHouLin/account_login/blob/master/demo/1.jpg)
![image](https://github.com/ZhaoHouLin/account_login/blob/master/demo/2.jpg)
## 使用方式
1.輸入mail帳號

2.輸入密碼

3.Sign in

提供測試的帳密資料如下:
```
 {
   firstName: 'Tony',
   email: 'tony@stark.com',
   password: 'iamironman'
 },
 {
   firstName: 'Steve',
   email: 'captain@hotmail.com',
   password: 'icandothisallday'
 },
 {
   firstName: 'Peter',
   email: 'peter@parker.com',
   password: 'enajyram'
 },
 {
   firstName: 'Natasha',
   email: 'natasha@gamil.com',
   password: '*parol#@$!'
 },
 {
   firstName: 'Nick',
   email: 'nick@shield.com',
   password: 'password'
 }
```

## 此專案用到的套件
* **node.js:** v10.16.3
* **body-parser:** "^1.19.0"
* **express:** "^4.17.1"
* **express-handlebars:** "^3.1.0"
* **stylus:** "^0.54.7"

## 安裝與執行方式
**1.打開終端機輸入以下指令複製專案到電腦上**
```
git clone https://github.com/ZhaoHouLin/account_login.git
```

**2.進入專案資料夾**
```=
cd account_login
```

**3.使用VSCode開啟**
```=
code .
```

**4.安裝相關此專案相關套件**
```
npm install
```

**5.開啟伺服器**
```
npm run dev
```

**6.出現以下log表示開啟成功**
```
http://localhost:3000
```
將上方網址複製貼上瀏覽器網址列，即可開啟網頁
