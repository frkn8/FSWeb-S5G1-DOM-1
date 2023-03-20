const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const liste = document.querySelectorAll("nav a");
const nesneler = Object.keys(siteContent.nav);
for (let i = 0; i< nesneler.length; i++){
  liste[i].textContent=siteContent.nav[nesneler[i]];
  liste[i].classList.add("italic");
}
const logo = document.querySelectorAll("img");
const fotograf = Object.keys(siteContent.images);
for (let i = 0; i< fotograf.length; i++){
  logo[i].src=siteContent.images[fotograf[i]];
}
const mycta = document.querySelectorAll(".cta-text h1, .cta-text button");
const ctakeys = Object.keys(siteContent.cta);
for (let i=0; i<ctakeys.length; i++){
  mycta[i].textContent=siteContent.cta[ctakeys[i]];
}
const icerik = document.querySelectorAll(".main-content h4, .main-content p");
const icerikkeys = Object.keys(siteContent["ana-içerik"]);
for (let i=0; i<icerikkeys.length; i++){
  icerik[i].textContent=siteContent["ana-içerik"][icerikkeys[i]];
}
const ulasim = document.querySelectorAll(".contact h4, .contact p");
const ulasimkeys = Object.keys(siteContent.iletisim);
for (let i=0; i<ulasimkeys.length; i++){
  ulasim[i].textContent=siteContent.iletisim[ulasimkeys[i]];
}
const sayfasonu = document.querySelector("footer a");
sayfasonu.textContent=siteContent.footer.copyright;
sayfasonu.classList.add("bold");