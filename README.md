# js-iyelik-eki
Javascript ile iyelik eki eklemek için basit bir sınıf

> Youtube kanalımda php kodlarını javascript'e dönüştürmek için hazırladığım eğitim için https://github.com/cengizhancaliskan/iyelik-eki bu sınıftan yararlanılmıştır.

# Kullanımı

```js
const possessive = new PossessiveSuffix();

// en basit haliyle
console.log( possessive.word('Tayfun').get() );

// lowercase-uppercase-capitalize
possessive.word('İsmail').toLowerCase().get();
possessive.word('ismail').toUpperCase().get();
possessive.word('ismail').toCapitalize().get();

// dizide kullanımı
let names = ['tayfun', 'aslı', 'ahmet', 'ece', 'baha', 'murat'];
console.log(
    names.map(name => possessive.word(name).with('odası').toUpperCase().get())
);

// domda kullanımı
[...document.querySelectorAll('ul li')].forEach(val => {
    val.innerText = possessive.word(val.innerText).with('evi').toCapitalize().get()
});
```
