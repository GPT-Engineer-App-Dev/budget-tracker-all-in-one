# budget-tracker-all-in-one

Implement a budgeting app with the following features:

1. Add Transaction Page:
- Form to enter transaction details like date, amount, type (income/expense), and category (dropdown with options like groceries, bills, salary)
- "Add Transaction" button to submit the form
- After submitting, display a success message

2. Transactions List Page:  
- Table showing a list of all transactions with columns for date, amount, type, and category
- "Add Transaction" button that links to the Add Transaction page

3. Edit Transaction Page:
- Form pre-filled with details of the transaction being edited
- Ability to modify date, amount, type and category 
- "Save" button to update the transaction
- After saving, redirect back to Transactions List page

4. Delete Transaction Functionality:
- "Delete" button next to each transaction in the Transactions List table
- Clicking "Delete" should remove that transaction 
- Display a confirmation before actually deleting

Use Chakra UI components where appropriate. Mock the data with an array of sample transactions.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with REPLACE_WITH_TECH_STACK_SUMMARY.

REPLACE_WITH_TECH_STACK_POINTS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App-Dev/budget-tracker-all-in-one.git
cd budget-tracker-all-in-one
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
