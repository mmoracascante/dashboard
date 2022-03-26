import './Widget.scss';
import { KeyboardArrowUp } from '@mui/icons-material';
import { PersonOutlined } from '@mui/icons-material';
import { AccountBalanceWalletOutlined } from '@mui/icons-material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { MonetizationOnOutlined } from '@mui/icons-material';

interface WidgetsProps {
  type: string;
}

export default function Widgets({ type }: WidgetsProps) {
  let data;
  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlined
            className="icon"
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0 ,0.2)',
            }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all order',
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
              color: 'goldenrod',
            }}
          />
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'EARNING',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{
              color: 'green',
              backgroundColor: 'rgba(0, 128, 0,0.2)',
            }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128, 0, 128 ,0.2)',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data && data.title}</span>
        <span className="counter">
          {data && data.isMoney ? '$' : ''} {amount}
        </span>
        <span className="link">{data && data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff} %
        </div>
        {data && data.icon}
      </div>
    </div>
  );
}
