interface IDepartment {
  depid: string;
  haveMember: boolean;
  level: number;
  memberNum: number;
  memList: IMember[];
  name: string;
  nodes: IDepartment[];
  seqno: number;
  status: string;
}

interface IMember {
  avatar: string;
  chain: string;
  depid: string;
  empname: string;
  empno: string;
  gender: string;
  jobname: string;
  userid: string;
}
