const data = [
  'Арчи вылечен и теперь живет на ферме',
  'Денни забрала молодая семья из Дании',
  'Клиф начинает новую жизнь, охраняя конеферму',
  'Хитч и Харрис теперь живут в вольере у новых хозяев',
  'Лучший подарок ребенку - щеночек! История Шустрика',
  'Баффи - новый лучший четвероногий друг семьи Русаковых',
  'Симпатяжка Бэла радует новых хозяев',
  'Вивьен окончательно поправилась и нашла новый дом',
  'Из пугливой беспризорной собачки к контактному и послушному другу. История Дени.',
  'Жуня занимает призовые места на конкурсах!',
  'Багира - укротительница мышей!',
  'Вишенка - самая лучшая! Довольные новые хозяева о своем питомце',
  'Как Исида помогает в доме престарелых',
  'Необычайная история Лисси',
  'Вик - из слабенького котенка в грозу района',
  'Густав радует семью из Кривого Рога',
  'Джаф, мы будем скучать по тебе! Приезжай в гости',
  'Об этом говорит весь интернет! Как Дафф перестал бояться пылесоса.',
  'Шок! Как Барсик сьел 1 кг сосисок.',
  'Врачи в шоке! Кот Фарик избавляет от грибка! Надо просто...',
]

let date = Date.now();

const result = data.map((item, i) => {
  date = date - 1000 * 60 * 60 * 60 * 24;
  return {
    id: `news${i + 1}`,
    date: date,
    title: item,
    image: `https://raw.githubusercontent.com/AlexeyKasaev3/softServe-academy/master/demo-3-data/images/${i + 1}.jpg`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum nisi a odio iaculis, eget convallis turpis molestie. Nam mi purus, ultricies ac aliquet quis, vulputate eu massa. Vestibulum consequat auctor purus id bibendum. Maecenas at molestie enim. Praesent posuere, leo eu egestas molestie, ligula libero ultrices purus, non venenatis leo ipsum eu velit. Phasellus lorem eros, semper quis sem vitae, interdum euismod odio. Integer arcu velit, congue id tincidunt quis, sodales quis erat. Nam est leo, consectetur vel ullamcorper nec, euismod eu justo. Sed aliquet vel sem lobortis ultrices. Praesent sed augue et massa luctus facilisis. In semper, mauris id volutpat sodales, odio quam rhoncus tellus, et finibus ante neque eu est. Nulla eget lacus vel dolor iaculis euismod. Nulla eget magna a ligula pellentesque molestie.

    Curabitur at purus porttitor, suscipit nibh quis, posuere enim. Nulla facilisi. Curabitur vitae ligula varius, eleifend nibh commodo, convallis est. Integer varius, nisi vitae venenatis porta, ex massa malesuada mauris, eget rhoncus mi purus eu turpis. Donec sed nisi vel eros commodo scelerisque. In hac habitasse platea dictumst. Donec convallis mollis gravida. Integer hendrerit lorem sed enim dapibus, quis gravida nibh placerat. Pellentesque eu justo a mauris pellentesque aliquet. Morbi aliquam quis enim sit amet imperdiet. Maecenas tincidunt sagittis eros. Aenean id nunc diam.
    
    Cras et placerat tellus. Duis eu lobortis arcu, sit amet vestibulum nisl. Vivamus porttitor diam nec eros facilisis dictum. In hac habitasse platea dictumst. Ut tincidunt, libero ultricies rutrum porta, neque mauris semper mi, in sollicitudin risus ligula nec risus. Fusce ut massa id velit facilisis pharetra at ut tellus. Aliquam elementum eu ipsum et hendrerit. Ut malesuada, tortor at laoreet tempus, mauris metus mollis lacus, at placerat ante neque vitae purus. Praesent varius odio sit amet fermentum rhoncus. Nunc suscipit sed nisl in dapibus. In finibus massa in quam gravida faucibus.
    
    Nullam commodo bibendum suscipit. Aenean ornare malesuada orci maximus hendrerit. Nulla a lorem sapien. Sed elementum auctor lacinia. Curabitur condimentum erat at blandit varius. Nulla luctus lectus at nisl semper aliquet. Integer tristique eros eu ex laoreet, ut venenatis purus iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis quis est quis dolor lacinia interdum eu ac felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean blandit mi risus, ac viverra purus aliquet ac.
    
    Morbi tempor erat et metus varius pellentesque vulputate sit amet odio. Pellentesque mollis elit quis velit sagittis, vel blandit leo maximus. Nulla eget est et nisi dictum cursus ultricies in dui. Duis dapibus ante massa, auctor pulvinar ligula lacinia ut. Sed eget purus auctor, porta nisl vel, finibus orci. Phasellus eros diam, pellentesque nec pharetra at, lobortis eu urna. Donec cursus mattis nisl eget tincidunt.`
  }
})

console.log(JSON.stringify(result));