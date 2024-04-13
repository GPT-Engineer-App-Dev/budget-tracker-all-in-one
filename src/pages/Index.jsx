import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Table, Thead, Tbody, Tr, Th, Td, useToast, useDisclosure, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const initialTransactions = [
  { id: 1, date: "2023-05-01", amount: 1000, type: "income", category: "salary" },
  { id: 2, date: "2023-05-02", amount: 50, type: "expense", category: "groceries" },
  { id: 3, date: "2023-05-03", amount: 100, type: "expense", category: "bills" },
];

const Index = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [formData, setFormData] = useState({
    id: null,
    date: "",
    amount: "",
    type: "income",
    category: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteId, setDeleteId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedTransactions = transactions.map((transaction) => (transaction.id === formData.id ? formData : transaction));
      setTransactions(updatedTransactions);
      setIsEditing(false);
      toast({
        title: "Transaction updated.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const newTransaction = {
        ...formData,
        id: transactions.length + 1,
        amount: parseFloat(formData.amount),
      };
      setTransactions([...transactions, newTransaction]);
      toast({
        title: "Transaction added.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    setFormData({ id: null, date: "", amount: "", type: "income", category: "" });
  };

  const handleEdit = (transaction) => {
    setFormData(transaction);
    setIsEditing(true);
  };

  const handleDelete = () => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== deleteId);
    setTransactions(updatedTransactions);
    onClose();
    toast({
      title: "Transaction deleted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <Box mb={4}>
        <form onSubmit={handleSubmit}>
          <FormControl mb={2}>
            <FormLabel>Date</FormLabel>
            <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Amount</FormLabel>
            <Input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Type</FormLabel>
            <Select name="type" value={formData.type} onChange={handleChange} required>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </Select>
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Category</FormLabel>
            <Select name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select category</option>
              <option value="groceries">Groceries</option>
              <option value="bills">Bills</option>
              <option value="salary">Salary</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue" leftIcon={<FaPlus />}>
            {isEditing ? "Save" : "Add Transaction"}
          </Button>
        </form>
      </Box>
      <Box>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Amount</Th>
              <Th>Type</Th>
              <Th>Category</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction) => (
              <Tr key={transaction.id}>
                <Td>{transaction.date}</Td>
                <Td>{transaction.amount}</Td>
                <Td>{transaction.type}</Td>
                <Td>{transaction.category}</Td>
                <Td>
                  <Button size="sm" colorScheme="blue" leftIcon={<FaEdit />} onClick={() => handleEdit(transaction)} mr={2}>
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="red"
                    leftIcon={<FaTrash />}
                    onClick={() => {
                      setDeleteId(transaction.id);
                      onOpen();
                    }}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Transaction
            </AlertDialogHeader>
            <AlertDialogBody>Are you sure you want to delete this transaction?</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default Index;
