express로 간단한 todo를 만들기
===================================

#### 1. 기능
* 회원 가입
<img src="./mdimg/join_capture.10.gif">
회원가입을 해야 todo list를 사용할 수 있습니다.   
           
* 로그인/로그아웃
<img src="./mdimg/loginlogout_capture.gif">
회원 가입 후 로그인하여 서비스를 이용하고 이용이 끝난 후의 경우 로그아웃할 수 있습니다.
           
* Todo 등록/ 수정 / 우선순위 변경 
<img src="./mdimg/CRU.gif">
해야할 일들을 등록(제목, 날짜, 내용)하고 수정할 수 있습니다. 또한 일들의 우선순위를 등록할 수 있습니다.       
우선순위의 경우 급함과 급하지 않음 2단계를 적용할 수 있으며 기본적으로 모든 할 일들에는 급하지 않음이 적용됩니다.                 
             
* Todo 삭제
<img src="./mdimg/delete.gif">
일을 완료하거나 취소하여 더 이상 기록할 필요가 없을 경우 이를 제거할 수 있습니다.            </br>        
           
#### 2. 데이터베이스
* mysql 사용

#### 3. 기술스택
* express
* passport : 로그인 구현을 위해서 사용
* sequelize(ORM) : mysql 이용을 위해서 사용
* pm2 : 단일프로세스를 멀티프로세스 늘리기 위해 사용 
* redis : session 정보 저장하기 위해 사용

#### 4. 잔존 문제들
~~AWS에서 배포하려고 할 때 db와 연결이 안된다.~~  
~~AWS에서 서버를 실행시켰는데도 public IP를 통해서 접근이 불가능하다. (2020/8/10 ~)~~     
~~AWS에서 mysql-server가 설치가 안됨, 이유조차 파악을 못하겠다.~~ </br>
nginx 적용 방법 .... (2020/8/12 ~)     </br>
~~현재 배포관련 환경설정은 문제 없고 퍼블릭 IP로도 접근 가능하나 메인페이지 이외에 다른 페이지 접근이 불가능하다.~~   </br>
