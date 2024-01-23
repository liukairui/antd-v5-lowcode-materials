interface IDepartment {
  depid: string;
  haveMember: boolean;
  level: number;
  memberNum: number;
  memList: IEmployee[];
  name: string;
  nodes: IDepartment[];
  seqno: number;
  status: string;
}

interface IEmployee {
  avatar: string;
  chain: string;
  depid: string;
  empname: string;
  empno: string;
  gender: string;
  jobname: string;
  userid: string;
}
