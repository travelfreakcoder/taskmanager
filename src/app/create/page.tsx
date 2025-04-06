// // // "use client";

import CreateTask from "./CreateTask";

// import { CreateTask } from "./CreateTask";

// import CreateTask from "./CreateTask";

// import CreateTask from "./CreateTask";

// // // import { useState } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { useForm } from "react-hook-form";
// // // // import { createClient } from "../../utils/supabase/client";
// // // import { Box, Button, TextField, MenuItem, Typography, Paper } from "@mui/material";
// // // import { createClient } from "../../../utils/supabase/client";

// // // const statusOptions = ["Pending", "In Progress", "Completed"];

// // // export default function CreateTask() {
// // //   const router = useRouter();
// // //   const supabase = createClient();
// // //   const { register, handleSubmit, reset, formState: { errors } } = useForm();

// // //   const [loading, setLoading] = useState(false);

// // //   const onSubmit = async (data: any) => {
// // //     setLoading(true);
// // //     const { error } = await supabase.from("tasks").insert([
// // //       {
// // //         title: data.title,
// // //         description: data.description,
// // //         status: data.status,
// // //         due_date: data.due_date,
// // //         created_at: new Date().toISOString(),
// // //       },
// // //     ]);

// // //     setLoading(false);

// // //     if (error) {
// // //       console.error("Error creating task:", error.message);
// // //     } else {
// // //       reset(); // Reset form fields after submission
// // //       router.push("/"); // Redirect to the main task list page
// // //     }
// // //   };

// // //   return (
// // //     <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f4f6f8" }}>
// // //       <Paper sx={{ p: 4, width: "400px", boxShadow: 3 }}>
// // //         <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
// // //           Create Task
// // //         </Typography>
// // //         <form onSubmit={handleSubmit(onSubmit)}>
// // //           <TextField
// // //             label="Title"
// // //             fullWidth
// // //             margin="normal"
// // //             {...register("title", { required: "Title is required" })}
// // //           />
// // //           {errors?.title && <p style={{ color: "red", fontSize: "14px", margin: "4px 0" }}>{errors?.title?.message}</p>}

// // //           <TextField
// // //             label="Description"
// // //             fullWidth
// // //             margin="normal"
// // //             multiline
// // //             rows={3}
// // //             {...register("description")}
// // //           />

// // //           <TextField
// // //             select
// // //             label="Status"
// // //             fullWidth
// // //             margin="normal"
// // //             defaultValue="Pending"
// // //             {...register("status")}
// // //           >
// // //             {statusOptions.map((option) => (
// // //               <MenuItem key={option} value={option}>
// // //                 {option}
// // //               </MenuItem>
// // //             ))}
// // //           </TextField>

// // //           <TextField
// // //             label="Due Date"
// // //             type="date"
// // //             fullWidth
// // //             margin="normal"
// // //             InputLabelProps={{ shrink: true }}
// // //             {...register("due_date", { required: "Due date is required" })}
// // //           />
// // //           {errors.due_date && <p style={{ color: "red", fontSize: "14px", margin: "4px 0" }}>{errors.due_date.message}</p>}

// // //           <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={loading}>
// // //             {loading ? "Creating..." : "Create Task"}
// // //           </Button>
// // //         </form>
// // //       </Paper>
// // //     </Box>
// // //   );
// // // }



// // // "use client";

// // // import { useState } from "react";
// // // import { useForm } from "react-hook-form";
// // // import { useRouter } from "next/navigation";
// // // // import { createClient } from "../../utils/supabase/client";
// // // import {
// // //   Box,
// // //   Button,
// // //   TextField,
// // //   MenuItem,
// // //   Typography,
// // //   Card,
// // //   CardContent,
// // // } from "@mui/material";
// // // import { createClient } from "../../../utils/supabase/client";

// // // export default function CreateTask() {
// // //   const supabase = createClient();
// // //   const router = useRouter();
// // //   const [loading, setLoading] = useState(false);

// // //   const {
// // //     register,
// // //     handleSubmit,
// // //     formState: { errors },
// // //   } = useForm({
// // //     defaultValues: {
// // //       title: "",
// // //       description: "",
// // //       status: "Pending",
// // //       due_date: "",
// // //     },
// // //   });

// // //   // Handle Task Submission
// // //   const onSubmit = async (data: any) => {
// // //     setLoading(true);

// // //     const { error } = await supabase.from("tasks").insert([
// // //       {
// // //         title: data.title,
// // //         description: data.description,
// // //         status: data.status,
// // //         due_date: data.due_date,
// // //         created_at: new Date().toISOString(),
// // //       },
// // //     ]);

// // //     setLoading(false);

// // //     if (error) {
// // //       console.error("Error creating task:", error.message);
// // //     } else {
// // //       router.push("/"); // Redirect to task list after creating
// // //     }
// // //   };

// // //   return (
// // //     <Box
// // //       sx={{
// // //         display: "flex",
// // //         justifyContent: "center",
// // //         alignItems: "center",
// // //         height: "100vh",
// // //         backgroundColor: "#f4f6f8",
// // //       }}
// // //     >
// // //       <Card sx={{ width: "400px", p: 3, boxShadow: 3 }}>
// // //         <CardContent>
// // //           <Typography variant="h5" fontWeight="bold" gutterBottom>
// // //             Create New Task
// // //           </Typography>

// // //           <form onSubmit={handleSubmit(onSubmit)}>
// // //             {/* Title Field */}
// // //             <TextField
// // //               label="Title"
// // //               fullWidth
// // //               margin="normal"
// // //               {...register("title", { required: "Title is required" })}
// // //             />
// // //             {errors.title?.message && <p style={{ color: "red" }}>{errors.title.message}</p>}

// // //             {/* Description Field */}
// // //             <TextField
// // //               label="Description"
// // //               fullWidth
// // //               margin="normal"
// // //               multiline
// // //               rows={3}
// // //               {...register("description", { required: "Description is required" })}
// // //             />
// // //             {errors.description?.message && <p style={{ color: "red" }}>{errors.description.message}</p>}

// // //             {/* Status Dropdown */}
// // //             <TextField
// // //               label="Status"
// // //               select
// // //               fullWidth
// // //               margin="normal"
// // //               defaultValue="Pending"
// // //               {...register("status", { required: "Status is required" })}
// // //             >
// // //               <MenuItem value="Pending">Pending</MenuItem>
// // //               <MenuItem value="In Progress">In Progress</MenuItem>
// // //               <MenuItem value="Completed">Completed</MenuItem>
// // //             </TextField>
// // //             {errors.status?.message && <p style={{ color: "red" }}>{errors.status.message}</p>}

// // //             {/* Due Date Field */}
// // //             <TextField
// // //               label="Due Date"
// // //               type="date"
// // //               fullWidth
// // //               margin="normal"
// // //               InputLabelProps={{ shrink: true }}
// // //               {...register("due_date", { required: "Due Date is required" })}
// // //             />
// // //             {errors.due_date?.message && <p style={{ color: "red" }}>{errors.due_date.message}</p>}

// // //             {/* Submit Button */}
// // //             <Button
// // //               type="submit"
// // //               variant="contained"
// // //               color="primary"
// // //               fullWidth
// // //               sx={{ mt: 2 }}
// // //               disabled={loading}
// // //             >
// // //               {loading ? "Creating..." : "Create Task"}
// // //             </Button>
// // //           </form>
// // //         </CardContent>
// // //       </Card>
// // //     </Box>
// // //   );
// // // }



// // // "use client";

// // // import { useState } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { useForm } from "react-hook-form";
// // // // import { createClient } from "../../utils/supabase/client";
// // // import { v4 as uuidv4 } from "uuid";
// // // import { Box, Button, TextField, MenuItem, Typography, Card, CardContent } from "@mui/material";
// // // import { createClient } from "../../../utils/supabase/client";

// // // export default function CreateTask() {
// // //   const supabase = createClient();
// // //   const router = useRouter();
// // //   const [loading, setLoading] = useState(false);
// // //   const { register, handleSubmit, formState: { errors } } = useForm();

// // //   const onSubmit = async (data) => {
// // //     setLoading(true);
// // //     const { data: user, error: userError } = await supabase.auth.getUser();
// // //     if (userError || !user?.user) {
// // //       console.error("User not authenticated");
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     const newTask = {
// // //       id: uuidv4(), // Generate unique id
// // //       title: data.title,
// // //       description: data.description,
// // //       status: data.status,
// // //       due_date: data.due_date,
// // //       created_at: new Date().toISOString(),
// // //       user_id: user.user.id, // Assign authenticated user ID
// // //     };

// // //     const { error } = await supabase.from("tasks").insert([newTask]);
// // //     setLoading(false);

// // //     if (error) {
// // //       console.error("Error creating task:", error.message);
// // //     } else {
// // //       router.push("/"); // Redirect to home after task creation
// // //     }
// // //   };

// // //   return (
// // //     <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
// // //       <Card sx={{ width: 400, p: 3 }}>
// // //         <CardContent>
// // //           <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
// // //             Create Task
// // //           </Typography>
// // //           <form onSubmit={handleSubmit(onSubmit)}>
// // //             <TextField fullWidth label="Title" {...register("title", { required: "Title is required" })} margin="normal" />
// // //             {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}

// // //             <TextField fullWidth label="Description" {...register("description", { required: "Description is required" })} margin="normal" multiline rows={3} />
// // //             {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}

// // //             <TextField select fullWidth label="Status" {...register("status", { required: "Status is required" })} margin="normal">
// // //               <MenuItem value="Pending">Pending</MenuItem>
// // //               <MenuItem value="In Progress">In Progress</MenuItem>
// // //               <MenuItem value="Completed">Completed</MenuItem>
// // //             </TextField>
// // //             {errors.status && <p style={{ color: "red" }}>{errors.status.message}</p>}

// // //             <TextField fullWidth label="Due Date" type="date" {...register("due_date", { required: "Due Date is required" })} margin="normal" InputLabelProps={{ shrink: true }} />
// // //             {errors.due_date && <p style={{ color: "red" }}>{errors.due_date.message}</p>}

// // //             <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} sx={{ mt: 2 }}>
// // //               {loading ? "Creating..." : "Create Task"}
// // //             </Button>
// // //           </form>
// // //         </CardContent>
// // //       </Card>
// // //     </Box>
// // //   );
// // // }



// // "use client";

// // import { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { useRouter } from "next/navigation";
// // import { v4 as uuidv4 } from "uuid";
// // // import { createClient } from "../../utils/supabase/client";
// // import { Box, Button, TextField, MenuItem, Typography, Card, CardContent } from "@mui/material";
// // import { createClient } from "../../../utils/supabase/client";

// // interface TaskFormData {
// //   title: string;
// //   description: string;
// //   status: string;
// //   due_date: string;
// // }

// // export default function CreateTask() {
// //   const supabase = createClient();
// //   const router = useRouter();
// //   const [loading, setLoading] = useState(false);

// //   const { register, handleSubmit, formState: { errors } } = useForm<TaskFormData>();

// //   const onSubmit = async (data: TaskFormData) => {
// //     setLoading(true);
// //     const { data: userData } = await supabase.auth.getUser();
    
// //     if (!userData?.user) {
// //       alert("User not authenticated!");
// //       setLoading(false);
// //       return;
// //     }

// //     const taskId = uuidv4(); // Generate unique ID for task

// //     const { error } = await supabase.from("tasks").insert([
// //       {
// //         id: taskId,
// //         title: data.title,
// //         description: data.description,
// //         status: data.status,
// //         due_date: data.due_date,
// //         created_at: new Date().toISOString(),
// //         user_id: userData.user.id, // Assign the authenticated user ID
// //       }
// //     ]);

// //     if (error) {
// //       console.error("Error creating task:", error.message);
// //       alert("Error creating task!");
// //     } else {
// //       router.push("/");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
// //       <Card sx={{ width: 400, p: 3, boxShadow: 3 }}>
// //         <CardContent>
// //           <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
// //             Create Task
// //           </Typography>
// //           <form onSubmit={handleSubmit(onSubmit)}>
// //             <TextField
// //               fullWidth
// //               label="Title"
// //               {...register("title", { required: "Title is required" })}
// //               error={!!errors.title}
// //               sx={{ mb: 2 }}
// //             />
// //             {errors.title && <Typography color="error">{errors.title.message}</Typography>}

// //             <TextField
// //               fullWidth
// //               label="Description"
// //               multiline
// //               rows={3}
// //               {...register("description", { required: "Description is required" })}
// //               error={!!errors.description}
// //               sx={{ mb: 2 }}
// //             />
// //             {errors.description && <Typography color="error">{errors.description.message}</Typography>}

// //             <TextField
// //               select
// //               fullWidth
// //               label="Status"
// //               {...register("status", { required: "Status is required" })}
// //               error={!!errors.status}
// //               sx={{ mb: 2 }}
// //             >
// //               <MenuItem value="Pending">Pending</MenuItem>
// //               <MenuItem value="In Progress">In Progress</MenuItem>
// //               <MenuItem value="Completed">Completed</MenuItem>
// //             </TextField>
// //             {errors.status && <Typography color="error">{errors.status.message}</Typography>}

// //             <TextField
// //               fullWidth
// //               label="Due Date"
// //               type="date"
// //               {...register("due_date", { required: "Due date is required" })}
// //               error={!!errors.due_date}
// //               InputLabelProps={{ shrink: true }}
// //               sx={{ mb: 2 }}
// //             />
// //             {errors.due_date && <Typography color="error">{errors.due_date.message}</Typography>}

// //             <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
// //               {loading ? "Creating..." : "Create Task"}
// //             </Button>
// //           </form>
// //         </CardContent>
// //       </Card>
// //     </Box>
// //   );
// // }


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
//       const { data: userData } = await supabase.auth.getUser();
//       if (!userData?.user) {
//         router.push("/login"); // Redirect to login if not authenticated
//       } else {
//         setUserId(userData.user.id);
//       }
//       setCheckingAuth(false);
//     };

//     checkAuth();
//   }, [router, supabase]);

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
//       router.push("/");
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
//       const { data: userData } = await supabase.auth.getUser();
//       if (!userData?.user) {
//         router.push("/login"); // Redirect to login if not authenticated
//       } else {
//         setUserId(userData.user.id);
//       }
//       setCheckingAuth(false);
//     };

//     checkAuth();
//   }, [router]); // Removed `supabase` dependency to prevent re-renders

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
//       router.push("/");
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


// import CreateTask from "./CreateTask";

export default function Page() {
  return <CreateTask />;
}


