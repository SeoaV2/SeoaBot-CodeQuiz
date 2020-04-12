data/quizs.json의 표준 표기법
===========================

## 예시
```json
{
  "language": "c",
  "question": "C언어에서 세미콜론(;)은 의무가 아닙니다.\n즉, 사람의 스타일에 따라 적을수도, 안 적을수도 있습니다.",
  "explanation": "의무입니다, C언어 컴파일러(빌더)는 세미콜론으로 문장과 문장을 나눕니다.\n세미콜론을 사용하지 않을경우, 컴파일러가 컴파일(빌드)을 수행하지 못합니다.",
  "answer": false,
  "point": 1
}
```

----------------------------------------------------------------------------------

## 정의
| 변수이름    |  설명                    | 자료형      |
| ----------- | ------------------------ | ----------- |
| language    | 이 문제와 관련된 언어    | String      |
| question    | 문제                     | String      |
| explanation | 이 문제의 풀이           | String      |
| answer      | 정답 여/부               | **Boolean** |
| point       | 정답일경우 가져갈 포인트 | **Number**  |

----------------------------------------------------------------------------------

## 서술 표준
1. 모든 문제는 o 혹은 x으로 대답할 수 있어야 하며, 정답이 명확해야 한다
2. 모든 문제는 평어체로 표기하되, 풀이는 경어체로 표기한다
3. 모든 문장의 끝에는 문장의 끝을 알리는 온점이 표기하여야 한다
4. 모든 풀이는 맨 앞에 "~입니다, ~가 아닙니다"와 같은 정답 여부를 표기하여야 한다

----------------------------------------------------------------------------------

## 기술적 표준
1. 모든 문제들은 배열(Array)에 감싸져 있어야 한다
2. 모든 변수는 지정된 자료형에 맞아야 한다
3. 통일을 위해 language중 파이썬은 버전의 따라 `py2`와 `py3`로 나누어야 하며, C#은 `c#`으로 표기하고, C++은 `c++`로 표기하며 자바스크립트는 `js`로 표기한다
4. question, explanation은 `enter`가 있으면 안되므로 `\n`을 사용해야 한다