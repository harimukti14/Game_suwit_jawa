// menangkap pilihan user
var i = true;
while(i){
    var p = prompt('masukan pilihan kamu: \njempol, telunjuk, kelingking');
    // menangkap pilihan komp
    // membangitkan bilangan random
    var komp = Math.random();
    if (komp < 0.34){
        komp = 'jempol';
    } else if(komp>= 0.34 && komp < 0.67){
        komp = 'telunjuk';
    } else {
        komp = 'kelingking';
    }

    // menentukan rules
    var hasil = '';
    if (p == komp){
        hasil = 'SERI';
    }else if(p == 'jempol'){
    // if (komp == 'telunjuk'){
    //     hasil = 'MENANG';
    // }else if(komp == 'kelingking'){
    //     hasil = 'KALAH';
    // }
        hasil = (komp == 'telunjuk') ? 'MENANG' : 'KALAH';
    }else if(p == 'telunjuk'){
        hasil = (komp == 'jempol') ? 'KALAH' : 'MENANG';
    }else if (p == 'kelingking'){
        hasil= (komp == 'jempol') ? 'MENANG': 'KALAH';
    }else {
        hasil = 'SALAH MEMASUKKAN PILIHAN';
    }

    //tampilkan hasil
    alert('kamu memilih '+ p + ' dan komputer memilih '+ komp+'\nmaka kamu ' + hasil);

    i = confirm('Main Lagi?');
}

alert ('terima kasih sudah bermain');
