// "use client";

// import { ReactNode } from "react";
// import { Box, Paper, Typography } from "@mui/material";
// import { useDroppable } from "@dnd-kit/core";

// interface DroppableColumnProps {
//   id: string;
//   title: string;
//   children: ReactNode;
// }

// export default function DroppableColumn({ id, title, children }: DroppableColumnProps) {
//   const { setNodeRef } = useDroppable({ id });

//   return (
//     <Paper
//       ref={setNodeRef}
//       sx={{
//         flex: 1,
//         p: 2,
//         minHeight: "500px",
//         backgroundColor: "rgba(255, 255, 255, 0.1)",
//         borderRadius: 2,
//       }}
//     >
//       <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
//         {title}
//       </Typography>
//       <Box>{children}</Box>
//     </Paper>
//   );
// }

// "use client";

// import { ReactNode } from "react";
// import { Box, Paper, Typography } from "@mui/material";
// import { useDroppable } from "@dnd-kit/core";
// import {
//   SortableContext,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";

// interface DroppableColumnProps {
//   id: string;
//   title: string;
//   children: ReactNode;
//   taskIds?: string[]; // Made optional to prevent undefined issues
// }

// export default function DroppableColumn({
//   id,
//   title,
//   children,
//   taskIds = [], // Default to an empty array
// }: DroppableColumnProps) {
//   const { setNodeRef, isOver } = useDroppable({ id });

//   console.log("DroppableColumn taskIds:", taskIds); // Debugging log

//   return (
//     <Paper
//       sx={{
//         flex: 1,
//         p: 2,
//         minHeight: "100%",
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         backgroundColor: isOver
//           ? "rgba(0, 255, 0, 0.2)"
//           : "rgba(255, 255, 255, 0.1)",
//         borderRadius: 2,
//         transition: "background-color 0.3s ease",
//         overflowY: "auto",
//       }}
//     >
//       <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
//         {title}
//       </Typography>

//       {/* Ensure taskIds is always an array */}
//       <SortableContext items={taskIds.length > 0 ? taskIds : ["dummy"]} strategy={verticalListSortingStrategy}>

//         <Box
//           ref={setNodeRef}
//           display="flex"
//           flexDirection="column"
//           gap={2}
//           flexGrow={1}
//           minHeight="300px"
//           paddingBottom="400px"
//           sx={{ overflowY: "auto" }}
//         >
//           {children}
//         </Box>
//       </SortableContext>
//     </Paper>
//   );
// }

"use client";

import { ReactNode, useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface DroppableColumnProps {
  id: string;
  title: string;
  children: ReactNode;
  taskIds?: string[];
}

export default function DroppableColumn({
  id,
  title,
  children,
  taskIds = [],
}: DroppableColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  // console.log(id,title,taskIds)

  // Debugging: Log task IDs on every re-render
  useEffect(() => {
    console.log(`🛠️ [${title}] DroppableColumn taskIds:`, taskIds);
  }, [taskIds]);

  return (
    <Paper
      sx={{
        flex: 1,
        p: 2,
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: isOver
          ? "rgba(0, 255, 0, 0.2)"
          : "rgba(255, 255, 255, 0.1)",
        borderRadius: 2,
        transition: "background-color 0.3s ease",
        overflowY: "auto",
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        {title}
      </Typography>

      {/* Ensure taskIds always has at least one item */}
      <SortableContext
        items={taskIds.length > 0 ? taskIds : ["dummy"]}
        strategy={verticalListSortingStrategy}
      >
        <Box
          ref={setNodeRef}
          display="flex"
          flexDirection="column"
          gap={2}
          flexGrow={1}
          minHeight="300px"
          paddingBottom="400px"
          sx={{ overflowY: "auto" }}
        >
          {children}
        </Box>
      </SortableContext>
    </Paper>
  );
}

