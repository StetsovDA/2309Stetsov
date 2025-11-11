interface StudentInterface {
  uuid: number;
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  isDeleted?: boolean;
  isNew?: boolean;
  contacts?: string;
  groupId: number;
  group?: GroupInterface;
};

export default StudentInterface;
