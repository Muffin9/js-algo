function solution(new_id) {
// return (new_id = new_id
//  .toLowerCase()
//  .replace(/[^\w-._]+/g, "")
//  .replace(/\.+/g, ".")
//  .replace(/^\.|\.$/, "")
//  .substr(0, 15).replace(/^$/g, "a"))
//  .replace(/\.$/g, "")
//  .replace(/^(.)$/, "$1$1$1")
//  .replace(/^(.)(.)$/, "$1$2$2");
    new_id = new_id.toLowerCase(); // 모든 대문자를 소문자로 치환하는 함수 toLowerCase
    console.log("1단계 : ", new_id);
    new_id = new_id.replace(/[^\w-._]+/g, "");
    // \w는 모든 영문자, 숫자, 밑줄(_)에 대응
    // 문자셋의 처음에 ^를 붙여주면 이를 부정 문자셋
    // 2단계 조건인 모든 영문자, 숫자, 밑줄(_), 빼기(-), 마침표(.)를 제외한 모든 문자를 찾아서 빈 문자열('')로 변환
    console.log("2단계 : ", new_id);
    new_id = new_id.replace(/\.+/g, ".");
    console.log("3단계 : ", new_id);
    // 마침표 자체를 문자로써 매칭 시키려면 백 슬래시(\)를 이용해 마침표를 이스케이프
    // 문자의 뒤에 +를 사용하면, 이는 그 문자가 한 번 이상 나왔는지에 대한 패턴
    new_id = new_id.replace(/^\.|\.$/g, "");
    // ^문자는 문자열의 가장 앞 문자가 X와 매칭 되는지 검사
    // 문자$는 문자열의 가장 뒷 문자가 X와 매칭되는지 검사
    console.log("4단계 : ", new_id);
    new_id = new_id.replace(/^$/g, "a");
    // 빈 문자열이라면, 'a'로 변환
    // 시작 문자와 끝 문자에 대응되는 문자를 써주지 않았기 때문에, 이는 곧 빈 문자열을 의미
    console.log("5단계 : ", new_id);
    new_id = new_id.substr(0, 15).replace(/\.$/g, "");
    // substr함수로 해당 문자열을 15개 문자만 자른이후, 맨  캐뒤 마침표 제거
    console.log("6단계 : ", new_id);

    new_id = new_id.replace(/^(.)$/, "$1$1$1").replace(/^(.)(.)$/, "$1$2$2");

    console.log("7단계 : ", new_id);
    // 문자가 하나일 땐 첫 번째 문자($1)가 세 번('$1$1$1'), 문자가 두 개일 땐 두 번째 문자($2)가 한 번 더 나오도록('$1$2$2')
    return new_id;
}

solution("...!@BaT#*..y.abcdefghijklm");