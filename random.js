good_phrases = [
  { "quote": "꿈을 그리는 것은 예술가의 일이 아니라, 모든 인간의 본능이다.", "author": "김수영" },
  { "quote": "행복은 습관이다, 그것을 몸에 지니라.", "author": "허균" },
  { "quote": "가장 큰 위험은 위험 없는 삶을 살려는 시도이다.", "author": "조정래" },
  { "quote": "오늘의 작은 노력이 내일의 큰 성공을 만든다.", "author": "신경림" },
  { "quote": "인생은 반복된 실패에서 시작되지만, 그 안에서 성공을 발견한다.", "author": "이문열" },
  { "quote": "진정한 용기는 두려움을 느끼면서도 그것을 극복하는 것이다.", "author": "한수산" },
  { "quote": "삶이 그대를 속일지라도, 슬퍼하거나 노하지 말라!", "author": "윤동주" },
  { "quote": "자신이 할 수 있다고 믿는 순간, 할 수 있게 된다.", "author": "최인호" },
  { "quote": "어제를 버리고 오늘을 살며 내일을 꿈꾸라.", "author": "황석영" },
  { "quote": "삶은 고난의 연속이지만, 그 속에서 찾는 작은 기쁨에 의미가 있다.", "author": "박완서" },
  { "quote": "작은 기쁨이 모여 큰 행복을 만든다.", "author": "이상" },
  { "quote": "시작이 반이다. 용기를 내어 첫발을 뗀다면, 이미 성공에 한걸음 다가선 것이다.", "author": "정철" },
  { "quote": "진정한 친구는 두 심장을 가진 한 사람과 같다.", "author": "김동인" },
  { "quote": "인생은 한 권의 책과 같다. 중요한 것은 얼마나 길게 쓰느냐가 아니라, 얼마나 아름답게 쓰느냐이다.", "author": "한용운" },
  { "quote": "어려움은 인내를 통해 극복되며, 인내는 희망을 통해 강화된다.", "author": "조지훈" },
  { "quote": "매일을 새롭게 시작하라. 어제의 실수를 오늘의 경험으로 삼아라.", "author": "최명희" },
  { "quote": "삶이 있는 한 희망은 있다.", "author": "김남조" },
  { "quote": "꿈을 잃지 않는 한 젊음도 잃지 않는다.", "author": "고은" },
  { "quote": "아름다운 삶을 살기 위해 필요한 것은 많지 않다. 작은 것에서 기쁨을 찾는 마음만 있으면 된다.", "author": "이태준" },
  { "quote": "인생은 끊임없는 배움의 여정이다. 매일 조금씩, 끝까지 배워라.", "author": "박경리" },
  { "quote": "살아가면서 가장 중요한 것은 '자신을 알고 사랑하는 것'이다.", "author": "정호승" },
  { "quote": "인생에서 가장 아름다운 것은 우리가 꿈꿀 수 있다는 것이다.", "author": "마크" },
  { "quote": "진정으로 원하는 것을 알기 위해서는 시간을 들여 내면을 탐색해야 한다.", "author": "윤동주" },
  { "quote": "당신의 삶을 이끄는 것은 바로 당신의 태도이다.", "author": "김소월" },
  { "quote": "사랑은 마음으로 하는 대화이다.", "author": "이용악" },
  { "quote": "진정한 지혜는 겸손에서 비롯된다.", "author": "이상" },
  { "quote": "창조적인 생각은 평범한 일상에서 시작된다.", "author": "백석" },
  { "quote": "내 삶을 변화시키고 싶다면, 먼저 내 마음가짐을 변화시켜야 한다.", "author": "한말숙" },
  { "quote": "감사는 가장 순수한 형태의 사랑이다.", "author": "김유정" },
  { "quote": "오늘의 작은 변화가 내일의 큰 차이를 만든다.", "author": "이청준" }
];

backgrounds = [
  'bg1.jpeg', 'bg2.jpeg', 'bg3.jpeg', 'bg4.jpeg', 'bg5.jpeg', 'bg6.jpeg', 'bg7.jpeg', 'bg8.jpeg', 'bg9.jpeg', 'bg10.jpeg'
];

const wiseSaying = document.querySelector('#wiseSaying');
const author = document.querySelector('#author');

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


makeRandomPhrases();
makeRandomBackground();