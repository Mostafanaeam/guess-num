let again = document.getElementById('one')
let centr = document.getElementById('two')
let guess = document.getElementById('first')
let numm = document.getElementById('numm')
let score = document.getElementById('score')
let high = document.getElementById('high')
let bod = document.getElementById('body')
let myBtn = document.querySelector('#three');


let x = Math.floor(Math.random() * 21)
console.log(x)

myBtn.onclick = function(){
    let value = parseInt(numm.value);
    
    // إذا كان التخمين صحيح
    if (value === x) {
        score.innerHTML = parseInt(score.innerHTML) - 1; // ينقص نقطة من score
        high.innerHTML =  parseInt(score.innerHTML); // تحديث أعلى النقاط
        guess.innerHTML = 'Good job, you guessed it!';
        bod.style.backgroundColor = 'green'
        centr.innerHTML = x
    } 
    // إذا كان التخمين أعلى من الرقم العشوائي
    else if (value > x) {
        score.innerHTML = parseInt(score.innerHTML) - 1; // ينقص نقطة من score
        guess.innerHTML = 'Number is too high, try again!';
        bod.style.backgroundColor = 'red'
    } 
    // إذا كان التخمين أقل من الرقم العشوائي
    else {
        score.innerHTML = parseInt(score.innerHTML) - 1; // ينقص نقطة من score
        guess.innerHTML = 'Number is too low, try again!';
        bod.style.backgroundColor = 'brown'
    }
    // إذا أصبحت النقاط 0
    if (parseInt(score.innerHTML) === 0) {
        guess.innerHTML = 'Game over!';
        bod.style.animation = 'gradientBackground 3s infinite';
        myBtn.disabled = true; // تعطيل الزر بعد انتهاء اللعبة
    }
}
// دالة إعادة تشغيل اللعبة
again.onclick = function() {

    // إعادة تعيين القيم
    score.innerHTML = '20'; // إعادة النقاط إلى البداية
    centr.innerHTML = '?'; // إخفاء الرقم العشوائي
    guess.innerHTML = 'Start guessing...'; // إعادة رسالة التخمين
    numm.value = ''; // تفريغ الحقل النصي
    bod.style.backgroundColor = ''; // إعادة لون الخلفية
    bod.style.animation = 'none'; // إيقاف الأنيميشن
    myBtn.disabled = false; // إعادة تفعيل زر التخمين
}