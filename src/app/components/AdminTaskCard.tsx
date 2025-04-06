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
  user_email?: string; // Added user email field
}

interface TaskCardProps {
  task: Task;
  fetchTasks: () => Promise<void>;
  showUser?: boolean; // Added a prop to control user email display
}

export default function AdminTaskCard({ task, fetchTasks, showUser = false }: TaskCardProps) {
  const theme = useTheme();
  const supabase = createClient();
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const handleDelete = async () => {
    const { error } = await supabase.from("tasks").delete().eq("id", task.id);
    if (error) {
      console.error("Error deleting task:", error.message);
    } else {
      fetchTasks(); // Refresh tasks after deletion
    }
  };

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      {...listeners}
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
      }}
    >
      <Typography fontWeight="bold">{task.title}</Typography>
      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
        {task.description}
      </Typography>

      {/* Show User Email (only for Admins) */}
      {showUser && (
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
          Assigned to: {task.user_email || "Unknown"}
        </Typography>
      )}

      {/* Buttons Wrapper */}
      <Box display="flex" justifyContent="flex-end" mt={1}>
        {/* Prevent Drag Interference */}
        <Box onClick={(e) => e.stopPropagation()} display="flex" gap={1}>
          {/* Edit Button */}
          {/* <Link href={`/edit/${task.id}`}>
            <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
              <EditIcon />
            </IconButton>
          </Link> */}

          {/* Delete Button */}
          {/* <IconButton size="small" sx={{ color: theme.palette.error.main }} onClick={handleDelete}>
            <DeleteIcon />
          </IconButton> */}
        </Box>
      </Box>
    </Box>
  );
}
