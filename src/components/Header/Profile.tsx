import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean
}

export function Profile({showProfileData=true}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Cardoso Assunção</Text>
          <Text color="gray.300" fontSize="small">cardosoassuncao@gmail.com</Text>
        </Box>      
      )}
      <Avatar size="md" name="Cardoso Assunção" src="https://github.com/ajcadev.png" />
    </Flex>
  )
}