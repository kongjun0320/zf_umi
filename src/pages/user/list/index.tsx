import { Link, useModel } from '@umijs/max';
import { List } from 'antd';

export default function Page() {
  const { mockList } = useModel('user.model');
  return (
    <List
      header={<div>用户列表</div>}
      footer={<div>共计 {mockList.length} 条</div>}
      bordered
      dataSource={mockList}
      renderItem={(user: any) => {
        return (
          <List.Item>
            <Link to={`/user/detail/${user.id}`} state={user}>
              {user.username}
            </Link>
          </List.Item>
        );
      }}
    />
  );
}
