//CLOCK
let realtimeclock = document.getElementById("realclock");
let secs, mins, hrs, date;
const setTime = () => {
  date = new Date();
  hrs = date.getHours();
  mins = date.getMinutes();
  realtimeclock.innerHTML = `${hrs}:${mins}`;
};
setInterval(setTime, 500);

function scrollWin() {
  window.scrollTo(200, 0);
}
const main = document.getElementById("main");
const main1 = document.getElementById("main1");
const ecosystem = [
  {
    id: "7_TSzqJms4w",
    description: "Mountain of rubbish and garbage on the beach by the sea",
    alt_description: "garbage near forest",
    full: "https://images.unsplash.com/flagged/photo-1572213426852-0e4ed8f41ff6?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMjc3NjF8MHwxfHNlYXJjaHwxfHxwb2xsdXRpb258ZW58MHx8fHwxNjQ5MTQ1Mjgw\u0026ixlib=rb-1.2.1\u0026q=85",
  },
  {
    id: "A_AQxGz9z5I",
    description: "NYC",
    alt_description: "white smoke",
    full: "https://images.unsplash.com/photo-1564608938148-e3c5325907ee?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMjc3NjF8MHwxfHNlYXJjaHwyfHxwb2xsdXRpb258ZW58MHx8fHwxNjQ5MTQ1Mjgw\u0026ixlib=rb-1.2.1\u0026q=85",
  },
  {
    id: "2_sO3LQzrwk",
    description: "Oh, hey girl! 🗽🇺🇸",
    alt_description: "Statue of Liberty, New York",
    full: "https://images.unsplash.com/photo-1524242109383-e349707a106b?ixlib=rb-1.2.1\u0026q=85\u0026fm=jpg\u0026crop=entropy\u0026cs=srgb",
  },
  {
    id: "c7RWVGL8lPA",
    description: null,
    alt_description: "white clouds over city buildings during daytime",
    full: "https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMjc3NjF8MHwxfHNlYXJjaHwzfHxwb2xsdXRpb258ZW58MHx8fHwxNjQ5MTQ1Mjgw\u0026ixlib=rb-1.2.1\u0026q=85",
  },
  {
    id: "RUqoVelx59I",
    description:
      "Take a walk a few KM’s from your next resort, here is what the beaches of the world really look like these days.",
    alt_description: "photo of coconut tree near seashore",
    full: "https://images.unsplash.com/photo-1526951521990-620dc14c214b?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMjc3NjF8MHwxfHNlYXJjaHw0fHxwb2xsdXRpb258ZW58MHx8fHwxNjQ5MTQ1Mjgw\u0026ixlib=rb-1.2.1\u0026q=85",
  },
  {
    id: "K785Da4A_JA",
    description: null,
    alt_description: "blue and clear body of water",
    full: "https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-1.2.1\u0026q=85\u0026fm=jpg\u0026crop=entropy\u0026cs=srgb",
  },
  {
    id: "gv49ce17_NY",
    description: "Plastic waste bottle pollution of the environment",
    alt_description: "white plastic bottle on brown soil",
    full: "https://images.unsplash.com/photo-1585119192228-f072c53bc55c?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMjc3NjF8MHwxfHNlYXJjaHw1fHxwb2xsdXRpb258ZW58MHx8fHwxNjQ5MTQ1Mjgw\u0026ixlib=rb-1.2.1\u0026q=85",
  },
  {
    id: "W3y2crFkVIs",
    description: "Industrial winter landscape",
    alt_description: "Industrial winter landscape",
    full: "https://images.unsplash.com/photo-1606994868513-d480e1a1cab0?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMjc3NjF8MHwxfHNlYXJjaHw2fHxwb2xsdXRpb258ZW58MHx8fHwxNjQ5MTQ1Mjgw\u0026ixlib=rb-1.2.1\u0026q=85",
  },
  {
    id: "ctXf1GVyf9A",
    description: "Old stone background texture",
    alt_description: null,
    full: "https://images.unsplash.com/photo-1554265352-d7fd5129be15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    id: "-CwiIE7D5Qk",
    description: null,
    alt_description: "factory smoke coming out from factory",
    full: "https://images.unsplash.com/photo-1582980752625-10783b273e2d?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMjc3NjF8MHwxfHNlYXJjaHw3fHxwb2xsdXRpb258ZW58MHx8fHwxNjQ5MTQ1Mjgw\u0026ixlib=rb-1.2.1\u0026q=85",
  },
  {
    id: "ctXf1GVyf9A",
    description: "Old stone background texture",
    alt_description: null,
    full: "https://images.unsplash.com/photo-1624053335018-d267adc7687b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2971&q=80",
  },
  {
    id: "5_9inhy4NSE",
    description: null,
    alt_description: "smoking factory during daytime",
    full: "https://images.unsplash.com/photo-1561620831-9b2d86d81226?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMjc3NjF8MHwxfHNlYXJjaHw4fHxwb2xsdXRpb258ZW58MHx8fHwxNjQ5MTQ1Mjgw\u0026ixlib=rb-1.2.1\u0026q=85",
  },
  {
    id: "Px1DLXKhzNc",
    description: null,
    alt_description: "white power plant",
    full: "https://images.unsplash.com/photo-1569410593054-c37f3c20c52d?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxMjc3NjF8MHwxfHNlYXJjaHw5fHxwb2xsdXRpb258ZW58MHx8fHwxNjQ5MTQ1Mjgw\u0026ixlib=rb-1.2.1\u0026q=85",
  },
  {
    id: "Nyvq2juw4_o",
    description: "City architecture and skyscrapers near waterfront",
    alt_description: "white and brown city buildings during daytime",
    full: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1\u0026q=85\u0026fm=jpg\u0026crop=entropy\u0026cs=srgb",
  },
  {
    full: "./img/3-9.jpeg",
  },
  {
    full: "./img/7256-680-425.webp",
  },
  {
    full: "./img/110153.jpeg",
  },
  {
    full: "./img/9236201f73cbb7be88e1120d2a631285.jpeg",
  },
  {
    full: "./img/1031424126_0_100_1921_1180_1920x0_80_0_0_a80acf0a6ec1750cf2568996c6b5c17e.jpeg",
  },
  {
    full: "./img/15948031865f0ec3f2dc0e62.74247531.jpg",
  },
  {
    full: "./img/b910742379331b737e920ddaae703eeb.jpeg",
  },
  {
    full: "./img/eco_ural.jpeg",
  },
  {
    full: "./img/icon.jpeg",
  },
  {
    full: "./img/image.jpeg",
  },
  {
    full: "./img/imagetools0-151.jpeg",
  },
];
const ecosystem1 = [
  {
    full1: "./img/katastrofa-v-prirode.jpeg",
  },
  {
    full1: "./img/ph-pochvy-test.jpeg",
  },
  {
    full1: "./img/pic-00221.jpeg",
  },
  {
    full1: "./img/posledstviya_zagryazneniya_vody.jpeg",
  },
  {
    full1: "./img/shutterstock_691953361.jpeg",
  },
  {
    full1: "./img/silazhizni-mart2-1.jpeg",
  },
  {
    full1: "./img/virubka-lesov.jpeg",
  },
  {
    full1: "./img/voda-2-960x540.jpeg",
  },
  {
    full1: "http://ecobeing.ru/wp-content/uploads/2015/09/livestock.jpg",
  },
  {
    full1:
      "https://sun9-1.userapi.com/sun9-67/impg/c854028/v854028209/1e2470/HvHT3qYSXLk.jpg?size=807x582&quality=96&sign=7202b14c59969f5fb1a00049e64b25c1&type=album",
  },
  {
    full1:
      "https://bestlavka.ru/wp-content/uploads/2017/09/%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B8%D1%8F-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0.jpg",
  },
  {
    full1:
      "https://images.unsplash.com/photo-1584257274862-42aa4f6e5f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
  },
  {
    full1:
      "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1589&q=80",
  },
  {
    full1:
      "https://images.unsplash.com/photo-1624373939217-bf943af5da6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    full1:
      "https://images.unsplash.com/photo-1547235001-d703406d3f17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2974&q=80",
  },
  {
    full1:
      "https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3216&q=80",
  },
  {
    full1:
      "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80",
  },
  {
    full1:
      "https://images.unsplash.com/photo-1621460249485-4e4f92c9de5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    full1:
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    full1:
      "https://images.unsplash.com/photo-1462690417829-5b41247f6b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    full1:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    full1:
      "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2018/12/11/file72b25wdpykn1f1okjb7k-1544470633.jpg?itok=sPpyOlyf",
  },
  {
    full1: "https://static.dw.com/image/51103723_303.jpg",
  },
  {
    full1:
      "https://americannaturalgas.com/wp-content/uploads/2020/06/air-pollution-beijing-china.jpg",
  },
  {
    full1: "https://treenewal.com/wp-content/uploads/2020/11/oak-tree-care.png",
  },
];

ecosystem.forEach((el) => {
  let url = document.createElement("img");
  url.src = el.full;
  url.setAttribute("class", "url");

  main.append(url);
});
ecosystem1.forEach((el) => {
  let url1 = document.createElement("img");
  url1.src = el.full1;
  url1.setAttribute("class", "url");

  main1.append(url1);
});

const flavoursContainer = document.getElementById("main");
const flavoursScrollWidth = flavoursContainer.scrollWidth;

window.addEventListener("load", () => {
  self.setInterval(() => {
    if (flavoursContainer.scrollRight !== flavoursScrollWidth) {
      flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
    }
  }, 15);
});

const Container = document.getElementById("main1");
const ScrollWidth = Container.scrollWidth;

window.addEventListener("load", () => {
  self.setInterval(() => {
    if (Container.scrollRight !== ScrollWidth) {
      Container.scrollTo(Container.scrollLeft + 1, 0);
    }
  }, 15);
});