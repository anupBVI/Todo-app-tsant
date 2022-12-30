export interface IData {
    categoryN: string;
    icon: React.ReactNode;
    actualData: {
      id: string;
      title: string;
      description: string;
      url: string;
      isCompleted: boolean;
    }[];
  }


//   if (!updateBtn) {


// }

// if (updateBtn) {
//     console.log("updating Data");
//     console.log("updating data");

//     const newData = data.map((item) => {
//       if (item.categoryN === catToUpdate) {
//         return {
//           ...item,
//           actualData: item.actualData.map((dataItem) => {
//             if (dataItem.id === taskToUpdate) {
//               return {
//                 ...dataItem,
//                 title: values.title,
//                 description: values.description,
//                 url: values.url,
//                 isCompleted: dataItem.isCompleted,
//               };
//             }
//             return dataItem;
//           }),
//         };
//       }
//       return item;
//     });

//     setData(newData);

//     notifySuccess("Task Updated Successfully");
//     handleCancelCategory();
//   }
