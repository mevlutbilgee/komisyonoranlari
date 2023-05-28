const komisyon = document.getElementById("komisyon");
const btnHesaplama = document.getElementById("btnHesaplama");
const btnTemizle = document.getElementById("btnTemizle");
const alisInput = document.getElementById("alisInput");
const satisInput = document.getElementById("satisInput");
const kdvInput = document.getElementById("kdvInput");
const komisyonKesinti = document.getElementById("komisyonKesinti");
const netKarSonuc = document.getElementById("netKarSonuc");
btnTemizle.addEventListener("click", () => {
  location.reload();
});
let KDVsiz_fiyat= 0;
btnHesaplama.addEventListener("click", () => {
  console.log(kdvInput.value);
  if (0 < kdvInput.value < 0.99) {
    KDVsiz_fiyat = satisInput.value / (kdvInput.value + 1);
  } else {

    KDVsiz_fiyat = satisInput.value / (kdvInput.value / 100 + 1);
  }
  let komisyonHesaplama = KDVsiz_fiyat * (komisyon.value / 100);
  let netKar = KDVsiz_fiyat - alisInput.value - komisyonHesaplama;
  komisyonKesinti.innerHTML = `${komisyonHesaplama.toFixed(2)} ₺`;

  if (netKar > 0) {
    console.log(netKar.toFixed(2), "TL");
    netKarSonuc.innerHTML = `${netKar.toFixed(2)} ₺`;
  } else {
    netKarSonuc.innerHTML = `${netKar.toFixed(2)} ₺ zarar`;
  }
});
