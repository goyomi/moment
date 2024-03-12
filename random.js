const good_phrases = [
  { quote: "꿈을 그리는 것은 예술가의 일이 아니라, 모든 인간의 본능이다.", author: "김수영" },
  { quote: "행복은 습관이다, 그것을 몸에 지니라.", author: "허균" },
  { quote: "가장 큰 위험은 위험 없는 삶을 살려는 시도이다.", author: "조정래" },
  { quote: "오늘의 작은 노력이 내일의 큰 성공을 만든다.", author: "신경림" },
  { quote: "인생은 반복된 실패에서 시작되지만, 그 안에서 성공을 발견한다.", author: "이문열" },
  { quote: "진정한 용기는 두려움을 느끼면서도 그것을 극복하는 것이다.", author: "한수산" },
  { quote: "삶이 그대를 속일지라도, 슬퍼하거나 노하지 말라!", author: "윤동주" },
  { quote: "자신이 할 수 있다고 믿는 순간, 할 수 있게 된다.", author: "최인호" },
  { quote: "어제를 버리고 오늘을 살며 내일을 꿈꾸라.", author: "황석영" },
  { quote: "삶은 고난의 연속이지만, 그 속에서 찾는 작은 기쁨에 의미가 있다.", author: "박완서" },
  { quote: "작은 기쁨이 모여 큰 행복을 만든다.", author: "이상" },
  { quote: "시작이 반이다. 용기를 내어 첫발을 뗀다면, 이미 성공에 한걸음 다가선 것이다.", author: "정철" },
  { quote: "진정한 친구는 두 심장을 가진 한 사람과 같다.", author: "김동인" },
  { quote: "인생은 한 권의 책과 같다. 중요한 것은 얼마나 길게 쓰느냐가 아니라, 얼마나 아름답게 쓰느냐이다.", author: "한용운" },
  { quote: "어려움은 인내를 통해 극복되며, 인내는 희망을 통해 강화된다.", author: "조지훈" },
  { quote: "매일을 새롭게 시작하라. 어제의 실수를 오늘의 경험으로 삼아라.", author: "최명희" },
  { quote: "삶이 있는 한 희망은 있다.", author: "김남조" },
  { quote: "꿈을 잃지 않는 한 젊음도 잃지 않는다.", author: "고은" },
  { quote: "아름다운 삶을 살기 위해 필요한 것은 많지 않다. 작은 것에서 기쁨을 찾는 마음만 있으면 된다.", author: "이태준" },
  { quote: "인생은 끊임없는 배움의 여정이다. 매일 조금씩, 끝까지 배워라.", author: "박경리" },
  { quote: "살아가면서 가장 중요한 것은 '자신을 알고 사랑하는 것'이다.", author: "정호승" },
  { quote: "인생에서 가장 아름다운 것은 우리가 꿈꿀 수 있다는 것이다.", author: "마크" },
  { quote: "진정으로 원하는 것을 알기 위해서는 시간을 들여 내면을 탐색해야 한다.", author: "윤동주" },
  { quote: "당신의 삶을 이끄는 것은 바로 당신의 태도이다.", author: "김소월" },
  { quote: "사랑은 마음으로 하는 대화이다.", author: "이용악" },
  { quote: "진정한 지혜는 겸손에서 비롯된다.", author: "이상" },
  { quote: "창조적인 생각은 평범한 일상에서 시작된다.", author: "백석" },
  { quote: "내 삶을 변화시키고 싶다면, 먼저 내 마음가짐을 변화시켜야 한다.", author: "한말숙" },
  { quote: "감사는 가장 순수한 형태의 사랑이다.", author: "김유정" },
  { quote: "오늘의 작은 변화가 내일의 큰 차이를 만든다.", author: "이청준" },
];

const backgrounds = ["bg1.jpeg", "bg2.jpeg", "bg3.jpeg", "bg4.jpeg", "bg5.jpeg", "bg6.jpeg", "bg7.jpeg", "bg8.jpeg", "bg9.jpeg", "bg10.jpeg"];

const greetings = {
  morning: [
    "새 아침이 밝았어요, 오늘도 행복한 하루 되세요!",
    "아침 햇살처럼 밝은 하루의 시작을 응원합니다!",
    "좋은 아침! 오늘 하루도 당신의 미소로 시작하세요.",
    "새로운 하루, 새로운 시작. 오늘도 활기차게!",
    "아침에 눈 뜨자마자 당신을 생각하는 이 순간, 멋진 하루가 될 거예요!",
    "오늘 하루의 첫 숨을 깊게 들이쉬고, 기분 좋게 시작하세요!",
    "아침의 신선한 공기를 마시며, 오늘 하루도 최선을 다해보아요.",
    "하루의 시작을 밝은 에너지로 가득 채워보세요, 좋은 아침입니다!",
    "아침의 여유로움 속에서 하루를 시작하는 여러분, 오늘도 힘차게!",
    "오늘의 아침이 여러분에게 행운을 가져다주길 바라요, 활기찬 하루 되세요!",
  ],
  afternoon: [
    "점심 식사는 맛있게 하셨나요? 오후도 활기차게 보내세요!",
    "오후도 파이팅! 오늘 하루가 즐겁게 흘러가길 바랍니다.",
    "햇살 가득한 오후, 당신의 웃음도 가득하길.",
    "오후의 여유를 즐기며, 오늘의 나머지 시간도 행복하게 보내세요.",
    "오후 시간, 잠시 휴식을 취하며 에너지를 충전하세요!",
    "오후의 햇살처럼 따뜻한 당신의 하루가 되길 바랍니다.",
    "오후 시간, 작은 일상의 즐거움을 찾아보세요.",
    "일과의 중반, 지친 마음을 잠시 내려놓고 활력을 찾으세요.",
    "오후의 커피 한 잔과 함께 여유로운 시간을 가져보세요.",
    "오후의 바람이 당신에게 새로운 영감을 주길 바랍니다.",
  ],
  evening: [
    "해가 지고, 저녁이 찾아왔어요. 평온한 저녁 보내세요.",
    "저녁 노을처럼 따뜻하고 아름다운 시간 되세요.",
    "오늘 하루도 수고 많으셨어요. 편안한 저녁 시간 되세요.",
    "저녁 시간, 오늘의 피로를 맛있는 식사로 풀어보세요.",
    "별이 빛나는 밤, 당신의 꿈도 반짝이길 바랍니다.",
    "저녁이 주는 평온함 속에서 하루를 마무리하세요.",
    "저녁 시간, 오늘 있었던 일들을 되돌아보며 여유를 갖세요.",
    "따뜻한 저녁 식사로 몸과 마음을 위로하세요.",
    "밤의 고요함 속에서 내일을 위한 준비를 하세요.",
    "저녁의 촉촉한 바람이 오늘의 고단함을 씻어주길 바랍니다.",
  ],
  dawn: [
    "조용한 새벽, 평화로운 시간을 보내세요.",
    "새벽의 고요함 속에서 새로운 시작을 꿈꾸세요.",
    "잠 못 이루는 새벽, 당신에게 작은 위로가 되길 바랍니다.",
    "별이 총총한 새벽, 당신의 마음도 밝게 빛나길.",
    "새벽의 차분함이 당신의 하루를 부드럽게 열어주길 바랍니다.",
    "새벽의 정적 속에서 가장 순수한 생각들이 피어나길 바랍니다.",
    "조용한 새벽, 오늘을 준비하는 귀중한 시간이 되길 바랍니다.",
    "새벽의 첫 새소리와 함께 희망찬 시작을 맞이하세요.",
    "새벽의 시간, 스스로를 돌아보며 성찰의 시간을 가져보세요.",
    "잠들지 않는 새벽, 당신의 꿈을 향한 작은 한 걸음을 내딛어보세요.",
  ],
};

const wiseSaying = document.querySelector("#wiseSaying");
const author = document.querySelector("#author");

function makeRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

function makeRandomPhrases() {
  const phrasesLength = good_phrases.length;
  const randomNumber = makeRandomNumber(phrasesLength);

  wiseSaying.innerText = good_phrases[randomNumber].quote;
  author.innerText = `- ${good_phrases[randomNumber].author} -`;
}

function makeRandomBackground() {
  const backgroundLength = backgrounds.length;
  const randomNumber = makeRandomNumber(backgroundLength);

  document.body.style.background = `url('./img/${backgrounds[randomNumber]}') no-repeat center center / cover`;
}

// greeting message
function makeRandomGreeting() {
  const greeting = document.querySelector("#greeting");
  const date = getDate();
  const currentHour = date.getHours();
  const greetingsLength = 10;
  const randomNumber = makeRandomNumber(greetingsLength);
  let greetingMessage = "";

  if (currentHour >= 0 && currentHour < 6) {
    greetingMessage = greetings.dawn[randomNumber];
  } else if (currentHour >= 6 && currentHour < 12) {
    greetingMessage = greetings.morning[randomNumber];
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = greetings.afternoon[randomNumber];
  } else {
    greetingMessage = greetings.evening[randomNumber];
  }

  greeting.innerText = greetingMessage;
}

makeRandomPhrases();
makeRandomBackground();
makeRandomGreeting();
