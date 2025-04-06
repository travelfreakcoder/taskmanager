// "use client";

// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { v4 as uuidv4 } from "uuid";
// import { Box, Button, TextField, MenuItem, Typography, Card, CardContent, CircularProgress } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";
// // import { createClient } from "../../utils/supabase/client"; // Adjust the path if needed

// interface TaskFormData {
//   title: string;
//   description: string;
//   status: string;
//   due_date: string;
// }

// export function CreateTask() {
//   const supabase = createClient();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [userId, setUserId] = useState<string | null>(null);

//   const { register, handleSubmit, formState: { errors } } = useForm<TaskFormData>();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const { data: userData } = await supabase.auth.getUser();
//       if (!userData?.user) {
//         router.push("/"); // Redirect to login if not authenticated
//       } else {
//         setUserId(userData.user.id);
//       }
//       setCheckingAuth(false);
//     };

//     checkAuth();
//   }, [router]);

//   const onSubmit = async (data: TaskFormData) => {
//     if (!userId) return;

//     setLoading(true);
//     const taskId = uuidv4();

//     const { error } = await supabase.from("tasks").insert([
//       {
//         id: taskId,
//         title: data.title,
//         description: data.description,
//         status: data.status,
//         due_date: data.due_date,
//         created_at: new Date().toISOString(),
//         user_id: userId,
//       }
//     ]);

//     if (error) {
//       console.error("Error creating task:", error.message);
//       alert("Error creating task!");
//     } else {
//       router.push("/dashboard");
//     }

//     setLoading(false);
//   };

//   if (checkingAuth) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//       <Card sx={{ width: 400, p: 3, boxShadow: 3 }}>
//         <CardContent>
//           <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
//             Create Task
//           </Typography>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField
//               fullWidth
//               label="Title"
//               {...register("title", { required: "Title is required" })}
//               error={!!errors.title}
//               sx={{ mb: 2 }}
//             />
//             {errors.title && <Typography color="error">{errors.title.message}</Typography>}

//             <TextField
//               fullWidth
//               label="Description"
//               multiline
//               rows={3}
//               {...register("description", { required: "Description is required" })}
//               error={!!errors.description}
//               sx={{ mb: 2 }}
//             />
//             {errors.description && <Typography color="error">{errors.description.message}</Typography>}

//             <TextField
//               select
//               fullWidth
//               label="Status"
//               {...register("status", { required: "Status is required" })}
//               error={!!errors.status}
//               sx={{ mb: 2 }}
//             >
//               <MenuItem value="Pending">Pending</MenuItem>
//               <MenuItem value="In Progress">In Progress</MenuItem>
//               <MenuItem value="Completed">Completed</MenuItem>
//             </TextField>
//             {errors.status && <Typography color="error">{errors.status.message}</Typography>}

//             <TextField
//               fullWidth
//               label="Due Date"
//               type="date"
//               {...register("due_date", { required: "Due date is required" })}
//               error={!!errors.due_date}
//               InputLabelProps={{ shrink: true }}
//               sx={{ mb: 2 }}
//             />
//             {errors.due_date && <Typography color="error">{errors.due_date.message}</Typography>}

//             <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
//               {loading ? "Creating..." : "Create Task"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { v4 as uuidv4 } from "uuid";
// import { Box, Button, TextField, MenuItem, Typography, Card, CardContent, CircularProgress } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";
// // import { createClient } from "@/utils/supabase/client";

// interface TaskFormData {
//   title: string;
//   description: string;
//   status: string;
//   due_date: string;
// }

// export default function CreateTask() {
//   const supabase = createClient();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [userId, setUserId] = useState<string | null>(null);

//   const { register, handleSubmit, formState: { errors } } = useForm<TaskFormData>();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const { data: { user }, error } = await supabase.auth.getUser();

//       if (error || !user) {
//         router.push("/"); // Redirect to login if not authenticated
//       } else {
//         setUserId(user.id);
//       }

//       setCheckingAuth(false);
//     };

//     checkAuth();
//   }, [router]);

//   const onSubmit = async (data: TaskFormData) => {
//     if (!userId) return;

//     setLoading(true);
//     const taskId = uuidv4();

//     const { error } = await supabase.from("tasks").insert([
//       {
//         id: taskId,
//         title: data.title,
//         description: data.description,
//         status: data.status,
//         due_date: data.due_date,
//         created_at: new Date().toISOString(),
//         user_id: userId,
//       }
//     ]);

//     if (error) {
//       console.error("Error creating task:", error.message);
//       alert("Error creating task! " + error.message);
//     } else {
//       router.push("/dashboard");
//     }

//     setLoading(false);
//   };

//   if (checkingAuth) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//       <Card sx={{ width: 400, p: 3, boxShadow: 3 }}>
//         <CardContent>
//           <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
//             Create Task
//           </Typography>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField
//               fullWidth
//               label="Title"
//               {...register("title", { required: "Title is required" })}
//               error={!!errors.title}
//               helperText={errors.title?.message}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               fullWidth
//               label="Description"
//               multiline
//               rows={3}
//               {...register("description", { required: "Description is required" })}
//               error={!!errors.description}
//               helperText={errors.description?.message}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               select
//               fullWidth
//               label="Status"
//               {...register("status", { required: "Status is required" })}
//               error={!!errors.status}
//               helperText={errors.status?.message}
//               sx={{ mb: 2 }}
//             >
//               <MenuItem value="Pending">Pending</MenuItem>
//               <MenuItem value="In Progress">In Progress</MenuItem>
//               <MenuItem value="Completed">Completed</MenuItem>
//             </TextField>

//             <TextField
//               fullWidth
//               label="Due Date"
//               type="date"
//               {...register("due_date", { required: "Due date is required" })}
//               error={!!errors.due_date}
//               helperText={errors.due_date?.message}
//               InputLabelProps={{ shrink: true }}
//               sx={{ mb: 2 }}
//             />

//             <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
//               {loading ? <CircularProgress size={24} /> : "Create Task"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { v4 as uuidv4 } from "uuid";
// import { Box, Button, TextField, MenuItem, Typography, Card, CardContent, CircularProgress } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";

// interface TaskFormData {
//   title: string;
//   description: string;
//   status: string;
//   due_date: string;
// }

// export default function CreateTask() {
//   const supabase = createClient();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [userId, setUserId] = useState<string | null>(null);

//   const { register, handleSubmit, formState: { errors } } = useForm<TaskFormData>();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const { data: { user }, error } = await supabase.auth.getUser();

//       if (error || !user) {
//         router.push("/");
//       } else {
//         setUserId(user.id);
//       }

//       setCheckingAuth(false);
//     };

//     checkAuth();
//   }, [router]);

//   const onSubmit = async (data: TaskFormData) => {
//     if (!userId) return;

//     setLoading(true);
//     const taskId = uuidv4();

//     const { error } = await supabase.from("tasks").insert([
//       {
//         id: taskId,
//         title: data.title,
//         description: data.description,
//         status: data.status,
//         due_date: data.due_date,
//         created_at: new Date().toISOString(),
//         user_id: userId,
//       }
//     ]);

//     if (error) {
//       console.error("Error creating task:", error.message);
//       alert("Error creating task! " + error.message);
//     } else {
//       router.push("/dashboard");
//     }

//     setLoading(false);
//   };

//   if (checkingAuth) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", px: 3, py: 4 }}>
//       <Box sx={{ alignSelf: "flex-end", mb: 2 }}>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={() => router.push("/dashboard")}
//         >
//           Go to Dashboard
//         </Button>
//       </Box>
//       <Card sx={{ width: 400, p: 3, boxShadow: 3 }}>
//         <CardContent>
//           <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
//             Create Task
//           </Typography>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField
//               fullWidth
//               label="Title"
//               {...register("title", { required: "Title is required" })}
//               error={!!errors.title}
//               helperText={errors.title?.message}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               fullWidth
//               label="Description"
//               multiline
//               rows={3}
//               {...register("description", { required: "Description is required" })}
//               error={!!errors.description}
//               helperText={errors.description?.message}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               select
//               fullWidth
//               label="Status"
//               {...register("status", { required: "Status is required" })}
//               error={!!errors.status}
//               helperText={errors.status?.message}
//               sx={{ mb: 2 }}
//             >
//               <MenuItem value="Pending">Pending</MenuItem>
//               <MenuItem value="In Progress">In Progress</MenuItem>
//               <MenuItem value="Completed">Completed</MenuItem>
//             </TextField>

//             <TextField
//               fullWidth
//               label="Due Date"
//               type="date"
//               {...register("due_date", { required: "Due date is required" })}
//               error={!!errors.due_date}
//               helperText={errors.due_date?.message}
//               InputLabelProps={{ shrink: true }}
//               sx={{ mb: 2 }}
//             />

//             <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
//               {loading ? <CircularProgress size={24} /> : "Create Task"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { v4 as uuidv4 } from "uuid";
// import { Box, Button, TextField, MenuItem, Typography, Card, CardContent, CircularProgress } from "@mui/material";
// import { createClient } from "../../../utils/supabase/client";

// interface TaskFormData {
//   title: string;
//   description: string;
//   status: string;
//   due_date: string;
// }

// export default function CreateTask() {
//   const supabase = createClient();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [userId, setUserId] = useState<string | null>(null);

//   const { register, handleSubmit, formState: { errors } } = useForm<TaskFormData>();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const { data: { user }, error } = await supabase.auth.getUser();

//       if (error || !user) {
//         router.push("/");
//         return;
//       }

//       const { data: profile, error: profileError } = await supabase
//         .from("profiles")
//         .select("role")
//         .eq("user_id", user.id)
//         .single();

//       if (profileError || profile?.role !== "user") {
//         router.push("/dashboard"); // Redirect admins or unauthorized users
//         return;
//       }

//       setUserId(user.id);
//       setCheckingAuth(false);
//     };

//     checkAuth();
//   }, [router]);

//   const onSubmit = async (data: TaskFormData) => {
//     if (!userId) return;

//     setLoading(true);
//     const taskId = uuidv4();

//     const { error } = await supabase.from("tasks").insert([
//       {
//         id: taskId,
//         title: data.title,
//         description: data.description,
//         status: data.status,
//         due_date: data.due_date,
//         created_at: new Date().toISOString(),
//         user_id: userId,
//       }
//     ]);

//     if (error) {
//       console.error("Error creating task:", error.message);
//       alert("Error creating task! " + error.message);
//     } else {
//       router.push("/dashboard");
//     }

//     setLoading(false);
//   };

//   if (checkingAuth) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", px: 3, py: 4 }}>
//       <Box sx={{ alignSelf: "flex-end", mb: 2 }}>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={() => router.push("/dashboard")}
//         >
//           Go to Dashboard
//         </Button>
//       </Box>
//       <Card sx={{ width: 400, p: 3, boxShadow: 3 }}>
//         <CardContent>
//           <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
//             Create Task
//           </Typography>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField
//               fullWidth
//               label="Title"
//               {...register("title", { required: "Title is required" })}
//               error={!!errors.title}
//               helperText={errors.title?.message}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               fullWidth
//               label="Description"
//               multiline
//               rows={3}
//               {...register("description", { required: "Description is required" })}
//               error={!!errors.description}
//               helperText={errors.description?.message}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               select
//               fullWidth
//               label="Status"
//               {...register("status", { required: "Status is required" })}
//               error={!!errors.status}
//               helperText={errors.status?.message}
//               sx={{ mb: 2 }}
//             >
//               <MenuItem value="Pending">Pending</MenuItem>
//               <MenuItem value="In Progress">In Progress</MenuItem>
//               <MenuItem value="Completed">Completed</MenuItem>
//             </TextField>

//             <TextField
//               fullWidth
//               label="Due Date"
//               type="date"
//               {...register("due_date", { required: "Due date is required" })}
//               error={!!errors.due_date}
//               helperText={errors.due_date?.message}
//               InputLabelProps={{ shrink: true }}
//               sx={{ mb: 2 }}
//             />

//             <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
//               {loading ? <CircularProgress size={24} /> : "Create Task"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { createClient } from "../../../utils/supabase/client";
import { logout } from "../logout/actions";

interface TaskFormData {
  title: string;
  description: string;
  status: string;
  due_date: string;
}

const drawerWidth = 280;

export default function CreateTask() {
  const supabase = createClient();
  const router = useRouter();
  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        router.push("/");
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("user_id", user.id)
        .single();

      if (profileError || profile?.role !== "user") {
        router.push("/dashboard");
        return;
      }

      setUserId(user.id);
      setCheckingAuth(false);
    };

    checkAuth();
  }, [router]);

  const onSubmit = async (data: TaskFormData) => {
    if (!userId) return;

    setLoading(true);
    const taskId = uuidv4();

    const { error } = await supabase.from("tasks").insert([
      {
        id: taskId,
        title: data.title,
        description: data.description,
        status: data.status,
        due_date: data.due_date,
        created_at: new Date().toISOString(),
        user_id: userId,
      },
    ]);

    if (error) {
      console.error("Error creating task:", error.message);
      alert("Error creating task! " + error.message);
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  };

  if (checkingAuth) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
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
          zIndex: theme.zIndex.drawer, // Ensure it's below AppBar (1201)
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
          mt: "64px", // Matches AppBar height
          ml: `${drawerWidth}px`, // Prevents sidebar overlap
          p: 3,
        }}
      >
        <Card sx={{ width: 450, p: 3, boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
              Create Task
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField fullWidth label="Title" {...register("title", { required: "Title is required" })} error={!!errors.title} helperText={errors.title?.message} sx={{ mb: 2 }} />
              <TextField fullWidth label="Description" multiline rows={3} {...register("description", { required: "Description is required" })} error={!!errors.description} helperText={errors.description?.message} sx={{ mb: 2 }} />
              <TextField select fullWidth label="Status" {...register("status", { required: "Status is required" })} error={!!errors.status} helperText={errors.status?.message} sx={{ mb: 2 }}>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </TextField>
              <TextField fullWidth label="Due Date" type="date" {...register("due_date", { required: "Due date is required" })} error={!!errors.due_date} helperText={errors.due_date?.message} InputLabelProps={{ shrink: true }} sx={{ mb: 3 }} />
              <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} sx={{ py: 1.2 }}>
                {loading ? <CircularProgress size={24} /> : "Create Task"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
