import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import {Navbar,Footer, Sidebar, ThemeSettings} from './components';
import {Ecommerce, Orders, Calender, Pyramid,Employee,Pie,Kanban,ColorMapping,Editor, Bar,Customers,Stacked,Financial, Area, ColorPicker,Line} from './pages';
import "./App.css";

const App = () => {

  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div
            className="fixed right-4 bottom-4"
            style={{ zIndex: "1000" }}
          >
            <TooltipComponent content='Settings' position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white " style={{background: 'blue', borderRadius: '50%'}}>
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar></Sidebar>
            </div>
          ):(
            <div className="w-0 dark:bg-secondary-dark-bg" >
              <Sidebar></Sidebar>
            </div>
          )}
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? ' md:ml-72' : 'flex-2'}`}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar></Navbar>
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce></Ecommerce>}/>
              <Route path="/ECommerce" element={<Ecommerce></Ecommerce>}/>
              {/* Pages */}
              <Route path="/orders" element={<Orders></Orders>}/>
              <Route path="/employee" element={<Employee></Employee>}/>
              <Route path="/customers" element={<Customers></Customers>}/>
              {/* Apps */}
              <Route path="/kanban" element={<Kanban></Kanban>}/>
              <Route path="/editor" element={<Editor></Editor>}/>
              <Route path="/calender" element={<Calender></Calender>}/>
              <Route path="/color-picker" element={<ColorPicker></ColorPicker>}/>
              {/* Charts */}
              <Route path="/line" element={<Line></Line>}/>
              <Route path="/area" element={<Area></Area>}/>
              <Route path="/color-picker" element={<ColorPicker></ColorPicker>}/>
              <Route path="/bar" element={<Bar></Bar>}/>
              <Route path="/pie" element={<Pie></Pie>}/>
              <Route path="/financial" element={<Financial></Financial>}/>
              <Route path="/color-mapping" element={<ColorMapping></ColorMapping>}/>
              <Route path="/pyramid" element={<Pyramid></Pyramid>}/>
              <Route path="/stacked" element={<Stacked></Stacked>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
