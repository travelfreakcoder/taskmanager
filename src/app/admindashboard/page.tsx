// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
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
// // import AdminTaskList from "../components/AdminTaskList";
// import Link from "next/link";
// import { logout } from "../logout/actions";
// import { createClient } from "../../../utils/supabase/client";
// import AdminKanbanBoard from "./AdminKanbanBoard";
// import AdminTaskList from "./AdminTaskList";
// // import AdminKanbanBoard from "../dashboard/AdminKanbanBoard";

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

// export default function AdminDashboard() {
//   const theme = useTheme();
//   const supabase = createClient();
//   const router = useRouter();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [view, setView] = useState<"kanban" | "list">("kanban");
//   const [adminEmail, setAdminEmail] = useState<string | null>(null);

//   useEffect(() => {
//     fetchAdmin();
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     const { data, error } = await supabase.from("tasks").select("*");
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

//   const fetchAdmin = async () => {
//     const { data: sessionData, error } = await supabase.auth.getSession();
//     if (error || !sessionData?.session?.user) {
//       router.push("/");
//       return;
//     }
//     const user = sessionData.session.user;
//     if (user?.id) {
//       setAdminEmail(user.email ?? null);
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
//           {["Dashboard", "Users", "Reports", "Settings"].map((text) => (
//             <ListItem key={text} style={{ cursor: "pointer" }}>
//               <Link
//                 href="#"
//                 passHref
//                 style={{
//                   textDecoration: "none",
//                   color: theme.palette.text.primary,
//                   width: "100%",
//                 }}
//               >
//                 <ListItemText primary={text} />
//               </Link>
//             </ListItem>
//           ))}
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
//               Hello, {adminEmail || "Admin"} 👋
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 1 }}>
//               Here you can manage tasks across all users efficiently!
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
//         {view === "kanban" ? <AdminKanbanBoard  /> : <AdminTaskList  />}
//       </Box>
//     </Box>
//   );
// }

// tasks={tasks} fetchTasks={fetchTasks}

// tasks={tasks}

// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
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
// import Link from "next/link";
// import { logout } from "../logout/actions";
// import { createClient } from "../../../utils/supabase/client";
// import AdminKanbanBoard from "./AdminKanbanBoard";
// import AdminTaskList from "./AdminTaskList";

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

// export default function AdminDashboard() {
//   const theme = useTheme();
//   const supabase = createClient();
//   const router = useRouter();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [view, setView] = useState<"kanban" | "list">("kanban");
//   const [adminEmail, setAdminEmail] = useState<string | null>(null);

//   useEffect(() => {
//     fetchAdmin();
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     const { data, error } = await supabase.from("tasks").select("*");
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

//   const fetchAdmin = async () => {
//     const { data: sessionData, error } = await supabase.auth.getSession();
//     if (error || !sessionData?.session?.user) {
//       router.push("/");
//       return;
//     }
//     const user = sessionData.session.user;
//     if (user?.id) {
//       setAdminEmail(user.email ?? null);
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
//             backgroundColor:
//               theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
//             color: theme.palette.text.primary,
//             paddingTop: "64px",
//           },
//         }}
//       >
//         <List>
//           <ListItem style={{ cursor: "pointer" }}>
//             <Link
//               href="#"
//               passHref
//               style={{
//                 textDecoration: "none",
//                 color: theme.palette.text.primary,
//                 width: "100%",
//               }}
//             >
//               <ListItemText primary="Manage Account" />
//             </Link>
//           </ListItem>
//         </List>

//         {/* Logout Button */}
//         <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
//         <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         sx={{ mb: 2 }}
//         onClick={() => router.push("/dashboard")}
//       >
//         Go to Dashboard
//       </Button>
//           <form
//             action={async () => {
//               await logout();
//               router.push("/admindashboard");
//             }}
//           >
//             <Button
//               type="submit"
//               variant="contained"
//               color="secondary"
//               fullWidth
//             >
//               Logout
//             </Button>
//           </form>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
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
//             backgroundColor:
//               theme.palette.mode === "dark"
//                 ? "#333"
//                 : theme.palette.primary.main,
//             color: theme.palette.text.primary,
//             mb: 3,
//             borderRadius: 2,
//             p: 2,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h5" fontWeight="bold">
//               Hello, {adminEmail || "Admin"} 👋
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 1 }}>
//               Here you can manage tasks across all users efficiently!
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
//         {view === "kanban" ? <AdminKanbanBoard /> : <AdminTaskList />}
//       </Box>
//     </Box>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  CircularProgress,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { logout } from "../logout/actions";
import { createClient } from "../../../utils/supabase/client";
import AdminKanbanBoard from "./AdminKanbanBoard";
import AdminTaskList from "./AdminTaskList";

type Task = {
  id: string;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  due_date: string;
  created_at: string;
  user_id: string;
};

const drawerWidth = 280;

export default function AdminDashboard() {
  const theme = useTheme();
  const supabase = createClient();
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [view, setView] = useState<"kanban" | "list">("kanban");
  const [adminEmail, setAdminEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAdminAccess();
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data, error } = await supabase.from("tasks").select("*");
    if (error) {
      console.error("Error fetching tasks:", error.message);
    } else {
      setTasks(
        data.map((task) => ({
          ...task,
          status: task.status as "Pending" | "In Progress" | "Completed",
        }))
      );
    }
  };

  const checkAdminAccess = async () => {
    setLoading(true);

    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !sessionData?.session?.user) {
      router.push("/");
      return;
    }

    const userId = sessionData.session.user.id;
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("email, role")
      .eq("user_id", userId)
      .single();

    if (profileError || profile?.role !== "admin") {
      router.push("/");
      return;
    }

    setAdminEmail(profile.email);
    setLoading(false);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
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
            backgroundColor:
              theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
            color: theme.palette.text.primary,
            paddingTop: "64px",
          },
        }}
      >
        <List>
          <ListItem style={{ cursor: "pointer" }}>
            <Link
              href="/adminaccount"
              passHref
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                width: "100%",
              }}
            >
              <ListItemText primary="Manage Account" />
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
            onClick={() => router.push("/admindashboard")}
          >
            Go to Dashboard
          </Button>
          <form
            action={async () => {
              await logout();
              router.push("/admindashboard");
            }}
          >
            <Button type="submit" variant="contained" color="secondary" fullWidth>
              Logout
            </Button>
          </form>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          ml: `${drawerWidth}px`,
          p: 3,
          mt: "64px",
        }}
      >
        {/* Welcome Section */}
        <Card
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? "#333"
                : theme.palette.primary.main,
            color: theme.palette.text.primary,
            mb: 3,
            borderRadius: 2,
            p: 2,
          }}
        >
          <CardContent>
            <Typography variant="h5" fontWeight="bold">
              Hello, {adminEmail || "Admin"} 👋
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Here you can manage tasks across all users efficiently!
            </Typography>
          </CardContent>
        </Card>

        {/* View Toggle */}
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(_, val) => val && setView(val)}
          sx={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderRadius: 2,
          }}
        >
          <ToggleButton value="kanban">Kanban View</ToggleButton>
          <ToggleButton value="list">List View</ToggleButton>
        </ToggleButtonGroup>

        {/* Task Views */}
        {view === "kanban" ? <AdminKanbanBoard /> : <AdminTaskList />}
      </Box>
    </Box>
  );
}
