import { Box, Flex, Heading } from "@chakra-ui/react";
import TransactionForm from "../add-transaction";
import TransactionChartSummary from "../chart";

export default function Summary({onClose, isOpen, totalExpense, totalIncome}) {
  return (
    <Box
      p="6"
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      borderRadius={"10"}
      background={"white"}
      dispaly={"flex"}
    >
      <Flex
        w="full"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: " column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          flex={1}
          w={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"-20"}
          mr={"2"}
        >
          <Heading size={"md"} mb={"4"} color={"black.500"} fontSize={"50px"} fontStyle={"oblique"}>
            Balance is $ {totalIncome - totalExpense}
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alighItems={"center"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={'column'}>
                <Heading color={'gray.600'}> ${totalIncome}</Heading>
                <text color={'gray.600'}> Total Income </text>
            </Flex>

          </Flex>
          <Flex
            justifyContent={"space-evenly"}
            alighItems={"center"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={'column'}>
                <Heading color={'gray.600'}> $ {totalExpense} </Heading>
                <text color={'gray.600'}> Total Expense </text>
            </Flex>

          </Flex>
        </Flex>
        <Box
            flex={1}
            mt={"10"}
            ml={"-90px"}
            mr={"5"}
            width={"300px"}
            height={"300px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}>
                <Heading>
                    <TransactionChartSummary Expense={totalExpense} Income = {totalIncome}/>
                </Heading>
        </Box>
      </Flex>
      <TransactionForm onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}
