import { Box } from "@mui/material";
import { SignInForm } from "@/components/auth/SignInForm";

const SignInPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.background.default,
        p: 3,
      }}
    >
      <SignInForm />
    </Box>
  );
};

export default SignInPage;
