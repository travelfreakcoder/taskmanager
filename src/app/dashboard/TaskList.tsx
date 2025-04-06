// "use client";

// import { useState } from "react";
// import { Box, Button } from "@mui/material";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { createClient } from "../../../utils/supabase/client";
// // import { createClient } from "../../utils/supabase/client";

// export default function TaskList({ tasks }) {
//   const supabase = createClient();
//   const [taskList, setTaskList] = useState(tasks);

//   async function handleDelete(taskId) {
//     await supabase.from("tasks").delete().eq("id", taskId);
//     setTaskList(taskList.filter((task) => task.id !== taskId));
//   }

//   const columns = [
//     { headerName: "Title", field: "title", sortable: true },
//     { headerName: "Status", field: "status", sortable: true },
//     { headerName: "Due Date", field: "due_date", sortable: true },
//     {
//       headerName: "Actions",
//       cellRenderer: (params) => (
//         <Box display="flex" gap={1}>
//           <Button href={`/edit/${params.data.id}`} size="small">Edit</Button>
//           <Button color="error" size="small" onClick={() => handleDelete(params.data.id)}>Delete</Button>
//         </Box>
//       ),
//     },
//   ];

//   return <AgGridReact rowData={taskList} columnDefs={columns} />;
// }


// "use client";

// import { useState } from "react";
// import { Box, Button } from "@mui/material";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { createClient } from "../../../utils/supabase/client";
// import { ModuleRegistry } from "@ag-grid-community/core";
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
// import { ColDef } from "ag-grid-community"; // Import ColDef for type safety

// // Register AG Grid modules
// ModuleRegistry.registerModules([ClientSideRowModelModule]);

// // Define task type
// interface Task {
//   id: string;
//   title: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
// }

// // Define props type
// interface TaskListProps {
//   tasks: Task[];
// }

// export default function TaskList({ tasks }: TaskListProps) {
//   const supabase = createClient();
//   const [taskList, setTaskList] = useState<Task[]>(tasks);

//   // Function to delete a task
//   async function handleDelete(taskId: string) {
//     const { error } = await supabase.from("tasks").delete().eq("id", taskId);

//     if (error) {
//       console.error("Error deleting task:", error.message);
//       return;
//     }

//     setTaskList((prev) => prev.filter((task) => task.id !== taskId));
//   }

//   // Define column structure with strong typing
//   const columnDefs: ColDef<Task>[] = [
//     { headerName: "Title", field: "title", sortable: true, filter: true },
//     { headerName: "Status", field: "status", sortable: true, filter: true },
//     { headerName: "Due Date", field: "due_date", sortable: true, filter: true },
//     {
//       headerName: "Actions",
//       field: "actions", // Dummy field to avoid type errors
//       cellRenderer: (params) => {
//         if (!params.data) return null; // Prevent crashes if data is undefined

//         return (
//           <Box display="flex" gap={1}>
//             <Button href={`/edit/${params.data.id}`} size="small">
//               Edit
//             </Button>
//             <Button
//               color="error"
//               size="small"
//               onClick={() => handleDelete(params.data.id)}
//             >
//               Delete
//             </Button>
//           </Box>
//         );
//       },
//     },
//   ];

//   return (
//     <Box className="ag-theme-alpine" sx={{ height: 500, width: "100%" }}>
//       <AgGridReact 
//         rowData={taskList} 
//         columnDefs={columnDefs} 
//         rowModelType="clientSide"
//         animateRows={true}
//         pagination={true}
//       />
//     </Box>
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
//   rowData={taskList} 
//   columnDefs={columnDefs} 
//   rowModelType="clientSide"
//   animateRows={true}
//   pagination={true}
//   theme="legacy" // 👈 Use legacy theme to maintain old styles
// />
//   );
// }
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Box, Button } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";
// import Link from "next/link";
// import { AgGridReact } from "ag-grid-react";
// import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";

// // Register all AG Grid Community features
// ModuleRegistry.registerModules([AllCommunityModule]);

// // Define Task type for better type safety
// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "pending" | "inprogress" | "completed";
//   due_date: string;
// }

// interface TaskListProps {
//   tasks: Task[];
// }

// export default function TaskList({ tasks }: TaskListProps) {
//   const supabase = createClient();
//   const [taskList, setTaskList] = useState<Task[]>(tasks);
//   const gridRef = useRef<AgGridReact>(null);

//   // Sync taskList with tasks prop when it changes
//   useEffect(() => {
//     console.log("Updated tasks:", tasks); // Debugging log
//     setTaskList(tasks);

//     // Force AG Grid to refresh
//     if (gridRef.current) {
//       gridRef.current.api.setRowData(tasks);
//     }
//   }, [tasks]);

//   // Function to delete a task
//   async function handleDelete(taskId: string) {
//     const { error } = await supabase.from("tasks").delete().eq("id", taskId);
//     if (error) {
//       console.error("Error deleting task:", error.message);
//     } else {
//       setTaskList((prev) => prev.filter((task) => task.id !== taskId));

//       // Refresh AG Grid after delete
//       if (gridRef.current) {
//         gridRef.current.api.setRowData(taskList);
//       }
//     }
//   }

//   // Define AG Grid column structure
//   const columnDefs: ColDef<Task>[] = [
//     {
//       headerName: "#",
//       valueGetter: (params) =>
//         params.node && params.node.rowIndex !== null ? params.node.rowIndex + 1 : "",
//       width: 80,
//     },
//     { headerName: "Title", field: "title", sortable: true, filter: true },
//     { headerName: "Description", field: "description", sortable: true, filter: true },
//     { headerName: "Status", field: "status", sortable: true, filter: true },
//     {
//       headerName: "Due Date",
//       field: "due_date",
//       sortable: true,
//       filter: true,
//       valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
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
//           <Button variant="contained" color="error" size="small" onClick={() => handleDelete(params.data.id)}>
//             Delete
//           </Button>
//         </Box>
//       ),
//       sortable: false,
//       filter: false,
//     },
//   ];

//   return (
//     <Box className="ag-theme-alpine" sx={{ height: 500, width: "100%" }}>
//       <AgGridReact
//         ref={gridRef}
//         rowData={taskList}
//         columnDefs={columnDefs}
//         rowModelType="clientSide"
//         animateRows={true}
//         pagination={true}
//         theme="legacy"
//       />
//     </Box>
//   );
// }



// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Box, Button } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";
// import Link from "next/link";
// import { AgGridReact, GridApi } from "ag-grid-react";
// import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";

// // Register all AG Grid Community features
// ModuleRegistry.registerModules([AllCommunityModule]);

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "pending" | "inprogress" | "completed";
//   due_date: string;
// }

// interface TaskListProps {
//   tasks: Task[];
// }

// export default function TaskList({ tasks }: TaskListProps) {
//   const supabase = createClient();
//   const [taskList, setTaskList] = useState<Task[]>(tasks);
//   const gridRef = useRef<AgGridReact<any>>(null); // ✅ Correct useRef type

//   // Sync taskList with tasks prop when it changes
//   useEffect(() => {
//     console.log("Updated tasks:", tasks); // Debugging log
//     setTaskList(tasks);

//     // Force AG Grid to refresh
//     if (gridRef.current && gridRef.current.api) {
//       (gridRef.current.api as GridApi).setRowData(tasks);
//     }
//   }, [tasks]);

//   async function handleDelete(taskId: string) {
//     const { error } = await supabase.from("tasks").delete().eq("id", taskId);
//     if (error) {
//       console.error("Error deleting task:", error.message);
//     } else {
//       const updatedTasks = taskList.filter((task) => task.id !== taskId);
//       setTaskList(updatedTasks);

//       // Refresh AG Grid
//       if (gridRef.current && gridRef.current.api) {
//         (gridRef.current.api as GridApi).setRowData(updatedTasks);
//       }
//     }
//   }

//   const columnDefs: ColDef<Task>[] = [
//     {
//       headerName: "#",
//       valueGetter: (params) =>
//         params.node && params.node.rowIndex !== null ? params.node.rowIndex + 1 : "",
//       width: 80,
//     },
//     { headerName: "Title", field: "title", sortable: true, filter: true },
//     { headerName: "Description", field: "description", sortable: true, filter: true },
//     { headerName: "Status", field: "status", sortable: true, filter: true },
//     {
//       headerName: "Due Date",
//       field: "due_date",
//       sortable: true,
//       filter: true,
//       valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
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
//           <Button variant="contained" color="error" size="small" onClick={() => handleDelete(params.data.id)}>
//             Delete
//           </Button>
//         </Box>
//       ),
//       sortable: false,
//       filter: false,
//     },
//   ];

//   return (
//     <Box className="ag-theme-alpine" sx={{ height: 500, width: "100%" }}>
//       <AgGridReact
//         ref={gridRef}
//         rowData={taskList}
//         columnDefs={columnDefs}
//         rowModelType="clientSide"
//         animateRows={true}
//         pagination={true}
//         theme="legacy"
//       />
//     </Box>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Box, Button } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";
// import Link from "next/link";
// import { AgGridReact } from "ag-grid-react";
// import { GridApi, AllCommunityModules, ColDef, ModuleRegistry } from "ag-grid-community";

// // Register all AG Grid Community features
// ModuleRegistry.registerModules(AllCommunityModules);

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "pending" | "inprogress" | "completed";
//   due_date: string;
// }

// interface TaskListProps {
//   tasks: Task[];
// }

// export default function TaskList({ tasks }: TaskListProps) {
//   const supabase = createClient();
//   const [taskList, setTaskList] = useState<Task[]>(tasks);
//   const gridRef = useRef<AgGridReact<Task>>(null);

//   useEffect(() => {
//     setTaskList(tasks); // ✅ No more `setRowData`
//   }, [tasks]);

//   async function handleDelete(taskId: string) {
//     const { error } = await supabase.from("tasks").delete().eq("id", taskId);
//     if (error) {
//       console.error("Error deleting task:", error.message);
//     } else {
//       const updatedTasks = taskList.filter((task) => task.id !== taskId);
//       setTaskList(updatedTasks);
//     }
//   }

//   const columnDefs: ColDef<Task>[] = [
//     {
//       headerName: "#",
//       valueGetter: (params) => params.node?.rowIndex !== undefined ? params.node.rowIndex + 1 : "",
//       width: 80,
//     },
//     { headerName: "Title", field: "title", sortable: true, filter: true },
//     { headerName: "Description", field: "description", sortable: true, filter: true },
//     { headerName: "Status", field: "status", sortable: true, filter: true },
//     {
//       headerName: "Due Date",
//       field: "due_date",
//       sortable: true,
//       filter: true,
//       valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
//     },
//     {
//       headerName: "Actions",
//       cellRenderer: (params: any) => (
//         <Box display="flex" gap={1}>
//           <Link href={`/edit/${params.data.id}`} passHref>
//             <Button variant="contained" color="primary" size="small">
//               Edit
//             </Button>
//           </Link>
//           <Button variant="contained" color="error" size="small" onClick={() => handleDelete(params.data.id)}>
//             Delete
//           </Button>
//         </Box>
//       ),
//       sortable: false,
//       filter: false,
//     },
//   ];

//   return (
//     <Box className="ag-theme-alpine" sx={{ height: 500, width: "100%" }}>
//       <AgGridReact
//         ref={gridRef}
//         rowData={taskList}
//         columnDefs={columnDefs}
//         rowModelType="clientSide"
//         animateRows={true}
//         pagination={true}
//         theme="legacy"
//       />
//     </Box>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Box, Button } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";
// import Link from "next/link";
// import { AgGridReact } from "ag-grid-react";
// import { GridApi, AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";

// // Register AG Grid community modules
// ModuleRegistry.registerModules([AllCommunityModule]);

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
// }

// interface TaskListProps {
//   tasks: Task[];
// }

// export default function TaskList({ tasks }: TaskListProps) {
//   const supabase = createClient();
//   const [taskList, setTaskList] = useState<Task[]>(tasks);
//   const gridRef = useRef<AgGridReact<Task>>(null);

//   useEffect(() => {
//     setTaskList(tasks);
//   }, [tasks]);

//   async function handleDelete(taskId: string) {
//     const { error } = await supabase.from("tasks").delete().eq("id", taskId);
//     if (error) {
//       console.error("Error deleting task:", error.message);
//     } else {
//       setTaskList((prev) => prev.filter((task) => task.id !== taskId));
//     }
//   }

//   const columnDefs: ColDef<Task>[] = [
//     {
//       headerName: "#",
//       valueGetter: (params) => params.node?.rowIndex ?? "", // ✅ Safe fallback
//       width: 80,
//     },
//     { headerName: "Title", field: "title", sortable: true, filter: true },
//     { headerName: "Description", field: "description", sortable: true, filter: true },
//     { headerName: "Status", field: "status", sortable: true, filter: true },
//     {
//       headerName: "Due Date",
//       field: "due_date",
//       sortable: true,
//       filter: true,
//       valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
//     },
//     {
//       headerName: "Actions",
//       cellRenderer: (params: any) => (
//         <Box display="flex" gap={1}>
//           <Link href={`/edit/${params.data.id}`} passHref>
//             <Button variant="contained" color="primary" size="small">
//               Edit
//             </Button>
//           </Link>
//           <Button variant="contained" color="error" size="small" onClick={() => handleDelete(params.data.id)}>
//             Delete
//           </Button>
//         </Box>
//       ),
//       sortable: false,
//       filter: false,
//     },
//   ];

//   return (
//     <Box className="ag-theme-alpine" sx={{ height: 500, width: "100%" }}>
//       <AgGridReact
//         ref={gridRef}
//         rowData={taskList}
//         columnDefs={columnDefs}
//         rowModelType="clientSide"
//         animateRows={true}
//         pagination={true}
//         theme="legacy"
//       />
//     </Box>
//   );
// }



// import { useEffect, useState } from "react";
// import { Box } from "@mui/material";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

// type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   user_id: string;
// };

// export default function TaskList({ tasks }: { tasks: Task[] }) {
//   const [rowData, setRowData] = useState<Task[]>(tasks);

//   useEffect(() => {
//     setRowData(tasks); // Update table when tasks change
//   }, [tasks]);

//   const columns = [
//     { headerName: "Title", field: "title", sortable: true, filter: true },
//     { headerName: "Description", field: "description", sortable: true, filter: true },
//     { headerName: "Status", field: "status", sortable: true, filter: true },
//   ];

//   return (
//     <Box className="ag-theme-alpine" sx={{ height: 400, width: "100%" }}>
//       <AgGridReact rowData={rowData} columnDefs={columns} pagination={true} />
//     </Box>
//   );
// }


// import { useEffect, useState } from "react";
// import { Box } from "@mui/material";
// import { AgGridReact } from "ag-grid-react";
// import { ColDef } from "ag-grid-community";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

// type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   user_id: string;
// };

// export default function TaskList({ tasks }: { tasks: Task[] }) {
//   const [rowData, setRowData] = useState<Task[]>(tasks);

//   useEffect(() => {
//     setRowData(tasks); // Update table when tasks change
//   }, [tasks]);

//   const columns: ColDef<Task>[] = [
//     { headerName: "Title", field: "title" as keyof Task, sortable: true, filter: true },
//     { headerName: "Description", field: "description" as keyof Task, sortable: true, filter: true },
//     { headerName: "Status", field: "status" as keyof Task, sortable: true, filter: true },
//   ];

//   return (
//     <Box className="ag-theme-alpine" sx={{ height: 400, width: "100%" }}>
//       <AgGridReact rowData={rowData} columnDefs={columns} pagination={true} />
//     </Box>
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
    const { data, error } = await supabase.from("tasks").select("*");

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
      fetchTasks(); // Refetch after delete to keep state in sync
    }
  }

  const columnDefs: ColDef<any>[] = [
    {
      headerName: "#",
      valueGetter: (params) => (params.node && params.node.rowIndex !== null ? params.node.rowIndex + 1 : ""),
      width: 80,
    },
    { headerName: "Title", field: "title", sortable: true, filter: true },
    { headerName: "Description", field: "description", sortable: true, filter: true },
    { headerName: "Status", field: "status", sortable: true, filter: true },
    {
      headerName: "Due Date",
      field: "due_date",
      sortable: true,
      filter: true,
      valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
    },
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: (params: any) => (
        <Box display="flex" gap={1}>
          <Link href={`/edit/${params.data.id}`} passHref>
            <Button variant="contained" color="primary" size="small">
              Edit
            </Button>
          </Link>
          <Button variant="contained" color="error" size="small" onClick={() => handleDelete(params.data.id)}>
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
