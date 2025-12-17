export default class Planet {
    constructor(name, distanceAU) {
        this.name = name;
        this.distanceAU = distanceAU;
    }

    get distanceFromSun() {
        return this.distanceAU;
    }
}