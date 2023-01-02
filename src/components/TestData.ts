export const data = [
  {
    general: [
      {
        id: 1234,
        title: "abcd",
        description: "abcd",
        url: "abcd",
      },
      {
        id: 1234,
        title: "abcd",
        description: "abcd",
        url: "abcd",
      },
    ],

    technology: [
      {
        id: 1234,
        title: "abcd",
        description: "abcd",
        url: "abcd",
      },
      {
        id: 1234,
        title: "abcd",
        description: "abcd",
        url: "abcd",
      },
    ],
    health: [
      {
        id: 1234,
        title: "abcd",
        description: "abcd",
        url: "abcd",
      },
      {
        id: 1234,
        title: "abcd",
        description: "abcd",
        url: "abcd",
      },
    ],
    others: [
      {
        id: 1234,
        title: "abcd",
        description: "abcd",
        url: "abcd",
      },
      {
        id: 1234,
        title: "abcd",
        description: "abcd",
        url: "abcd",
      },
    ],
  },
];

const actualData = [
  {
    id: "fab07e69-84e7-49a1-870c-ce27e55d838a",
    title: "sd",
    category: "General",
    description: "sa",
    url: "as",
  },
  {
    id: "1e088391-e218-47f3-820c-f0c53fba8049",
    title: "sasa",
    category: "Technology",
    description: "aSSA",
    url: "AsS",
  },
];

const cData = actualData.filter((item)=>{
  return item.category === "General"
})
// const t = [
//   {
//     categoryN: "General",
//     icon: "general icon",
//     actualData: [
//       {
//         id: uuidv4(),
//         title: "Default 01",
//         description: "Default Description",
//         url: "Default Url",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     categoryN: "Random",
//     icon: "general icon",
//     actualData: [
//       {
//         id: uuidv4(),
//         title: "Default 01",
//         description: "Default Description",
//         url: "Default Url",
//         isCompleted: false,
//       },
//     ],
//   },

// ]

// on click on a button a form with fields title category description and url is popullated. i want to set the data in such a way , whatever the category is choosen from this form. i want to add those data in that particular category only


// on a click of edit data button a auto populated form is opening in which i am getting these values
//  {
//    category : " General",
//    title : "Default 01",
//    description: "Default Description"
//    url : "Default Url"
//   }

//  i have a state 

//  const [state , setState] = useState([
//   {
//     categoryN: "General",
//     icon: "general icon",
//     actualData: [
//       {
//         id: uuidv4(),
//         title: "Default 01",
//         description: "Default Description",
//         url: "Default Url",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     categoryN: "Random",
//     icon: "general icon",
//     actualData: [
//       {
//         id: uuidv4(),
//         title: "Default 02",
//         description: "Default Description 02",
//         url: "Default Url 02",
//         isCompleted: false,
//       },
//     ],
//   },
// ])

// in a form if i changed the category to Random , the output state should look like 


//  const [state , setState] = useState([
//   {
//     categoryN: "General",
//     icon: "general icon",
//     actualData: [
      
//     ],
//   },
//   {
//     categoryN: "Random",
//     icon: "general icon",
//     actualData: [
//       {
//         id: uuidv4(),
//         title: "Default 02",
//         description: "Default Description 02",
//         url: "Default Url 02",
//         isCompleted: false,
//       },
//        {
//           id: uuidv4(),
//           title: "Default 01",
//           description: "Default Description",
//           url: "Default Url",
//           isCompleted: false,
//         },
//     ],
//   },
// ])

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// }




// const [cat, setCat] = useState([
//   {
//     General: [
//       {
//         title: "",
//         description: "",
//         url: "",
//       },
//     ],
//   },
//   {
//     Technology: [
//       {
//         title: "",
//         description: "",
//         url: "",
//       },
//     ],
//   },
//   {
//     Health: [
//       {
//         title: "",
//         description: "",
//         url: "",
//       },
//     ],
//   },
//   {
//     Others: [
//       {
//         title: "",
//         description: "",
//         url: "",
//       },
//     ],
//   },
// ]);


// / const [data, setData] = useState([
  //   {
  //     categoryN: "General",
  //     icon: "general icon",
  //     actualData: [
  //       {
  //         id: uuidv4(),
  //         title: "General 01",
  //         description: "Default Description",
  //         url: "Default Url",
  //         isCompleted: false,
  //       },
  //     ],
  //   },
  //   {
  //     categoryN: "Random",
  //     icon: "general icon",
  //     actualData: [
  //       {
  //         id: uuidv4(),
  //         title: "Random 01",
  //         description: "Default Description",
  //         url: "Default Url",
  //         isCompleted: false,
  //       },
  //     ],
  //   },
  // ]);
  
  // // Assume the above state assume each object in the array as a data of individual task.
  // // There is a category key in each objects so are the actual data array in each object.
  // // on click of the edit button a form is pop up with the pre popullated data, if clicked of a card belong to the respective categoty .
  // // suppose the edit button is clicked on general category card. and in the form if i change the category from general to random.
  // // i want my state to look like below
  
  // const [data, setData] = useState([
  //   {
  //     categoryN: "General",
  //     icon: "general icon",
  //     actualData: [
  //       {
  //         id: uuidv4(),
  //         title: "General 01",
  //         description: "Default Description",
  //         url: "Default Url",
  //         isCompleted: false,
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Random 01",
  //         description: "Default Description",
  //         url: "Default Url",
  //         isCompleted: false,
  //       },
  //     ],
  //   },
  //   {
  //     categoryN: "Random",
  //     icon: "general icon",
  //     actualData: [],
  //   },
  // ]);
  