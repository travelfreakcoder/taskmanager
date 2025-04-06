// // // import { redirect } from "next/navigation";
// // // // import { createClient } from "../../utils/supabase/server";
// // // import {
// // //   Box,
// // //   Card,
// // //   CardContent,
// // //   Typography,
// // //   Drawer,
// // //   List,
// // //   ListItem,
// // //   ListItemText,
// // //   Button,
// // // } from "@mui/material";
// // // // import TaskList from "./components/TaskList";
// // // import Link from "next/link";
// // // import { createClient } from "../../../utils/supabase/server";
// // // import { logout } from "../logout/actions";
// // // import TaskList from "../components/TaskList";
// // // // import { logout } from "./logout/actions";



// // // const drawerWidth = "30vw";

// // // export default async function Home() {
// // //   const supabase = await createClient();

// // //   // Get active session instead of just the user
// // //   const { data: sessionData } = await supabase.auth.getSession();

// // //   // Redirect if user is not authenticated
// // //   if (!sessionData?.session) {
// // //     redirect("/");
// // //   }
  

// // //   console.log("User ID:", sessionData.session.user.id);

// // //   // Fetch tasks for the logged-in user
// // //   const { data: tasks, error: tasksError } = await supabase
// // //     .from("tasks")
// // //     .select("*")
// // //     .eq("user_id", sessionData.session.user.id);

// // //   if (tasksError) {
// // //     console.error("Error fetching tasks:", tasksError.message);
// // //     return <Box>Error loading tasks</Box>;


// // //   }

// // // //   if(!tasks && !sessionData?.session?.user?.id ){
// // // //     redirect("/login")
// // // //   }

// // //   return (
// // //     <Box
// // //       sx={{
// // //         display: "flex",
// // //         height: "100vh",
// // //         flexDirection: "column",
// // //         backgroundColor: "#f4f6f8",
// // //         p: 2,
// // //       }}
// // //     >
// // //       <Box sx={{ display: "flex", flexGrow: 1, position: "relative" }}>
// // //         <Drawer
// // //           variant="persistent"
// // //           open
// // //           sx={{
// // //             width: drawerWidth,
// // //             flexShrink: 0,
// // //             [`& .MuiDrawer-paper`]: {
// // //               width: drawerWidth,
// // //               boxSizing: "border-box",
// // //               backgroundColor: "#1E1E1E",
// // //               color: "white",
// // //               position: "relative",
// // //               display: "flex",
// // //               flexDirection: "column",
// // //               justifyContent: "space-between",
// // //               p: 2,
// // //             },
// // //           }}
// // //         >
// // //           <List>
// // //             {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
// // //               (text) => (
// // //                 <ListItem key={text} style={{ cursor: "pointer" }}>
// // //                   <Link
// // //                     href={text === "Create Task" ? "/create" : "#"}
// // //                     passHref
// // //                     style={{
// // //                       textDecoration: "none",
// // //                       color: "inherit",
// // //                       width: "100%",
// // //                     }}
// // //                   >
// // //                     <ListItemText primary={text} sx={{ textAlign: "center" }} />
// // //                   </Link>
// // //                 </ListItem>
// // //               )
// // //             )}
// // //           </List>

// // //           {/* Logout Button at Bottom */}
// // //           <Box sx={{ textAlign: "center", mt: "auto" }}>
// // //             <form action={logout}>
// // //               <Button type="submit" variant="contained" color="secondary" fullWidth>
// // //                 Logout
// // //               </Button>
// // //             </form>
// // //           </Box>
// // //         </Drawer>
// // //         <Box sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
// // //           <Card
// // //             sx={{
// // //               backgroundColor: "#6200ea",
// // //               color: "white",
// // //               mb: 3,
// // //               borderRadius: 2,
// // //               p: 2,
// // //             }}
// // //           >
// // //             <CardContent>
// // //               <Typography variant="h5" fontWeight="bold">
// // //                 Welcome, {sessionData?.session?.user?.email}
// // //               </Typography>
// // //               <Typography variant="body1" sx={{ mt: 1 }}>
// // //                 Manage your tasks efficiently and stay organized!
// // //               </Typography>
// // //             </CardContent>
// // //           </Card>

// // //           {/* Pass tasks to TaskList */}
// // //           <TaskList tasks={tasks} />
// // //         </Box>
// // //       </Box>
// // //     </Box>
// // //   );
// // // }


// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { Box, Button, ToggleButtonGroup, ToggleButton } from "@mui/material";
// // // // import { createClient } from "../../utils/supabase/client";
// // // import KanbanBoard from "./KanbanBoard";
// // // import TaskList from "./TaskList";
// // // import { createClient } from "../../../utils/supabase/client";

// // // export default function Dashboard() {
// // //   const supabase = createClient();
// // //   const [tasks, setTasks] = useState([]);
// // //   const [view, setView] = useState<"kanban" | "list">("kanban");

// // //   useEffect(() => {
// // //     fetchTasks();
// // //   }, []);

// // //   async function fetchTasks() {
// // //     const { data, error } = await supabase.from("tasks").select("*");
// // //     if (error) console.error("Error fetching tasks:", error.message);
// // //     else setTasks(data);
// // //   }

// // //   return (
// // //     <Box sx={{ p: 3 }}>
// // //       <ToggleButtonGroup value={view} exclusive onChange={(_, val) => setView(val)}>
// // //         <ToggleButton value="kanban">Kanban View</ToggleButton>
// // //         <ToggleButton value="list">List View</ToggleButton>
// // //       </ToggleButtonGroup>

// // //       {view === "kanban" ? <KanbanBoard tasks={tasks} fetchTasks={fetchTasks} /> : <TaskList tasks={tasks} />}
// // //     </Box>
// // //   );
// // // }

// // "use client";

// // import { useState, useEffect } from "react";
// // import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
// // import KanbanBoard from "./KanbanBoard";
// // import TaskList from "./TaskList";
// // import { createClient } from "../../../utils/supabase/client";

// // // ✅ Define Task Type Inline
// // type Task = {
// //   id: string;
// //   title: string;
// //   description: string;
// //   status: "Pending" | "In Progress" | "Completed"; // ✅ Enforce status values
// //   due_date: string;
// //   created_at: string;
// //   user_id: string;
// // };

// // export default function Dashboard() {
// //   const supabase = createClient();
// //   const [tasks, setTasks] = useState<Task[]>([]);
// //   const [view, setView] = useState<"kanban" | "list">("kanban");

// //   useEffect(() => {
// //     fetchTasks();
// //   }, []);

// //   async function fetchTasks(): Promise<void> {
// //     const { data, error } = await supabase.from("tasks").select("*");

// //     if (error) {
// //       console.error("Error fetching tasks:", error.message);
// //     } else if (Array.isArray(data)) {
// //       setTasks(
// //         data.map((task) => ({
// //           ...task,
// //           status: task.status as "Pending" | "In Progress" | "Completed", // ✅ Cast status correctly
// //         }))
// //       );
// //     }
// //   }

// //   return (
// //     <Box sx={{ p: 3 }}>
// //       <ToggleButtonGroup
// //         value={view}
// //         exclusive
// //         onChange={(_, val) => val && setView(val)}
// //       >
// //         <ToggleButton value="kanban">Kanban View</ToggleButton>
// //         <ToggleButton value="list">List View</ToggleButton>
// //       </ToggleButtonGroup>

// //       {view === "kanban" ? (
// //         <KanbanBoard tasks={tasks} fetchTasks={fetchTasks} />
// //       ) : (
// //         <TaskList tasks={tasks} />
// //       )}
// //     </Box>
// //   );
// // }



// // "use client";

// // import { useState, useEffect } from "react";
// // import {
// //   Box,
// //   ToggleButtonGroup,
// //   ToggleButton,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   Button,
// // } from "@mui/material";
// // import KanbanBoard from "./KanbanBoard";
// // import TaskList from "./TaskList";
// // import Link from "next/link";
// // import { createClient } from "../../../utils/supabase/client";
// // import { logout } from "../logout/actions";

// // // ✅ Define Task Type Inline
// // type Task = {
// //   id: string;
// //   title: string;
// //   description: string;
// //   status: "Pending" | "In Progress" | "Completed";
// //   due_date: string;
// //   created_at: string;
// //   user_id: string;
// // };

// // const drawerWidth = "30vw";

// // export default function Dashboard() {
// //   const supabase = createClient();
// //   const [tasks, setTasks] = useState<Task[]>([]);
// //   const [view, setView] = useState<"kanban" | "list">("kanban");

// //   useEffect(() => {
// //     fetchTasks();
// //   }, []);

// //   async function fetchTasks(): Promise<void> {
// //     const { data, error } = await supabase.from("tasks").select("*");

// //     if (error) {
// //       console.error("Error fetching tasks:", error.message);
// //     } else if (Array.isArray(data)) {
// //       setTasks(
// //         data.map((task) => ({
// //           ...task,
// //           status: task.status as "Pending" | "In Progress" | "Completed",
// //         }))
// //       );
// //     }
// //   }

// //   return (
// //     <Box sx={{ display: "flex", height: "100vh" }}>
// //       {/* Sidebar */}
// //       <Drawer
// //         variant="persistent"
// //         open
// //         sx={{
// //           width: drawerWidth,
// //           flexShrink: 0,
// //           [`& .MuiDrawer-paper`]: {
// //             width: drawerWidth,
// //             boxSizing: "border-box",
// //             backgroundColor: "#1E1E1E",
// //             color: "white",
// //             display: "flex",
// //             flexDirection: "column",
// //             justifyContent: "space-between",
// //             p: 2,
// //           },
// //         }}
// //       >
// //         <List>
// //           {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
// //             (text) => (
// //               <ListItem key={text} style={{ cursor: "pointer" }}>
// //                 <Link
// //                   href={text === "Create Task" ? "/create" : "#"}
// //                   passHref
// //                   style={{ textDecoration: "none", color: "inherit", width: "100%" }}
// //                 >
// //                   <ListItemText primary={text} sx={{ textAlign: "center" }} />
// //                 </Link>
// //               </ListItem>
// //             )
// //           )}
// //         </List>

// //         {/* Logout Button */}
// //         <Box sx={{ textAlign: "center", mt: "auto" }}>
// //           <form action={logout}>
// //             <Button type="submit" variant="contained" color="secondary" fullWidth>
// //               Logout
// //             </Button>
// //           </form>
// //         </Box>
// //       </Drawer>

// //       {/* Main Content */}
// //       <Box sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
// //         <ToggleButtonGroup
// //           value={view}
// //           exclusive
// //           onChange={(_, val) => val && setView(val)}
// //         >
// //           <ToggleButton value="kanban">Kanban View</ToggleButton>
// //           <ToggleButton value="list">List View</ToggleButton>
// //         </ToggleButtonGroup>

// //         {view === "kanban" ? (
// //           <KanbanBoard tasks={tasks} fetchTasks={fetchTasks} />
// //         ) : (
// //           <TaskList tasks={tasks} />
// //         )}
// //       </Box>
// //     </Box>
// //   );
// // }


// // "use client";

// // import { useState, useEffect } from "react";
// // import {
// //   Box,
// //   ToggleButtonGroup,
// //   ToggleButton,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   Button,
// // } from "@mui/material";
// // import KanbanBoard from "./KanbanBoard";
// // import TaskList from "./TaskList";
// // import Link from "next/link";
// // import { createClient } from "../../../utils/supabase/client";
// // import { logout } from "../logout/actions";

// // // ✅ Define Task Type Inline
// // type Task = {
// //   id: string;
// //   title: string;
// //   description: string;
// //   status: "Pending" | "In Progress" | "Completed";
// //   due_date: string;
// //   created_at: string;
// //   user_id: string;
// // };

// // const drawerWidth = "30vw";

// // const Dashboard = () => {
// //   const supabase = createClient();
// //   const [tasks, setTasks] = useState<Task[]>([]);
// //   const [view, setView] = useState<"kanban" | "list">("kanban");

// //   useEffect(() => {
// //     const fetchTasks = async () => {
// //       const { data, error } = await supabase.from("tasks").select("*");

// //       if (error) {
// //         console.error("Error fetching tasks:", error.message);
// //       } else if (Array.isArray(data)) {
// //         setTasks(
// //           data.map((task) => ({
// //             ...task,
// //             status: task.status as "Pending" | "In Progress" | "Completed",
// //           }))
// //         );
// //       }
// //     };

// //     fetchTasks();
// //   }, []);

// //   return (
// //     <Box sx={{ display: "flex", height: "100vh" }}>
// //       {/* Sidebar */}
// //       <Drawer
// //         variant="persistent"
// //         open
// //         sx={{
// //           width: drawerWidth,
// //           flexShrink: 0,
// //           [`& .MuiDrawer-paper`]: {
// //             width: drawerWidth,
// //             boxSizing: "border-box",
// //             backgroundColor: "#1E1E1E",
// //             color: "white",
// //             display: "flex",
// //             flexDirection: "column",
// //             justifyContent: "space-between",
// //             p: 2,
// //           },
// //         }}
// //       >
// //         <List>
// //           {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
// //             (text) => (
// //               <ListItem key={text} style={{ cursor: "pointer" }}>
// //                 <Link
// //                   href={text === "Create Task" ? "/create" : "#"}
// //                   passHref
// //                   style={{ textDecoration: "none", color: "inherit", width: "100%" }}
// //                 >
// //                   <ListItemText primary={text} sx={{ textAlign: "center" }} />
// //                 </Link>
// //               </ListItem>
// //             )
// //           )}
// //         </List>

// //         {/* Logout Button */}
// //         <Box sx={{ textAlign: "center", mt: "auto" }}>
// //           <form action={logout}>
// //             <Button type="submit" variant="contained" color="secondary" fullWidth>
// //               Logout
// //             </Button>
// //           </form>
// //         </Box>
// //       </Drawer>

// //       {/* Main Content */}
// //       <Box sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
// //         <ToggleButtonGroup
// //           value={view}
// //           exclusive
// //           onChange={(_, val) => val && setView(val)}
// //         >
// //           <ToggleButton value="kanban">Kanban View</ToggleButton>
// //           <ToggleButton value="list">List View</ToggleButton>
// //         </ToggleButtonGroup>

// //         {view === "kanban" ? (
// //           <KanbanBoard tasks={tasks} fetchTasks={fetchTasks} />
// //         ) : (
// //           <TaskList tasks={tasks} />
// //         )}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Dashboard;


// "use client";

// import { useState, useEffect } from "react";
// import {
//   Box,
//   ToggleButtonGroup,
//   ToggleButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
// } from "@mui/material";
// import KanbanBoard from "./KanbanBoard";
// import TaskList from "./TaskList";
// import Link from "next/link";
// import { createClient } from "../../../utils/supabase/client";
// import { logout } from "../logout/actions";

// // ✅ Define Task Type Inline
// type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// };

// const drawerWidth = "30vw";

// const Dashboard = () => {
//   const supabase = createClient();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [view, setView] = useState<"kanban" | "list">("kanban");

//   // ✅ Move fetchTasks outside useEffect so it can be passed to KanbanBoard
//   const fetchTasks = async () => {
//     const { data, error } = await supabase.from("tasks").select("*");

//     if (error) {
//       console.error("Error fetching tasks:", error.message);
//     } else if (Array.isArray(data)) {
//       setTasks(
//         data.map((task) => ({
//           ...task,
//           status: task.status as "Pending" | "In Progress" | "Completed",
//         }))
//       );
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   return (
//     <Box sx={{ display: "flex", height: "100vh" }}>
//       {/* Sidebar */}
//       <Drawer
//         variant="persistent"
//         open
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             boxSizing: "border-box",
//             backgroundColor: "#1E1E1E",
//             color: "white",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             p: 2,
//           },
//         }}
//       >
//         <List>
//           {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
//             (text) => (
//               <ListItem key={text} style={{ cursor: "pointer" }}>
//                 <Link
//                   href={text === "Create Task" ? "/create" : "#"}
//                   passHref
//                   style={{ textDecoration: "none", color: "inherit", width: "100%" }}
//                 >
//                   <ListItemText primary={text} sx={{ textAlign: "center" }} />
//                 </Link>
//               </ListItem>
//             )
//           )}
//         </List>

//         {/* Logout Button */}
//         <Box sx={{ textAlign: "center", mt: "auto" }}>
//           <form action={logout}>
//             <Button type="submit" variant="contained" color="secondary" fullWidth>
//               Logout
//             </Button>
//           </form>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
//         <ToggleButtonGroup
//           value={view}
//           exclusive
//           onChange={(_, val) => val && setView(val)}
//         >
//           <ToggleButton value="kanban">Kanban View</ToggleButton>
//           <ToggleButton value="list">List View</ToggleButton>
//         </ToggleButtonGroup>

//         {view === "kanban" ? (
//           <KanbanBoard tasks={tasks} fetchTasks={fetchTasks} />
//         ) : (
//           <TaskList tasks={tasks} />
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;


// "use client";

// import { useState, useEffect } from "react";
// import {
//   Box,
//   ToggleButtonGroup,
//   ToggleButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   Typography,
//   Card,
//   CardContent,
// } from "@mui/material";
// import TaskList from "../components/TaskList";
// import Link from "next/link";
// import { logout } from "../logout/actions";
// import { createClient } from "../../../utils/supabase/client";
// import KanbanBoard from "./KanbanBoard";

// type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// };

// const drawerWidth = 280;

// export default function Dashboard() {
//   const supabase = createClient();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [view, setView] = useState<"kanban" | "list">("kanban");
//   const [userEmail, setUserEmail] = useState<string | null>(null);

//   useEffect(() => {
//     fetchTasks();
//     fetchUser();
//   }, []);

//   const fetchTasks = async () => {
//     const { data, error } = await supabase.from("tasks").select("*");
//     if (error) console.error("Error fetching tasks:", error.message);
//     else if (Array.isArray(data)) {
//       setTasks(
//         data.map((task) => ({
//           ...task,
//           status: task.status as "Pending" | "In Progress" | "Completed",
//         }))
//       );
//     }
//   };

//   const fetchUser = async () => {
//     const { data: sessionData } = await supabase.auth.getSession();
//     const email = sessionData?.session?.user?.email ?? null;
//     setUserEmail(email);
//   };

//   return (
//     <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f4f6f8" }}>
//       {/* Sidebar (Fixed) */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           position: "fixed",
//           height: "100vh", // Full height
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             backgroundColor: "#1E1E1E",
//             color: "white",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             p: 2,
//             mt: "64px",
//             height: "calc(100vh - 64px)", // Ensures the sidebar fits within the viewport
//             position: "relative", // Needed for absolute logout button
//           },
//         }}
//       >
//         <List>
//           {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
//             (text) => (
//               <ListItem key={text} style={{ cursor: "pointer" }}>
//                 <Link
//                   href={text === "Create Task" ? "/create" : "#"}
//                   passHref
//                   style={{ textDecoration: "none", color: "inherit", width: "100%" }}
//                 >
//                   <ListItemText primary={text} sx={{ textAlign: "center" }} />
//                 </Link>
//               </ListItem>
//             )
//           )}
//         </List>

//         {/* Logout Button (Fixed at Bottom) */}
//         <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
//           <form action={logout}>
//             <Button type="submit" variant="contained" color="secondary" fullWidth>
//               Logout
//             </Button>
//           </form>
//         </Box>
//       </Drawer>

//       {/* Main Content (Scrollable) */}
//       <Box
//         sx={{
//           flexGrow: 1,
//           overflowY: "auto", // Enables scrolling only in the main content
//           ml: `${drawerWidth}px`, // Prevents overlap with fixed sidebar
//           p: 3,
//           mt: "64px",
//         }}
//       >
//         {/* Welcome Section */}
//         <Card
//           sx={{
//             backgroundColor: "#6200ea",
//             color: "white",
//             mb: 3,
//             borderRadius: 2,
//             p: 2,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h5" fontWeight="bold">
//               Welcome, {userEmail || "Guest"}
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 1 }}>
//               Manage your tasks efficiently and stay organized!
//             </Typography>
//           </CardContent>
//         </Card>

//         {/* View Toggle */}
//         <ToggleButtonGroup
//           value={view}
//           exclusive
//           onChange={(_, val) => val && setView(val)}
//         >
//           <ToggleButton value="kanban">Kanban View</ToggleButton>
//           <ToggleButton value="list">List View</ToggleButton>
//         </ToggleButtonGroup>

//         {view === "kanban" ? (
//           <KanbanBoard tasks={tasks} fetchTasks={fetchTasks} />
//         ) : (
//           <TaskList tasks={tasks} />
//         )}
//       </Box>
//     </Box>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import {
//   Box,
//   ToggleButtonGroup,
//   ToggleButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   useTheme,
// } from "@mui/material";
// import TaskList from "../components/TaskList";
// import Link from "next/link";
// import { logout } from "../logout/actions";
// import { createClient } from "../../../utils/supabase/client";
// import KanbanBoard from "./KanbanBoard";

// type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// };

// const drawerWidth = 280;

// export default function Dashboard() {
//   const theme = useTheme(); // 👈 Get Material-UI theme
//   const supabase = createClient();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [view, setView] = useState<"kanban" | "list">("kanban");
//   const [userEmail, setUserEmail] = useState<string | null>(null);

//   useEffect(() => {
//     fetchTasks();
//     fetchUser();
//   }, []);

//   const fetchTasks = async () => {
//     const { data, error } = await supabase.from("tasks").select("*");
//     if (error) console.error("Error fetching tasks:", error.message);
//     else if (Array.isArray(data)) {
//       setTasks(
//         data.map((task) => ({
//           ...task,
//           status: task.status as "Pending" | "In Progress" | "Completed",
//         }))
//       );
//     }
//   };

//   const fetchUser = async () => {
//     const { data: sessionData } = await supabase.auth.getSession();
//     const email = sessionData?.session?.user?.email ?? null;
//     setUserEmail(email);
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100vh",
//         backgroundColor: theme.palette.background.default, // 👈 Uses theme background
//         color: theme.palette.text.primary, // 👈 Ensures proper contrast
//       }}
//     >
//       {/* Sidebar (Fixed) */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           position: "fixed",
//           height: "100vh",
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#ffffff", // 👈 Adjusts for dark mode
//             color: theme.palette.text.primary,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             p: 2,
//             mt: "64px",
//             height: "calc(100vh - 64px)",
//             position: "relative",
//           },
//         }}
//       >
//         <List>
//           {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
//             (text) => (
//               <ListItem key={text} style={{ cursor: "pointer" }}>
//                 <Link
//                   href={text === "Create Task" ? "/create" : "#"}
//                   passHref
//                   style={{
//                     textDecoration: "none",
//                     color: theme.palette.text.primary,
//                     width: "100%",
//                   }}
//                 >
//                   <ListItemText primary={text} sx={{ textAlign: "center" }} />
//                 </Link>
//               </ListItem>
//             )
//           )}
//         </List>

//         {/* Logout Button (Fixed at Bottom) */}
//         <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
//           <form action={logout}>
//             <Button type="submit" variant="contained" color="secondary" fullWidth>
//               Logout
//             </Button>
//           </form>
//         </Box>
//       </Drawer>

//       {/* Main Content (Scrollable) */}
//       <Box
//         sx={{
//           flexGrow: 1,
//           overflowY: "auto",
//           ml: `${drawerWidth}px`,
//           p: 3,
//           mt: "64px",
//         }}
//       >
//         {/* Welcome Section */}
//         <Card
//           sx={{
//             backgroundColor: theme.palette.primary.main, // 👈 Uses theme primary color
//             color: theme.palette.primary.contrastText, // 👈 Ensures text is readable
//             mb: 3,
//             borderRadius: 2,
//             p: 2,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h5" fontWeight="bold">
//               Welcome, {userEmail || "Guest"}
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 1 }}>
//               Manage your tasks efficiently and stay organized!
//             </Typography>
//           </CardContent>
//         </Card>

//         {/* View Toggle */}
//         <ToggleButtonGroup
//           value={view}
//           exclusive
//           onChange={(_, val) => val && setView(val)}
//           sx={{
//             backgroundColor: theme.palette.background.paper, // 👈 Makes it visible in both modes
//             color: theme.palette.text.primary,
//             borderRadius: 2,
//           }}
//         >
//           <ToggleButton value="kanban">Kanban View</ToggleButton>
//           <ToggleButton value="list">List View</ToggleButton>
//         </ToggleButtonGroup>

//         {view === "kanban" ? (
//           <KanbanBoard tasks={tasks} fetchTasks={fetchTasks} />
//         ) : (
//           <TaskList tasks={tasks} />
//         )}
//       </Box>
//     </Box>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import {
//   Box,
//   ToggleButtonGroup,
//   ToggleButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   useTheme,
// } from "@mui/material";
// import TaskList from "../components/TaskList";
// import Link from "next/link";
// import { logout } from "../logout/actions";
// import { createClient } from "../../../utils/supabase/client";
// import KanbanBoard from "./KanbanBoard";

// type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// };

// const drawerWidth = 280;

// export default function Dashboard() {
//   const theme = useTheme(); // Get Material-UI theme
//   const supabase = createClient();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [view, setView] = useState<"kanban" | "list">("kanban");
//   const [userEmail, setUserEmail] = useState<string | null>(null);

//   useEffect(() => {
//     fetchTasks();
//     fetchUser();
//   }, []);

//   const fetchTasks = async () => {
//     const { data, error } = await supabase.from("tasks").select("*");
//     if (error) console.error("Error fetching tasks:", error.message);
//     else if (Array.isArray(data)) {
//       setTasks(
//         data.map((task) => ({
//           ...task,
//           status: task.status as "Pending" | "In Progress" | "Completed",
//         }))
//       );
//     }
//   };

//   const fetchUser = async () => {
//     const { data: sessionData } = await supabase.auth.getSession();
//     const email = sessionData?.session?.user?.email ?? null;
//     setUserEmail(email);
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100vh",
//         backgroundColor: theme.palette.background.default,
//         color: theme.palette.text.primary,
//       }}
//     >
//       {/* Sidebar */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           position: "fixed",
//           height: "100vh",
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             backgroundColor: theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
//             color: theme.palette.text.primary,
//           },
//         }}
//       >
//         <List>
//           {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
//             (text) => (
//               <ListItem key={text} style={{ cursor: "pointer" }}>
//                 <Link
//                   href={text === "Create Task" ? "/create" : "#"}
//                   passHref
//                   style={{
//                     textDecoration: "none",
//                     color: theme.palette.text.primary,
//                     width: "100%",
//                   }}
//                 >
//                   <ListItemText primary={text} />
//                 </Link>
//               </ListItem>
//             )
//           )}
//         </List>

//         {/* Logout Button */}
//         <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
//           <form action={logout}>
//             <Button type="submit" variant="contained" color="secondary" fullWidth>
//               Logout
//             </Button>
//           </form>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1, overflowY: "auto", ml: `${drawerWidth}px`, p: 3, mt: "64px" }}>
//         {/* Welcome Section */}
//         <Card
//           sx={{
//             backgroundColor: theme.palette.mode === "dark" ? "#333" : theme.palette.primary.main,
//             color: theme.palette.text.primary,
//             mb: 3,
//             borderRadius: 2,
//             p: 2,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h5" fontWeight="bold">
//               Welcome, {userEmail || "Guest"}
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 1 }}>
//               Manage your tasks efficiently and stay organized!
//             </Typography>
//           </CardContent>
//         </Card>

//         {/* View Toggle */}
//         <ToggleButtonGroup
//           value={view}
//           exclusive
//           onChange={(_, val) => val && setView(val)}
//           sx={{
//             backgroundColor: theme.palette.background.paper,
//             color: theme.palette.text.primary,
//             borderRadius: 2,
//           }}
//         >
//           <ToggleButton
//             value="kanban"
//             sx={{
//               color: theme.palette.text.primary,
//               backgroundColor: theme.palette.mode === "dark" ? "#424242" : "inherit",
//               "&.Mui-selected": {
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.primary.contrastText,
//               },
//             }}
//           >
//             Kanban View
//           </ToggleButton>
//           <ToggleButton
//             value="list"
//             sx={{
//               color: theme.palette.text.primary,
//               backgroundColor: theme.palette.mode === "dark" ? "#424242" : "inherit",
//               "&.Mui-selected": {
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.primary.contrastText,
//               },
//             }}
//           >
//             List View
//           </ToggleButton>
//         </ToggleButtonGroup>

//         {view === "kanban" ? (
//           <KanbanBoard tasks={tasks} fetchTasks={fetchTasks} />
//         ) : (
//           <TaskList tasks={tasks} />
//         )}
//       </Box>
//     </Box>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import {
//   Box,
//   ToggleButtonGroup,
//   ToggleButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   useTheme,
// } from "@mui/material";
// import TaskList from "../components/TaskList";
// import Link from "next/link";
// import { logout } from "../logout/actions";
// import { createClient } from "../../../utils/supabase/client";
// import KanbanBoard from "./KanbanBoard";

// type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// };

// const drawerWidth = 280;

// export default function Dashboard() {
//   const theme = useTheme(); // Get Material-UI theme
//   const supabase = createClient();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [view, setView] = useState<"kanban" | "list">("kanban");
//   const [userEmail, setUserEmail] = useState<string | null>(null);

//   useEffect(() => {
//     fetchTasks();
//     fetchUser();
//   }, []);

//   const fetchTasks = async () => {
//     const { data, error } = await supabase.from("tasks").select("*");
//     if (error) console.error("Error fetching tasks:", error.message);
//     else if (Array.isArray(data)) {
//       setTasks(
//         data.map((task) => ({
//           ...task,
//           status: task.status as "Pending" | "In Progress" | "Completed",
//         }))
//       );
//     }
//   };

//   const fetchUser = async () => {
//     const { data: sessionData } = await supabase.auth.getSession();
//     const email = sessionData?.session?.user?.email ?? null;
//     setUserEmail(email);
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100vh",
//         backgroundColor: theme.palette.background.default,
//         color: theme.palette.text.primary,
//       }}
//     >
//       {/* Sidebar */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           position: "fixed",
//           height: "100vh",
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             backgroundColor: theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
//             color: theme.palette.text.primary,
//             paddingTop: "64px", // Push content below header
//           },
//         }}
//       >
//         <List>
//           {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
//             (text) => (
//               <ListItem key={text} style={{ cursor: "pointer" }}>
//                 <Link
//                   href={text === "Create Task" ? "/create" : "#"}
//                   passHref
//                   style={{
//                     textDecoration: "none",
//                     color: theme.palette.text.primary,
//                     width: "100%",
//                   }}
//                 >
//                   <ListItemText primary={text} />
//                 </Link>
//               </ListItem>
//             )
//           )}
//         </List>

//         {/* Logout Button */}
//         <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
//           <form action={logout}>
//             <Button type="submit" variant="contained" color="secondary" fullWidth>
//               Logout
//             </Button>
//           </form>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1, overflowY: "auto", ml: `${drawerWidth}px`, p: 3, mt: "64px" }}>
//         {/* Welcome Section */}
//         <Card
//           sx={{
//             backgroundColor: theme.palette.mode === "dark" ? "#333" : theme.palette.primary.main,
//             color: theme.palette.text.primary,
//             mb: 3,
//             borderRadius: 2,
//             p: 2,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h5" fontWeight="bold">
//               Welcome, {userEmail || "Guest"}
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 1 }}>
//               Manage your tasks efficiently and stay organized!
//             </Typography>
//           </CardContent>
//         </Card>

//         {/* View Toggle */}
//         <ToggleButtonGroup
//           value={view}
//           exclusive
//           onChange={(_, val) => val && setView(val)}
//           sx={{
//             backgroundColor: theme.palette.background.paper,
//             color: theme.palette.text.primary,
//             borderRadius: 2,
//           }}
//         >
//           <ToggleButton
//             value="kanban"
//             sx={{
//               color: theme.palette.text.primary,
//               backgroundColor: theme.palette.mode === "dark" ? "#424242" : "inherit",
//               "&.Mui-selected": {
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.primary.contrastText,
//               },
//             }}
//           >
//             Kanban View
//           </ToggleButton>
//           <ToggleButton
//             value="list"
//             sx={{
//               color: theme.palette.text.primary,
//               backgroundColor: theme.palette.mode === "dark" ? "#424242" : "inherit",
//               "&.Mui-selected": {
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.primary.contrastText,
//               },
//             }}
//           >
//             List View
//           </ToggleButton>
//         </ToggleButtonGroup>

//         {view === "kanban" ? (
//           <KanbanBoard tasks={tasks} fetchTasks={fetchTasks} />
//         ) : (
//           <TaskList tasks={tasks} />
//         )}
//       </Box>
//     </Box>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import {
//   Box,
//   ToggleButtonGroup,
//   ToggleButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   useTheme,
// } from "@mui/material";
// import TaskList from "../components/TaskList";
// import Link from "next/link";
// import { logout } from "../logout/actions";
// import { createClient } from "../../../utils/supabase/client";
// import KanbanBoard from "./KanbanBoard";

// type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// };

// const drawerWidth = 280;

// export default function Dashboard() {
//   const theme = useTheme(); // Get Material-UI theme
//   const supabase = createClient();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [view, setView] = useState<"kanban" | "list">("kanban");
//   const [userEmail, setUserEmail] = useState<string | null>(null);
//   const [userId, setUserId] = useState<string | null>(null);

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   useEffect(() => {
//     if (userId) {
//       fetchTasks();
//     }
//   }, [userId]);

//   const fetchTasks = async () => {
//     if (!userId) return;
//     const { data, error } = await supabase.from("tasks").select("*").eq("user_id", userId);
//     if (error) console.error("Error fetching tasks:", error.message);
//     else if (Array.isArray(data)) {
//       setTasks(
//         data.map((task) => ({
//           ...task,
//           status: task.status as "Pending" | "In Progress" | "Completed",
//         }))
//       );
//     }
//   };

//   const fetchUser = async () => {
//     const { data: sessionData, error } = await supabase.auth.getSession();
//     if (error) {
//       console.error("Error fetching user session:", error.message);
//       return;
//     }
//     const user = sessionData?.session?.user;
//     if (user?.id) {
//       console.log("Authenticated User ID:", user.id);
//       setUserId(user.id);
//       setUserEmail(user.email ?? null);
//     } else {
//       console.error("User ID is undefined");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100vh",
//         backgroundColor: theme.palette.background.default,
//         color: theme.palette.text.primary,
//       }}
//     >
//       {/* Sidebar */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           position: "fixed",
//           height: "100vh",
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             backgroundColor: theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
//             color: theme.palette.text.primary,
//             paddingTop: "64px",
//           },
//         }}
//       >
//         <List>
//           {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
//             (text) => (
//               <ListItem key={text} style={{ cursor: "pointer" }}>
//                 <Link
//                   href={text === "Create Task" ? "/create" : "#"}
//                   passHref
//                   style={{
//                     textDecoration: "none",
//                     color: theme.palette.text.primary,
//                     width: "100%",
//                   }}
//                 >
//                   <ListItemText primary={text} />
//                 </Link>
//               </ListItem>
//             )
//           )}
//         </List>

//         {/* Logout Button */}
//         <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
//           <form action={logout}>
//             <Button type="submit" variant="contained" color="secondary" fullWidth>
//               Logout
//             </Button>
//           </form>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1, overflowY: "auto", ml: `${drawerWidth}px`, p: 3, mt: "64px" }}>
//         {/* Welcome Section */}
//         <Card
//           sx={{
//             backgroundColor: theme.palette.mode === "dark" ? "#333" : theme.palette.primary.main,
//             color: theme.palette.text.primary,
//             mb: 3,
//             borderRadius: 2,
//             p: 2,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h5" fontWeight="bold">
//               Welcome, {userEmail || "Guest"}
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 1 }}>
//               Manage your tasks efficiently and stay organized!
//             </Typography>
//           </CardContent>
//         </Card>

//         {/* View Toggle */}
//         <ToggleButtonGroup
//           value={view}
//           exclusive
//           onChange={(_, val) => val && setView(val)}
//           sx={{
//             backgroundColor: theme.palette.background.paper,
//             color: theme.palette.text.primary,
//             borderRadius: 2,
//           }}
//         >
//           <ToggleButton
//             value="kanban"
//             sx={{
//               color: theme.palette.text.primary,
//               backgroundColor: theme.palette.mode === "dark" ? "#424242" : "inherit",
//               "&.Mui-selected": {
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.primary.contrastText,
//               },
//             }}
//           >
//             Kanban View
//           </ToggleButton>
//           <ToggleButton
//             value="list"
//             sx={{
//               color: theme.palette.text.primary,
//               backgroundColor: theme.palette.mode === "dark" ? "#424242" : "inherit",
//               "&.Mui-selected": {
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.primary.contrastText,
//               },
//             }}
//           >
//             List View
//           </ToggleButton>
//         </ToggleButtonGroup>

//         {view === "kanban" ? (
//           <KanbanBoard tasks={tasks} fetchTasks={fetchTasks} />
//         ) : (
//           <TaskList tasks={tasks} />
//         )}
//       </Box>
//     </Box>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import {
//   Box,
//   ToggleButtonGroup,
//   ToggleButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   useTheme,
// } from "@mui/material";
// import TaskList from "../components/TaskList";
// import Link from "next/link";
// import { logout } from "../logout/actions";
// import { createClient } from "../../../utils/supabase/client";
// import KanbanBoard from "./KanbanBoard";

// type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// };

// const drawerWidth = 280;

// export default function Dashboard() {
//   const theme = useTheme();
//   const supabase = createClient();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [view, setView] = useState<"kanban" | "list">("kanban");
//   const [userEmail, setUserEmail] = useState<string | null>(null);
//   const [userId, setUserId] = useState<string | null>(null);

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   useEffect(() => {
//     if (userId) {
//       fetchTasks();
//     }
//   }, [userId]);

//   const fetchTasks = async () => {
//     if (!userId) return;
//     const { data, error } = await supabase.from("tasks").select("*").eq("user_id", userId);
//     if (error) console.error("Error fetching tasks:", error.message);
//     else if (Array.isArray(data)) {
//       setTasks(
//         data.map((task) => ({
//           ...task,
//           status: task.status as "Pending" | "In Progress" | "Completed",
//         }))
//       );
//     }
//   };

//   const fetchUser = async () => {
//     const { data: sessionData, error } = await supabase.auth.getSession();
//     if (error) {
//       console.error("Error fetching user session:", error.message);
//       return;
//     }
//     const user = sessionData?.session?.user;
//     if (user?.id) {
//       setUserId(user.id);
//       setUserEmail(user.email ?? null);
//     } else {
//       console.error("User ID is undefined");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100vh",
//         backgroundColor: theme.palette.background.default,
//         color: theme.palette.text.primary,
//       }}
//     >
//       {/* Sidebar */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           position: "fixed",
//           height: "100vh",
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             backgroundColor: theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
//             color: theme.palette.text.primary,
//             paddingTop: "64px",
//           },
//         }}
//       >
//         <List>
//           {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
//             (text) => (
//               <ListItem key={text} style={{ cursor: "pointer" }}>
//                 <Link
//                   href={text === "Create Task" ? "/create" : "#"}
//                   passHref
//                   style={{
//                     textDecoration: "none",
//                     color: theme.palette.text.primary,
//                     width: "100%",
//                   }}
//                 >
//                   <ListItemText primary={text} />
//                 </Link>
//               </ListItem>
//             )
//           )}
//         </List>

//         {/* Logout Button */}
//         <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
//           <form action={logout}>
//             <Button type="submit" variant="contained" color="secondary" fullWidth>
//               Logout
//             </Button>
//           </form>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1, overflowY: "auto", ml: `${drawerWidth}px`, p: 3, mt: "64px" }}>
//         {/* Welcome Section */}
//         <Card
//           sx={{
//             backgroundColor: theme.palette.mode === "dark" ? "#333" : theme.palette.primary.main,
//             color: theme.palette.text.primary,
//             mb: 3,
//             borderRadius: 2,
//             p: 2,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h5" fontWeight="bold">
//               Welcome, {userEmail || "Guest"}
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 1 }}>
//               Manage your tasks efficiently and stay organized!
//             </Typography>
//           </CardContent>
//         </Card>

//         {/* View Toggle */}
//         <ToggleButtonGroup
//           value={view}
//           exclusive
//           onChange={(_, val) => val && setView(val)}
//           sx={{
//             backgroundColor: theme.palette.background.paper,
//             color: theme.palette.text.primary,
//             borderRadius: 2,
//           }}
//         >
//           <ToggleButton
//             value="kanban"
//             sx={{
//               color: theme.palette.text.primary,
//               backgroundColor: theme.palette.mode === "dark" ? "#424242" : "inherit",
//               "&.Mui-selected": {
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.primary.contrastText,
//               },
//             }}
//           >
//             Kanban View
//           </ToggleButton>
//           <ToggleButton
//             value="list"
//             sx={{
//               color: theme.palette.text.primary,
//               backgroundColor: theme.palette.mode === "dark" ? "#424242" : "inherit",
//               "&.Mui-selected": {
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.primary.contrastText,
//               },
//             }}
//           >
//             List View
//           </ToggleButton>
//         </ToggleButtonGroup>

//         {/* Task Views */}
//         {view === "kanban" ? (
//           <KanbanBoard tasks={tasks} fetchTasks={fetchTasks} />
//         ) : (
//           <TaskList tasks={tasks} />
//         )}
//       </Box>
//     </Box>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import {
//   Box,
//   ToggleButtonGroup,
//   ToggleButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   useTheme,
// } from "@mui/material";
// import TaskList from "../components/TaskList";
// import Link from "next/link";
// import { logout } from "../logout/actions";
// import { createClient } from "../../../utils/supabase/client";
// import KanbanBoard from "./KanbanBoard";

// type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// };

// const drawerWidth = 280;

// export default function Dashboard() {
//   const theme = useTheme();
//   const supabase = createClient();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [view, setView] = useState<"kanban" | "list">("kanban");
//   const [userEmail, setUserEmail] = useState<string | null>(null);
//   const [userId, setUserId] = useState<string | null>(null);

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   useEffect(() => {
//     if (userId) {
//       fetchTasks();
//     }
//   }, [userId]);

//   const fetchTasks = async () => {
//     if (!userId) return;
//     const { data, error } = await supabase.from("tasks").select("*").eq("user_id", userId);
//     if (error) {
//       console.error("Error fetching tasks:", error.message);
//     } else {
//       setTasks(
//         data.map((task) => ({
//           ...task,
//           status: task.status as "Pending" | "In Progress" | "Completed",
//         }))
//       );
//     }
//   };

//   const fetchUser = async () => {
//     const { data: sessionData, error } = await supabase.auth.getSession();
//     if (error) {
//       console.error("Error fetching user session:", error.message);
//       return;
//     }
//     const user = sessionData?.session?.user;
//     if (user?.id) {
//       setUserId(user.id);
//       setUserEmail(user.email ?? null);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100vh",
//         backgroundColor: theme.palette.background.default,
//         color: theme.palette.text.primary,
//       }}
//     >
//       {/* Sidebar */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           position: "fixed",
//           height: "100vh",
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             backgroundColor: theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
//             color: theme.palette.text.primary,
//             paddingTop: "64px",
//           },
//         }}
//       >
//         <List>
//           {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
//             (text) => (
//               <ListItem key={text} style={{ cursor: "pointer" }}>
//                 <Link
//                   href={text === "Create Task" ? "/create" : "#"}
//                   passHref
//                   style={{
//                     textDecoration: "none",
//                     color: theme.palette.text.primary,
//                     width: "100%",
//                   }}
//                 >
//                   <ListItemText primary={text} />
//                 </Link>
//               </ListItem>
//             )
//           )}
//         </List>

//         {/* Logout Button */}
//         <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
//           <form action={logout}>
//             <Button type="submit" variant="contained" color="secondary" fullWidth>
//               Logout
//             </Button>
//           </form>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1, overflowY: "auto", ml: `${drawerWidth}px`, p: 3, mt: "64px" }}>
//         {/* Welcome Section */}
//         <Card
//           sx={{
//             backgroundColor: theme.palette.mode === "dark" ? "#333" : theme.palette.primary.main,
//             color: theme.palette.text.primary,
//             mb: 3,
//             borderRadius: 2,
//             p: 2,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h5" fontWeight="bold">
//               Welcome, {userEmail || "Guest"}
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 1 }}>
//               Manage your tasks efficiently and stay organized!
//             </Typography>
//           </CardContent>
//         </Card>

//         {/* View Toggle */}
//         <ToggleButtonGroup
//           value={view}
//           exclusive
//           onChange={(_, val) => val && setView(val)}
//           sx={{
//             backgroundColor: theme.palette.background.paper,
//             color: theme.palette.text.primary,
//             borderRadius: 2,
//           }}
//         >
//           <ToggleButton value="kanban">Kanban View</ToggleButton>
//           <ToggleButton value="list">List View</ToggleButton>
//         </ToggleButtonGroup>

//         {/* Task Views */}
//         {view === "kanban" ? <KanbanBoard tasks={tasks} fetchTasks={fetchTasks} /> : <TaskList tasks={tasks} />}
//       </Box>
//     </Box>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import {
//   Box,
//   ToggleButtonGroup,
//   ToggleButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   useTheme,
// } from "@mui/material";
// import TaskList from "../components/TaskList";
// import Link from "next/link";
// import { logout } from "../logout/actions";
// import { createClient } from "../../../utils/supabase/client";
// import { useRouter } from "next/navigation";
// import KanbanBoard from "./KanbanBoard";

// type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// };

// const drawerWidth = 280;

// export default function Dashboard() {
//   const theme = useTheme();
//   const router = useRouter();
//   const supabase = createClient();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [view, setView] = useState<"kanban" | "list">("kanban");
//   const [userEmail, setUserEmail] = useState<string | null>(null);
//   const [userId, setUserId] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     checkUserRole();
//   }, []);

//   useEffect(() => {
//     if (userId) {
//       fetchTasks();
//     }
//   }, [userId]);

//   const checkUserRole = async () => {
//     const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
//     if (sessionError) {
//       console.error("Error fetching session:", sessionError.message);
//       router.push("/login");
//       return;
//     }

//     const user = sessionData?.session?.user;
//     if (!user) {
//       router.push("/login");
//       return;
//     }

//     const { data: profile, error: profileError } = await supabase
//       .from("profiles")
//       .select("role")
//       .eq("user_id", user.id)
//       .single();

//     if (profileError || !profile) {
//       console.error("Error fetching profile:", profileError?.message);
//       router.push("/login");
//       return;
//     }

//     if (profile.role === "admin") {
//       router.push("/admindashboard");
//       return;
//     }

//     if (profile.role !== "user") {
//       router.push("/login");
//       return;
//     }

//     setUserId(user.id);
//     setUserEmail(user.email ?? null);
//     setLoading(false);
//   };

//   const fetchTasks = async () => {
//     if (!userId) return;
//     const { data, error } = await supabase.from("tasks").select("*").eq("user_id", userId);
//     if (error) {
//       console.error("Error fetching tasks:", error.message);
//     } else {
//       setTasks(
//         data.map((task) => ({
//           ...task,
//           status: task.status as "Pending" | "In Progress" | "Completed",
//         }))
//       );
//     }
//   };

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <Typography variant="h6">Loading...</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100vh",
//         backgroundColor: theme.palette.background.default,
//         color: theme.palette.text.primary,
//       }}
//     >
//       {/* Sidebar */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           position: "fixed",
//           height: "100vh",
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             backgroundColor: theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
//             color: theme.palette.text.primary,
//             paddingTop: "64px",
//           },
//         }}
//       >
//         <List>
//           <ListItem style={{ cursor: "pointer" }}>
//             <Link
//               href="/create"
//               passHref
//               style={{
//                 textDecoration: "none",
//                 color: theme.palette.text.primary,
//                 width: "100%",
//               }}
//             >
//               <ListItemText primary="Create Task" />
//             </Link>
//           </ListItem>
//           <ListItem style={{ cursor: "pointer" }}>
//             <Link
//               href="/user"
//               passHref
//               style={{
//                 textDecoration: "none",
//                 color: theme.palette.text.primary,
//                 width: "100%",
//               }}
//             >
//               <ListItemText primary="Account" />
//             </Link>
//           </ListItem>
//         </List>

//         {/* Logout Button */}
//         <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
//           <form action={logout}>
//             <Button type="submit" variant="contained" color="secondary" fullWidth>
//               Logout
//             </Button>
//           </form>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1, overflowY: "auto", ml: `${drawerWidth}px`, p: 3, mt: "64px" }}>
//         {/* Welcome Section */}
//         <Card
//           sx={{
//             backgroundColor: theme.palette.mode === "dark" ? "#333" : theme.palette.primary.main,
//             color: theme.palette.text.primary,
//             mb: 3,
//             borderRadius: 2,
//             p: 2,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h5" fontWeight="bold">
//               Welcome, {userEmail || "Guest"}
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 1 }}>
//               Manage your tasks efficiently and stay organized!
//             </Typography>
//           </CardContent>
//         </Card>

//         {/* View Toggle */}
//         <ToggleButtonGroup
//           value={view}
//           exclusive
//           onChange={(_, val) => val && setView(val)}
//           sx={{
//             backgroundColor: theme.palette.background.paper,
//             color: theme.palette.text.primary,
//             borderRadius: 2,
//           }}
//         >
//           <ToggleButton value="kanban">Kanban View</ToggleButton>
//           <ToggleButton value="list">List View</ToggleButton>
//         </ToggleButtonGroup>

//         {/* Task Views */}
//         {view === "kanban" ? <KanbanBoard /> : <TaskList />}
//       </Box>
//     </Box>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { logout } from "../logout/actions";
import { createClient } from "../../../utils/supabase/client";
import { useRouter } from "next/navigation";
import TaskList from "../components/TaskList";
import KanbanBoard from "./KanbanBoard";

const drawerWidth = 280;

export default function Dashboard() {
  const theme = useTheme();
  const router = useRouter();
  const supabase = createClient();
  const [view, setView] = useState<"kanban" | "list">("kanban");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUserRole();
  }, []);

  const checkUserRole = async () => {
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !sessionData?.session?.user) {
      console.error("Error fetching session:", sessionError?.message);
      router.push("/");
      return;
    }

    const user = sessionData.session.user;
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("user_id", user.id)
      .single();

    if (profileError || !profile) {
      console.error("Error fetching profile:", profileError?.message);
      router.push("/");
      return;
    }

    if (profile.role === "admin") {
      router.push("/admindashboard");
      return;
    }

    if (profile.role !== "user") {
      router.push("/");
      return;
    }

    setUserEmail(user.email ?? null);
    setLoading(false);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          position: "fixed",
          height: "100vh",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
            color: theme.palette.text.primary,
            paddingTop: "64px",
          },
        }}
      >
        <List>
          <ListItem>
            <Link href="/create" passHref style={{ textDecoration: "none", color: theme.palette.text.primary, width: "100%" }}>
              <ListItemText primary="Create Task" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/user" passHref style={{ textDecoration: "none", color: theme.palette.text.primary, width: "100%" }}>
              <ListItemText primary="Account" />
            </Link>
          </ListItem>
        </List>

        {/* Logout Button */}
        <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
        <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 2 }}
            onClick={() => router.push("/dashboard")}
          >
            Go to Dashboard
          </Button>
          <form action={logout}>
            <Button type="submit" variant="contained" color="secondary" fullWidth>
              Logout
            </Button>
          </form>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, overflowY: "auto", ml: `${drawerWidth}px`, p: 3, mt: "64px" }}>
        {/* Welcome Section */}
        <Card sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.text.primary, mb: 3, borderRadius: 2, p: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold">
              Welcome, {userEmail || "Guest"}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Manage your tasks efficiently and stay organized!
            </Typography>
          </CardContent>
        </Card>

        {/* View Toggle */}
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(_, val) => val && setView(val)}
          sx={{ backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary, borderRadius: 2 }}
        >
          <ToggleButton value="kanban">Kanban View</ToggleButton>
          <ToggleButton value="list">List View</ToggleButton>
        </ToggleButtonGroup>

        {/* Task Views (Each Component Fetches Its Own Data) */}
        {view === "kanban" ? <KanbanBoard /> : <TaskList />}
      </Box>
    </Box>
  );
}
