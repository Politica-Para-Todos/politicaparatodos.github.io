import { Menu } from 'antd';
import Link from 'next/link';

const MenuItems = () => {
  return (
    <Menu
      mode='horizontal'
      items={[
        {
          key: '1',
          label: (<Link href={'/legislativas'}>Legislativas</Link>)
        },
        {
          key: '2',
          label: (<Link href={'/autarquicas'}>Autarquicas</Link>)
        },
        {
          key: '3',
          label: (<Link href={'/presidenciais'}>Presidenciais</Link>)
        }
      ]}
    >
    </Menu>
  )
}

export default MenuItems;
