const text = "Salom yaxshimisiz? Uydagilarchi?"

function cencorStr(variable){
    return console.log(text.replaceAll('a','A').replaceAll('u','*').replaceAll('i','*').replaceAll('o','*').replaceAll('e','*').replaceAll('U','*').replaceAll('I','*').replaceAll('O','*').replaceAll('E','*'));
}

cencorStr(text);

// 1.Variableni e'lon qildim.
// 2.Kn funksiya yozdim va bunda ham replaceAll dan foydalandim chunki chunki replace elementlarni o'zgartira oladi.ln faqat bitta element emas hamma bir xil elementlar o'zgarishi kerak bo'lgani uchun replaceAll ishlatdim va o'zgartirib console ga yozdim
// 3.Funksiyani chaqirdim va ishladi.
