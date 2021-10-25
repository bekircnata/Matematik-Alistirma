// SEÇİM İŞLEMLERİ

const topla = document.getElementById("topla");
const cikar = document.getElementById("cikar");
const carp = document.getElementById("carp");
const bol = document.getElementById("bol");
const controlBtn = document.getElementById("controlBtn");

var id;
var numb1;
var numb2;
var total;
const selectLevel = document.getElementById('selectLevel');
const operationsItem = document.querySelector(".operationsItem");
var item1 = document.querySelector(".item1");
var item2 =document.querySelector(".item2");
var operator = document.querySelector(".operator")
var input = document.getElementById("input");

const correctText = document.getElementById("correctText");
const totalQuestionText = document.getElementById("totalQuestionText");
const wrongText = document.getElementById("wrongText");
var correctAnswer = 0;
var wrongAnswer = 0;
var totalQuestion = 0;
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');


eventListeners();

function eventListeners(){ // Tüm addEventListener İşlmelerini Bir Alanda Toplamak Amacıyla Fonksiyon İçine Alınmıştır. 
    topla.addEventListener("click", toplama);
    cikar.addEventListener("click", cikarma);
    carp.addEventListener("click", carpma);
    bol.addEventListener("click", bolme);
    controlBtn.addEventListener("click", control);
}

function toplama(){
    id = 1;

    // Random Sayı Üretip Yazdırır.
    level();
    // Skoru Sıfırlar
    skorZero();
    operator.innerText = "+";

    total = numb1 + numb2;
    console.log(total);

    // İşlemler Sadece Fonksiyona Girildiği Zaman Göseterilir.
    operations.style.display="inline-block";
}

function cikarma() {
    id = 2;   
    level(); 
    skorZero();
    operator.innerText = "-";
        
    total = numb1 - numb2;
    console.log(total);
    
    operations.style.display="inline-block";

}

function carpma() {
    id = 3;
    level();
    skorZero();
    operator.innerText = "x";

    total = numb1 * numb2;
    console.log(total);

    operations.style.display="inline-block"
}

function bolme() { // Bölme İşleminde Ondalıklı Çıkan Sayılar Aşağı Yuvarlanmıştır.
    id = 4;
    level();   
    skorZero();
    operator.innerText = "÷";
    
    total = Math.floor(numb1 / numb2);
    console.log(total);
    
    operations.style.display="inline-block"
}

function control() { // İşlemi Kontrol Eder, Doğru Yanlış ve Toplam Soru Sayıları İçin Arttırma işlemi Gerçekleştirir.

    if(Number(input.value) === total){
        correctAnswer++;
        correctText.innerText = correctAnswer;
        totalQuestion += 10;
        totalQuestionText.innerText = totalQuestion;

        correctSound.play();
        showAlert('Tebrikler Doğru Cevabı Verdin', 'alert-success');
        next();

    }else if(input.value === ''){
        showAlert('Cevabını Girmen Gerekiyor', 'alert-warning');

    }else {
        wrongAnswer++;
        wrongText.innerText = wrongAnswer;
        totalQuestion -= 5;
        totalQuestionText.innerText = totalQuestion;

        wrongSound.play();
        showAlert('Üzgünüm Yanlış Cevap Verdin Ama Biraz Antrenmanla Hepsini Doğru Yapabilirsin', 'alert-danger')
        next();
    }

    input.value = '';
}

function next() { // Hangi İşlem Butonu Seçildiyse O İşlemden İlerlemeyi Sağlar.
    if(id == 1){
        level();
        total = numb1 + numb2;
    }else if(id == 2){
        level();
        total = numb1 - numb2;
    }else if(id === 3) {
        level();
        total = numb1 * numb2;
    }else if(id == 4){
        level();
        total = Math.floor(numb1 / numb2);
    }

}

function level(){ // Seçilen Seviyeye Göre Random Sayı Üretecek Fonksiyonları Çağırır.
    if(selectLevel.value == 'Seviye 1'){
        random1();
    }else if(selectLevel.value == 'Seviye 2'){
        random2();
    }else if(selectLevel.value == 'Seviye 3'){
        random3();
    }else {
        random1();
    }
}

function random1() { // 1-10 Arası Random Sayı Üretip Yazdırır.
    if(id == 4) {
        numb1 = Math.floor(( Math.random() * 10 ) + 1 );
        item1.innerText = numb1;
        numb2 = Math.floor( (Math.random() * 10 ) + 1 );
        item2.innerText = numb2;
    }else {
        numb1 = Math.floor(Math.random() * 10);
        item1.innerText = numb1;
        numb2 = Math.floor(Math.random() * 10);
        item2.innerText = numb2;
    }
}

function random2() { // 1-100 Arası Random Sayı Üretip Yazdırır.
    if(id == 4) {
        numb1 = Math.floor(( Math.random() * 100 ) + 1 );
        item1.innerText = numb1;
        numb2 = Math.floor( (Math.random() * 100 ) + 1 );
        item2.innerText = numb2;
    }else {
        numb1 = Math.floor(Math.random() * 100);
        item1.innerText = numb1;
        numb2 = Math.floor(Math.random() * 100);
        item2.innerText = numb2;
    }
}

function random3() { // 1-1000 Arası Random Sayı Üretip Yazdırır.
    if(id == 4) {
        numb1 = Math.floor(( Math.random() * 1000 ) + 1 );
        item1.innerText = numb1;
        numb2 = Math.floor( (Math.random() * 1000 ) + 1 );
        item2.innerText = numb2;
    }else {
        numb1 = Math.floor(Math.random() * 1000);
        item1.innerText = numb1;
        numb2 = Math.floor(Math.random() * 1000);
        item2.innerText = numb2;
    }
}

function skorZero() { // Skoru Sıfırlar.
    correctAnswer = 0;
    correctText.innerText = correctAnswer;
    wrongAnswer = 0;
    wrongText.innerText= wrongAnswer;
    totalQuestion = 0;
    totalQuestionText.innerText = totalQuestion;
}

function showAlert(message, className) { // Cevap Alanının Boş Geçilmemesi Halinde Uyarı Kutusu Açılır. 
    var alert = 
    `
    <div class="alert ${className}">
        ${message}
    </div>
    `;

    controlBtn.insertAdjacentHTML("afterend",alert);

    setTimeout(()=>{
        document.querySelector(".alert").remove();
    },3000);
}