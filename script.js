// MusicInfo 클래스 선언
class MusicInfo {
    constructor(serialNo, imgUrl, artist, title, playTime) {
        this.serialNo = serialNo;
        this.imgUrl = imgUrl;
        this.artist = artist;
        this.title = title;
        this.playTime = playTime;
    }
}

// [0]셔플모드, [1]루프모드
const SHUFFLE_MODE = 0;
const LOOP_MODE = 1;

// 이미지 및 아이콘 url 상수
const ALBUM_JACKET_1 = "https://i.pinimg.com/736x/4d/69/59/4d69598b4b73832c51ae0975b9e81b13.jpg";
const ALBUM_JACKET_2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-SD9IpP4HKZPNdrYx3Z8hg5fPzR5kvy1EA&usqp=CAU";
const ALBUM_JACKET_3 = "https://images.otwojob.com/product/l/P/y/lPyeRApeC7zTmsB.png/o2j/resize/900%3E";
const ALBUM_JACKET_4 = "https://newsimg.hankookilbo.com/cms/articlerelease/2021/01/17/fb3de445-6b62-49df-9dab-0fa8efa9cc8c.jpg";
const ALBUM_JACKET_5 = "https://mblogthumb-phinf.pstatic.net/MjAyMDA3MjBfMjQw/MDAxNTk1MjUyMjAwNjcz.8LU7-jColuXTJ5FB0kItxMjaTEwLQARLN-Lsq9Sf2h0g.qIFvKtYayGfAwUM-62NdQp6TSLyJogOqMfbdd0S36ZQg.JPEG.andelisa/1%EC%95%A8%EB%B2%94%EC%9E%90%EC%BC%93_Ocean_%EC%88%98%EC%A0%95.jpg?type=w800";
const LIGHT_MODE_ICON = "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_brightness_low_48px-128.png";
const DARK_MODE_ICON = "https://cdn3.iconfinder.com/data/icons/multimedia-ver-3-glyph/32/brightness_low_battery_sun_light-128.png";
const PRE_BTN_LIGHT = "https://cdn2.iconfinder.com/data/icons/ui-basic-glyph/512/UI_Basic_GLYPH-96-128.png";
const PRE_BTN_DARK = "https://cdn-icons-png.flaticon.com/128/7543/7543143.png";
const PAUSE_BTN_LIGHT = "https://cdn2.iconfinder.com/data/icons/ui-basic-glyph/512/UI_Basic_GLYPH-97-128.png";
const PAUSE_BTN_DARK = "https://cdn4.iconfinder.com/data/icons/flat-pro-multimedia-set-1/32/btn-grey-play-pause-128.png";
const PLAY_BTN_LIGHT = "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/play-3-128.png";
const PLAY_BTN_DARK = "https://cdn-icons-png.flaticon.com/128/7543/7543201.png";
const NEXT_BTN_LIGHT = "https://cdn2.iconfinder.com/data/icons/ui-basic-glyph/512/UI_Basic_GLYPH-95-128.png";
const NEXT_BTN_DARK = "https://cdn-icons-png.flaticon.com/128/7543/7543141.png";
const AUDIO_PLAY_BTN_LIGHT = "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/volume_audio_music_sound-3-128.png";
const AUDIO_PLAY_BTN_DARK = "https://cdn3.iconfinder.com/data/icons/multimedia-white-with-black-background/2048/Volume-128.png";
const AUDIO_MUTE_BTN_LIGHT = "https://cdn4.iconfinder.com/data/icons/symbol-blue-set-1/100/Untitled-2-42-128.png";
const AUDIO_MUTE_BTN_DARK = "https://cdn3.iconfinder.com/data/icons/multimedia-white-with-black-background/2048/Mute-128.png";
const PLAYLIST_BTN_LIGHT = "https://cdn3.iconfinder.com/data/icons/iconpark-vol-8/48/music-list-128.png";
const PLAYLIST_BTN_DARK = "https://cdn1.iconfinder.com/data/icons/interface-white-with-multicolor-circle-background/2048/Bulleted_list-128.png";
const SHUFFLE_BTN_LIGHT = "https://cdn2.iconfinder.com/data/icons/arrows-set-2/512/17-128.png";
const SHUFFLE_BTN_DARK = "https://cdn4.iconfinder.com/data/icons/flat-pro-multimedia-set-1/32/btn-grey-shuffle-128.png";
const LOOP_BTN_LIGHT = "https://cdn2.iconfinder.com/data/icons/arrows-set-2/512/14-128.png";
const LOOP_BTN_DARK = "https://cdn3.iconfinder.com/data/icons/basicsiconic/512/refresh-128.png";
const CHECK_ICON = "https://cdn3.iconfinder.com/data/icons/game-3-1/512/confirm-128.png";

let dataList = new Array(); // MusicInfo 클래스의 모든 정보를 받을 배열
let dataSize;
let currSerialNo = 1;
let shuffledData = new Array(); // MusicInfo 클래스의 시리얼 번호만 받을 배열
let shfIdx = 0;
let start = true;
let outline;
let layer;
let lightIcon, darkIcon;
let jacketImg;
let title;
let lyrics;
let incTime, playTime;
let playBar;
let playBarValue = 0;
let timer;
let pre, pause, play, next;
let audioPlay, audioMute, audioBar;
let audioBarValue = 0;
let playList, shuffle, loop;
let shuffleCheck, loopCheck;
let tableOut;
let shuffleMode = false;
let loopMode = false;

window.onload = function() {
    // dataList 초기화
    dataList.push(new MusicInfo(1, ALBUM_JACKET_1, "Artist1", "Title1", "4:30"));
    dataList.push(new MusicInfo(2, ALBUM_JACKET_2, "Artist2", "Title2", "3:38"));
    dataList.push(new MusicInfo(3, ALBUM_JACKET_3, "Artist3", "Title3", "5:24"));
    dataList.push(new MusicInfo(4, ALBUM_JACKET_4, "Artist4", "Title4", "4:47"));
    dataList.push(new MusicInfo(5, ALBUM_JACKET_5, "아티스트5", "제목5", "3:52"));
    
    dataSize = dataList.length;
    for(let i=0; i<dataSize; i++) { // 셔플 리스트 [1,2,3,4,5]로 초기화
        shuffledData.push(dataList[i].serialNo);
    }
    outline = document.getElementById('outline');
    layer = document.getElementById('layer');
    lightIcon = document.getElementById('lightIcon');
    darkIcon = document.getElementById('darkIcon');
    jacketImg = document.getElementById('jacketImg');
    title = document.getElementById('title');
    lyrics = document.getElementById('lyrics');
    incTime = document.getElementById('incTime');
    playTime = document.getElementById('playTime');
    playBar = document.getElementById('playBar');
    pre = document.getElementById('pre');
    pause = document.getElementById('pause');
    play = document.getElementById('play');
    next = document.getElementById('next');
    audioPlay = document.getElementById('audioPlay');
    audioMute = document.getElementById('audioMute');
    audioBar = document.getElementById('audioBar');
    audioBarValue = audioBar.value;
    playList = document.getElementById('playList');
    shuffle = document.getElementById('shuffle');
    shuffleCheck = document.getElementById('shuffleCheck');
    loop = document.getElementById('loop');
    loopCheck = document.getElementById('loopCheck');
    tableOut = document.getElementById('tableOut');

    // 이미지 url이 너무 길어서 스크립트로 이미지 src 적용
    lightIcon.setAttribute('src', LIGHT_MODE_ICON);
    darkIcon.children[0].setAttribute('src', DARK_MODE_ICON);
    jacketImg.setAttribute('src', ALBUM_JACKET_1);
    pre.setAttribute('src', PRE_BTN_LIGHT);
    pause.setAttribute('src', PAUSE_BTN_LIGHT);
    play.setAttribute('src', PLAY_BTN_LIGHT);
    next.setAttribute('src', NEXT_BTN_LIGHT);
    audioPlay.setAttribute('src', AUDIO_PLAY_BTN_LIGHT);
    audioMute.setAttribute('src', AUDIO_MUTE_BTN_LIGHT);
    playList.setAttribute('src', PLAYLIST_BTN_LIGHT);
    shuffle.setAttribute('src', SHUFFLE_BTN_LIGHT);
    shuffleCheck.setAttribute('src', CHECK_ICON);
    loop.setAttribute('src', LOOP_BTN_LIGHT);
    loopCheck.setAttribute('src', CHECK_ICON);

    // 초기화면의 데이터값 세팅
    title.innerHTML = dataList[0].artist + ' - ' + dataList[0].title;
    playTime.innerHTML = dataList[0].playTime;

    // 초기화면의 플레이리스트 세팅
    let innerTag = '';
    for(let m of dataList) {
        innerTag += '<tr>';
            innerTag += '<td><img class="listJacket" src="'+ m.imgUrl +'"></td>';
            innerTag += '<td onclick="selectMusic('+ m.serialNo +')">';
                innerTag += m.artist + " - " + m.title;
                innerTag += '<span class="nowPlaying" style="float: right;"></span>';
            innerTag += '</td>';
        innerTag += '</tr>';
    }
    tableOut.children[0].innerHTML = innerTag;
}

// 일반/다크모드 전환 시 바뀌어야 할 것들
function brCtrl() {
    if(getComputedStyle(layer).backgroundColor == 'rgb(255, 255, 255)') {
        outline.style.backgroundColor = '#1F2022';
        layer.style.backgroundColor = '#1F2022';
        layer.style.color = '#FFFFFF';
        tableOut.style.color = '#FFFFFF';
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'flex';
        lyrics.style.background = '#333';
        lyrics.style.color = '#ccc';
        pre.setAttribute('src', PRE_BTN_DARK);
        pause.setAttribute('src', PAUSE_BTN_DARK);
        play.setAttribute('src', PLAY_BTN_DARK);
        next.setAttribute('src', NEXT_BTN_DARK);
        audioPlay.setAttribute('src', AUDIO_PLAY_BTN_DARK);
        audioMute.setAttribute('src', AUDIO_MUTE_BTN_DARK);
        playList.setAttribute('src', PLAYLIST_BTN_DARK);
        shuffle.setAttribute('src', SHUFFLE_BTN_DARK);
        loop.setAttribute('src', LOOP_BTN_DARK);
        // 스타일 속성 변수에 접근
        document.documentElement.style.setProperty('--bgColor', '#373638'); // 짙은 회색
        
    } else if(getComputedStyle(layer).backgroundColor == 'rgb(31, 32, 34)') {
        outline.style.backgroundColor = '#FFFFFF';
        layer.style.backgroundColor = '#FFFFFF';
        layer.style.color = '#000000';
        tableOut.style.color = '#000000';
        lightIcon.style.display = 'flex';
        darkIcon.style.display = 'none';
        lyrics.style.background = '#eaeaea';
        lyrics.style.color = '#000';
        pre.setAttribute('src', PRE_BTN_LIGHT);
        pause.setAttribute('src', PAUSE_BTN_LIGHT);
        play.setAttribute('src', PLAY_BTN_LIGHT);
        next.setAttribute('src', NEXT_BTN_LIGHT);
        audioPlay.setAttribute('src', AUDIO_PLAY_BTN_LIGHT);
        audioMute.setAttribute('src', AUDIO_MUTE_BTN_LIGHT);
        playList.setAttribute('src', PLAYLIST_BTN_LIGHT);
        shuffle.setAttribute('src', SHUFFLE_BTN_LIGHT);
        loop.setAttribute('src', LOOP_BTN_LIGHT);
        document.documentElement.style.setProperty('--bgColor', '#e7e1ed'); // 연한 보라
    }
}

// 이전곡, 재생/일시정지, 다음곡 버튼
// 재생/일시정지 처리
function musicPause() {
    pause.style.display = 'none';
    play.style.display = 'flex';
    clearTimeout(timer);
}
function musicPlay() {
    clearTimeout(timer);
    let nowPlayingArea = document.getElementsByClassName("nowPlaying")[currSerialNo-1];
    if(nowPlayingArea.innerHTML == '') {
        if(shuffleMode) { // 페이지 로드 후 처음으로 플레이 버튼을 눌렀을 때 셔플모드가 활성중인 경우
            shfIdx = 0;
            currSerialNo = shuffledData[shfIdx];
        }
        selectMusic(currSerialNo);
        return;
    }
    pause.style.display = 'flex';
    play.style.display = 'none';
    timer = setInterval(flow, 1000);
}
function flow() {
    playBarValue += 10;
    playBar.value = playBarValue;
    incTime.innerHTML = '0:0' + playBarValue/10;
    
    if(playBarValue == 100) { // 곡 재생이 끝나면 다음 곡 재생
        playBarValue = -10;
        
        if(shuffleMode && !loopMode) { // 셔플모드만 활성중이면 셔플 리스트의 순서대로 곡 번호 변경
            shfIdx++;
            if(shfIdx == dataSize)
                shfIdx = 0;
            currSerialNo = shuffledData[shfIdx];
            
        } else if(!shuffleMode && !loopMode) { // 두 모드 다 아니면 원래 순서대로 증가
            currSerialNo++;
            if(currSerialNo > dataSize)
                currSerialNo = 1;
        }
        // else인 루프모드가 하나라도 활성중이면 곡 번호를 바꿀 필요가 없으니 아무 처리도 안함
        
        selectMusic(currSerialNo);
    }
}

// 이전곡, 다음곡 처리
function preSong() {
    if(shuffleMode) { // 셔플모드 활성중이면 셔플 리스트의 역순으로 곡 번호 변경
        shfIdx--;
        if(shfIdx <= -1) // 도중에 셔플을 다시 설정하면 shfIdx가 -2까지 갈 수 있음
            shfIdx = dataSize-1;
        currSerialNo = shuffledData[shfIdx];
        
    } else { // 그 외 모드
        currSerialNo--;
        if(currSerialNo == 0)
            currSerialNo = dataSize;
    }
    selectMusic(currSerialNo);
}
function nextSong() {
    if(shuffleMode) { // 셔플모드 활성중이면 셔플 리스트의 순서대로 곡 번호 변경
        shfIdx++;
        if(shfIdx == dataSize)
            shfIdx = 0;
        currSerialNo = shuffledData[shfIdx];
        
    } else { // 그 외 모드
        currSerialNo++;
        if(currSerialNo > dataSize)
            currSerialNo = 1;
    }
    selectMusic(currSerialNo);
}

// 음소거 버튼, 음량 조절바
function audioIconToggle(id) {
    if(id == 'audioPlay') {
        audioPlay.style.display = 'none';
        audioMute.style.display = 'flex';
        audioBar.value = 0;
    } else {
        audioPlay.style.display = 'flex';
        audioMute.style.display = 'none';
        audioBar.value = audioBarValue;
    }
}
function volumnCtrl(val) {
    audioBarValue = val;
    if(val == 0) {
        audioPlay.style.display = 'none';
        audioMute.style.display = 'flex';
    } else {
        audioPlay.style.display = 'flex';
        audioMute.style.display = 'none';
    }
}

// 재생리스트, 셔플, 루프 버튼
function playListToggle() {
    if(tableOut.style.getPropertyValue('opacity') == 1) {
        tableOut.style.marginTop = '-24em';
        tableOut.style.opacity = 0;
        tableOut.style.transitionDelay = '0.6s, 0s';
    } else {
        tableOut.style.marginTop = '0em';
        tableOut.style.opacity = 1;
        tableOut.style.transitionDelay = '0s, 0.7s';
    }
}
// 재생리스트의 인덱스 클릭 시
function selectMusic(serialNo) {
    jacketImg.setAttribute('src', dataList[serialNo-1].imgUrl);
    title.innerHTML = dataList[serialNo-1].artist + ' - ' + dataList[serialNo-1].title;
    playTime.innerHTML = dataList[serialNo-1].playTime;
    for(let i=0; i<dataSize; i++) {
        if(i == serialNo-1)
            document.getElementsByClassName("nowPlaying")[i].innerHTML = 'Now Playing 🎵';
        else
            document.getElementsByClassName("nowPlaying")[i].innerHTML = '';
    }
    incTime.innerHTML = '0:00';
    playBar.value = 0;
    playBarValue = -10;
    currSerialNo = dataList[serialNo-1].serialNo;
    if(shuffleMode) { // 셔플모드 중 클릭으로 곡을 바꾸면 현재 곡에 해당하는 셔플리스트의 인덱스를 shfIdx에 대입
        shfIdx = shuffledData.indexOf(serialNo);
    }
    musicPlay();
}

function shuffleTrack() {
    let check = document.getElementsByClassName("checkIcon")[SHUFFLE_MODE];
    if(check.style.getPropertyValue('display') == 'none') {
        check.style.display = 'block';
        shuffleMode = true;
        for(let i=0; i<dataSize; i++) { // 인덱스 0과 0 이외인 랜덤 인덱스를 바꿈
            let ranIdx = parseInt(Math.random()*(dataSize-1) + 1);
            let tmp = shuffledData[0];
            shuffledData[0] = shuffledData[ranIdx];
            shuffledData[ranIdx] = tmp;
        }
        shfIdx = -1;
        console.log('Shuffled Track : ' + shuffledData);
        
    } else {
        check.style.display = 'none';
        shuffleMode = false;
    }
}

function loopOne() {
    let check = document.getElementsByClassName("checkIcon")[LOOP_MODE];
    if(check.style.getPropertyValue('display') == 'none') {
        check.style.display = 'block';
        loopMode = true;
    } else {
        check.style.display = 'none';
        loopMode = false;
    }
}