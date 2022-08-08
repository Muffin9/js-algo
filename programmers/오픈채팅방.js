// 2번째 풀어봄, 10분 소요됨
function solution(record) {
    const users = {};
    const rooms = [];
    const result = [];

    record.forEach((el) => {
        const [command, id, nickName] = el.split(" ");
        switch(command) {
            case "Enter":
                users[id] = nickName;
                rooms.push({command: command, id: id});
                break;
            case "Leave":
                rooms.push({command: command, id: id});
                break;
            case "Change":
                users[id] = nickName;
                break;
            default:
                throw new Error("command is not found");
        }
    });
    
    rooms.forEach((room) => {
        const command = room.command;
        const nickName = users[room.id];

        switch(command) {
            case 'Enter':
                result.push(`${nickName}님이 들어왔습니다.`);
                break;
            case 'Leave':
                result.push(`${nickName}님이 나갔습니다.`);
                break;
        }
    });

    return result;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]);