// // 'use client';

// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// // import React from 'react';
// // import Image from 'next/image';
// // import Button from '@mui/material/Button';
// // import { logout } from '../logout/actions';

// // const Header: React.FC = () => {
// //   return (
// //     <AppBar position="static" color="primary" elevation={2}>
// //       <Toolbar>
// //         <Box display="flex" alignItems="center" flexGrow={1}>
// //           <Image src="/images/logo.avif" alt="Logo" width={40} height={40} />
// //           <Typography variant="h6" sx={{ ml: 2 }}>
// //             Task Management System
// //           </Typography>
// //         </Box>
// //         <form action={logout}>
// //             <Button type="submit" variant="contained" color="secondary">Logout</Button>
// //           </form>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Header;

// // 'use client';

// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// // import React, { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import Button from '@mui/material/Button';
// // import { logout } from '../logout/actions';
// // import { useSession } from '@supabase/auth-helpers-react';
// // import { log } from 'console';

// // const Header: React.FC = () => {
// //   const session = useSession();
// //   console.log(session);

// //   return (
// //     <AppBar position="static" color="primary" elevation={2}>
// //       <Toolbar>
// //         <Box display="flex" alignItems="center" flexGrow={1}>
// //           <Image src="/images/logo.avif" alt="Logo" width={40} height={40} />
// //           <Typography variant="h6" sx={{ ml: 2 }}>
// //             Task Management System
// //           </Typography>
// //         </Box>
// //         {session && (
// //           <form action={logout}>
// //             <Button type="submit" variant="contained" color="secondary">Logout</Button>
// //           </form>
// //         )}
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Header;

// // 'use client';

// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// // import React, { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import Button from '@mui/material/Button';
// // import { logout } from '../logout/actions';
// // import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// // const Header: React.FC = () => {
// //   const supabase = createClientComponentClient();
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       const { data: { session } } = await supabase.auth.getSession();
// //       console.log('Session:', session);
// //       setUser(session?.user || null);
// //     };
// //     fetchUser();
// //   }, []);

// //   return (
// //     <AppBar position="static" color="primary" elevation={2}>
// //       <Toolbar>
// //         <Box display="flex" alignItems="center" flexGrow={1}>
// //           <Image src="/images/logo.avif" alt="Logo" width={40} height={40} />
// //           <Typography variant="h6" sx={{ ml: 2 }}>
// //             Task Management System
// //           </Typography>
// //         </Box>
// //         {user && (
// //           <form action={logout}>
// //             <Button type="submit" variant="contained" color="secondary">Logout</Button>
// //           </form>
// //         )}
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Header;

// // 'use client';

// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// // import React, { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import Button from '@mui/material/Button';
// // import { logout } from '../logout/actions';
// // import { createClient } from '../utils/supabase/client';

// // const Header: React.FC = () => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const supabase = createClient();

// //   useEffect(() => {
// //     const checkAuth = async () => {
// //       const { data } = await supabase.auth.getUser();
// //       setIsAuthenticated(!!data?.user);
// //     };

// //     checkAuth();

// //     const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
// //       setIsAuthenticated(!!session?.user);
// //     });

// //     return () => authListener.subscription.unsubscribe();
// //   }, []);

// //   return (
// //     <AppBar position="static" color="primary" elevation={2}>
// //       <Toolbar>
// //         <Box display="flex" alignItems="center" flexGrow={1}>
// //           <Image src="/images/logo.avif" alt="Logo" width={40} height={40} />
// //           <Typography variant="h6" sx={{ ml: 2 }}>
// //             Task Management System
// //           </Typography>
// //         </Box>
// //         {isAuthenticated && (
// //           <form action={logout}>
// //             <Button type="submit" variant="contained" color="secondary">
// //               Logout
// //             </Button>
// //           </form>
// //         )}
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Header;

// "use client";

// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import React, { useContext } from "react";
// import Image from "next/image";
// import { IconButton } from "@mui/material";
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import { ThemeContext } from "../../../Theme/Theme";

// const Header: React.FC = () => {


//   const {mode,toggleMode}=useContext(ThemeContext)

//   return (
//     <AppBar position="static" color="primary" elevation={2}>
//       <Toolbar>
//         <Box display="flex" alignItems="center" flexGrow={1}>
//           <Image src="/images/logo.avif" alt="Logo" width={40} height={40} />
//           <Typography variant="h6" sx={{ ml: 2 }}>
//             Task Management System
//           </Typography>
//           <IconButton
//             aria-label={
//               mode === "light" ? "Change to Dark mode" : "Change to light mode"
//             }
//             onClick={() => toggleMode()}
//           >
//             {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
//           </IconButton>
         
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


// "use client";

// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import React, { useContext } from "react";
// import Image from "next/image";
// import { IconButton } from "@mui/material";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import { ThemeContext } from "../../../Theme/Theme";

// const Header: React.FC = () => {
//   const { mode, toggleMode } = useContext(ThemeContext);

//   return (
//     <AppBar position="static" color="primary" elevation={2}>
//       <Toolbar>
//         <Box display="flex" alignItems="center" flexGrow={1}>
//           <Image src="/images/logo.avif" alt="Logo" width={40} height={40} />
//           <Typography variant="h6" sx={{ ml: 2 }}>
//             Task Management System
//           </Typography>
//         </Box>
//         <IconButton
//           aria-label={
//             mode === "light" ? "Change to Dark mode" : "Change to light mode"
//           }
//           onClick={toggleMode}
//         >
//           {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;



"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useContext } from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../../Theme/Theme";

const Header: React.FC = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <AppBar
      position="fixed"
      color="primary"
      elevation={2}
      sx={{
        top: 0,
        width: "100%",
        zIndex: 1201, // Higher than Drawer
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Image src="/images/logo.avif" alt="Logo" width={40} height={40} />
          <Typography variant="h6" sx={{ ml: 2 }}>
            Task Management System
          </Typography>
        </Box>
        <IconButton
          aria-label={
            mode === "light" ? "Change to Dark mode" : "Change to light mode"
          }
          onClick={toggleMode}
          sx={{ pr: 1 }} // Padding Right to prevent edge touch
        >
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
