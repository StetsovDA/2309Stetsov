interface StudentInterface {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  isDeleted?: boolean;
  isNew?: boolean;
  contacts?: string;
  groupId: number;
};

export default StudentInterface;
