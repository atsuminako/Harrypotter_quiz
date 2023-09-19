const quiz = [
    {
        question: "アロホモラを唱える理由は？",
        answers:[
            "光を灯す",
            "鍵を開ける",
            "物を浮かべる",
            "風を起こす"
        ],
        correct:"鍵を開ける"
    },{
        question: "アクシオを唱える理由は？",
        answers:[
            "水を出す",
            "呪いを防ぐ盾を作る",
            "物を呼び寄せる",
            "物を膨らませる"
        ],
        correct:"物を呼び寄せる"

    }, {
        question: "エクスペリアームスを唱える理由は？",
        answers:[
            "相手を失神させる",
            "相手が持っているものを弾き飛ばす",
            "炎を出す",
            "突風を出す"
        ],
        correct:"相手が持っている物を弾き飛ばす"

    },{
        question: "セクタムセンプラを唱える理由は？",
        answers:[
            "相手の心や記憶を読み取る",
            "壊れたものを直す",
            "相手の体を切り裂く",
            "相手を眠らせる"
        ],
        correct:"相手の体を切り裂く"

    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button =document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent=quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解");
        score++;
    } else {
        window.alert("不正解");
    }  
    
    quizIndex++;

    if(quizIndex <quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        //問題数が無ければこちらを実行
        window.alert('終了!あなたの正解数は' + score +'/' + quizLength +'です');
    }
};


//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex <buttonLength){
    $button[handlerIndex].addEventListener("click",(e)=>{
        clickHandler(e);
    });
    handlerIndex++;
};

$button[0].addEventListener("click",(e) =>{
    clickHandler(e);
});s
$button[1].addEventListener("click",(e) =>{
    clickHandler(e);
});
$button[2].addEventListener("click",(e) =>{
    clickHandler(e);
});
$button[3].addEventListener("click",(e) =>{
    clickHandler(e);
});
