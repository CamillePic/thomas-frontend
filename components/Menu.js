// // // import styles from "../styles/Menu.module.css";
// // // import * as React from "react";
// // // import { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { Menu } from 'antd';
// // // import { transparent } from "material-ui/styles/colors";
// // // import { BranchLamp } from '../components/BranchLamp'

// // // function MainMenu() {

// // //   // The getItem function is undefined, so it needs to be defined or removed
// // //   function getItem(label, key, icon, children, type, link) {
// // //     return {
// // //       label, key, icon, children, type, link
// // //     };
// // //   }

// // //   const rootSubmenuKeys = ['sub1', 'sub2'];

// // //   const [openKeys, setOpenKeys] = useState(['sub1']);

// // //   const onOpenChange = (keys) => {

// // //     const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
// // //     if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
// // //       setOpenKeys(keys);
// // //     } else {
// // //       setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
// // //     }
// // //   };

// // //   const items = [
// // //     getItem('Objects', 'sub1', null, [
// // //       getItem('Branch Lamp', '1', null, null, null, '/BranchLamp'),
// // //       getItem('Leaf Lamp', '2', null, null, null, '/'),
// // //       getItem('Cat Stuff', '3', null, null, null, '/'),
// // //     ]),
// // //     getItem('Spaces', 'sub2', null, [
// // //       getItem('Cycle of Metamorphoses', '5', null, null, null, '/'),
// // //       getItem('Rhizome', '6', null, null, null, '/'),
// // //       getItem('Ollainville House', '7', null, null, null, '/OllainvilleHouse'),
// // //       getItem('Mont Dauphin', '8', null, null, null, '/MontDauphin'),
// // //     ]),
// // //   ];

// // //   const [italicIndex, setItalicIndex] = useState(null); // added state variable to store index of clicked child
// // //   const [showBranchLamp, setShowBranchLamp] = useState(false);

// // //   function handleClick(index) {
// // //     console.info("You clicked a breadcrumb.");
// // //     setItalicIndex(index === italicIndex ? null : index); 
// // //     // return <BranchLamp />
// // //     setShowBranchLamp(true)
// // //   }

// // //   return (
// // //     <div>
// // //       <main className={styles.main}>
// // //         <div className={styles.container}>
// // //           <h1>Thomas Takada</h1>
// // //           <div role="presentation">
// // //             <Menu
// // //               mode="inline"
// // //               openKeys={openKeys}
// // //               onOpenChange={onOpenChange} 
// // //               className={styles.menu}
// // //               style={{
// // //                 width: 256,
// // //                 backgroundColor: transparent,
// // //                 fontFamily: 'EB Garamond',
// // //                 fontSize: 18,
// // //                 color: 'black',
// // //                 borderRadius: 0,
// // //                 textDecorationColor: 'none !important',   
// // //               }}
// // //               theme={{
// // //                 colorPrimary: 'black',
// // //               }}
// // //               items={items.map((item) => {
// // //                 return {
// // //                   ...item,
// // //                   children: item.children.map((child, i) => {
// // //                     return {
// // //                       ...child,
// // //                       style: { color: 'black', borderRadius: 0, backgroundColor: transparent, fontStyle: i === italicIndex ? 'italic' : 'normal' },
// // //                       onClick: () => handleClick(i),
// // //                        {showBranchLamp && <BranchLamp />}
// // //                     };
// // //                   }),
// // //                 };
// // //               })}
// // //             />
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
  
// // // }

// // // export default MainMenu;


// // import styles from "../styles/Menu.module.css";
// // import * as React from "react";
// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { Menu } from 'antd';
// // import { transparent } from "material-ui/styles/colors";
// // import BranchLamp from "./BranchLamp";

// // function MainMenu() {

// //   // The getItem function is undefined, so it needs to be defined or removed
// //   function getItem(label, key, icon, children, type, link) {
// //     return {
// //       label, key, icon, children, type, link
// //     };
// //   }

// //   const rootSubmenuKeys = ['sub1', 'sub2'];

// //   const [openKeys, setOpenKeys] = useState(['sub1']);

// //   const onOpenChange = (keys) => {

// //     const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
// //     if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
// //       setOpenKeys(keys);
// //     } else {
// //       setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
// //     }
// //   };

// //   // const items = [
// //   //   getItem('Objects', 'sub1', null, [
// //   //     getItem('Branch Lamp', '1', null, null, null, '/BranchLamp'),
// //   //     getItem('Leaf Lamp', '2', null, null, null, '/LeafLamp'),
// //   //     getItem('Cat Stuff', '3', null, null, null, '/CatStuff'),
// //   //   ]),
// //   //   getItem('Spaces', 'sub2', null, [
// //   //     getItem('Cycle of Metamorphoses', '5', null, null, null, '/'),
// //   //     getItem('Rhizome', '6', null, null, null, '/'),
// //   //     getItem('Ollainville House', '7', null, null, null, '/OllainvilleHouse'),
// //   //     getItem('Mont Dauphin', '8', null, null, null, '/MontDauphin'),
// //   //   ]),
// //   // ];

// // //   const [italicIndex, setItalicIndex] = useState(null); // added state variable to store index of clicked child
// // //   const [showBranchLamp, setShowBranchLamp] = useState(null);

// // //   function handleClick(data, e) {
// // //     // console.log('====================================');
// // //     // console.log(items[data].children[0].link);
// // //     // console.log('====================================');
// // //       let itemsLink = items[data].children;
// // //       let dynamicLink = itemsLink.map((data, i) => {
// // //         // return (data.link)
// // // console.log('====================================');
// // // console.log(data.link);
// // // console.log('====================================');
// // // console.log('====================================');
// // // console.log(dynamicLink[i]);
// // // console.log('====================================');
// // //       })
// // //       // setItalicIndex(e === italicIndex ? null : e);
// // //       // (e)=>{navigate(`/${dynamicLink}`)}

// // //   }
// // const [current, setCurrent] = useState('mail');
// //   const onClick = (e) => {
// //     console.log('click ', e);
// //     setCurrent(e.key);
// //   return (
// //     <div>
// //       <main className={styles.main}>
// //         <div className={styles.container}>
// //           <h1>Thomas Takada</h1>
// //           <div role="presentation">
// //             <Menu
// //               mode="inline"
// //               openKeys={openKeys}
// //               onOpenChange={onOpenChange}
// //               className={styles.menu}
// //               style={{
// //                 width: 256,
// //                 backgroundColor: transparent,
// //                 fontFamily: 'EB Garamond',
// //                 fontSize: 18,
// //                 color: 'black',
// //                 borderRadius: 0,
// //                 textDecorationColor: 'none !important',
// //               }}
// //               theme={{
// //                 colorPrimary: 'black',
// //               }}
// //               items={items.map((item) => {
// //                 return {
// //                   ...item,
// //                   children: item.children.map((child, i) => {
// //                     return {
// //                       ...child,
// //                       style: { color: 'black', borderRadius: 0, backgroundColor: transparent, fontStyle: i === italicIndex ? 'italic' : 'normal' },
// //                       onClick: () => handleClick(i),
// //                     };
// //                   }),
// //                 };
// //               })}
// //             />
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );

// // }

// // export default MainMenu;

// // import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';
// import { useState } from 'react';
// import BranchLamp from './BranchLamp';
// import LeafLamp from './products/LeafLamp';

// const items = [
//   {
//     label: 'Objects',
//     children: [
//       {
//         label: 'Branch Lamp',
//         key: 'branch-lamp'
//       },
//       {
//         label: 'Leaf Lamp',
//         key: 'leaf-lamp',
//       },
//       {
//         label: 'Cat Stuff',
//         key: 'cat-stuff',
//       },
//     ],
//   },

//   {
//     label: 'Spaces',
//     children: [
//       {
//         label: 'Cycle',
//         key: 'cycle',
//       },
//       {
//         label: 'Mont Dauphin',
//         key: 'mont-dauphin',
//       },
//       {
//         label: 'Rhizome',
//         key: 'rhizome',
//       },
//       {
//         label: 'Ollainville House',
//         key: 'ollainville-house',
//       },

//     ],
//   },
// ];

// const MainMenu = () => {
//   const [selectedKey, setSelectedKey] = useState(null);

//   const handleClick = (e) => {
//     console.log('click ', e);
//     setSelectedKey(e.key);
//   };

//   let content;
//   switch (selectedKey) {
//     case 'branch-lamp':
//       content = <BranchLamp />;
//       break;
//     case 'leaf-lamp':
//       content = <LeafLamp />;
//       break;
//     // add more cases for other keys here
//     default:
//       content = null;
//   }

//   return (
//     <>
//       <Menu onClick={handleClick} selectedKeys={[selectedKey]} mode="horizontal">
//         {items.map((menu) => (
//           <Menu.SubMenu key={menu.label} title={menu.label}>
//             {menu.children.map((item) => (
//               <Menu.Item key={item.key}>{item.label}</Menu.Item>
//             ))}
//           </Menu.SubMenu>
//         ))}
//       </Menu>
//       {content}
//     </>
//   );
// };

// export default MainMenu;
import React, { useState } from 'react';
import BranchLamp from './BranchLamp';

const MainMenu = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [objectsClicked, setObjectsClicked] = useState(false);
  const [spacesClicked, setSpacesClicked] = useState(false);
  const [selectedSubItemObjects, setSelectedSubItemObjects] = useState(null);
  const [selectedSubItemSpaces, setSelectedSubItemSpaces] = useState(null);

  // const handleItemClick = (type, item) => {
  //   if (selectedType !== type) {
  //     setSelectedType(type);
  //     setSelectedItem(item);
  //     setSelectedSubItemObjects(null);
  //     setSelectedSubItemSpaces(null);
  //     if (type === 'objects') {
  //       setObjectsClicked(true);
  //       setSpacesClicked(false);
  //     } else if (type === 'spaces') {
  //       setSpacesClicked(true);
  //       setObjectsClicked(false);
  //     }
  //   } else {
  //     setSelectedItem(selectedItem === item ? null : item);
  //   }
  // };

  const handleItemClick = (type, item) => {
    if (selectedType !== type) {
      setSelectedType(type);
      setSelectedItem(item);
      setSelectedSubItemObjects(null);
      setSelectedSubItemSpaces(null);
      setObjectsClicked(type === 'objects');
      setSpacesClicked(type === 'spaces');
    } else {
      setSelectedItem(selectedItem === item ? null : item);
    }
  };

  const handleSubItemClick = (type, subItem) => {
    if (type === 'objects') {
      setSelectedSubItemObjects(subItem);
    } else if (type === 'spaces') {
      setSelectedSubItemSpaces(subItem);
    }
  };

  const objects = [    { name: 'Leaf Lamp', component: <BranchLamp /> },    { name: 'Branch Lamp', component: <BranchLamp /> },    { name: 'Cat Stuff', component: <BranchLamp /> },  ];

  const spaces = [    { name: 'Cycle', component: <BranchLamp /> },    { name: 'Space 2', component: <BranchLamp /> },    { name: 'Space 3', component: <BranchLamp /> },  ];

  return (
    <div>
      <h2>Menu</h2>
      <div>
        <h3 style={{ fontStyle: selectedType === 'objects' ? 'italic' : 'normal' }} onClick={() => handleItemClick('objects', null)}>
          Objects
        </h3>
        {objectsClicked &&
  objects.map((item, index) => (
    <div
      key={index}
      style={{ fontStyle: selectedItem === item ? 'italic' : 'normal' }}
      onClick={() => handleItemClick('objects', item)}
    >
      {item.name}
      {selectedItem === item && (
        <div>
          {item.subItems &&
            item.subItems.map((subItem, subIndex) => (
              <div
                key={subIndex}
                style={{ fontStyle: selectedSubItemObjects === subItem ? 'italic' : 'normal' }}
                onClick={() => handleSubItemClick('objects', subItem)}
              >
                {subItem.name}
              </div>
            ))}
        </div>
      )}
    </div>
  ))}
      </div>
      <div>
        <h3 style={{ fontStyle: selectedType === 'spaces' ? 'italic' : 'normal' }} onClick={() => handleItemClick('spaces', null)}>
          Spaces
        </h3>
        {spacesClicked &&
          spaces.map((item, index) => (
            <div
              key={index}
              style={{ fontStyle: selectedItem === item ? 'italic' : 'normal' }}
              onClick={() => handleItemClick('spaces', item)}
            >
              {item.name}

            {selectedType === 'spaces' && selectedItem === item && (
              <div>
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} style={{ fontStyle: selectedSubItemSpaces === subItem ? 'italic' : 'normal' }} onClick={() => handleSubItemClick('spaces', subItem)}>
                    {subItem.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedItem && selectedItem.component}
    </div>
  );}  

export default MainMenu;
