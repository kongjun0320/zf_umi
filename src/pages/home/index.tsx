import { Link } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';

export default function Page() {
  return (
    <PageContainer>
      <h1 className="text-lg text-red-600">Home index</h1>
      <Link to="/profile">个人中心</Link>
    </PageContainer>
  );
}
