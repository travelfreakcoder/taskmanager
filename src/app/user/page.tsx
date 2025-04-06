// "use client";

// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import {
//   Box,
//   Drawer,
//   MenuItem,
//   ListItem,
//   ListItemText,
//   List,
//   TextField,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   CircularProgress,
// } from "@mui/material";

// import { createClient } from "../../../utils/supabase/client";
// import { useTheme } from "@mui/material/styles";
// import Link from "next/link";
// import { logout } from "../logout/actions";
// import { useRouter } from "next/navigation";


// // Profile type definition
// type Profile = {
//   user_id: string;
//   email: string;
//   role: string;
// };

// const drawerWidth = 280;

// export default function UserProfile() {
//   const supabase = createClient();
//   const [userId, setUserId] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   const theme = useTheme();
//   const router = useRouter();

//   const { register, handleSubmit, setValue } = useForm<Profile>();

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   useEffect(() => {
//     if (userId) {
//       fetchUserProfile();
//     }
//   }, [userId]);

//   const fetchUser = async () => {
//     const { data: sessionData, error } = await supabase.auth.getSession();
//     if (error) {
//       console.error("Error fetching user session:", error.message);
//       return;
//     }
//     const user = sessionData?.session?.user;
//     if (user?.id) {
//       setUserId(user.id);
//     }
//   };

//   const fetchUserProfile = async () => {
//     if (!userId) return;
//     setLoading(true);
//     const { data, error } = await supabase
//       .from("profiles")
//       .select("user_id, email, role")
//       .eq("user_id", userId)
//       .single();

//     if (error) {
//       console.error("Error fetching profile:", error.message);
//     } else if (data) {
//       setValue("user_id", data.user_id);
//       setValue("email", data.email);
//       setValue("role", data.role);
//     }
//     setLoading(false);
//   };

//   const onSubmit = async (formData: Profile) => {
//     if (!userId) return;

//     const { error } = await supabase
//       .from("profiles")
//       .update({
//         email: formData.email,
//         role: formData.role,
//       })
//       .eq("user_id", userId);

//     if (error) {
//       console.error("Error updating profile:", error.message);
//     } else {
//       alert("Profile updated successfully!");
//     }
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ display: "flex", height: "100vh", backgroundColor: theme.palette.background.default }}>
//       {/* Sidebar */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           zIndex: theme.zIndex.drawer, // Ensure it's below AppBar (1201)
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             backgroundColor: theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
//             color: theme.palette.text.primary,
//             paddingTop: "64px",
//           },
//         }}
//       >
//         <List>
//           <ListItem>
//             <Link href="/create" passHref style={{ textDecoration: "none", color: theme.palette.text.primary, width: "100%" }}>
//               <ListItemText primary="Create Task" />
//             </Link>
//           </ListItem>
//           <ListItem>
//             <Link href="/user" passHref style={{ textDecoration: "none", color: theme.palette.text.primary, width: "100%" }}>
//               <ListItemText primary="Account" />
//             </Link>
//           </ListItem>
//         </List>
//         <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mb: 2 }}
//             onClick={() => router.push("/dashboard")}
//           >
//             Go to Dashboard
//           </Button>
//           <form action={logout}>
//             <Button type="submit" variant="contained" color="secondary" fullWidth>
//               Logout
//             </Button>
//           </form>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box
//         sx={{
//           flexGrow: 1,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           mt: "64px", // Matches AppBar height
//           ml: `${drawerWidth}px`, // Prevents sidebar overlap
//           p: 3,
//         }}
//       >
//         <Card sx={{ width: 450, p: 3, boxShadow: 3, borderRadius: 2 }}>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             Profile Details
//           </Typography>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField
//               label="Email"
//               {...register("email")}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Role"
//               {...register("role")}
//               fullWidth
//               margin="normal"
//             />
//             {/* <Button type="submit" variant="contained" color="primary" fullWidth>
//               Save Changes
//             </Button> */}
//           </form>
//         </CardContent>
//         </Card>
//       </Box>
//     </Box>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Drawer,
  ListItem,
  ListItemText,
  List,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";

import { createClient } from "../../../utils/supabase/client";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { logout } from "../logout/actions";
import { useRouter } from "next/navigation";

// Profile type definition
type Profile = {
  user_id: string;
  email: string;
  role: string;
};

const drawerWidth = 280;

export default function UserProfile() {
  const supabase = createClient();
  const [userId, setUserId] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm<Profile>();

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  const fetchUser = async () => {
    const { data: sessionData, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Error fetching user session:", error.message);
      return;
    }
    const user = sessionData?.session?.user;
    if (user?.id) {
      setUserId(user.id);
    }
  };

  const fetchUserProfile = async () => {
    if (!userId) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .select("user_id, email, role")
      .eq("user_id", userId)
      .single();

    if (error) {
      console.error("Error fetching profile:", error.message);
    } else if (data) {
      setValue("user_id", data.user_id);
      setValue("email", data.email);
      setValue("role", data.role);
      setUserRole(data.role);
    }
    setLoading(false);
  };

  const onSubmit = async (formData: Profile) => {
    if (!userId) return;

    const { error } = await supabase
      .from("profiles")
      .update({
        email: formData.email,
        role: formData.role,
      })
      .eq("user_id", userId);

    if (error) {
      console.error("Error updating profile:", error.message);
    } else {
      alert("Profile updated successfully!");
    }
  };

  useEffect(() => {
    if (!loading && userRole !== "user") {
      router.push("/dashboard");
    }
  }, [userRole, loading, router]);

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
          zIndex: theme.zIndex.drawer, 
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
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "64px",
          ml: `${drawerWidth}px`,
          p: 3,
        }}
      >
        <Card sx={{ width: 450, p: 3, boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Profile Details
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Email"
                {...register("email")}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Role"
                {...register("role")}
                fullWidth
                margin="normal"
                disabled // Prevent role editing
              />
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
