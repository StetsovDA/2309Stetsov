import type StudentInterface from './StudentInterface';
interface GroupInterface {
  students: StudentInterface[];
  id: number;
  name: string;
  contacts: string;
};

export default GroupInterface;
