// import { useEffect, useState } from "react";
// import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Button } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import { createClient } from "../../../utils/supabase/client";
// import { useRouter } from "next/navigation";

// type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   user_id: string;
//   user_name?: string; // Retrieved from profiles table
// };

// export default function AdminTaskList({ tasks }: { tasks: Task[] }) {
//   const [taskList, setTaskList] = useState<Task[]>(tasks);
//   const supabase = createClient();
//   const router = useRouter();

//   useEffect(() => {
//     fetchUsersAndTasks();
//   }, [tasks]);

//   const fetchUsersAndTasks = async () => {
//     const { data: profiles, error: profileError } = await supabase.from("profiles").select("user_id, email");
//     if (profileError) {
//       console.error("Error fetching user profiles:", profileError.message);
//       return;
//     }

//     const updatedTasks = tasks.map(task => {
//       const user = profiles.find(profile => profile.user_id === task.user_id);
//       return { ...task, user_name: user?.email || "Unknown" };
//     });

//     setTaskList(updatedTasks);
//   };

//   const handleEdit = (taskId: string) => {
//     router.push(`/edit/${taskId}`);
//   };

//   const handleDelete = async (taskId: string) => {
//     await supabase.from("tasks").delete().eq("id", taskId);
//     setTaskList(prev => prev.filter(task => task.id !== taskId));
//   };

//   return (
//     <Box sx={{ mt: 3 }}>
//       <Typography variant="h6" sx={{ mb: 2 }}>
//         Task List
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>User</TableCell>
//               <TableCell>Title</TableCell>
//               <TableCell>Description</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {taskList.map((task) => (
//               <TableRow key={task.id}>
//                 <TableCell>{task.user_name}</TableCell>
//                 <TableCell>{task.title}</TableCell>
//                 <TableCell>{task.description}</TableCell>
//                 <TableCell>{task.status}</TableCell>
//                 <TableCell align="right">
//                   <IconButton color="primary" onClick={() => handleEdit(task.id)}>
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton color="error" onClick={() => handleDelete(task.id)}>
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }


import { useEffect, useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { createClient } from "../../../utils/supabase/client";
import { useRouter } from "next/navigation";

type Task = {
  id: string;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  user_id: string;
  user_name?: string; // Retrieved from profiles table
};

export default function AdminTaskList() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    // Fetch tasks
    const { data: tasksData, error: tasksError } = await supabase.from("tasks").select("*");
    if (tasksError) {
      console.error("Error fetching tasks:", tasksError.message);
      return;
    }

    // Fetch user profiles
    const { data: profiles, error: profileError } = await supabase.from("profiles").select("user_id, email");
    if (profileError) {
      console.error("Error fetching user profiles:", profileError.message);
      return;
    }

    // Merge user emails into tasks
    const tasksWithUsers = tasksData.map((task) => {
      const user = profiles.find((profile) => profile.user_id === task.user_id);
      return { ...task, user_name: user?.email || "Unknown" };
    });

    setTaskList(tasksWithUsers);
  };

  const handleEdit = (taskId: string) => {
    router.push(`/edit/${taskId}`);
  };

  const handleDelete = async (taskId: string) => {
    await supabase.from("tasks").delete().eq("id", taskId);
    fetchTasks(); // Fetch updated tasks after deletion
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Task List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taskList.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.user_name}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell align="right">
                  {/* <IconButton color="primary" onClick={() => handleEdit(task.id)}>
                    <EditIcon />
                  </IconButton> */}
                  {/* <IconButton color="error" onClick={() => handleDelete(task.id)}>
                    <DeleteIcon />
                  </IconButton> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
