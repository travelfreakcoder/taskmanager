// "use client";

// import { useState } from "react";
// import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";
// import Link from "next/link";
// import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community'; 
// import { AgGridReact } from "ag-grid-react";

// // Register all Community features
// ModuleRegistry.registerModules([AllCommunityModule]);

// export default function TaskList({ tasks }: { tasks: any[] }) {
//   const supabase = createClient();
//   const [taskList, setTaskList] = useState(tasks);

//   async function handleDelete(taskId: string) {
//     const { error } = await supabase.from("tasks").delete().eq("id", taskId);
//     if (error) {
//       console.error("Error deleting task:", error.message);
//     } else {
//       setTaskList(taskList.filter((task) => task.id !== taskId));
//     }
//   }

//   const columnDefs: ColDef<any>[] = [
//     { headerName: "ID", field: "id", sortable: true, filter: true },
//     { headerName: "Title", field: "title", sortable: true, filter: true },
//     { headerName: "Description", field: "description", sortable: true, filter: true },
//     { headerName: "Status", field: "status", sortable: true, filter: true },
//     { headerName: "Date", field: "due_date", sortable: true, filter: true },
//     { headerName: "Actions", field: "actions", sortable: true, filter: true },
//   ];

//   return (
//     // <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
//     //   <Table>
//     //     <TableHead sx={{ backgroundColor: "#6200ea" }}>
//     //       <TableRow>
//     //         <TableCell sx={{ color: "white", fontWeight: "bold" }}>Title</TableCell>
//     //         <TableCell sx={{ color: "white", fontWeight: "bold" }}>Description</TableCell>
//     //         <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
//     //         <TableCell sx={{ color: "white", fontWeight: "bold" }}>Due Date</TableCell>
//     //         <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
//     //       </TableRow>
//     //     </TableHead>
//     //     <TableBody>
//     //       {taskList.length > 0 ? (
//     //         taskList.map((task, index) => (
//     //           <TableRow key={task.id} sx={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
//     //             <TableCell>{task.title}</TableCell>
//     //             <TableCell>{task.description}</TableCell>
//     //             <TableCell>
//     //               <Box
//     //                 sx={{
//     //                   display: "inline-block",
//     //                   padding: "4px 10px",
//     //                   borderRadius: "10px",
//     //                   fontSize: "0.875rem",
//     //                   fontWeight: "bold",
//     //                   color: task.status === "Completed" ? "green" : "red",
//     //                   backgroundColor: task.status === "Completed" ? "rgba(0, 255, 0, 0.1)" : "rgba(255, 0, 0, 0.1)",
//     //                 }}
//     //               >
//     //                 {task.status}
//     //               </Box>
//     //             </TableCell>
//     //             <TableCell>{new Date(task.due_date).toLocaleDateString()}</TableCell>
//     //             <TableCell>
//     //               <Link href={`/edit/${task.id}`} passHref>
//     //                 <Button variant="contained" color="primary" sx={{ mr: 1 }}>
//     //                   Edit
//     //                 </Button>
//     //               </Link>
//     //               <Button variant="contained" color="error" onClick={() => handleDelete(task.id)}>
//     //                 Delete
//     //               </Button>
//     //             </TableCell>
//     //           </TableRow>
//     //         ))
//     //       ) : (
//     //         <TableRow>
//     //           <TableCell colSpan={5} align="center" sx={{ fontStyle: "italic", color: "gray" }}>
//     //             No tasks found
//     //           </TableCell>
//     //         </TableRow>
//     //       )}
//     //     </TableBody>
//     //   </Table>
//     // </TableContainer>

    
//     <AgGridReact
//               rowData={taskList}
//               columnDefs={columnDefs}
//               defaultColDef={{ sortable: true, filter: true, resizable: true }}
//             />


//   );
// }


// "use client";

// import { useState } from "react";
// import { Box, Button } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";
// import Link from "next/link";
// import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
// import { AgGridReact } from "ag-grid-react";

// // Register all Community features
// ModuleRegistry.registerModules([AllCommunityModule]);

// export default function TaskList({ tasks }: { tasks: any[] }) {
//   const supabase = createClient();
//   const [taskList, setTaskList] = useState(tasks);

//   async function handleDelete(taskId: string) {
//     const { error } = await supabase.from("tasks").delete().eq("id", taskId);
//     if (error) {
//       console.error("Error deleting task:", error.message);
//     } else {
//       setTaskList(taskList.filter((task) => task.id !== taskId));
//     }
//   }

//   const columnDefs: ColDef<any>[] = [
//     { headerName: "ID", field: "id", sortable: true, filter: true },
//     { headerName: "Title", field: "title", sortable: true, filter: true },
//     { headerName: "Description", field: "description", sortable: true, filter: true },
//     { headerName: "Status", field: "status", sortable: true, filter: true },
//     { 
//       headerName: "Due Date", 
//       field: "due_date", 
//       sortable: true, 
//       filter: true, 
//       valueFormatter: (params) => new Date(params.value).toLocaleDateString()
//     },
//     { 
//       headerName: "Actions", 
//       field: "actions", 
//       cellRenderer: (params: any) => (
//         <Box display="flex" gap={1}>
//           <Link href={`/edit/${params.data.id}`} passHref>
//             <Button variant="contained" color="primary" size="small">
//               Edit
//             </Button>
//           </Link>
//           <Button 
//             variant="contained" 
//             color="error" 
//             size="small" 
//             onClick={() => handleDelete(params.data.id)}
//           >
//             Delete
//           </Button>
//         </Box>
//       ),
//       sortable: false,
//       filter: false,
//     },
//   ];

//   return (
//     <AgGridReact
//       rowData={taskList}
//       columnDefs={columnDefs}
//       defaultColDef={{ sortable: true, filter: true, resizable: true }}
//     />
//   );
// }

// "use client";

// import { useState } from "react";
// import { Box, Button } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";
// import Link from "next/link";
// import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
// import { AgGridReact } from "ag-grid-react";

// // Register all Community features
// ModuleRegistry.registerModules([AllCommunityModule]);

// export default function TaskList({ tasks }: { tasks: any[] }) {
//   const supabase = createClient();
//   const [taskList, setTaskList] = useState(tasks);

//   async function handleDelete(taskId: string) {
//     const { error } = await supabase.from("tasks").delete().eq("id", taskId);
//     if (error) {
//       console.error("Error deleting task:", error.message);
//     } else {
//       setTaskList(taskList.filter((task) => task.id !== taskId));
//     }
//   }

//   const columnDefs: ColDef<any>[] = [
//     { 
//       headerName: "#", 
//       valueGetter: (params) => params.node?.rowIndex + 1, // Serial number (1,2,3,...)
//       width: 80
//     },
//     { headerName: "Title", field: "title", sortable: true, filter: true },
//     { headerName: "Description", field: "description", sortable: true, filter: true },
//     { headerName: "Status", field: "status", sortable: true, filter: true },
//     { 
//       headerName: "Due Date", 
//       field: "due_date", 
//       sortable: true, 
//       filter: true, 
//       valueFormatter: (params) => new Date(params.value).toLocaleDateString()
//     },
//     { 
//       headerName: "Actions", 
//       field: "actions", 
//       cellRenderer: (params: any) => (
//         <Box display="flex" gap={1}>
//           <Link href={`/edit/${params.data.id}`} passHref>
//             <Button variant="contained" color="primary" size="small">
//               Edit
//             </Button>
//           </Link>
//           <Button 
//             variant="contained" 
//             color="error" 
//             size="small" 
//             onClick={() => handleDelete(params.data.id)}
//           >
//             Delete
//           </Button>
//         </Box>
//       ),
//       sortable: false,
//       filter: false,
//     },
//   ];

//   return (
//     <AgGridReact
//       rowData={taskList}
//       columnDefs={columnDefs}
//       defaultColDef={{ sortable: true, filter: true, resizable: true }}
//       rowHeight={50} // 👈 Enlarged row height
//     />
//   );
// }


// "use client";

// import { useState } from "react";
// import { Box, Button } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";
// import Link from "next/link";
// import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

// // Register all Community features
// ModuleRegistry.registerModules([AllCommunityModule]);

// export default function TaskList({ tasks }: { tasks: any[] }) {
//   const supabase = createClient();
//   const [taskList, setTaskList] = useState(tasks);

//   async function handleDelete(taskId: string) {
//     const { error } = await supabase.from("tasks").delete().eq("id", taskId);
//     if (error) {
//       console.error("Error deleting task:", error.message);
//     } else {
//       setTaskList(taskList.filter((task) => task.id !== taskId));
//     }
//   }

//   const columnDefs: ColDef<any>[] = [
//     { 
//       headerName: "#", 
//       valueGetter: (params) => (params.node && params.node.rowIndex !== null ? params.node.rowIndex + 1 : ""),
//       width: 80
//     },
//     { headerName: "Title", field: "title", sortable: true, filter: true },
//     { headerName: "Description", field: "description", sortable: true, filter: true },
//     { headerName: "Status", field: "status", sortable: true, filter: true },
//     { 
//       headerName: "Due Date", 
//       field: "due_date", 
//       sortable: true, 
//       filter: true, 
//       valueFormatter: (params) => new Date(params.value).toLocaleDateString()
//     },
//     { 
//       headerName: "Actions", 
//       field: "actions", 
//       cellRenderer: (params: any) => (
//         <Box display="flex" gap={1}>
//           <Link href={`/edit/${params.data.id}`} passHref>
//             <Button variant="contained" color="primary" size="small">
//               Edit
//             </Button>
//           </Link>
//           <Button 
//             variant="contained" 
//             color="error" 
//             size="small" 
//             onClick={() => handleDelete(params.data.id)}
//           >
//             Delete
//           </Button>
//         </Box>
//       ),
//       sortable: false,
//       filter: false,
//     },
//   ];

//   return (
//     <AgGridReact
//       rowData={taskList}
//       columnDefs={columnDefs}
//       defaultColDef={{ sortable: true, filter: true, resizable: true }}
//       rowHeight={50} // Enlarged row height
//     />
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import { Box, Button } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";
// import Link from "next/link";
// import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

// // Register all Community features
// ModuleRegistry.registerModules([AllCommunityModule]);

// export default function TaskList() {
//   const supabase = createClient();
//   const [taskList, setTaskList] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   async function fetchTasks() {
//     setLoading(true);
//     const { data, error } = await supabase.from("tasks").select("*");
//     if (error) {
//       console.error("Error fetching tasks:", error.message);
//     } else {
//       setTaskList(data);
//     }
//     setLoading(false);
//   }

//   async function handleDelete(taskId: string) {
//     const { error } = await supabase.from("tasks").delete().eq("id", taskId);
//     if (error) {
//       console.error("Error deleting task:", error.message);
//     } else {
//       setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//     }
//   }

//   const columnDefs: ColDef<any>[] = [
//     { 
//       headerName: "#", 
//       valueGetter: (params) => (params.node && params.node.rowIndex !== null ? params.node.rowIndex + 1 : ""),
//       width: 80
//     },
//     { headerName: "Title", field: "title", sortable: true, filter: true },
//     { headerName: "Description", field: "description", sortable: true, filter: true },
//     { headerName: "Status", field: "status", sortable: true, filter: true },
//     { 
//       headerName: "Due Date", 
//       field: "due_date", 
//       sortable: true, 
//       filter: true, 
//       valueFormatter: (params) => params.value ? new Date(params.value).toLocaleDateString() : "N/A"
//     },
//     { 
//       headerName: "Actions", 
//       field: "actions", 
//       cellRenderer: (params: any) => (
//         <Box display="flex" gap={1}>
//           <Link href={`/edit/${params.data.id}`} passHref>
//             <Button variant="contained" color="primary" size="small">Edit</Button>
//           </Link>
//           <Button 
//             variant="contained" 
//             color="error" 
//             size="small" 
//             onClick={() => handleDelete(params.data.id)}
//           >
//             Delete
//           </Button>
//         </Box>
//       ),
//       sortable: false,
//       filter: false,
//     },
//   ];
  

//   if (loading) {
//     return <p>Loading tasks...</p>;
//   }

//   return (
//     <AgGridReact
//       rowData={taskList}
//       columnDefs={columnDefs}
//       defaultColDef={{ sortable: true, filter: true, resizable: true }}
//       rowHeight={50}
//     />
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { createClient } from "../../../utils/supabase/client";
import Link from "next/link";
import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

export default function TaskList() {
  const supabase = createClient();
  const [taskList, setTaskList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      console.error("User not authenticated");
      setLoading(false);
      return;
    }
    
    const { data, error } = await supabase.from("tasks").select("*").eq("user_id", user.id);
    
    if (error) {
      console.error("Error fetching tasks:", error.message);
    } else {
      setTaskList(data);
    }
    setLoading(false);
  }

  async function handleDelete(taskId: string) {
    const { error } = await supabase.from("tasks").delete().eq("id", taskId);
    if (error) {
      console.error("Error deleting task:", error.message);
    } else {
      setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }
  }

  const columnDefs: ColDef<any>[] = [
    { 
      headerName: "#", 
      valueGetter: (params) => (params.node && params.node.rowIndex !== null ? params.node.rowIndex + 1 : ""),
      width: 80
    },
    { headerName: "Title", field: "title", sortable: true, filter: true },
    { headerName: "Description", field: "description", sortable: true, filter: true },
    { headerName: "Status", field: "status", sortable: true, filter: true },
    { 
      headerName: "Due Date", 
      field: "due_date", 
      sortable: true, 
      filter: true, 
      valueFormatter: (params) => params.value ? new Date(params.value).toLocaleDateString() : "N/A"
    },
    { 
      headerName: "Actions", 
      field: "actions", 
      cellRenderer: (params: any) => (
        <Box display="flex" gap={1}>
          <Link href={`/edit/${params.data.id}`} passHref>
            <Button variant="contained" color="primary" size="small">Edit</Button>
          </Link>
          <Button 
            variant="contained" 
            color="error" 
            size="small" 
            onClick={() => handleDelete(params.data.id)}
          >
            Delete
          </Button>
        </Box>
      ),
      sortable: false,
      filter: false,
    },
  ];
  

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <AgGridReact
      rowData={taskList}
      columnDefs={columnDefs}
      defaultColDef={{ sortable: true, filter: true, resizable: true }}
      rowHeight={50}
    />
  );
}
