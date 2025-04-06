


// import { redirect } from "next/navigation";
// import { createClient } from "../../utils/supabase/server";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
// } from "@mui/material";
// import TaskList from "./components/TaskList";
// import Link from "next/link";

// const drawerWidth = "30vw";

// export default async function Home() {
//   const supabase = await createClient();
//   const { data, error } = await supabase.auth.getUser();

//   if (error || !data?.user) {
//     redirect("/login");
//   }

//   console.log("User ID:", data.user.id);

//   const { data: tasks, error: tasksError } = await supabase
//     .from("tasks")
//     .select("*")
//     .eq("user_id", data.user.id);

//   if (tasksError) {
//     console.error("Error fetching tasks:", tasksError.message);
//     return <Box>Error loading tasks</Box>;
//   }

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100vh",
//         flexDirection: "column",
//         backgroundColor: "#f4f6f8",
//         p: 2,
//       }}
//     >
//       <Box sx={{ display: "flex", flexGrow: 1, position: "relative" }}>
//         <Drawer
//           variant="persistent"
//           open
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             [`& .MuiDrawer-paper`]: {
//               width: drawerWidth,
//               boxSizing: "border-box",
//               backgroundColor: "#1E1E1E",
//               color: "white",
//               position: "relative",
//             },
//           }}
//         >
//           <List>
//             {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings", "Logout"].map(
//               (text) => (
//                 <ListItem key={text} style={{ cursor: "pointer" }}>
//                   <Link
//                     href={text === "Create Task" ? "/create" : "#"}
//                     passHref
//                     style={{
//                       textDecoration: "none",
//                       color: "inherit",
//                       width: "100%",
//                     }}
//                   >
//                     <ListItemText primary={text} sx={{ textAlign: "center" }} />
//                   </Link>
//                 </ListItem>
//               )
//             )}
//           </List>
//         </Drawer>
//         <Box sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
//           <Card
//             sx={{
//               backgroundColor: "#6200ea",
//               color: "white",
//               mb: 3,
//               borderRadius: 2,
//               p: 2,
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" fontWeight="bold">
//                 Welcome, {data?.user?.email}
//               </Typography>
//               <Typography variant="body1" sx={{ mt: 1 }}>
//                 Manage your tasks efficiently and stay organized!
//               </Typography>
//             </CardContent>
//           </Card>

//           {/* Pass tasks to TaskList */}
//           <TaskList tasks={tasks} />
//         </Box>
//       </Box>
//     </Box>
//   );
// }



// import { redirect } from "next/navigation";
// import { createClient } from "../../utils/supabase/server";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
// } from "@mui/material";
// import TaskList from "./components/TaskList";
// import Link from "next/link";
// import { logout } from "./logout/actions"

// const drawerWidth = "30vw";

// export default async function Home() {
//   const supabase = await createClient();
//   const { data, error } = await supabase.auth.getUser();

//   if (error || !data?.user) {
//     redirect("/login");
//   }

//   console.log("User ID:", data.user.id);

//   const { data: tasks, error: tasksError } = await supabase
//     .from("tasks")
//     .select("*")
//     .eq("user_id", data.user.id);

//   if (tasksError) {
//     console.error("Error fetching tasks:", tasksError.message);
//     return <Box>Error loading tasks</Box>;
//   }

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100vh",
//         flexDirection: "column",
//         backgroundColor: "#f4f6f8",
//         p: 2,
//       }}
//     >
//       <Box sx={{ display: "flex", flexGrow: 1, position: "relative" }}>
//         <Drawer
//           variant="persistent"
//           open
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             [`& .MuiDrawer-paper`]: {
//               width: drawerWidth,
//               boxSizing: "border-box",
//               backgroundColor: "#1E1E1E",
//               color: "white",
//               position: "relative",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               p: 2,
//             },
//           }}
//         >
//           <List>
//             {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
//               (text) => (
//                 <ListItem key={text} style={{ cursor: "pointer" }}>
//                   <Link
//                     href={text === "Create Task" ? "/create" : "#"}
//                     passHref
//                     style={{
//                       textDecoration: "none",
//                       color: "inherit",
//                       width: "100%",
//                     }}
//                   >
//                     <ListItemText primary={text} sx={{ textAlign: "center" }} />
//                   </Link>
//                 </ListItem>
//               )
//             )}
//           </List>

//           {/* Logout Button at Bottom */}
//           <Box sx={{ textAlign: "center", mt: "auto" }}>
//             <form action={logout}>
//               <Button type="submit" variant="contained" color="secondary" fullWidth>
//                 Logout
//               </Button>
//             </form>
//           </Box>
//         </Drawer>
//         <Box sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
//           <Card
//             sx={{
//               backgroundColor: "#6200ea",
//               color: "white",
//               mb: 3,
//               borderRadius: 2,
//               p: 2,
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" fontWeight="bold">
//                 Welcome, {data?.user?.email}
//               </Typography>
//               <Typography variant="body1" sx={{ mt: 1 }}>
//                 Manage your tasks efficiently and stay organized!
//               </Typography>
//             </CardContent>
//           </Card>

//           {/* Pass tasks to TaskList */}
//           <TaskList tasks={tasks} />
//         </Box>
//       </Box>
//     </Box>
//   );
// }


// import { redirect } from "next/navigation";
// import { createClient } from "../../utils/supabase/server";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
// } from "@mui/material";
// import TaskList from "./components/TaskList";
// import Link from "next/link";
// import { logout } from "./logout/actions";

// const drawerWidth = "30vw";

// export default async function Home() {
//   const supabase = await createClient();

//   // Get active session instead of just the user
//   const { data: sessionData } = await supabase.auth.getSession();

//   // Redirect if user is not authenticated
//   if (!sessionData?.session) {
//     redirect("/login");
//   }
  

//   console.log("User ID:", sessionData.session.user.id);

//   // Fetch tasks for the logged-in user
//   const { data: tasks, error: tasksError } = await supabase
//     .from("tasks")
//     .select("*")
//     .eq("user_id", sessionData.session.user.id);

//   if (tasksError) {
//     console.error("Error fetching tasks:", tasksError.message);
//     return <Box>Error loading tasks</Box>;


//   }

//   if(!tasks && !sessionData?.session?.user?.id ){
//     redirect("/login")
//   }

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100vh",
//         flexDirection: "column",
//         backgroundColor: "#f4f6f8",
//         p: 2,
//       }}
//     >
//       <Box sx={{ display: "flex", flexGrow: 1, position: "relative" }}>
//         <Drawer
//           variant="persistent"
//           open
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             [`& .MuiDrawer-paper`]: {
//               width: drawerWidth,
//               boxSizing: "border-box",
//               backgroundColor: "#1E1E1E",
//               color: "white",
//               position: "relative",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               p: 2,
//             },
//           }}
//         >
//           <List>
//             {["Create Task", "Dashboard", "Patients", "Appointments", "Reports", "Settings"].map(
//               (text) => (
//                 <ListItem key={text} style={{ cursor: "pointer" }}>
//                   <Link
//                     href={text === "Create Task" ? "/create" : "#"}
//                     passHref
//                     style={{
//                       textDecoration: "none",
//                       color: "inherit",
//                       width: "100%",
//                     }}
//                   >
//                     <ListItemText primary={text} sx={{ textAlign: "center" }} />
//                   </Link>
//                 </ListItem>
//               )
//             )}
//           </List>

//           {/* Logout Button at Bottom */}
//           <Box sx={{ textAlign: "center", mt: "auto" }}>
//             <form action={logout}>
//               <Button type="submit" variant="contained" color="secondary" fullWidth>
//                 Logout
//               </Button>
//             </form>
//           </Box>
//         </Drawer>
//         <Box sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
//           <Card
//             sx={{
//               backgroundColor: "#6200ea",
//               color: "white",
//               mb: 3,
//               borderRadius: 2,
//               p: 2,
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" fontWeight="bold">
//                 Welcome, {sessionData?.session?.user?.email}
//               </Typography>
//               <Typography variant="body1" sx={{ mt: 1 }}>
//                 Manage your tasks efficiently and stay organized!
//               </Typography>
//             </CardContent>
//           </Card>

//           {/* Pass tasks to TaskList */}
//           <TaskList tasks={tasks} />
//         </Box>
//       </Box>
//     </Box>
//   );
// }


// "use client";

// import { useState } from "react";

// import { TextField, Button, Container, Typography, CircularProgress, Box, Alert } from "@mui/material";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { login } from "./login/actions";

// export default function LoginPage() {
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const router = useRouter();

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     const formData = new FormData(event.currentTarget);
//     const response = await login(formData);

//     if (response?.success === false) {
//       setError(response.message);
//       setLoading(false);
//     }
//   }

//   return (
//     <Container maxWidth="xs" sx={{ mt: 5, textAlign: "center" }}>
//       <Typography variant="h5" gutterBottom>
//         Log In
//       </Typography>

//       {error && <Alert severity="error">{error}</Alert>}

//       <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//         <TextField label="Email" name="email" type="email" required fullWidth />
//         <TextField label="Password" name="password" type="password" required fullWidth />

//         <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
//           {loading ? <CircularProgress size={24} /> : "Log in"}
//         </Button>
//         <Typography variant="body2" sx={{ mt: 2 }}>
//         Don't have an account? <Link href="/signup">Sign up here</Link>
//       </Typography>
//         {/* <Button href="/signup" type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
//           Signup
//         </Button> */}
//       </Box>
      
     
//     </Container>
//   );
// }

"use client";

import { useState } from "react";
import { TextField, Button, Container, Typography, CircularProgress, Box, Alert } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "./login/actions";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const response = await login(formData);

    if (response?.success === false) {
      setError(response.message);
      setLoading(false);
    }
  }

  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: "64px", // 👈 Moves content below the fixed header
        minHeight: "calc(100vh - 64px)", // 👈 Ensures it's properly centered
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Log In
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Email" name="email" type="email" required fullWidth />
        <TextField label="Password" name="password" type="password" required fullWidth />

        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
          {loading ? <CircularProgress size={24} /> : "Log in"}
        </Button>
        
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account? <Link href="/signup">Sign up here</Link>
        </Typography>
      </Box>
    </Container>
  );
}
