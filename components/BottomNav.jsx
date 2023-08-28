"use client";

import React, { useState } from 'react';
import { Tabs, Modal, Button } from 'antd';
import { IconHome, IconPackage, IconFile, IconSettings } from '@tabler/icons-react';
import '@styles/BottomNav.css'; // Стили

const { TabPane } = Tabs;

const BottomNav = () => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const openSettingsModal = () => {
    setShowSettingsModal(true);
  };

  const closeSettingsModal = () => {
    setShowSettingsModal(false);
  };

  return (
    <div className="bottom-navigation">
      <Tabs
        defaultActiveKey="home"
        tabBarStyle={{ height: 75 }}
        centered
        size="large"
      >
        <TabPane tab={<IconHome size={30} />} key="home" > 
        </TabPane>
        <TabPane tab={<IconPackage size={30} />} key="components">
        </TabPane>
        <TabPane tab={<IconFile size={30} />} key="pages"> 
        </TabPane>
        <TabPane tab={<IconSettings size={30} />} key="settings" >
        </TabPane>
      </Tabs>

    </div>
  );
};

export default BottomNav;

