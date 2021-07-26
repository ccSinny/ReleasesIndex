import { Box, Checkbox, CheckboxGroup, Text, Stack } from "@chakra-ui/react";

const Filters = ({
  activeRatingFilters,
  setActiveRatingFilters,
  activeGenreFilters,
  setActiveGenreFilters,
}) => {
  return (
      //add grid to main page, bla bla bla, 
    <Box>
      <CheckboxGroup
        value={activeRatingFilters}
        onChange={setActiveRatingFilters}
      >
        <Text>Rating</Text>
        <Stack>
          <Checkbox value={"5.00"}>5 Stars</Checkbox>
          <Checkbox value={"4.50"}>4.5 Stars</Checkbox>
          <Checkbox value={"4.00"}>4 Stars</Checkbox>
          <Checkbox value={"3.50"}>3.5 Stars</Checkbox>
          <Checkbox value={"3.00"}>3 Stars</Checkbox>
          <Checkbox value={"2.50"}>2.5 Stars</Checkbox>
          <Checkbox value={"2.00"}>2 Stars</Checkbox>
          <Checkbox value={"1.50"}>1.5 Stars</Checkbox>
          <Checkbox value={"1.00"}>1 Star</Checkbox>
        </Stack>
      </CheckboxGroup>
      <CheckboxGroup
        value={activeGenreFilters}
        onChange={setActiveGenreFilters}
      >
        <Text>Genre</Text>
        <Stack>
          <Checkbox value="Romance">Romance</Checkbox>
          <Checkbox value="Action">Action</Checkbox>
          <Checkbox value="Science_Fiction">Science Fiction</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Box>
  );
};

export default Filters;
