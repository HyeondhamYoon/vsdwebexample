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
	    ㄴ [work]
	ㄴ [images]
	     ㄴ[thumbnail]	# 썸네일이미지
   ㄴ [shareimages]
```

### 각 작품별 상세 페이지 만드는 방법

1. '/work/1/1.html'과 '/work/1/1.css'를 복사해 각 번호 폴더 안에 붙여넣는다.
2. 각 번호 이름으로 html 파일과 css 파일 이름을 수정한다.
3. html 파일 내에 image 클래스 안에 있는 이미지를 수정한다.
```
[ /work/1/1.html ]
...
	<!-- ./(번호)/work 안에 있는 이미지 이름과 확장자 확인하기 -->
        <div class="image">
            <img src="./work/이미지이름.확장자" />
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
