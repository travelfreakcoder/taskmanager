// "use client";

// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useRouter, useParams } from "next/navigation";
// import {
//   Box,
//   Button,
//   TextField,
//   MenuItem,
//   Typography,
//   Card,
//   CardContent,
//   CircularProgress,
// } from "@mui/material";
// import { createClient } from "../../../../utils/supabase/client";
// import { User } from "@supabase/supabase-js"; // Import User type

// interface TaskFormData {
//   title: string;
//   description: string;
//   status: string;
//   due_date: string;
// }

// export default function EditTask() {
//   const supabase = createClient();
//   const router = useRouter();
//   const { id } = useParams();
//   const [loading, setLoading] = useState(false);
//   const [fetching, setFetching] = useState(true);
//   const [taskStatus, setTaskStatus] = useState("");
//   const [user, setUser] = useState<User | null>(null); // Corrected typing

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<TaskFormData>();

//   useEffect(() => {
//     const checkUser = async () => {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();
//       if (!user) {
//         router.push("/");
//       } else {
//         setUser(user);
//       }
//     };

//     checkUser();
//   }, [supabase, router]);

//   useEffect(() => {
//     if (!user) return;

//     const fetchTask = async () => {
//       const { data, error } = await supabase
//         .from("tasks")
//         .select("*")
//         .eq("id", id)
//         .single();
//       if (error) {
//         console.error("Error fetching task:", error.message);
//         return;
//       }
//       if (data) {
//         setValue("title", data.title);
//         setValue("description", data.description);
//         setValue("status", data.status);
//         setTaskStatus(data.status);
//         setValue("due_date", data.due_date);
//       }
//       setFetching(false);
//     };

//     if (id) fetchTask();
//   }, [id, user, supabase, setValue]);

//   const onSubmit = async (data: TaskFormData) => {
//     setLoading(true);
//     const { error } = await supabase
//       .from("tasks")
//       .update({
//         title: data.title,
//         description: data.description,
//         status: data.status,
//         due_date: data.due_date,
//       })
//       .eq("id", id);

//     if (error) {
//       console.error("Error updating task:", error.message);
//       alert("Error updating task!");
//     } else {
//       router.push("/dashboard");
//     }
//     setLoading(false);
//   };

//   if (!user || fetching) {
//     return (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <Card sx={{ width: 400, p: 3, boxShadow: 3 }}>
//         <CardContent>
//           <Typography
//             variant="h5"
//             fontWeight="bold"
//             textAlign="center"
//             gutterBottom
//           >
//             Edit Task
//           </Typography>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField
//               fullWidth
//               label="Title"
//               {...register("title", { required: "Title is required" })}
//               error={!!errors.title}
//               sx={{ mb: 2 }}
//             />
//             {errors.title && (
//               <Typography color="error">{errors.title.message}</Typography>
//             )}

//             <TextField
//               fullWidth
//               label="Description"
//               multiline
//               rows={3}
//               {...register("description", {
//                 required: "Description is required",
//               })}
//               error={!!errors.description}
//               sx={{ mb: 2 }}
//             />
//             {errors.description && (
//               <Typography color="error">
//                 {errors.description.message}
//               </Typography>
//             )}

//             <TextField
//               select
//               fullWidth
//               label="Status"
//               value={taskStatus}
//               {...register("status", { required: "Status is required" })}
//               onChange={(e) => {
//                 setValue("status", e.target.value);
//                 setTaskStatus(e.target.value);
//               }}
//               error={!!errors.status}
//               sx={{ mb: 2 }}
//             >
//               <MenuItem value="Pending">Pending</MenuItem>
//               <MenuItem value="In Progress">In Progress</MenuItem>
//               <MenuItem value="Completed">Completed</MenuItem>
//             </TextField>
//             {errors.status && (
//               <Typography color="error">{errors.status.message}</Typography>
//             )}

//             <TextField
//               fullWidth
//               label="Due Date"
//               type="date"
//               {...register("due_date", { required: "Due date is required" })}
//               error={!!errors.due_date}
//               InputLabelProps={{ shrink: true }}
//               sx={{ mb: 2 }}
//             />
//             {errors.due_date && (
//               <Typography color="error">{errors.due_date.message}</Typography>
//             )}

//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               disabled={loading}
//             >
//               {loading ? "Updating..." : "Update Task"}
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
import { useRouter, useParams } from "next/navigation";
import {
  Box,
  Drawer,
  Button,
  TextField,
  MenuItem,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { createClient } from "../../../../utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { logout } from "../../../app/logout/actions"

interface TaskFormData {
  title: string;
  description: string;
  status: string;
  due_date: string;
}

const drawerWidth = 280;

export default function EditTask() {
  const supabase = createClient();
  const router = useRouter();
  const theme = useTheme();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [taskStatus, setTaskStatus] = useState("");
  const [user, setUser] = useState<User | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TaskFormData>();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/");
        return;
      }

      // Fetch user role from `profiles` table
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("user_id", user.id)
        .single();

      if (error || !profile || profile.role !== "user") {
        router.push("/admindashboard"); // Redirect unauthorized users
        return;
      }

      setUser(user);
    };

    checkUser();
  }, [supabase, router]);

  useEffect(() => {
    if (!user) return;

    const fetchTask = async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        console.error("Error fetching task:", error.message);
        return;
      }
      if (data) {
        setValue("title", data.title);
        setValue("description", data.description);
        setValue("status", data.status);
        setTaskStatus(data.status);
        setValue("due_date", data.due_date);
      }
      setFetching(false);
    };

    if (id) fetchTask();
  }, [id, user, supabase, setValue]);

  const onSubmit = async (data: TaskFormData) => {
    setLoading(true);
    const { error } = await supabase
      .from("tasks")
      .update({
        title: data.title,
        description: data.description,
        status: data.status,
        due_date: data.due_date,
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating task:", error.message);
      alert("Error updating task!");
    } else {
      router.push("/dashboard");
    }
    setLoading(false);
  };

  if (!user || fetching) {
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
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            Edit Task
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="Title"
              {...register("title", { required: "Title is required" })}
              error={!!errors.title}
              sx={{ mb: 2 }}
            />
            {errors.title && (
              <Typography color="error">{errors.title.message}</Typography>
            )}

            <TextField
              fullWidth
              label="Description"
              multiline
              rows={3}
              {...register("description", {
                required: "Description is required",
              })}
              error={!!errors.description}
              sx={{ mb: 2 }}
            />
            {errors.description && (
              <Typography color="error">
                {errors.description.message}
              </Typography>
            )}

            <TextField
              select
              fullWidth
              label="Status"
              value={taskStatus}
              {...register("status", { required: "Status is required" })}
              onChange={(e) => {
                setValue("status", e.target.value);
                setTaskStatus(e.target.value);
              }}
              error={!!errors.status}
              sx={{ mb: 2 }}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </TextField>
            {errors.status && (
              <Typography color="error">{errors.status.message}</Typography>
            )}

            <TextField
              fullWidth
              label="Due Date"
              type="date"
              {...register("due_date", { required: "Due date is required" })}
              error={!!errors.due_date}
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
            {errors.due_date && (
              <Typography color="error">{errors.due_date.message}</Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Task"}
            </Button>
          </form>
        </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
