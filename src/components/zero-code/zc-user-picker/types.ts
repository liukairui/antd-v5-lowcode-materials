interface IDepartment {
  deptcode: string;
  director: string;
  members?: IMember[];
  name: string;
  nodes?: IDepartment[];
}

interface IMember {
  avatar: string;
  empno: string;
  job: string;
  name: string;
  userid: string;
}
