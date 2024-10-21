import { Flex, Heading, Box, Button, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import ExpenseView from "../exp-view";
import Summary from "../summary";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransactions,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions, setTotalExpense, setTotalIncome]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Box
          border={"1px solid black"}
          p={"3"}
          display={["none", "block", "block", "block", "block"]}
        >
          <Heading color={"red.400"}>Expense Tracker</Heading>
        </Box>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={"100"}>
            New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        width={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          data={allTransactions.filter((item) => (item.type === "expense"))}
          type={"expense"}
        />
        <ExpenseView
          data={allTransactions.filter((item) => (item.type === "income"))}
          type={"income"}
        />
      </Flex>
    </Flex>
  );
}
