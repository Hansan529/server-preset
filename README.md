# Package

- dependencies

bcrypt: 비밀번호 해싱 처리 패키지  
connect-mongo: mongoDB와 서버와의 연결 패키지  
dotenv: 환경변수 호출 패키지  
express: 서버 패키지  
express-session: req.session 사용하기 위한 패키지  
mongoose: mongoDB와 직접적인 연동 패키지  
morgan: method, path, statusCode, AccessTime 등 요청 추적 패키지  
multer: 업로드한 파일 저장하는 패키지  
nanoid: 랜덤 변수 패키지  
pug: 렌더링 템플릿 패키지

- devDependencies

@babel/core  
@bable/node  
@bable/preset-env: 최신 자바스크립트를 구형으로 변환시키는 패키지  
babel-loader: webpack에서 변환할 loader 패키지  
css-loader: webpack에서 변환할 loader 패키지  
mini-css-extract-plugin: css 코드를 별도의 파일로 만드는 패키지  
nodemon: 서버에서 변경된 사항이 있으면 자동으로 재시작하는 패키지  
sass: webpack에서 변환할 scss 베이스 패키지  
sass-loader: webpack에서 변환할 loader 패키지  
webpack: 언어를 압축 및 변환하는 패키지  
webpack-cli: webpack 부가 패키지

---

## docker-compose

```yaml
version: "3.8"
services:
  mongodb:
    image: mongo
    container_name: mongodb
    restart: always
    ports:
      - 27017:27017
    volumes:
      - ./.db/mongodata:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=<username>
      - MONGO_INITDB_ROOT_PASSWORD=<password>
      - MONGO_INITDB_DATABASE=<db>
```

mongoDB의 기본 포트는 27017이고, username, password, db를 지정하면 해당 유저, 데이터베이스가 생성된다.

<br>

## .env

mongoDB 데이터베이스 연결 방법

`DB_URL=mongodb://<username>:<password>@<host>:<port>/<db>`

데이터베이스 유저, 비밀번호로 권한 승인, 주소를 통해 접근, 사용할 데이터베이스 선택
