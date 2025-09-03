import { Box, Typography } from "@mui/material";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";

const SearchingTransection = ({ term }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ py: 4 }}
    >
      <ContentPasteSearchIcon
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

export default SearchingTransection;
