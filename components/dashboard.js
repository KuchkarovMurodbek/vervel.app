import {  TeamOutlined,} from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {RiDashboardLine,RiSettingsFill,RiTeamFill,RiPhoneLine,RiFolderLine,RiSettings2Line} from 'react-icons/ri'
import {BsBag} from 'react-icons/bs'
const {  Content,  Sider } = Layout;
import Nav from './Nav'
import ContentComp from '../components/Content.jsx'
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Dashboard', '1', <RiDashboardLine />),
  getItem('Teams', '2', <RiTeamFill />),

  getItem('Employees', '3', <TeamOutlined />),
  getItem('Projects', '4', <BsBag />),
  getItem('Meetings','5',<RiPhoneLine/>),
  getItem('Tasks','6',<RiFolderLine/>), 
  getItem('Settings','7',<RiSettings2Line/>)
];


const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{  background:'rgba(249, 249, 249, 1)'}}>
         {collapsed ?<div  style={{color:'rgba(105, 86, 229, 1)',height:'80px',fontSize:'22px'}} className='flex items-center justify-center'><RiSettingsFill/> </div>:
         <div  style={{color:'rgba(105, 86, 229, 1)',height:'80px',fontSize:'22px'}} className='flex items-center justify-start pl-6'><span className='mx-1'><RiSettingsFill/></span> Teamify</div>}
        <Menu style={{color:'#878787',background:'rgba(249, 249, 249, 1)'}} defaultSelectedKeys={['1']} mode="inline" items={items} />
         
      </Sider>
      <Layout className="site-layout">
        <Nav/>
      
        <Content
          style={{
          
            background:'#fff'
          }}
        >
          
          <div
            className="site-layout-background"
            style={{
              padding: 20,
              minHeight: '100%',
            
            }}
          >
           <ContentComp/>
          </div>
        </Content>
       
      </Layout>
    </Layout>
  );
};

export default App;