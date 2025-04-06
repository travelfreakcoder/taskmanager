// "use client";

// import { useState } from "react";
// import { signup } from "../signup/actions";
// import { TextField, Button, Container, Typography, CircularProgress, Box, Alert } from "@mui/material";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function SignupPage() {
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const router = useRouter();

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     const formData = new FormData(event.currentTarget);
//     const response = await signup(formData);

//     if (response?.success === false) {
//       setError(response.message);
//       setLoading(false);
//     }
//   }

//   return (
//     <Container maxWidth="xs" sx={{ mt: 5, textAlign: "center" }}>
//       <Typography variant="h5" gutterBottom>
//         Sign Up
//       </Typography>

//       {error && <Alert severity="error">{error}</Alert>}

//       <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//         <TextField label="Email" name="email" type="email" required fullWidth />
//         <TextField label="Password" name="password" type="password" required fullWidth />

//         <Button type="submit" variant="contained" color="secondary" fullWidth disabled={loading}>
//           {loading ? <CircularProgress size={24} /> : "Sign up"}
//         </Button>
//       </Box>

//       <Typography variant="body2" sx={{ mt: 2 }}>
//         Already have an account? <Link href="/">Log in here</Link>
//       </Typography>
//     </Container>
//   );
// }

"use client";

import { useState } from "react";
import { signup } from "../signup/actions";
import {
  TextField,
  Button,
  Container,
  Typography,
  CircularProgress,
  Box,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [role, setRole] = useState("user");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.append("role", role);

    const response = await signup(formData);

    if (response?.success === false) {
      setError(response.message);
      setLoading(false);
    }
  }

  return (
    <Container maxWidth="xs" sx={{ mt: 12, py: 5, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField label="Email" name="email" type="email" required fullWidth />
        <TextField
          label="Password"
          name="password"
          type="password"
          required
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel>Role</InputLabel>
          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            name="role"
            required
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Sign up"}
        </Button>
      </Box>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Already have an account? <Link href="/">Log in here</Link>
      </Typography>
    </Container>
  );
}
