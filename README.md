# Music Player [Demo] (PC 버전)
javascript를 이용해 뮤직 플레이어의 모양만 구성해 본 웹 페이지  

### 기능
1. 일반모드/다크모드 전환 버튼
2. 재생 버튼
3. 일시정지 버튼
4. 이전 곡 버튼
5. 다음 곡 버튼
6. 볼륨 조절 바
7. 음소거/음소거 해제 버튼
8. 재생리스트 보기/접기 버튼
9. 재생리스트 셔플 버튼
10. 재생리스트 루프 버튼(한 곡만 반복)
11. 재생리스트에서 클릭한 곡 재생
  
### 특이사항
* 실제로 음악이 나오진 않음
* 뮤직 플레이 바는 setInterval 함수를 이용해 자동으로 재생하는 것 처럼 표현
  - 하나의 곡을 재생 시 1초 마다 플레이 바를 1/10씩 이동시켜 10초 동안 재생
  - 플레이 바 조작은 가능하나 제어는 불가능
* 셔플 버튼을 체크하면 크롬 개발자 모드의 콘솔화면에서 재생리스트의 섞인 순서를 표시함

웹 페이지 보기 : https://cttc-cttc.github.io/music-player/
