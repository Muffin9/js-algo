const fs = require('fs');
const input = fs.readFileSync("5464.txt").toString().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const spaceArr = [];
    const vehicles = [];
    const inVehicleArr =[];
    const outVehicleArr =[];
    let result = 0;

    const getSpaceWeight = () => {
        for(let i = 0; i < spaceArr.length; i++) {
            if(!spaceArr[i].status) {
                spaceArr[i].status = true;
                return spaceArr[i].weight;
            }
        }
        return -1;
    }

    const updateFrontSpace = () => {
        spaceArr[0].status = false;
        return spaceArr[0].weight;
    }

    for(let i = 0; i < N; i++) {
        const value = +input.shift();
        const obj = {};
        obj.weight = value;
        obj.status = false;
        obj.vehicleId = null;
        spaceArr.push(obj);
    }

    for(let i = 0; i < M; i++) {
        const vehicle = +input.shift();
        vehicles.push(vehicle);
    }

    while(input.length !== 0) {
        const num = +input.shift();
        if(num > 0) {
            inVehicleArr.push(num);
        } else {
            outVehicleArr.push(num);
        }
    }

    console.log(result);
}

solution();