'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/PostStudentInterface';
import styles from './Students.module.scss';
import Student from './Student/Student';
import PostStudentInterface from '@/types/PostStudentInterface';

const Students = (): React.ReactElement => {
  const { students, deleteStudentMutate } = useStudents();

  const onDeleteHandler = (id: number) => {
    console.log(id);
    deleteStudentMutate(id);
  }

  return (
    <div className={styles.Students}>
      {students.map((student: PostStudentInterface) => (
 <Student
 key={}
student={student}
onDelete={onDeleteHandler}
/>
      ))}
    </div>
  );
};

export default Students;