// "use client";

// import { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
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
// // import TaskCard from "../components/TaskCard";
// import DroppableColumn from "../components/DroppableColumn";
// import AdminTaskCard from "../components/AdminTaskCard";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
//   user_email?: string; // Added user email field
// }

// interface AdminKanbanBoardProps {
//   tasks: Task[];
//   fetchTasks: () => Promise<void>;
// }

// const statuses: Task["status"][] = ["Pending", "In Progress", "Completed"];

// export default function AdminKanbanBoard({ tasks, fetchTasks }: AdminKanbanBoardProps) {
//   const supabase = createClient();
//   const [localTasks, setLocalTasks] = useState<Task[]>(tasks);
//   const [activeTask, setActiveTask] = useState<Task | null>(null);

//   useEffect(() => {
//     fetchAllTasks();
//   }, []);

//   useEffect(() => {
//     setLocalTasks(tasks);
//   }, [tasks]);

//   const fetchAllTasks = async () => {
//     const { data, error } = await supabase
//       .from("tasks")
//       .select("*, profiles(email)")
//       .order("created_at", { ascending: false });

//     if (error) {
//       console.error("Error fetching tasks:", error.message);
//       return;
//     }

//     const tasksWithUserEmail = data.map((task) => ({
//       ...task,
//       user_email: task.profiles?.email || "Unknown", // Extract user email
//     }));

//     setLocalTasks(tasksWithUserEmail);
//   };

//   const updateTaskStatus = async (taskId: string, newStatus: Task["status"]) => {
//     const { error } = await supabase
//       .from("tasks")
//       .update({ status: newStatus })
//       .eq("id", taskId);

//     if (error) {
//       console.error("Error updating task status:", error.message);
//     } else {
//       fetchAllTasks();
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
//         {statuses.map((status) => (
//           <DroppableColumn key={status} id={status} title={status}>
//             <SortableContext
//               items={localTasks.filter((task) => task.status === status).map((task) => task.id)}
//               strategy={verticalListSortingStrategy}
//             >
//               {localTasks.filter((task) => task.status === status).map((task) => (
//                 <AdminTaskCard key={task.id} task={task} fetchTasks={fetchAllTasks} showUser />
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
// import { Box } from "@mui/material";
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
// import DroppableColumn from "../components/DroppableColumn";
// import AdminTaskCard from "../components/AdminTaskCard";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
//   user_email?: string;
// }

// interface AdminKanbanBoardProps {
//   tasks: Task[];
//   fetchTasks: () => Promise<void>;
// }

// const statuses: Task["status"][] = ["Pending", "In Progress", "Completed"];

// export default function AdminKanbanBoard({ tasks, fetchTasks }: AdminKanbanBoardProps) {
//   const supabase = createClient();
//   const [localTasks, setLocalTasks] = useState<Task[]>([]); // Initialize with an empty array
//   const [activeTask, setActiveTask] = useState<Task | null>(null);

//   // Sync state when tasks change
//   useEffect(() => {
//     setLocalTasks(tasks);
//   }, [tasks]);

//   // Fetch tasks only on mount
//   useEffect(() => {
//     fetchTasks();
//   }, [fetchTasks]);

//   const updateTaskStatus = async (taskId: string, newStatus: Task["status"]) => {
//     const { error } = await supabase
//       .from("tasks")
//       .update({ status: newStatus })
//       .eq("id", taskId);

//     if (error) {
//       console.error("Error updating task status:", error.message);
//     } else {
//       fetchTasks(); // Refresh task list
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
//       <Box display="flex" gap={3} overflow="auto" p={2}>
//         {statuses.map((status) => (
//           <DroppableColumn key={status} id={status} title={status}>
//             <SortableContext
//               items={localTasks.filter((task) => task.status === status).map((task) => task.id)}
//               strategy={verticalListSortingStrategy}
//             >
//               {localTasks.filter((task) => task.status === status).map((task) => (
//                 <AdminTaskCard key={task.id} task={task} fetchTasks={fetchTasks} showUser />
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
// import { Box } from "@mui/material";
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
// import DroppableColumn from "../components/DroppableColumn";
// import AdminTaskCard from "../components/AdminTaskCard";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
//   user_email?: string; // Added field for user email
// }

// const statuses: Task["status"][] = ["Pending", "In Progress", "Completed"];

// export default function AdminKanbanBoard() {
//   const supabase = createClient();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [activeTask, setActiveTask] = useState<Task | null>(null);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     // Fetch tasks
//     const { data: tasksData, error: tasksError } = await supabase.from("tasks").select("*");
//     if (tasksError) {
//       console.error("Error fetching tasks:", tasksError.message);
//       return;
//     }

//     // Fetch user profiles
//     const { data: profiles, error: profilesError } = await supabase.from("profiles").select("user_id, email");
//     if (profilesError) {
//       console.error("Error fetching profiles:", profilesError.message);
//       return;
//     }

//     // Merge user emails into tasks
//     const tasksWithUsers = tasksData.map((task) => {
//       const user = profiles.find((profile) => profile.user_id === task.user_id);
//       return { ...task, user_email: user?.email || "Unknown" };
//     });

//     setTasks(tasksWithUsers);
//   };

//   const updateTaskStatus = async (taskId: string, newStatus: Task["status"]) => {
//     const { error } = await supabase
//       .from("tasks")
//       .update({ status: newStatus })
//       .eq("id", taskId);

//     if (error) {
//       console.error("Error updating task status:", error.message);
//     } else {
//       fetchTasks(); // Refresh task list
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
//       <Box display="flex" gap={3} overflow="auto" p={2}>
//         {statuses.map((status) => (
//           <DroppableColumn key={status} id={status} title={status}>
//             <SortableContext
//               items={tasks.filter((task) => task.status === status).map((task) => task.id)}
//               strategy={verticalListSortingStrategy}
//             >
//               {tasks
//                 .filter((task) => task.status === status)
//                 .map((task) => (
//                   <AdminTaskCard key={task.id} task={task} fetchTasks={fetchTasks} showUser />
//                 ))}
//             </SortableContext>
//           </DroppableColumn>
//         ))}
//       </Box>
//     </DndContext>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { Box } from "@mui/material";
// import {
//   DndContext,
//   closestCorners,
//   DragEndEvent,
//   DragStartEvent,
// } from "@dnd-kit/core";
// import { createClient } from "../../../utils/supabase/client";
// import DroppableColumn from "../components/DroppableColumn";
// import AdminTaskCard from "../components/AdminTaskCard";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: "Pending" | "In Progress" | "Completed";
//   due_date: string;
//   created_at: string;
//   user_id: string;
//   user_email?: string;
// }

// const statuses: Task["status"][] = ["Pending", "In Progress", "Completed"];

// export default function AdminKanbanBoard() {
//   const supabase = createClient();
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [activeTask, setActiveTask] = useState<Task | null>(null);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     const { data: tasksData, error: tasksError } = await supabase.from("tasks").select("*");
//     if (tasksError) {
//       console.error("Error fetching tasks:", tasksError.message);
//       return;
//     }

//     const { data: profiles, error: profilesError } = await supabase.from("profiles").select("user_id, email");
//     if (profilesError) {
//       console.error("Error fetching profiles:", profilesError.message);
//       return;
//     }

//     const tasksWithUsers = tasksData.map((task) => {
//       const user = profiles.find((profile) => profile.user_id === task.user_id);
//       return { ...task, user_email: user?.email || "Unknown" };
//     });

//     setTasks(tasksWithUsers);
//   };

//   const updateTaskStatus = async (taskId: string, newStatus: Task["status"]) => {
//     const { error } = await supabase.from("tasks").update({ status: newStatus }).eq("id", taskId);
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
//       <Box display="flex" gap={3} overflow="auto" p={2}>
//         {statuses.map((status) => {
//           const filteredTasks = tasks.filter((task) => task.status === status);
//           return (
//             <DroppableColumn key={status} id={status} title={status} taskIds={filteredTasks.map((t) => t.id)}>
//               {filteredTasks.map((task) => (
//                 <AdminTaskCard key={task.id} task={task} fetchTasks={fetchTasks} showUser />
//               ))}
//             </DroppableColumn>
//           );
//         })}
//       </Box>
//     </DndContext>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  DndContext,
  closestCorners,
  DragEndEvent,
  DragStartEvent,
} from "@dnd-kit/core";
import { createClient } from "../../../utils/supabase/client";
import DroppableColumn from "../components/DroppableColumn";
import AdminTaskCard from "../components/AdminTaskCard";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  due_date: string;
  created_at: string;
  user_id: string;
  user_email?: string;
}

const statuses: Task["status"][] = ["Pending", "In Progress", "Completed"];

export default function AdminKanbanBoard() {
  const supabase = createClient();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data: tasksData, error: tasksError } = await supabase.from("tasks").select("*");
    if (tasksError) {
      console.error("Error fetching tasks:", tasksError.message);
      return;
    }

    const { data: profiles, error: profilesError } = await supabase.from("profiles").select("user_id, email");
    if (profilesError) {
      console.error("Error fetching profiles:", profilesError.message);
      return;
    }

    const tasksWithUsers = tasksData.map((task) => {
      const user = profiles.find((profile) => profile.user_id === task.user_id);
      return { ...task, user_email: user?.email || "Unknown" };
    });

    setTasks(tasksWithUsers);
  };

  const updateTaskStatus = async (taskId: string, newStatus: Task["status"]) => {
    const { error } = await supabase.from("tasks").update({ status: newStatus }).eq("id", taskId);
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
      <Box display="flex" gap={3} overflow="auto" p={2}>
        {statuses.map((status) => {
          const filteredTasks = tasks.filter((task) => task.status === status);
          return (
            <DroppableColumn
              key={status}
              id={status}
              title={`${status} (${filteredTasks.length})`}
              taskIds={filteredTasks.map((t) => t.id)}
            >
              {filteredTasks.map((task) => (
                <AdminTaskCard key={task.id} task={task} fetchTasks={fetchTasks} showUser />
              ))}
            </DroppableColumn>
          );
        })}
      </Box>
    </DndContext>
  );
}

