interface PostStudentInterface{
id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  isDeleted?: boolean;
  students: StudentInterface[];
}

export default PostStudentInterface;