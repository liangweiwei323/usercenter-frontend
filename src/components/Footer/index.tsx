import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'huawei出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'bili_id',
          title: 'backend',
          href: 'https://github.com/liangweiwei323/usercenter',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> lianghuawei github</>,
          href: 'https://github.com/liangweiwei323',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
