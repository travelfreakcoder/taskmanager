"use client";

// import { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import { DndContext, closestCorners } from "@dnd-kit/core";
// import { SortableContext, arrayMove } from "@dnd-kit/sortable";
// import TaskCard from "../components/TaskCard";
// import { createClient } from "../../../utils/supabase/client";
// // import { createClient } from "../../utils/supabase/client";

// const statuses = ["Pending", "In Progress", "Completed"];

// export default function KanbanBoard({ tasks, fetchTasks }) {
//   const supabase = createClient();

//   async function updateTaskStatus(taskId, newStatus) {
//     await supabase.from("tasks").update({ status: newStatus }).eq("id", taskId);
//     fetchTasks();
//   }

//   function handleDragEnd(event) {
//     const { active, over } = event;
//     if (!over || active.id === over.id) return;
    
//     const updatedTasks = tasks.map((task) =>
//       task.id === active.id ? { ...task, status: over.id } : task
//     );

//     updateTaskStatus(active.id, over.id);
//   }

//   return (
//     <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
//       <Box display="flex" gap={3}>
//         {statuses.map((status) => (
//           <Box key={status} width="33%" p={2} sx={{ background: "#f4f6f8", borderRadius: 2 }}>
//             <Typography variant="h6">{status}</Typography>
//             <SortableContext items={tasks.filter((task) => task.status === status)}>
//               {tasks.filter((task) => task.status === status).map((task) => (
//                 <TaskCard key={task.id} task={task} />
//               ))}
//             </SortableContext>
//           </Box>
//         ))}
//       </Box>
//     </DndContext>
//   );
// }


// "use client";

// import { useState } from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import { DndContext, closestCorners, DragEndEvent } from "@dnd-kit/core";
// import { SortableContext } from "@dnd-kit/sortable";
// import TaskCard from "../components/TaskCard";
// import { createClient } from "../../../utils/supabase/client";

// // Define task type
// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// }

// // Define props type
// interface KanbanBoardProps {
//   tasks: Task[];
//   fetchTasks: () => Promise<void>;
// }

// const statuses: Task["status"][] = ["Pending", "In Progress", "Completed"];

// export default function KanbanBoard({ tasks, fetchTasks }: KanbanBoardProps) {
//   const theme = useTheme();
//   const supabase = createClient();

//   // Function to update task status in Supabase
//   async function updateTaskStatus(taskId: string, newStatus: Task["status"]) {
//     await supabase.from("tasks").update({ status: newStatus }).eq("id", taskId);
//     fetchTasks();
//   }

//   // Handle drag-and-drop event
//   function handleDragEnd(event: DragEndEvent) {
//     const { active, over } = event;
//     if (!over || active.id === over.id) return;

//     const draggedTask = tasks.find((task) => task.id === active.id);
//     if (!draggedTask) return;

//     updateTaskStatus(draggedTask.id, over.id as Task["status"]);
//   }

//   return (
//     <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
//       <Box display="flex" gap={3}>
//         {statuses.map((status) => (
//           <Box
//             key={status}
//             width="33%"
//             p={2}
//             sx={{
//               backgroundColor: theme.palette.mode === "dark" ? "#2C2C2C" : "#f4f6f8",
//               borderRadius: 2,
//               border: `1px solid ${theme.palette.divider}`,
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 color: theme.palette.text.primary,
//                 fontWeight: "bold",
//                 mb: 1,
//               }}
//             >
//               {status}
//             </Typography>
//             <SortableContext items={tasks.filter((task) => task.status === status).map((task) => task.id)}>
//               {tasks.filter((task) => task.status === status).map((task) => (
//                 <TaskCard key={task.id} task={task} />
//               ))}
//             </SortableContext>
//           </Box>
//         ))}
//       </Box>
//     </DndContext>
//   );
// }


// "use client";

// import { useState } from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import {
//   DndContext,
//   closestCorners,
//   DragEndEvent,
// } from "@dnd-kit/core";
// import {
//   SortableContext,
//   arrayMove,
// } from "@dnd-kit/sortable";
// import TaskCard from "../components/TaskCard";
// import { createClient } from "../../../utils/supabase/client";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// }

// interface KanbanBoardProps {
//   tasks: Task[];
//   fetchTasks: () => Promise<void>;
// }

// const statuses: Task["status"][] = ["Pending", "In Progress", "Completed"];

// export default function KanbanBoard({ tasks, fetchTasks }: KanbanBoardProps) {
//   const theme = useTheme();
//   const supabase = createClient();
//   const [localTasks, setLocalTasks] = useState<Task[]>(tasks);

//   async function updateTaskStatus(taskId: string, newStatus: Task["status"]) {
//     const { error } = await supabase
//       .from("tasks")
//       .update({ status: newStatus })
//       .eq("id", taskId);

//     if (error) {
//       console.error("Error updating task status:", error.message);
//     } else {
//       fetchTasks();
//     }
//   }

//   function handleDragEnd(event: DragEndEvent) {
//     const { active, over } = event;
//     if (!over || active.id === over.id) return;

//     const draggedTask = localTasks.find((task) => task.id === active.id);
//     if (!draggedTask) return;

//     const newStatus = statuses.find((status) => status === over.id);
//     if (!newStatus || draggedTask.status === newStatus) return;

//     setLocalTasks((prevTasks) => {
//       const updatedTasks = prevTasks.map((task) =>
//         task.id === draggedTask.id ? { ...task, status: newStatus } : task
//       );
//       return arrayMove(updatedTasks, prevTasks.indexOf(draggedTask), updatedTasks.length - 1);
//     });

//     updateTaskStatus(draggedTask.id, newStatus);
//   }

//   return (
//     <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
//       <Box display="flex" gap={3}>
//         {statuses.map((status) => (
//           <Box
//             key={status}
//             width="33%"
//             p={2}
//             sx={{
//               backgroundColor: theme.palette.mode === "dark" ? "#2C2C2C" : "#f4f6f8",
//               borderRadius: 2,
//               border: `1px solid ${theme.palette.divider}`,
//               minHeight: "500px",
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{ color: theme.palette.text.primary, fontWeight: "bold", mb: 1 }}
//             >
//               {status}
//             </Typography>
//             <SortableContext items={localTasks.filter((task) => task.status === status).map((task) => task.id)}>
//               {localTasks.filter((task) => task.status === status).map((task) => (
//                 <TaskCard key={task.id} task={task} />
//               ))}
//             </SortableContext>
//           </Box>
//         ))}
//       </Box>
//     </DndContext>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import {
//   DndContext,
//   closestCorners,
//   DragEndEvent,
// } from "@dnd-kit/core";
// import {
//   SortableContext,
//   arrayMove,
// } from "@dnd-kit/sortable";
// import TaskCard from "../components/TaskCard";
// import { createClient } from "../../../utils/supabase/client";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// }

// interface KanbanBoardProps {
//   tasks: Task[];
//   fetchTasks: () => Promise<void>;
// }

// const statuses: Task["status"][] = ["Pending", "In Progress", "Completed"];

// export default function KanbanBoard({ tasks, fetchTasks }: KanbanBoardProps) {
//   const theme = useTheme();
//   const supabase = createClient();
//   const [localTasks, setLocalTasks] = useState<Task[]>(tasks);

//   // Sync localTasks with tasks when tasks update
//   useEffect(() => {
//     setLocalTasks(tasks);
//   }, [tasks]);

//   async function updateTaskStatus(taskId: string, newStatus: Task["status"]) {
//     const { error } = await supabase
//       .from("tasks")
//       .update({ status: newStatus })
//       .eq("id", taskId);

//     if (error) {
//       console.error("Error updating task status:", error.message);
//     } else {
//       fetchTasks();
//     }
//   }

//   function handleDragEnd(event: DragEndEvent) {
//     const { active, over } = event;
//     if (!over || active.id === over.id) return;

//     const draggedTask = localTasks.find((task) => task.id === active.id);
//     if (!draggedTask) return;

//     const newStatus = statuses.find((status) => status === over.id);
//     if (!newStatus || draggedTask.status === newStatus) return;

//     setLocalTasks((prevTasks) =>
//       arrayMove(
//         prevTasks.map((task) => (task.id === draggedTask.id ? { ...task, status: newStatus } : task)),
//         prevTasks.indexOf(draggedTask),
//         prevTasks.length - 1
//       )
//     );

//     updateTaskStatus(draggedTask.id, newStatus);
//   }

//   return (
//     <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
//       <Box display="flex" gap={3}>
//         {statuses.map((status) => (
//           <Box key={status} width="33%" p={2} minHeight="500px">
//             <Typography variant="h6">{status}</Typography>
//             <SortableContext items={localTasks.filter((task) => task.status === status).map((task) => task.id)}>
//               {localTasks.filter((task) => task.status === status).map((task) => (
//                 <TaskCard key={task.id} task={task} />
//               ))}
//             </SortableContext>
//           </Box>
//         ))}
//       </Box>
//     </DndContext>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import {
//   DndContext,
//   closestCorners,
//   DragEndEvent,
//   DragStartEvent,
// } from "@dnd-kit/core";
// import {
//   SortableContext,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { createClient } from "../../../utils/supabase/client";
// import TaskCard from "../components/TaskCard";
// import DroppableColumn from "../components/DroppableColumn";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// }

// interface KanbanBoardProps {
//   tasks: Task[];
//   fetchTasks: () => Promise<void>;
// }

// const statuses: Task["status"][] = ["Pending", "In Progress", "Completed"];

// export default function KanbanBoard({ tasks, fetchTasks }: KanbanBoardProps) {
//   const theme = useTheme();
//   const supabase = createClient();
//   const [localTasks, setLocalTasks] = useState<Task[]>(tasks);
//   const [activeTask, setActiveTask] = useState<Task | null>(null);

//   useEffect(() => {
//     setLocalTasks(tasks);
//   }, [tasks]);

//   const updateTaskStatus = async (taskId: string, newStatus: Task["status"]) => {
//     const { error } = await supabase
//       .from("tasks")
//       .update({ status: newStatus })
//       .eq("id", taskId);

//     if (error) {
//       console.error("Error updating task status:", error.message);
//     } else {
//       fetchTasks();
//     }
//   };

//   const handleDragStart = (event: DragStartEvent) => {
//     const task = localTasks.find((t) => t.id === event.active.id);
//     setActiveTask(task || null);
//   };

//   const handleDragEnd = (event: DragEndEvent) => {
//     const { active, over } = event;
//     if (!over || !activeTask) return;

//     const newStatus = over.id as Task["status"];

//     // Ensure the dragged item is dropped into a valid column before updating
//     if (statuses.includes(newStatus) && activeTask.status !== newStatus) {
//       setLocalTasks((prev) =>
//         prev.map((task) =>
//           task.id === activeTask.id ? { ...task, status: newStatus } : task
//         )
//       );

//       updateTaskStatus(activeTask.id, newStatus);
//     }

//     setActiveTask(null);
//   };

//   return (
//     <DndContext
//       collisionDetection={closestCorners}
//       onDragStart={handleDragStart}
//       onDragEnd={handleDragEnd}
//     >
//       <Box display="flex" gap={3}>
//         {statuses.map((status) => (
//           <DroppableColumn key={status} id={status} title={status}>
//             <SortableContext
//               items={localTasks.filter((task) => task.status === status).map((task) => task.id)}
//               strategy={verticalListSortingStrategy}
//             >
//               {localTasks.filter((task) => task.status === status).map((task) => (
//                 <TaskCard key={task.id} task={task} fetchTasks={fetchTasks} />
//               ))}
//             </SortableContext>
//           </DroppableColumn>
//         ))}
//       </Box>
//     </DndContext>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import {
//   DndContext,
//   closestCorners,
//   DragEndEvent,
//   DragStartEvent,
// } from "@dnd-kit/core";
// import {
//   SortableContext,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { createClient } from "../../../utils/supabase/client";
// import TaskCard from "../components/TaskCard";
// import DroppableColumn from "../components/DroppableColumn";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// }

// interface KanbanBoardProps {
//   tasks: Task[];
//   fetchTasks: () => Promise<void>;
// }

// const statuses: Task["status"][] = ["Pending", "In Progress", "Completed"];

// export default function KanbanBoard({ tasks, fetchTasks }: KanbanBoardProps) {
//   const theme = useTheme();
//   const supabase = createClient();
//   const [localTasks, setLocalTasks] = useState<Task[]>(tasks);
//   const [activeTask, setActiveTask] = useState<Task | null>(null);

//   useEffect(() => {
//     setLocalTasks(tasks);
//   }, [tasks]);

//   const updateTaskStatus = async (taskId: string, newStatus: Task["status"]) => {
//     const { error } = await supabase
//       .from("tasks")
//       .update({ status: newStatus })
//       .eq("id", taskId);

//     if (error) {
//       console.error("Error updating task status:", error.message);
//     } else {
//       fetchTasks();
//     }
//   };

//   const handleDragStart = (event: DragStartEvent) => {
//     const task = localTasks.find((t) => t.id === event.active.id);
//     setActiveTask(task || null);
//   };

//   const handleDragEnd = (event: DragEndEvent) => {
//     const { active, over } = event;
//     if (!over || !activeTask) return;

//     const newStatus = over.id as Task["status"];

//     if (statuses.includes(newStatus) && activeTask.status !== newStatus) {
//       setLocalTasks((prev) =>
//         prev.map((task) =>
//           task.id === activeTask.id ? { ...task, status: newStatus } : task
//         )
//       );

//       updateTaskStatus(activeTask.id, newStatus);
//     }

//     setActiveTask(null);
//   };

//   return (
//     <DndContext
//       collisionDetection={closestCorners}
//       onDragStart={handleDragStart}
//       onDragEnd={handleDragEnd}
//     >
//       <Box display="flex" gap={3}>
//         {statuses.map((status) => {
//           const filteredTasks = localTasks.filter((task) => task.status === status);
//           return (
//             <DroppableColumn key={status} id={status} title={`${status} (${filteredTasks.length})`}>
//               <SortableContext
//                 items={filteredTasks.map((task) => task.id)}
//                 strategy={verticalListSortingStrategy}
//               >
//                 {filteredTasks.map((task) => (
//                   <TaskCard key={task.id} task={task} fetchTasks={fetchTasks} />
//                 ))}
//               </SortableContext>
//             </DroppableColumn>
//           );
//         })}
//       </Box>
//     </DndContext>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import {
//   DndContext,
//   closestCorners,
//   DragEndEvent,
//   DragStartEvent,
// } from "@dnd-kit/core";
// import {
//   SortableContext,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { createClient } from "../../../utils/supabase/client";
// import TaskCard from "../components/TaskCard";
// import DroppableColumn from "../components/DroppableColumn";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
// }

// const statuses: Task["status"][] = ["Pending", "In Progress", "Completed"];

// export default function KanbanBoard() {
//   const theme = useTheme();
//   const supabase = createClient();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [activeTask, setActiveTask] = useState<Task | null>(null);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     const { data, error } = await supabase.from("tasks").select("*");
//     if (error) {
//       console.error("Error fetching tasks:", error.message);
//     } else {
//       setTasks(data as Task[]);
//     }
//   };

//   const updateTaskStatus = async (taskId: string, newStatus: Task["status"]) => {
//     const { error } = await supabase
//       .from("tasks")
//       .update({ status: newStatus })
//       .eq("id", taskId);

//     if (error) {
//       console.error("Error updating task status:", error.message);
//     } else {
//       fetchTasks();
//     }
//   };

//   const handleDragStart = (event: DragStartEvent) => {
//     const task = tasks.find((t) => t.id === event.active.id);
//     setActiveTask(task || null);
//   };

//   const handleDragEnd = (event: DragEndEvent) => {
//     const { active, over } = event;
//     if (!over || !activeTask) return;

//     const newStatus = over.id as Task["status"];

//     if (statuses.includes(newStatus) && activeTask.status !== newStatus) {
//       setTasks((prev) =>
//         prev.map((task) =>
//           task.id === activeTask.id ? { ...task, status: newStatus } : task
//         )
//       );

//       updateTaskStatus(activeTask.id, newStatus);
//     }

//     setActiveTask(null);
//   };

//   return (
//     <DndContext
//       collisionDetection={closestCorners}
//       onDragStart={handleDragStart}
//       onDragEnd={handleDragEnd}
//     >
//       <Box display="flex" gap={3}>
//         {statuses.map((status) => {
//           const filteredTasks = tasks.filter((task) => task.status === status);
//           return (
//             <DroppableColumn key={status} id={status} title={`${status} (${filteredTasks.length})`}>
//               <SortableContext
//                 items={filteredTasks.map((task) => task.id)}
//                 strategy={verticalListSortingStrategy}
//               >
//                 {filteredTasks.map((task) => (
//                   <TaskCard key={task.id} task={task} fetchTasks={fetchTasks} />
//                 ))}
//               </SortableContext>
//             </DroppableColumn>
//           );
//         })}
//       </Box>
//     </DndContext>
//   );
// }





import { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
  DndContext,
  closestCorners,
  DragEndEvent,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { createClient } from "../../../utils/supabase/client";
import TaskCard from "../components/TaskCard";
import DroppableColumn from "../components/DroppableColumn";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  due_date: string;
  created_at: string;
  user_id: string;
}

const statuses: Task["status"][] = ["Pending", "In Progress", "Completed"];

export default function KanbanBoard() {
  const theme = useTheme();
  const supabase = createClient();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", user.id);
    
    if (error) {
      console.error("Error fetching tasks:", error.message);
    } else {
      setTasks(data as Task[]);
    }
  };

  const updateTaskStatus = async (taskId: string, newStatus: Task["status"]) => {
    const { error } = await supabase
      .from("tasks")
      .update({ status: newStatus })
      .eq("id", taskId);

    if (error) {
      console.error("Error updating task status:", error.message);
    } else {
      fetchTasks();
    }
  };

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t.id === event.active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || !activeTask) return;

    const newStatus = over.id as Task["status"];

    if (statuses.includes(newStatus) && activeTask.status !== newStatus) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === activeTask.id ? { ...task, status: newStatus } : task
        )
      );

      updateTaskStatus(activeTask.id, newStatus);
    }

    setActiveTask(null);
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Box display="flex" gap={3}>
        {statuses.map((status) => {
          const filteredTasks = tasks.filter((task) => task.status === status);
          const taskIds = filteredTasks.map((task) => task.id); // Extract task IDs
          return (
            <DroppableColumn 
            key={status} 
            id={status} 
            title={`${status} (${filteredTasks.length})`} 
            taskIds={taskIds}   // ✅ Pass the task IDs explicitly
            >
              <SortableContext
                items={filteredTasks.map((task) => task.id)}
                strategy={verticalListSortingStrategy}
              >
                {filteredTasks.map((task) => (
                  <TaskCard key={task.id} task={task} fetchTasks={fetchTasks} />
                ))}
              </SortableContext>
            </DroppableColumn>
          );
        })}
      </Box>
    </DndContext>
  );
}
