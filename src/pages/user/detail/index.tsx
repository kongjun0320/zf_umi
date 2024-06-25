import { Descriptions } from 'antd';
import { useLocation } from '@umijs/max';

export default function Page() {
  const location = useLocation();
  const user = location.state as API.User;
  return (
    <Descriptions>
      <Descriptions.Item label="用户 ID">{user.id}</Descriptions.Item>
      <Descriptions.Item label="用户名称">{user.username}</Descriptions.Item>
      <Descriptions.Item label="用户手机号码">{user.phone}</Descriptions.Item>
    </Descriptions>
  );
}
