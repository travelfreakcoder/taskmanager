// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { createClient } from "../../../utils/supabase/client";
// import {
//   Box,
//   Drawer,
//   ListItem,
//   ListItemText,
//   List,

//   Card,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   Button,
// } from "@mui/material";
// import Link from "next/link";
// import { useTheme } from "@mui/material/styles";
// import { logout } from "../logout/actions";

// type Profile = {
//   email: string;
//   role: string;
// };

// type User = {
//   user_id: string;
//   email: string;
// };

// const drawerWidth = 280;

// export default function AdminAccount() {
//   const supabase = createClient();
//   const router = useRouter();
//   const theme = useTheme();
//   const [loading, setLoading] = useState(true);
//   const [users, setUsers] = useState<User[]>([]);
//   const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<Profile>();

//   useEffect(() => {
//     fetchAdminProfile();
//     fetchUsers();
//   }, []);

//   const fetchAdminProfile = async () => {
//     setLoading(true);
//     const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
//     if (sessionError || !sessionData?.session?.user) {
//       router.push("/");
//       return;
//     }

//     const userId = sessionData.session.user.id;
//     const { data: profile, error: profileError } = await supabase
//       .from("profiles")
//       .select("email, role")
//       .eq("user_id", userId)
//       .single();

//     if (profileError) {
//       console.error("Error fetching admin profile:", profileError.message);
//     } else {
//       setValue("email", profile.email);
//       setValue("role", profile.role);
//     }
//     setLoading(false);
//   };

//   const fetchUsers = async () => {
//     const { data, error } = await supabase
//       .from("profiles")
//       .select("user_id, email")
//       .eq("role", "user");

//     if (error) {
//       console.error("Error fetching users:", error.message);
//     } else {
//       setUsers(data);
//     }
//   };

//   const onSubmit = async (data: Profile) => {
//     const { data: sessionData } = await supabase.auth.getSession();
//     const userId = sessionData?.session?.user?.id;

//     if (!userId) return;

//     const { error } = await supabase
//       .from("profiles")
//       .update({ email: data.email })
//       .eq("user_id", userId);

//     if (error) {
//       console.error("Error updating profile:", error.message);
//     } else {
//       alert("Profile updated successfully!");
//     }
//   };

//   return (
//     <Box
//   sx={{
//     display: "flex",
//     height: "100vh",
//     backgroundColor: theme.palette.background.default,
//   }}
// >
//   {/* Sidebar */}
//   <Drawer
//     variant="permanent"
//     sx={{
//       width: drawerWidth,
//       flexShrink: 0,
//       zIndex: theme.zIndex.drawer, // Ensure it's below AppBar (1201)
//       "& .MuiDrawer-paper": {
//         width: drawerWidth,
//         backgroundColor: theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
//         color: theme.palette.text.primary,
//         paddingTop: "64px",
//       },
//     }}
//   >
//     <List>
//       {/* <ListItem>
//         <Link
//           href="/create"
//           passHref
//           style={{
//             textDecoration: "none",
//             color: theme.palette.text.primary,
//             width: "100%",
//           }}
//         >
//           <ListItemText primary="Create Task" />
//         </Link>
//       </ListItem> */}
//       <ListItem>
//         <Link
//           href="/adminaccount"
//           passHref
//           style={{
//             textDecoration: "none",
//             color: theme.palette.text.primary,
//             width: "100%",
//           }}
//         >
//           <ListItemText primary="Account" />
//         </Link>
//       </ListItem>
//     </List>
//     <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         sx={{ mb: 2 }}
//         onClick={() => router.push("/dashboard")}
//       >
//         Go to Dashboard
//       </Button>
//       <form action={logout}>
//         <Button type="submit" variant="contained" color="secondary" fullWidth>
//           Logout
//         </Button>
//       </form>
//     </Box>
//   </Drawer>

//   {/* Main Content */}
//   <Box
//   sx={{
//     flexGrow: 1,
//     display: "flex",
//     flexDirection: "column", // <-- This ensures vertical stacking
//     justifyContent: "center",
//     alignItems: "center",
//     mt: "64px",
//     ml: `${drawerWidth}px`,
//     p: 3,
//     gap: 3, // <-- Adds spacing between the two sections
//   }}
// >

//     <Card sx={{ mb: 4, p: 3, boxShadow: 3 }}>
//       <CardContent>
//         <Typography variant="h5" fontWeight="bold" mb={2}>
//           Admin Details
//         </Typography>
//         {loading ? (
//           <CircularProgress />
//         ) : (
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField
//               label="Email"
//               fullWidth
//               margin="normal"
//               {...register("email", { required: "Email is required" })}
//               error={!!errors.email}
//               helperText={errors.email?.message}
//             />
//             <TextField
//               label="Role"
//               fullWidth
//               margin="normal"
//               disabled
//               {...register("role")}
//             />
//             {/* <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               sx={{ mt: 2 }}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Updating..." : "Update Profile"}
//             </Button> */}
//           </form>
//         )}
//       </CardContent>
//     </Card>

//     <Card sx={{ p: 3, boxShadow: 3 }}>
//       <CardContent>
//         <Typography variant="h5" fontWeight="bold" mb={2}>
//           All Users
//         </Typography>
//         {users.length === 0 ? (
//           <Typography>No users found.</Typography>
//         ) : (
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Email</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {users.map((user) => (
//                   <TableRow key={user.user_id}>
//                     <TableCell>{user.email}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}
//       </CardContent>
//     </Card>
//   </Box>
// </Box>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createClient } from "../../../utils/supabase/client";
import {
  Box,
  Drawer,
  ListItem,
  ListItemText,
  List,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { logout } from "../logout/actions";

type Profile = {
  email: string;
  role: string;
};

type User = {
  user_id: string;
  email: string;
};

const drawerWidth = 280;

export default function AdminAccount() {
  const supabase = createClient();
  const router = useRouter();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<Profile>();

  useEffect(() => {
    checkAdminAccess();
  }, []);

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

    setValue("email", profile.email);
    setValue("role", profile.role);
    fetchUsers();
    setLoading(false);
  };

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("user_id, email")
      .eq("role", "user");

    if (error) {
      console.error("Error fetching users:", error.message);
    } else {
      setUsers(data);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: theme.palette.background.default }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
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
            <Link href="/adminaccount" passHref style={{ textDecoration: "none", color: theme.palette.text.primary, width: "100%" }}>
              <ListItemText primary="Manage Account" />
            </Link>
          </ListItem>
        </List>
        <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
          <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }} onClick={() => router.push("/admindashboard")}>
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
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          mt: "64px",
          ml: `${drawerWidth}px`,
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {/* Admin Details */}
          <Card sx={{ width: "450px", p: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" mb={2}>
                Admin Details
              </Typography>
              <form onSubmit={handleSubmit(() => {})}>
                <TextField label="Email" fullWidth margin="normal" {...register("email")} disabled />
                <TextField label="Role" fullWidth margin="normal" {...register("role")} disabled />
              </form>
            </CardContent>
          </Card>

          {/* All Users */}
          <Card sx={{ flex: 1, p: 3, minWidth: "450px", boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" mb={2}>
                All Users
              </Typography>
              {users.length === 0 ? (
                <Typography>No users found.</Typography>
              ) : (
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Email</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.user_id}>
                          <TableCell>{user.email}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
