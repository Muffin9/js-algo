function solution(id_list, report, k) {
    let reportSet = new Set(report);
    let reportList = new Map();
    let reportCount = new Map();
    let mailCount = new Map();
    let badList = [];
    let answer = [];

    for(let i = 0; i < id_list.length; i++) {
        reportCount.set(id_list[i], 0);
        mailCount.set(id_list[i], 0);
    }

    reports = [];
    reportSet.forEach((value) => {
        reports.push(value);
    });
    
    for(let i = 0; i < reports.length; i++) {
        let [giveReport, receiveReport] = reports[i].split(" ");
        if(reportList.has(giveReport)) reportList.set(giveReport, [...reportList.get(giveReport), receiveReport])
        else reportList.set(giveReport, [receiveReport]);
        reportCount.set(receiveReport, reportCount.get(receiveReport) + 1);
    }

    for (let i = 0; i < id_list.length; i++) {
        if (reportCount.get(id_list[i]) >= k) {
            badList.push(id_list[i]);
        }
    }

    for (let i = 0; i < id_list.length; i++) {
        if(reportList.get(id_list[i])) {
            mailCount.set(id_list[i], reportList.get(id_list[i]).filter(person => badList.includes(person)).length);
        }
        answer.push(mailCount.get(id_list[i]));
    }
    console.log(answer);

}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2);