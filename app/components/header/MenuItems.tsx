import { Menu } from 'antd';
import Link from 'next/link';

const MenuItems = () => {
  const legislativesRoute = '/legislativas';
  return (
    <Menu
      mode='horizontal'
      items={[
        {
          key: '0',
          label: (<Link href={legislativesRoute}>Home</Link>)
        },
        {
          key: '1',
          label: (<Link href={legislativesRoute}>Legislativas</Link>),
          children: [
            {
              key: '1-1',
              label: (<Link href={`${legislativesRoute}/debates`}>Debates</Link>)
            }
          ]
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
