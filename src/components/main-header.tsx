import React,{FC} from 'react';
import './main-header.css';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button,Input, Space } from 'antd';
import { RobotFilled,CaretDownOutlined,AppstoreOutlined,MessageOutlined,SyncOutlined,PicCenterOutlined,DollarCircleOutlined,PercentageOutlined,TagOutlined,MailOutlined,PlusOutlined,CheckOutlined ,UserOutlined,HomeOutlined,ShoppingOutlined,ShoppingCartOutlined,FileTextOutlined,SettingOutlined,QuestionCircleOutlined,CloseOutlined,DesktopOutlined,PlusCircleFilled,BellOutlined,HistoryOutlined,SearchOutlined,DownOutlined,TeamOutlined } from '@ant-design/icons'

    interface header {

    }

    const prefix = (
      <div>
<SearchOutlined
        style={{
          fontSize: 16,
          color: 'grey',
        }}
      />
      <CaretDownOutlined
      style={{
        fontSize: 16,
        color: 'grey',
      }}
      />
      </div>
      
    );

    const prefix2 = (
<SearchOutlined
        style={{
          fontSize: 16,
          color: 'grey',
        }}
      />
      
    );
    

    const bell = (
      <Menu className="bell">
        <Menu.Item style={{backgroundColor:"rgb(237 237 255)"}}>
          <ul className="notification">
            <li>Notifications</li>
            <li style={{color:"blue"}}>Annoucements</li>
            <li style={{color:"blue"}}><DesktopOutlined /></li>
            <li ><CloseOutlined /></li>
          </ul>

        </Menu.Item>
        
        <Menu.Item >
          <ul className="robot">
            <li style={{color:"rgb(255, 234, 49)",fontSize:18}}><RobotFilled /></li>
            <li style={{color:"rgb(255, 234, 49)",fontWeight:"bold",fontSize:12}}>New..</li>
            <li style={{fontSize:12}}>There are no notifications ath the moment</li>
          </ul>

        </Menu.Item>
        
      </Menu>
    );
    
    const close = (
      <Menu className="close" >
        <Menu.Item >
          <ul className="close-data">
            <li>
              <div className="close-data-list">
                <p style={{fontWeight:"bold",color:"grey"}}><AppstoreOutlined /> SALES</p>
                <p style={{fontSize:14}} ><PlusOutlined /> Customer</p>
                <p style={{fontSize:14}}><PlusOutlined /> Delivery Challan</p>
               <p style={{fontSize:14}}>  <PlusOutlined /> Invoices </p>
               <p style={{fontSize:14}}>  <PlusOutlined /> Sales Order </p>
               <p style={{fontSize:14}}>  <PlusOutlined /> Packages </p>
               <p style={{fontSize:14}}>  <PlusOutlined /> Customer Payment </p>
               <p style={{fontSize:14}}>  <PlusOutlined /> Credit Notes </p>
              </div>
            </li>
            <li>
              <div className="close-data-list">
                <p style={{fontWeight:"bold",color:"grey"}}><ShoppingCartOutlined /> PURCHASE</p>
                <p style={{fontSize:14}} ><PlusOutlined /> Vendor</p>
                <p style={{fontSize:14}}><PlusOutlined /> Bills</p>
                <p style={{fontSize:14}}><PlusOutlined /> Purchase Order</p>
                <p style={{fontSize:14}}><PlusOutlined /> Vendor Payment</p>
                <p style={{fontSize:14}}><PlusOutlined /> Vendor Credit</p>
               <p style={{fontSize:14}}>

                <PlusOutlined /> Inventory Adjustments
               </p>
              </div>
            </li>
            <li>
              <div className="close-data-list">
                <p style={{fontWeight:"bold",color:"grey"}}><ShoppingOutlined /> GENERAL</p>
                <p style={{fontSize:14}} ><PlusOutlined /> Add Users</p>
                <p style={{fontSize:14}}><PlusOutlined /> Item</p>
               <p style={{fontSize:14}}>

                <PlusOutlined /> Inventory Adjustments
               </p>
              </div>
            </li>
          </ul>
          
      
        </Menu.Item>
      </Menu>
    );
    
    const profile = (
      <Menu className="profile-container">
        <Menu.Item style={{backgroundColor:"rgb(237 237 255)"}}>
         <div className="profile-pic">
         <h3 className="name-profile">m</h3>
         <p className="profile-name-header">MALLU</p>
         <p className="profile-name-user">User Id: 60008459757</p>
         <p className="profile-name-email">malludev10@gmail.com</p>
         <a  > <span className="myaccount"> <a href="#myaccount"> My Account </a></span><span > <a className="signout" href="#signout"> Sign Out </a></span></a>
         </div>
        </Menu.Item>
        
        <Menu.Item >
        <ul className="organization">
          <li style={{color:"gray",textTransform:"uppercase"}}>My Organization</li>
          <li className="manage"> <a href="#setting"> <SettingOutlined className="setting-icon" /> Manage</a></li>
          
        </ul>
        </Menu.Item>
        <ul className="organization-pic">
          <li>
          <div >
         <p className="profile-name-header">MALLU</p>
         <p className="organization-name-user">Organization Id: 60008459757</p>
         <p className="organization-name-purpose">Trail</p>
         </div>
      
          </li>
          <li>
          <CheckOutlined  className="checked" />
          </li>
        </ul>
      </Menu>
    );
    
    const history = (
      <Menu className="history">
        <Menu.Item>
          <p className="history-name"><UserOutlined className="history-icon" />samsamson</p>
          <p className="history-title">Contacts</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="history-name"><FileTextOutlined  className="history-icon" />INV-000002</p>
          <p className="history-title">Invoice</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="history-name"><ShoppingOutlined className="history-icon" />ssssss</p>
          <p className="history-title">Item</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="history-name"><ShoppingCartOutlined  className="history-icon" />SO-0004</p>
          <p className="history-title">Sales Order</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="history-name"><UserOutlined className="history-icon" />dddddd</p>
          <p className="history-title">Contact</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="history-name"><UserOutlined className="history-icon" />PO-00001</p>
          <p className="history-title">Purchase Order</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="history-name"><ShoppingCartOutlined className="history-icon" />SO-00003</p>
          <p className="history-title">Sales Order</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="history-name"><ShoppingCartOutlined className="history-icon" />SO-00002</p>
          <p className="history-title">Sales Order</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="history-name"><ShoppingCartOutlined className="history-icon" />SO-00001</p>
          <p className="history-title">Sales Order</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="history-name"><ShoppingCartOutlined className="history-icon" />INV-000001</p>
          <p className="history-title">Invoice</p>
        </Menu.Item>
     
      </Menu>
    );
    
    
    const setting = (
      <Menu className="setting">
                <Menu.Item style={{backgroundColor:"rgb(237 237 255)"}}>
          <ul className="setting-notification">
            <li style={{fontWeight:"bold"}}>Setting</li>
            <li className="setting-cross" ><CloseOutlined /></li>
          </ul>
          <Space className="setting-search"  direction="vertical">
    <Input  className="setting-search"
      placeholder="Search in customers"
      prefix={prefix2}
    />
  </Space>

        </Menu.Item>

        <Menu.Item>
          <p className="setting-name"><HomeOutlined  className="setting-icon" />Organization Profile</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="setting-name"><TeamOutlined   className="history-icon" />User and Roles</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="setting-name"><HomeOutlined  className="history-icon" />Wharehouse</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="setting-name"><ShoppingCartOutlined  className="history-icon" />Branches</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="setting-name"><PicCenterOutlined  className="history-icon" />prefrences</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="setting-name"><DollarCircleOutlined   className="history-icon" />Currencies</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="setting-name"><ShoppingCartOutlined className="history-icon" />Taxes</p>
        </Menu.Item>
     
        <Menu.Item>
          <p className="setting-name"><ShoppingCartOutlined className="history-icon" />Reporting Tags</p>
        </Menu.Item>
     
        <Menu.Item>
        <p className="setting-name"><TagOutlined  className="history-icon" />Templates</p>

        </Menu.Item>
     
        <Menu.Item>
          <p className="setting-name"><MailOutlined  className="history-icon" />Emails</p>
        </Menu.Item>
        <Menu.Item>
          <p className="setting-name"><MessageOutlined  className="history-icon" />Sms Notification</p>
        </Menu.Item>
     
        <Menu.Item>
        <p className="setting-name"><SyncOutlined  className="history-icon" />Automation</p>

        </Menu.Item>
     
        <Menu.Item>
          <p className="setting-name"><PercentageOutlined  className="history-icon" />Developer Space</p>
        </Menu.Item>
     
      </Menu>
    );
    
export const MainHeader:FC<header>=(props) => {
  return (
    <div className="Main-header">
    <div className="left-header">
      <ul className="left-list">
      <li>
      <Dropdown overlay={close} trigger={['click']} placement="bottomCenter" arrow>
      <PlusCircleFilled style={{fontSize:18}}  />

    </Dropdown>
    
</li>
      <li>
      <Dropdown overlay={history} trigger={['click']} placement="bottomCenter" arrow>
      <HistoryOutlined rotate={180} style={{fontSize:18}} />
      
    </Dropdown>
      </li>
<li  >
<Space className="search-container"  direction="vertical">
    <Input className="search"
      placeholder="Search in customers"
      prefix={prefix}
    />
  </Space>
</li>

      </ul >
    </div>
    <div className="right-header">
      <ul className="right-list">
        <li className="trail">Trial expires in 9 days <span style={{color:"blue",cursor:"pointer"}}>upgrade</span></li>
        <li style={{fontWeight:"bold"}}>MALLU <DownOutlined style={{fontSize:12}} /></li>
      <li>
      <TeamOutlined style={{fontSize:18}} />
  
      </li>
      <li>
      <Dropdown overlay={bell} trigger={['click']} placement="bottomCenter" arrow>
      <BellOutlined style={{fontSize:18}}  />
    </Dropdown>
      </li>
    <li>
      <Dropdown overlay={setting} trigger={['click']} placement="bottomCenter" arrow>
      <SettingOutlined  style={{fontSize:18}}  />
    </Dropdown>
      </li>
      <li>

      <QuestionCircleOutlined style={{fontSize:18}}  />
      </li>
      <li  >
      <Dropdown trigger={['click']}  overlay={profile} placement="bottomCenter" arrow>
    <h3 className="profile">m</h3>
    </Dropdown>
      </li>
      </ul>
    </div>
    </div>
  );
}

