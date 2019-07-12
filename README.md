### 2019swuvd tree
```
[vd]
   ㄴ [index]
	ㄴ index.html
	ㄴ index.css
	ㄴ [images]
   ㄴ [edition]
	ㄴ edition.html
	ㄴ edition.css
	ㄴ script.js
	ㄴ [images]
   ㄴ [team]
	ㄴ team.html
	ㄴ team.css
	ㄴ script.js
	ㄴ [images]
   ㄴ [work]
	ㄴ work.html
	ㄴ work.css
	ㄴ script.js
	ㄴ [1]		         # 각 번호별 폴더
	    ㄴ 1.html
	    ㄴ 1.css
	ㄴ [images]
	     ㄴ[thumbnail]	# 썸네일이미지
   ㄴ [shareimages]
```

### 각 작품별 상세 페이지 만드는 방법

1. 각 번호로 된 폴더를 생성한 뒤, '/work/1/1.html'과 '/work/1/1.css'를 복사해 각 번호 폴더 안에 붙여넣는다.
2. 각 번호 이름으로 html 파일과 css 파일 이름을 수정한다.( ex. 2번작품 -> work/2/ 안에 2.html, 2.css )
3. html 파일 내에 image 클래스 안에 있는 이미지 src를 수정한다.<br>
   ( 구글드라이브에서 원하는 이미지 찾기 -> 마우스 오른쪽버튼 -> 공유 가능한 링크 가져오기)<br>
   ( https://drive.google.com/drive/folders/1WcVQ55OEzBsDUtjvvZvA6P3Ylos3hEGY?usp=sharing )
```
[ /work/1/1.html ]
...
	<!-- 구글드라이브에서 이미지 링크 따오기 -->
        <div class="image">
            <img src="이미지주소" />
            ...
        </div>
...
```
4. html 파일 내에 explain 클래스 안에 있는 작품설명 내용들을 수정한다.
```
[ /work/1/1.html ]
...
	<!-- 작품설명 -->
        <div class="explain">
            <!-- 각 카테고리 명칭 넣어주기 -->
            <div class="category">카테고리 명칭(출판 / BX/UIUX / VP / 영상)</div>

            <!-- 작품 제목 넣어주기 -->
            <div class="title">작품제목</div>

            <!-- 이름 넣어주기 -->
            <div class="name">이름</div>

            <!-- 작품설명 넣어주기 -->
            <div class="script">
                작품설명
                문단 구분 필요한 경우 <br><br> (br태그 두 번) 넣기
            </div>
        </div>
    </div>
...
```
5. 영상의 경우 image 클래스 내의 첫 번째 이미지에 아래의 코드를 추가한다.<br>
   [ vimeo 주소.txt ] 에서 각 번호별 비메오 맨 뒤 주소(ex. 346993491)를 복사해서 넣으면 됨<br>
   ( 예시로 [ /work/1/1.html ] 에 주석처리해서 넣어놨습니다! )
```
[ /work/1/1.html ]
...
        <div class="image">

            <!-- 비메오 링크 추가 -->
            <div class="video">
                <iframe src="https://player.vimeo.com/video/비메오 맨 뒤 주소?title=0&amp;byline=0&amp;portrait=0"
                    width="640" height="360" frameborder="0"></iframe>
            </div>

            ...
            <img src="이미지주소" />
        </div>
...
```
