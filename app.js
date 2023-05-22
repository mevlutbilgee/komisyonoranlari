const komisyon = document.getElementById("komisyon");
const btnHesaplama = document.getElementById("btnHesaplama");
const btnTemizle = document.getElementById("btnTemizle");
const alisInput = document.getElementById("alisInput");
const satisInput = document.getElementById("satisInput");
const kdvsel = document.getElementById("kdvsel");
const kdv1 = document.getElementById("kdv1");
const kdv8 = document.getElementById("kdv8");
const kdv18 = document.getElementById("kdv18");
const kargoInput = document.getElementById("kargoInput");

let kdv = 0.18;
kdvsel.addEventListener("click", () => {
  if (kdvsel.value == kdv1.value) {
    kdv = 0.01;
  } else if (kdvsel.value == kdv8.value) {
    kdv = 0.08;
  } else if (kdvsel.value == kdv18.value) {
    kdv = 0.18;
  }
});
btnTemizle.addEventListener("click", () => {
  location.reload();
});
btnHesaplama.addEventListener("click", () => {
  let KDVsiz_fiyat = satisInput.value / (1 + kdv);
  let komisyonHesaplama = KDVsiz_fiyat * (komisyon.value / 100);
  let kargoHesaplama = kargoInput.value / 1.18;
  let netKar =
    KDVsiz_fiyat - alisInput.value - komisyonHesaplama - kargoHesaplama;
  if (netKar > 0) {
    console.log(netKar.toFixed(2), "TL");
  } else {
    console.log(netKar.toFixed(2), "TL", "zarar");
  }
});
