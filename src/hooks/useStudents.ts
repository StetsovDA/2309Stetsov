import { useQuery } from '@tanstack/react-query';
import { getStudents } from '@/api/studentsApi';
import type StudentInterface from '@/types/StudentsInterface';

interface StudentsHookInterface {
  students: StudentInterface[];
}

const useStudents = (): StudentsHookInterface => {
  // const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['students'],
    queryFn: () => getStudents(),
    enabled: false,
  });

  return {
    students: data ?? [],
  };
};

export default useStudents;