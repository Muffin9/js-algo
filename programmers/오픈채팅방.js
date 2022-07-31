function solution(record) {
    const user = {};
    const rooms = [];
    const result = [];
    for(let i = 0; i < record.lesngth; i++) {
        const [command, id, name] = record[i].split(" ");
        switch(command) {
            case 'Enter':
                rooms.push({id, command});
                user[id] = name;
                break;
            case 'Leave':
                rooms.push({id, command});
                break;
            case 'Change':
                rooms.push({id, command});
                user[id] = name;
                break;
        }
    }
    for(let i = 0; i < rooms.length; i++) {
        const nickName = user[rooms[i].id];
        const command = rooms[i].command;
        
        switch(command) {
            case "Enter":
                result.push(`${nickName}님이 들어왔습니다.`);
                break;
            case "Leave":
                result.push(`${nickName}님이 나갔습니다.`);
                break;
        }
    }
    return result;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]);