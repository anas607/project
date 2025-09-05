import AssignmentIcon from '@mui/icons-material/Assignment';
import BadgeIcon from '@mui/icons-material/Badge';
import { Box, Typography } from "@mui/material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const SearchinAdvertisments = ({ term }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ py: 4 }}
    >
      <AssignmentIcon
        sx={{
          fontSize: 100,
          color: "rgb(14, 74, 35)",
          animation: "spin 2s linear infinite",
          "@keyframes spin": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      />
      <Typography mt={2} fontSize="32px" fontWeight="bold" color="text.secondary">
        يتم البحث الآن عن ({term})
      </Typography>
    </Box>
  );
};

export default SearchinAdvertisments;
