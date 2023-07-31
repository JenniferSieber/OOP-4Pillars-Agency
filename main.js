// 100Devs Agency OOP 
class Company {
  constructor(co, biz, employeeCt) {
    this._co = co;
    this._biz = biz;
    this._employeeCt = employeeCt;
  }

  get co() {
    return this._co;
  }

  get biz() {
    return this._biz;
  }

  get employeeCt() {
    return this._employeeCt;
  }

  coIntro() {
    return `${this.co} is a ${this.biz} company with ${this.employeeCt} employees.`;
  }
}

class Team extends Company {
  constructor(co, team, teamCt, responsibilities) {
    super(co);
    this._teamType = team;
    this._teamCt = teamCt;
    this._responsibilities = responsibilities;
  }

  get team() {
    return this._teamType;
  }

  get teamCt() {
    return this._teamCt;
  }

  get responsibilities() {
    return this._responsibilities;
  }

  teamDesc() {
    return `At ${this.co}, our ${this.team} Team has a staff of ${this.teamCt} teammembers working on ${this.responsibilities}.`;
  }
}

class TeamMgr extends Team {
  constructor(co, team, teamCt, responsibilities, mgrName, title) {
    super(co, team, teamCt, responsibilities);
    this._mgrName = mgrName;
    this._title = title;
  }

  get mgrName() {
    return this._mgrName;
  }

  get title() {
    return this._title;
  }

  managerDesc() {
    return `${this.mgrName} is the ${this.title}.`;
  }
}

class Teammember {
  constructor(tmName, tmTitle, techStack) {
    this._tmName = tmName;
    this._tmTitle = tmTitle;
    this._techStack = techStack;
  }

  get tmName() {
    return this._tmName;
  }

  get tmTitle() {
    return this._tmTitle;
  }

  get techStack() {
    return this._techStack;
  }

  tmDesc() {
    return `${this.tmName}, a ${this.tmTitle} specializes within the ${this.techStack} stack.`;
  }
}

//build company
const h1 = document.querySelector("h1");
const companyDesc = document.querySelector(".company");
const company = new Company("100Devs Agency", "Tech", 500);
h1.textContent = company.co;
companyDesc.textContent = company.coIntro();

//frontend
const frontDesc = document.querySelector(".frontDesc");
const frontDir = document.querySelector(".frontMgrs");
const frontS = document.querySelector(".frontStaff");

const front = new Team(
  "100Devs Agency",
  "Frontend",
  25,
  "Customer Facing UI/UX -Architecture to maintenance"
);
const mary = new TeamMgr(
  "100Devs Agency",
  "Frontend",
  15,
  "Customer Facing UI/UX -Architecture to maintenance",
  "Mary -the Machine- Mayhem",
  "Director of UI Services"
);
const tom = new Teammember(
  "Tom da Bomb",
  "UI Software Engineer",
  "Figma, ReactJS, Javascript, CSS, and HTML"
);

frontDesc.textContent = front.teamDesc();
frontDir.textContent = mary.managerDesc();
frontS.textContent = tom.tmDesc();

//backend
const backDesc = document.querySelector(".backDesc");
const backDir = document.querySelector(".backMgrs");
const backS = document.querySelector(".backStaff");

const back = new Team(
  "100Devs Agency",
  "Backend",
  20,
  "Servers, Databases, Cloud Services -Architecture to maintenance"
);
const john = new TeamMgr(
  "100Devs Agency",
  "Backend",
  11,
  "Internal: Servers, Databases, Cloud Services -Architecture to maintenance",
  "John -the Shining Knight- Lawson",
  "Director of External Infrastructure and Cloud Services"
);
const barry = new Teammember(
  "Barry White",
  "Cloud Services Engineer I",
  "MERN, Azure, AWS"
);

backDesc.textContent = back.teamDesc();
backDir.textContent = john.managerDesc();
backS.textContent = barry.tmDesc();
