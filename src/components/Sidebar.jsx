import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
    const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  
    const handleCloseSideBar = () => {
      if (activeMenu !== undefined && screenSize <= 900) {
        setActiveMenu(false);
      }
    };
  
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  
    return (
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeMenu && (
          <>
            <div className="flex justify-between items-center">
              <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl 
              font-extrabold tracking-tight dark:text-white text-slate-900">
                <SiShopware /> <span>Ecomm-Dash</span>
              </Link>
              <TooltipComponent content="Menu" position="BottomCenter">
                <button
                  type="button"
                  onClick={() => setActiveMenu(!activeMenu)}
                  style={{ color: currentColor }}
                  className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className="mt-10 ">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : '',
                      })}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <span className="capitalize ">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

export default Sidebar

/**
 * Sidebar component represents the sidebar navigation in the React Dashboard project.
 * It provides links to various pages and allows users to navigate through the application.
 * 
 * In the code, a loop is used to iterate through the links array and render the corresponding elements.
 * 
 * The handleCloseSidebar functionality has been implemented in the project. It allows the sidebar menu 
 * to remain open when an item is selected, but only on screen resolutions larger than 900px.
 * 
 * The handleCloseSidebar function is responsible for handling the closing of the sidebar. It checks if 
 * activeMenu is defined and if the screenSize is less than or equal to 900. If both conditions are met, it 
 * sets the activeMenu state to false, effectively closing the sidebar.
 * 
 */