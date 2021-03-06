'use strict'

let shelterButton = document.querySelector('.shelter'),
    accidentButon = document.querySelector('.accident'),
    charterButton = document.querySelector('.charter'),
    shelterModal = document.querySelector('.shelter-block'),
    accidentModal = document.querySelector('.accident-block'),
    charterModal = document.querySelector('.charter-block'),
    shelterCreate = document.querySelector('.shelter-create'),
    accidentCreate = document.querySelector('.accident-create'),
    charterCreate = document.querySelector('.charter-create'),
    accidentName = document.querySelector('.accident-name'),
    accidentDescription = document.querySelector('.accident-description'),
    accidentTimeSpent = document.querySelector('.time-spent'),
    accidentPopulation = document.querySelector('.population'),
    accidentTarget = document.querySelector('.target'),
    charterBlock = document.querySelector('.charter-block'),
    gapInstruction = document.querySelector('.gap'),
    globaltimeSpent = 'Сначала сгенерируй катастрофу';

let accident = [
  {
    name: 'Глобальное потепление',
    id: 'a1',
    description: 'Вследствии человеческого вмешательства климат на планете начал все быстрее изменяться. Из за быстрого таяния арктических льдов и резкого высвобождения огромного количества метана и углекислого газа из вечной мерзлоты температура начинает повышаться все стремительней. Уровень воды повышается, в скором времени останется не более 50% не затопленной суши. А постоянные ураганы, штормы и ливни значительно усложнят выживание.',
    timeSpent: 'Ужасной силы бури продлятся 2 месяца, после этого выжившие смогут покинуть убежища. Но из за изменеия климата и повышения температуры адаптировать аграрные культуры будет очень сложно. А немногочисленная суша сильно пострадала от продолжительных цунами огромной силы.',
    population: '30%.',
    target: 'Адаптация аграрных культур, поиск пресной воды. продолжение рода.',
    globaltimeSpent: '2 месяца'
  }, {
    name: 'Применение химикатов',
    id: 'a2',
    description: 'Человечество допустило роковую ошибку. В попытке увеличить количество собираемых аграрных культур повсеместно начали применять новые и не до конца исследованные химикаты. В результате, свойства почвы были серьезно изменены, большая часть полей оказалась непригодна для использования. За последний год погибло 90% сельскохозяйственных животных. Мир накрыла волна голода, человечество медленно вымирает. ',
    timeSpent: 'В попытке укрыться от обезумевшей от голода толпы многие спрятались в защищенных бункерах. Срок нахождения в  бункере - 3 года. ',
    population: '65% и снижается',
    target: 'Поиск еды, востановление почвы, защита от других выживших.',
    globaltimeSpent: '3 года'
  }, {
    name: 'Биологическое оружие',
    id: 'a3',
    description: 'Примененное в ходе небольшого военного конфликта в Восточной Европе биологическое оружие вышло из под контроля. Чумная палочка, именно этот патоген был доработан и применен в ходе воздушной бомбардировки территорий. Однако мутация патогена не остановилась в результате чего смертность достигает 95%. Задержать распространение инфекции по всему миру вовремя не удалось. ',
    timeSpent: 'После недолгого инкубационного периода в 2-6 дней патоген убивает носителя за пару недель. По оценкам ученых за 6 месяцев пик заболеваемости пройдет. А большая часть человечества вымрет. ',
    population: '25%.',
    target: 'Поиск пищи, продолжение рода, разработка защитных мер и лечение заболевших.',
    globaltimeSpent: '6 месяцев'
  }, {
    name: 'Ядерная война',
    id: 'a4',
    description: 'Эскалацию международного конфликта уже не остановить. По всем телеканалам и радио волнам идет оповещение о чрезвычайной ситуации. Считанные минуты остаются у людей по всему миру чтобы укрыться от ядерных ударов в глубоких и защищенных бункерах… Сотни ядерных боеголовок готовы обрушиться на города и в этом конфликте не будет победителей. Миру суждено сгинуть в радиоактивном пламени. ',
    timeSpent: 'Время нахождения в бункере - 3 месяца. За это время радиоактивная пыль осядет, пожары утизнут, но большая часть городов разрушена, а немногочисленные выжившие обречены умирать от лучевой болезни.',
    population: '15% и сокращается.',
    target: 'Поиск незараженных продуктов питания, очистка воды и воздуха в жилых помещениях, продолжение рода. ',
    globaltimeSpent: '3 месяца'
  }, {
    name: 'Пробуждение супервулканов',
    id: 'a5',
    description: 'Супервулканами ученые называют вулканы, извержение которых способно спровоцировать изменение климата на планете. Последнее подобное извержение было примерно 27 тысяч лет назад и вот недавно все два десятка известных супервулканов начали извержение и это предвещает скорый конец цивилизации. Города будут погребены под километровым слоем пепла, небо на долгие сотни лет будет закрыто продуктами извержения.',
    timeSpent: 'По оценкам ученых извержения стихнут примерно за 8 месяцев. Однако 99% почвы больше непригодны для агрокультур а на планете воцарилась вечная ночь.',
    population: '10%.',
    target: 'Поиск источников пропитания, продолжение рода, поиск пресной воды, борьба с похолоданием.',
    globaltimeSpent: '8 месяцев'
  }, {
    name: 'Падение астероида',
    id: 'a6',
    description: 'Колоссальных размеров астероид приближается к земной орбите. По оценкам ученых, столкновение с небесным телом таких размеров уничтожит цивилизацию. Невероятной силы ударная волна и последующие мощнейшие землетрясения сотрут с лица земли города и рукотворные постройки. Рельеф и очертания континентов значительно изменятся. Только единицы смогут пережить разрушительное событие такой силы. ',
    timeSpent: 'Землетрясения и цунами утихнут в течение месяца, но жизнь на выжженой земле разрушенных городов будет очень непроста',
    population: '5%.',
    target: 'Продолжение рода, животноводство и земледелие.',
    globaltimeSpent: '1 месяц'
  }, {
    name: 'Зомби апокалипсис',
    id: 'a7',
    description: 'Из сверхсекретной правительственной лаборатории по созданию биологического оружия вырвался невероятно опасный патоген. В первую очередь у зараженных страдает высшая нервная деятельность. Люди превращаются в агрессивных мертвецов каннибалов единственная цель которых поиск не зараженных и их уничтожение. Коллапс цивилизации неизбежен.',
    timeSpent: 'Ожидаемое время нахождения в бункере - 6 месяцев. За это время большая часть зомби погибнет по естественным причинам и нахождение вне бункера станет отностительно безопасным.',
    population: '25%.',
    target: 'Защита от оставшихся зомби, продожение рода, животноводство и земледелие.',
    globaltimeSpent: '6 месяцев'
  }, {
    name: 'Глобальное похолодание',
    id: 'a8',
    description: 'В результате резкого изменения атлантических течений климат серьезно изменился. Температура окружающей среды значительно снизилась, что приведет к вымиранию большинства видов растений и животных. Планета будет скована льдом и очевидно люди не смогут приспособиться к грядущим изменениям. Человечество обречено погибнуть от голода и низких температур',
    timeSpent: 'Максимальное снижение температуры произойдет в ближайшее 3 месяца. Далее нахождение вне бункера все еще будет связано с постоянным поиском тепла, но шансы на выживание будут значительно выше.',
    population: '60% и постоянно снижается.',
    target: 'Поддержание тепла, животноводство и земледелие в бункере, защита от вторжения других выживших.',
    globaltimeSpent: '3 месяца'
  },
];

let job = [
  'Стриптизер',
  'Видеоблоггер',
  'Криптозоолог',
  'Балерина',
  'Тайный покупатель',
  'Актёр озвучания',
  'Экстрасенс',
  'Президент',
  'Скульптор',
  'Продавец',
  'Киберспортсмен',
  'Таксист',
  'Мастер маникюра',
  'Воспитатель',
  'Священник',
  'Парикмахер',
  'Переводчик',
  'Наркодиллер',
  'Певец',
  'Гитарист',
  'Вор',
  'Прапорщик',
  'Зоолог',
  'Клоун',
  'Писатель',
  'Дворецкий',
  'Страховой агент',
  'Травмотолог',
  'Полицейский',
  'Кардиолог',
  'Стоматолог',
  'Космонавт',
  'Тяжелоатлет',
  'Биолог',
  'Сексолог',
  'Психолог',
  'Аквалангист',
  'Грузчик',
  'Каскадер',
  'Инженер связи',
  'Рыбак',
  'Агроном',
  'Сварщик',
  'Летчик',
  'Хирург',
  'Повар',
  'Электрик',
  'Программист',
  'Физик ядерщик',
  'Врач терапевт',
  'Акушер',
  'Биатлонист',
  'Герпетолог',
  'Боец СОБР',
  'Сапёр',
  'Военный ныряльщик',
  'K-POP айдол',
  'Пилот',
  'Капитан судна',
];

let charterPackage = [
  'Багаж',
  'Кот',
  'Немецкая овчарка',
  'Несколько ящиков туалетной бумаги',
  'Кассеты с фильмами', 
  'Запас шоколадок на две недели',
  'Аптечка',
  'Фотоаппарат',
  'Ящик консервов',
  'Компьютер',
  'Огнетушитель',
  'Противогаз',
  'Набор инструментов',
  'Фильтр для воды',
  'Крупный попугай',
  'Таблетки от аллергии',
  'Сотовый телефон',
  'Запас батареек',
  'Книги',
  'Семена пшеницы',
  'Несколько ящиков крепкого алкоголя',
  'Пистолет',
  'Ручная граната',
  'Велоссипед',
  'Катана',
  'Доска для серфинга',
  'Дедовское ружье',
  'Гитара',
  'Карта местности',
  'Нож',
  'Грудной ребенок',
];

let health = [
  'Идеально здоров',
  'Идеально здоров',
  'Аллергия на шерсть',
  'Гастрит',
  'Плоскостопие',
  'Диарея',
  'Артериальная гипертензия',
  'ОРВИ',
  'Косоглазие',
  'Дальтонизм',
  'Цирроз печени',
  'Идеально здоров',
  'Идеально здоров',
  'Биполярное расстройство',
  'Аллергия на пыльцу',
  'Эпилепсия',
  'Алкоголизм',
  'Наркомания',
  'Носитель генетической болзни',
  'Отсутствует один глаз',
  'Туберкулез',
  'Шизофрения',
  'Бесплодие',
  'Отсутствует одна нога',
  'Отсутствует одна рука',
  'Лейкоз',
  'Полная слепота',
  'Отсутствуют ноги ниже бедра',
  'Астма',
  'Идеально хдоров',
];

let hobby = [
  'Пение',
  'Собирать грибы',
  'Велосипед',
  'Футбол',
  'Программирование',
  'Йога',
  'Настольные игры',
  'Флористика',
  'Кулинария',
  'Косплей',
  'Танцы',
  'Пивоварение',
  'Парусный спорт',
  'Выращивание растений',
  'Кроссдрессинг',
  'Армрестлинг',
  'Кроссфит',
  'Дайвинг',
  'Шахматы',
  'Хиромантия',
  'Страйкбол',
  'Фехтование',
  'Кузнечное дело',
  'Психология',
  'Сексология',
  'Конный спорт',
  'Виноделие',
  'Нумизматика',
  'Аниме',
  'Историческая реконструкция',
];

let trait = [
  'Ленивый',
  'Конфликтный',
  'Ворчливый',
  'Пессимистичный',
  'Капризный',
  'Баламут',
  'Мизантроп',
  'Грубиян',
  'Доверчивый',
  'Двуличный',
  'Истеричный',
  'Пошлый',
  'Молчаливый',
  'Креативный',
  'Веселый',
  'Героический',
  'Хладнокровный',
  'Лидер',
  'Решительный',
  'Зубрила',
  'Заботливый',
  'Благоразумный',
  'Безотказный',
  'Гениальный',
  'Приветливый',
  'Деятельный',
  'Толерантный',
  'Фанатичный',
  'Гостеприимный',
  'Мелочный',
];

let phobia = [
  'Нет фобий',
  'Нет фобий',
  'Клаустрофобия - боязнь замкнутого пространства',
  'Орнитофобия - боязнь птиц и их перьев',
  'Гематофобия - боязнь крови',
  'Кинофобия - боязнь собак',
  'Мизофобия - боязнь грязи и микробов',
  'Агорафобия - боязнь открытых пространств',
  'Аквафобия - боязь воды',
  'Акрофобия - боязнь высоты',
  'Гомофобия - боязнь и неприятие гомосексуальности',
  'Некрофобия - боязнь покойников',
  'Никтофобия - боязнь темноты',
  'Гексакосиойгексеконтагексафобия - боязнь числа 666',
  'Лаканофобия - боязнь овощей',
  'Айлурофобия - боязнь кошек',
  'Офидиофобия - боязнь змей',
  'Дентофобия - боязнь стоматологов',
  'Коулрофобия - боязнь клоунов',
  'Антофобия - боязнь цветов',
  'Аурофобия - боязнь золота',
  'Демофобия - боязнь толпы',
  'Панофобия - боязнь всего, страх по неизвестной причине',
  'Пейрафобия - боязнь публичного выступления',
  'Трипанофобия  - боязнь игл и уколов',
  'Хироптофобия - боязнь летучих мышей',
  'Ятрофобия - боязнь врачей',
  'Талассофобия - боязнь моря',
  'Номофобия - боязнь остаться без мобильно телефона',
  'Нет фобий',
];

let otherInformation = [
  'Подрабатывал(а) в театре',
  'Побывал(а) в восемнадцати странах',
  'Любит мягкие игрушки',
  'Увлекается охотой',
  'Проходил(а) курсы парикмахера',
  'Верит в пришельцев',
  'Читал(а) книгу про выживание на необитаемом острове',
  'Страдает морской болезнью',
  'Является копрофилом',
  'Ограбил(а) банк',
  'Проходил(а) курсы по выживанию',
  'Сидел(а) в тюрьме',
  'Знает четыре языка',
  'Является вегетарианцем',
  'Проходил(а) курсы кулинарии',
  'Умеет вскрывать замки',
  'Знает язык жестов',
  'Имеет два высших образования',
  'Был(а) вожатым в лагере',
  'Верит что эта катастрофа - заговор рептилоидов',
  'Пережил(а) три покушения',
  'Проходил(а) курсы психолога',
  'Проходил(а) курсы сексолога',
  'Ненавидит современную музыку',
  'Гадает по картам',
  'Умеет стрелять',
  'Умеет варить пиво',
  'Увлекается животноводством',
  'Проектировал(а) этот бункер',
  'Знал(а) президента лично',
];

let specialKnowledge = [
  'Вы знаете что рядом с вами второй бункер где находится 2 женщины (неизвестно какие у них характеристики)',
  'Вы знвете что ваш бункер находится около вражеского бункера который явно негативно настроен против вас',
  'Вы знаете что рядом с вами второй бункер где находится 2 медицинских сотрудника',
  'Вы знаете что около вашего бункера находится торговый центр',
  'Вы знаете что около вашего бункера находится другой дружеский бункер',
  'Вы знаете что возле вас находится бункер в котором одни женщины(здоровые возраст до 30)',
  'Вы знаете что возле вас находится бункер в котором одни мужчины(здоровые возраст до 30)',
  'Вы знаете что ваш бункер находится около пресного озера',
  'Вы знаете что рядом с Вашим бункером есть склад с оружием',
  'Вы знаете что рядом с вами второй бункер где находятся 2 строителя',
  'Вы знаете что рядом есть заброшенный медицинский центр',
  'Вы знаете что возле вас находится бункер в котором одни женщины(здоровые возраст до 30)',
  'Вы знаете что возле вас находится бункер в котором одни мужчины(здоровые возраст до 30)',
  'Вы знаете что рядом с Вашим бункером есть склад со средствами индивидуальной хим и рад защиты',
  'Вы знаете что рядом с Вашим бункером есть продуктовый склад',
  'Вы знаете что рядом с Вашим бункером есть военная база',
  'Вы знаете что рядом с Вашим бункером есть множество ферм',
  'Вы знаете что рядом с Вашим бункером есть склад химических реактивов',
  'Вы знаете что рядом с Вашим бункером есть склад ГСМ',
  'Вы знаете что рядом с Вашим бункером есть несколько вагонов угля',
  'Вы знаете что рядом с Вашим бункером есть храниище пресной воды',
  'Вы знаете что рядом с Вашим бункером есть хранилище зерновых культур',
  'Вы знаете что внутри ВАШЕГО бункера находится вооруженный человек',
  'Вы знаете что внутри ВАШЕГО бункера находится взрывное устройство',
  'Вы знаете что рядом с Вашим бункером есть научная лаборатория',
  'Вы знаете что рядом с Вашим бункером есть скалд спец. средств МЧС',
  'Вы знаете что рядом с Вашим бункером есть уцелевший самолет',
  'Вы знаете что рядом с Вашим бункером есть уцелевший корабль',
  'Вы знаете что рядом с Вашим бункером есть хранилище драгоценных металлов',
  'Вы знаете что рядом с Вашим бункером находится животноводческий комплекс',
  'Вы знаете что рядом с Вашим бункером находится крупная библиотека',
  'Вы знаете что рядом с Вашим бункером находится инфекционная больница',
  'Вы знаете что рядом с Вашим бункером находится батутный центр',
  'Вы знаете что рядом с Вашим бункером находится парк атракционов',
  'Вы знаете что рядом с Вашим бункером находится захоронение ядерных отходов',  
];

let specialAbility = [
  'Обменяйся профессией с игроком справа от тебя',
  'Выбери игрока (но не себя) который заменит "Профессию"',
  'Замени "Профессию"',
  'Замени "Профессию"',
  'Замени "Состояние здоровья" любого игрока (но не себя)',
  'Замени "Состояние здоровья" на "Идеально здоров"',
  'Замени "Состояние здоровья"',
  'Замени "Состояние здоровья"',
  'Поменяйся "Состоянием здоровья" с другим игроком',
  'Вылечи "Фобию"',
  'Поменяйся  "Фобией" с другим игроком',
  'Замени "Фобию"',
  'Вылечи "Фобию" любого игрока (но не  себя)',
  'Замени "Фобию"',
  'Выбранный Вами игрок вскрывает "Биологические характеристики" вне очереди',
  'Выбранный Вами игрок вскрывает одну характеристику (на свой выбор) вне очереди',
  'Аннулируй все профессии в игре',
  'Замени любые два своих свойства',
  'Получите один дополнительный голос в голосовании',
  'Отмени один голос против себя',
  'В бункере на 1 место меньше (в след. голосовании голосовать против двоих)',
  'В текущем головании Вас не могут выгнать',
  'Верни изгнанного игрока',
  'Перенеси один  голос против себя на другого игрока',
  'Получи еще одну "Дополнительную информацию"',
  'Получи еще один "Багаж"',
  'Получи еще один "Багаж"',
  'Украдите чужой НЕ ВСКРЫТЫЙ багаж',
  'Замени "Багаж"',
  'Получи дополнительное "Хобби" и "Дополнительную информацию"',
  'Выбранный игрок в следующую свою речь общается только жестами',
  'Замени "Хобби", "Человеческие качества" и "Дополнительную информацию"',
  'Выбранный игрок в следующую свою речь общается только жестами',
  'Перенеси один  голос против себя на другого игрока',
  'Обменяйся профессией с игроком слева от тебя',
];


function getBiologicalStats() {
  let sex = randomInteger(0, 1);
  if (sex) {
    sex = 'Мужчина ';
  } else {
    sex = 'Женщина ';
  };  
  
  let age = randomInteger(1, 6);
  switch (age) {
    case 1:
      age = randomInteger(18, 20);
      break;
    case 2:
      age = randomInteger(21, 34);
      break;
    case 3:
      age = randomInteger(35, 39);
      break;
    case 4:
      age = randomInteger(40, 54);
      break;
    case 5:
      age = randomInteger(55, 69);
      break;
    case 6:
      age = randomInteger(70, 99);
      break;
  };
   
  let orientation = randomInteger(0, 100);
  if (orientation < 79) {
    orientation = 'Гетеро ';
  } else {
    orientation = 'Гомо ';
  }
  
let BiologicalStats = sex + orientation + age;
return BiologicalStats;

};

// ************************ Показываем и прячем 'модальные окна'
function modalToggle(modal, button) {
  gapInstruction.classList.add('hide');
  shelterModal.classList.add('hide');
  accidentModal.classList.add('hide');
  charterModal.classList.add('hide');
  modal.classList.remove('hide'); 
  shelterCreate.classList.add('hide');
  charterCreate.classList.add('hide');
  accidentCreate.classList.add('hide');
  button.classList.remove('hide'); 
}   

shelterButton.addEventListener( 'click' , () => modalToggle(shelterModal, shelterCreate));

accidentButon.addEventListener( 'click' , () => modalToggle(accidentModal, accidentCreate));

charterButton.addEventListener( 'click' , () => modalToggle(charterModal, charterCreate));
// *************************************************************

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

function apocalypsNow() {
  let x = accident.length - 1;
  let y = randomInteger(0, x);
  accidentName.innerText = accident[y].name;
  accidentDescription.innerText = accident[y].description;
  accidentTimeSpent.innerText = accident[y].timeSpent;
  accidentPopulation.innerText = 'Оставшееся население: ' + accident[y].population;
  accidentTarget.innerText = 'Условия победы: ' + accident[y].target;
  accidentTarget.classList.remove('hide'); 
  globaltimeSpent = accident[y].globaltimeSpent;
};

function getCharter() {
  let charter = {
    bio: getBiologicalStats(),
    prof: slice(job),
    health: slice(health),
    pack: slice(charterPackage),
    hob: slice(hobby),
    tr: slice(trait),
    phob: slice(phobia),
    other: slice(otherInformation),
    spec1: slice(specialKnowledge),
    spec2: slice(specialAbility)
  }
  return charter;
}

function createP(target) {

  let ch = getCharter();

  let a = document.createElement('p');
  a.classList.add('p');
  target.appendChild(a);
  a.innerHTML = 'Биологические характеристики: ' + ch.bio;

  let b = document.createElement('p');
  b.classList.add('p');
  target.appendChild(b);
  b.innerHTML = 'Профессия: ' + ch.prof;

  let c = document.createElement('p');
  c.classList.add('p');
  target.appendChild(c);
  c.innerHTML = 'Состояние здоровья: ' + ch.health;

  let d = document.createElement('p');
  d.classList.add('p');
  target.appendChild(d);
  d.innerHTML = 'Багаж: ' + ch.pack;

  let e = document.createElement('p');
  e.classList.add('p');
  target.appendChild(e);
  e.innerHTML = 'Фобия: ' + ch.phob;

  let f = document.createElement('p');
  f.classList.add('p');
  target.appendChild(f);
  f.innerHTML = 'Хобби: ' + ch.hob;

  let j = document.createElement('p');
  j.classList.add('p');
  target.appendChild(j);
  j.innerHTML = 'Черта характера: ' + ch.tr;

  let k = document.createElement('p');
  k.classList.add('p');
  target.appendChild(k);
  k.innerHTML = 'Дополнительная информация: ' + ch.other;

  let l = document.createElement('p');
  l.classList.add('p');
  l.classList.add('spec');
  target.appendChild(l);
  l.innerHTML = 'Специальное знание: ' + ch.spec1;

  
  let h = document.createElement('p');
  h.classList.add('p');
  h.classList.add('spec');
  target.appendChild(h);
  h.innerHTML = 'Специальный навык: ' + ch.spec2;
}

function pushCharterCard() {
  
  let card = document.createElement('div');
  card.classList.add('card');
  charterModal.appendChild(card);
  
  createP(card);
  charterModal.scrollTop = 99999;
}

accidentCreate.addEventListener( 'click' , () =>
  apocalypsNow()    
);

function slice(arr) {
  let x = arr.length - 1;
  let y = randomInteger(0, x);
  let z = arr[y];
  arr.splice(y, 1);
  return z;
};

charterCreate.addEventListener( 'click' , () =>
  pushCharterCard()
);    

function letsgoShelter() {

  let bunkerSize = randomInteger(1,5);

  switch (bunkerSize) {
    case 1:
      bunkerSize = 'Бункер большой. Площадь: 65 м2 на человека.';
      break;
    case 2:
      bunkerSize = 'Бункер просторный. Площадь: 36 м2 на человека.';
      break;
    case 3:
      bunkerSize = 'Бункер средний. Площадь: 18 м2 на человека.';
      break;
    case 4:
      bunkerSize ='Бункер маленький. Площадь: 9 м2 на человека.';
      break;
    case 5:
      bunkerSize = 'Бункер очень маленький. Площадь: 3 м2 на человека.';
      break;
  };  

  let buncerCard = document.createElement('div');
  buncerCard.classList.add('buncer-card');
  buncerCard.classList.add('card');
    
  let bunkerStaff = [
    slice(charterPackage),
    slice(charterPackage),
    slice(charterPackage),
  ];

  buncerCard.innerHTML = 'В бункере есть: ' + bunkerStaff[0] + ', ' + bunkerStaff[1] + ', ' + bunkerStaff[2] + '.<br>' + 'Время нахождения в бункере: ' + globaltimeSpent + '.<br>' + bunkerSize;

  shelterModal.appendChild(buncerCard);

  shelterModal.scrollTop = 99999;
}

shelterCreate.addEventListener( 'click' , () =>
    letsgoShelter()
);
