// "use client";

// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import { Box, Typography, Button } from "@mui/material";
// import Link from "next/link";

// export default function TaskCard({ task }) {
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

//   return (
//     <Box
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       sx={{
//         p: 2,
//         my: 1,
//         background: "#fff",
//         boxShadow: 1,
//         borderRadius: 2,
//         transform: CSS.Transform.toString(transform),
//         transition,
//       }}
//     >
//       <Typography fontWeight="bold">{task.title}</Typography>
//       <Typography variant="body2">{task.description}</Typography>
//       <Link href={`/edit/${task.id}`}>
//         <Button size="small">Edit</Button>
//       </Link>
//     </Box>
//   );
// }

// "use client";

// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import { Box, Typography, Button } from "@mui/material";
// import Link from "next/link";

// // Define task type
// interface Task {
//   id: string;
//   title: string;
//   description: string;
// }

// // Define props type
// interface TaskCardProps {
//   task: Task;
// }

// export default function TaskCard({ task }: TaskCardProps) {
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

//   return (
//     <Box
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       sx={{
//         p: 2,
//         my: 1,
//         background: "#fff",
//         boxShadow: 1,
//         borderRadius: 2,
//         transform: CSS.Transform.toString(transform),
//         transition,
//       }}
//     >
//       <Typography fontWeight="bold">{task.title}</Typography>
//       <Typography variant="body2">{task.description}</Typography>
//       <Link href={`/edit/${task.id}`} passHref>
//         <Button size="small">Edit</Button>
//       </Link>
//     </Box>
//   );
// }

// "use client";

// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import { Box, Typography, Button, useTheme } from "@mui/material";
// import Link from "next/link";

// // Define task type
// interface Task {
//   id: string;
//   title: string;
//   description: string;
// }

// // Define props type
// interface TaskCardProps {
//   task: Task;
// }

// export default function TaskCard({ task }: TaskCardProps) {
//   const theme = useTheme();
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

//   return (
//     <Box
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       sx={{
//         p: 2,
//         my: 1,
//         backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
//         color: theme.palette.text.primary,
//         boxShadow: 1,
//         borderRadius: 2,
//         border: `1px solid ${theme.palette.divider}`,
//         transform: CSS.Transform.toString(transform),
//         transition,
//       }}
//     >
//       <Typography fontWeight="bold">{task.title}</Typography>
//       <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//         {task.description}
//       </Typography>
//       <Link href={`/edit/${task.id}`} passHref>
//         <Button size="small" sx={{ mt: 1, color: theme.palette.primary.main }}>Edit</Button>
//       </Link>
//     </Box>
//   );
// }

// "use client";

// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import { Box, Typography, Button, useTheme } from "@mui/material";
// import Link from "next/link";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
// }

// interface TaskCardProps {
//   task: Task;
// }

// export default function TaskCard({ task }: TaskCardProps) {
//   const theme = useTheme();
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

//   return (
//     <Box
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       sx={{
//         p: 2,
//         my: 1,
//         backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
//         color: theme.palette.text.primary,
//         boxShadow: 1,
//         borderRadius: 2,
//         border: `1px solid ${theme.palette.divider}`,
//         transform: CSS.Transform.toString(transform),
//         transition,
//       }}
//     >
//       <Typography fontWeight="bold">{task.title}</Typography>
//       <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//         {task.description}
//       </Typography>

//       {/* Prevent drag interference when clicking Edit */}
//       <div
//         onClick={(e) => e.stopPropagation()} // Prevents drag issues
//         onPointerDown={(e) => e.stopPropagation()} // Ensures smooth navigation
//       >
//         <Link href={`/edit/${task.id}`} passHref>
//           <Button size="small" sx={{ mt: 1, color: theme.palette.primary.main }}>Edit</Button>
//         </Link>
//       </div>
//     </Box>
//   );
// }

// "use client";

// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import { Box, Typography, IconButton, useTheme } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Link from "next/link";
// import { createClient } from "../../../utils/supabase/client";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
// }

// interface TaskCardProps {
//   task: Task;
//   fetchTasks: () => Promise<void>;
// }

// export default function TaskCard({ task, fetchTasks }: TaskCardProps) {
//   const theme = useTheme();
//   const supabase = createClient();
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

//   const handleDelete = async () => {
//     const { error } = await supabase.from("tasks").delete().eq("id", task.id);
//     if (error) {
//       console.error("Error deleting task:", error.message);
//     } else {
//       fetchTasks(); // Refresh tasks after deletion
//     }
//   };

//   return (
//     <Box
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       sx={{
//         p: 2,
//         my: 1,
//         backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
//         color: theme.palette.text.primary,
//         boxShadow: 1,
//         borderRadius: 2,
//         border: `1px solid ${theme.palette.divider}`,
//         transform: CSS.Transform.toString(transform),
//         transition,
//       }}
//     >
//       <Typography fontWeight="bold">{task.title}</Typography>
//       <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//         {task.description}
//       </Typography>

//       {/* Buttons Wrapper */}
//       <Box display="flex" justifyContent="flex-end" mt={1}>
//         {/* Prevent Drag Interference */}
//         <Box onClick={(e) => e.stopPropagation()} display="flex" gap={1}>
//           {/* Edit Button */}
//           <Link href={`/edit/${task.id}`}>
//             <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
//               <EditIcon />
//             </IconButton>
//           </Link>

//           {/* Delete Button */}
//           <IconButton size="small" sx={{ color: theme.palette.error.main }} onClick={handleDelete}>
//             <DeleteIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// "use client";

// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import { Box, Typography, IconButton, useTheme } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Link from "next/link";
// import { createClient } from "../../../utils/supabase/client";
// import { useEffect, useState } from "react";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   user_id: string; // user_id to fetch the email from auth
// }

// interface TaskCardProps {
//   task: Task;
//   fetchTasks: () => Promise<void>;
// }

// export default function TaskCard({ task, fetchTasks }: TaskCardProps) {
//   const theme = useTheme();
//   const supabase = createClient();
//   const [userEmail, setUserEmail] = useState<string | null>(null);
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

//   // Fetch the user's email from the Supabase auth table based on user_id
//   useEffect(() => {
//     const fetchUserEmail = async () => {
//       const { data, error } = await supabase.auth.api.getUser(task.user_id);

//       if (error) {
//         console.error("Error fetching user email:", error.message);
//         setUserEmail("Unknown");
//       } else {
//         setUserEmail(data?.email || "Unknown");
//       }
//     };

//     if (task.user_id) {
//       fetchUserEmail();
//     }
//   }, [task.user_id, supabase]);

//   const handleDelete = async () => {
//     const { error } = await supabase.from("tasks").delete().eq("id", task.id);
//     if (error) {
//       console.error("Error deleting task:", error.message);
//     } else {
//       fetchTasks(); // Refresh tasks after deletion
//     }
//   };

//   return (
//     <Box
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       sx={{
//         p: 2,
//         my: 1,
//         backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
//         color: theme.palette.text.primary,
//         boxShadow: 1,
//         borderRadius: 2,
//         border: `1px solid ${theme.palette.divider}`,
//         transform: CSS.Transform.toString(transform),
//         transition,
//       }}
//     >
//       {/* Task Title */}
//       <Typography fontWeight="bold">{task.title}</Typography>

//       {/* Task Description */}
//       <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//         {task.description}
//       </Typography>

//       {/* User Email */}
//       {/*<Typography variant="caption" sx={{ color: theme.palette.text.disabled }}>
//         Assigned to: {userEmail || "Unknown"}
//       </Typography>*/}

//       {/* Buttons Wrapper */}
//       <Box display="flex" justifyContent="flex-end" mt={1}>
//         {/* Prevent Drag Interference */}
//         <Box onClick={(e) => e.stopPropagation()} display="flex" gap={1}>
//           {/* Edit Button */}
//           <Link href={`/edit/${task.id}`}>
//             <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
//               <EditIcon />
//             </IconButton>
//           </Link>

//           {/* Delete Button */}
//           <IconButton size="small" sx={{ color: theme.palette.error.main }} onClick={handleDelete}>
//             <DeleteIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// "use client";

// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import { Box, Typography, IconButton, useTheme } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Link from "next/link";
// import { createClient } from "../../../utils/supabase/client";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   user_id: string; // user_id to fetch the email from auth
// }

// interface TaskCardProps {
//   task: Task;
//   fetchTasks: () => Promise<void>;
// }

// export default function TaskCard({ task, fetchTasks }: TaskCardProps) {
//   const theme = useTheme();
//   const supabase = createClient();
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });
//   console.log(task,fetchTasks)
//   console.log(task.id)

//   const handleDelete = async () => {
//     if (!task.id) {
//       console.error("Task ID is missing.");
//       return;
//     }

//     console.log("Attempting to delete task with ID:", task.id);

//     const { error } = await supabase.from("tasks").delete().eq("id", task.id);

//     if (error) {
//       console.error("Error deleting task:", error.message);
//       return;
//     }

//     console.log("Task deleted successfully.");

//     await fetchTasks(); // Ensure tasks are re-fetched after deletion

//     console.log("Tasks re-fetched after deletion.");
//   };

//   return (
//     <Box
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       sx={{
//         p: 2,
//         my: 1,
//         backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
//         color: theme.palette.text.primary,
//         boxShadow: 1,
//         borderRadius: 2,
//         border: `1px solid ${theme.palette.divider}`,
//         transform: CSS.Transform.toString(transform),
//         transition,
//       }}
//     >
//       {/* Task Title */}
//       <Typography fontWeight="bold">{task.title}</Typography>

//       {/* Task Description */}
//       <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//         {task.description}
//       </Typography>

//       {/* Buttons Wrapper */}
//       <Box display="flex" justifyContent="flex-end" mt={1}>
//         {/* Prevent Drag Interference */}
//         <Box display="flex" gap={1}>
//           {/* Edit Button */}
//           <Link href={`/edit/${task.id}`} passHref>
//             <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
//               <EditIcon />
//             </IconButton>
//           </Link>

//           {/* Delete Button */}
//           <IconButton
//             size="small"
//             sx={{ color: theme.palette.error.main }}
//             onClick={handleDelete}
//           >
//             <DeleteIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// "use client";

// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import { Box, Typography, IconButton, useTheme } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Link from "next/link";
// import { createClient } from "../../../utils/supabase/client";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   user_id: string;
// }

// interface TaskCardProps {
//   task: Task;
//   fetchTasks: () => Promise<void>;
// }

// export default function TaskCard({ task, fetchTasks }: TaskCardProps) {
//   const theme = useTheme();
//   const supabase = createClient();
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id: task.id });

//   console.log("✅ Rendering TaskCard for:", task);

//   const handleDelete = async () => {
//     if (!task.id) {
//       console.error("🚨 Task ID is missing, cannot delete.");
//       return;
//     }
  
//     console.log("🗑️ Attempting to delete task with ID:", task.id);
  
//     try {
//       const { error } = await supabase.from("tasks").delete().eq("id", task.id);
  
//       if (error) {
//         console.error("❌ Error deleting task:", error.message);
//         return;
//       }
  
//       console.log("✅ Task deleted successfully:", task.id);
  
//       // ⚡️ Force UI to re-render before fetching tasks
//       await new Promise((resolve) => setTimeout(resolve, 300)); // Small delay to ensure UI updates
  
//       await fetchTasks();
//       console.log("🔄 Tasks re-fetched after deletion.");
//     } catch (err) {
//       console.error("⚠️ Unexpected error:", err);
//     }
//   };
  
//   return (
//     <Box
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       sx={{
//         p: 2,
//         my: 1,
//         backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
//         color: theme.palette.text.primary,
//         boxShadow: 1,
//         borderRadius: 2,
//         border: `1px solid ${theme.palette.divider}`,
//         transform: CSS.Transform.toString(transform),
//         transition,
//       }}
//     >
//       {/* Task Title */}
//       <Typography fontWeight="bold">{task.title}</Typography>

//       {/* Task Description */}
//       <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//         {task.description}
//       </Typography>

//       {/* Buttons Wrapper */}
//       <Box display="flex" justifyContent="flex-end" mt={1}>
//         <Box display="flex" gap={1}>
//           {/* Edit Button */}
//           <Link href={`/edit/${task.id}`} passHref>
//             <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
//               <EditIcon />
//             </IconButton>
//           </Link>

//           {/* Delete Button */}
//           <IconButton
//             size="small"
//             sx={{ color: theme.palette.error.main }}
//             onClick={(e) => {
//               console.log("Click event enabled")
//               e.stopPropagation(); // Prevent event from bubbling up
//               e.preventDefault(); // Ensure the click event is handled properly
//               console.log("🗑️ Delete button clicked for:", task.id);
//               handleDelete();
//             }}
//             data-task-id={task.id}
//           >
//             <DeleteIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// }


// "use client";

// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import { Box, Typography, IconButton, useTheme } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Link from "next/link";
// import { createClient } from "../../../utils/supabase/client";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   user_id: string;
// }

// interface TaskCardProps {
//   task: Task;
//   fetchTasks: () => Promise<void>;
// }

// export default function TaskCard({ task, fetchTasks }: TaskCardProps) {
//   const theme = useTheme();
//   const supabase = createClient();
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id: task.id });

//   console.log("✅ Rendering TaskCard for:", task);

//   const handleDelete = async () => {
//     if (!task.id) {
//       console.error("🚨 Task ID is missing, cannot delete.");
//       return;
//     }

//     console.log("🗑️ Attempting to delete task with ID:", task.id);

//     try {
//       const { error } = await supabase.from("tasks").delete().eq("id", task.id);

//       if (error) {
//         console.error("❌ Error deleting task:", error.message);
//         return;
//       }

//       console.log("✅ Task deleted successfully:", task.id);

//       // ⚡️ Force UI to re-render before fetching tasks
//       await new Promise((resolve) => setTimeout(resolve, 300)); // Small delay to ensure UI updates

//       await fetchTasks();
//       console.log("🔄 Tasks re-fetched after deletion.");
//     } catch (err) {
//       console.error("⚠️ Unexpected error:", err);
//     }
//   };

//   return (
//     <Box
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       sx={{
//         p: 2,
//         my: 1,
//         backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
//         color: theme.palette.text.primary,
//         boxShadow: 1,
//         borderRadius: 2,
//         border: `1px solid ${theme.palette.divider}`,
//         transform: CSS.Transform.toString(transform),
//         transition,
//       }}
//     >
//       {/* Task Title */}
//       <Typography fontWeight="bold">{task.title}</Typography>

//       {/* Task Description */}
//       <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//         {task.description}
//       </Typography>

//       {/* Buttons Wrapper - Fix Click Issues */}
//       <Box display="flex" justifyContent="flex-end" mt={1} sx={{ pointerEvents: "none" }}>
//         <Box display="flex" gap={1}>
//           {/* Edit Button */}
//           <Link href={`/edit/${task.id}`} passHref>
//             <IconButton size="small" sx={{ color: theme.palette.primary.main, pointerEvents: "auto" }}>
//               <EditIcon />
//             </IconButton>
//           </Link>

//           {/* Delete Button */}
//           <IconButton
//             size="small"
//             sx={{ color: theme.palette.error.main, pointerEvents: "auto" }}
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent drag interference
//               e.preventDefault(); // Ensure the event fires properly
//               console.log("🗑️ Delete button clicked for:", task.id);
//               handleDelete();
//             }}
//             data-task-id={task.id}
//           >
//             <DeleteIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// }


"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { createClient } from "../../../utils/supabase/client";

interface Task {
  id: string;
  title: string;
  description: string;
  user_id: string;
}

interface TaskCardProps {
  task: Task;
  fetchTasks: () => Promise<void>;
}

export default function TaskCard({ task, fetchTasks }: TaskCardProps) {
  const theme = useTheme();
  const supabase = createClient();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  console.log("✅ Rendering TaskCard for:", task);

  const handleDelete = async () => {
    if (!task.id) {
      console.error("🚨 Task ID is missing, cannot delete.");
      return;
    }

    console.log("🗑️ Attempting to delete task with ID:", task.id);

    try {
      const { error } = await supabase.from("tasks").delete().eq("id", task.id);

      if (error) {
        console.error("❌ Error deleting task:", error.message);
        return;
      }

      console.log("✅ Task deleted successfully:", task.id);

      await new Promise((resolve) => setTimeout(resolve, 300)); // Small delay to ensure UI updates

      await fetchTasks();
      console.log("🔄 Tasks re-fetched after deletion.");
    } catch (err) {
      console.error("⚠️ Unexpected error:", err);
    }
  };

  return (
    <Box
      ref={setNodeRef}
      sx={{
        p: 2,
        my: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
        color: theme.palette.text.primary,
        boxShadow: 1,
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
        transform: CSS.Transform.toString(transform),
        transition,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* DRAG HANDLE (Ensures dragging doesn't interfere with clicks) */}
      <Box {...attributes} {...listeners} sx={{ cursor: "grab", p: 1, width: "100%" }}>
        {/* Task Title */}
        <Typography fontWeight="bold">{task.title}</Typography>
      </Box>

      {/* Task Description */}
      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
        {task.description}
      </Typography>

      {/* Buttons Wrapper */}
      <Box display="flex" justifyContent="flex-end" mt={1}>
        <Box display="flex" gap={1}>
          {/* Edit Button */}
          <Link href={`/edit/${task.id}`} passHref>
            <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
              <EditIcon />
            </IconButton>
          </Link>

          {/* Delete Button */}
          <IconButton
            size="small"
            sx={{ color: theme.palette.error.main }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent drag interference
              e.preventDefault(); // Ensure the event fires properly
              console.log("🗑️ Delete button clicked for:", task.id);
              handleDelete();
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
