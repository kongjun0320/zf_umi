import { getUser } from '@/services/user';
import { useRequest } from 'ahooks';

export default () => {
  const { data, loading, refresh } = useRequest(getUser);

  return {
    data,
    loading,
    refresh,
    mockList: [
      {
        id: 1,
        username: 'root',
      },
      {
        id: 2,
        username: 'admin',
      },
      {
        id: 3,
        username: 'member',
      },
    ],
  };
};
