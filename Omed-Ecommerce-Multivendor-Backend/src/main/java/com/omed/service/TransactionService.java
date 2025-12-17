package com.omed.service;

import com.omed.model.Order;
import com.omed.model.Seller;
import com.omed.model.Transaction;

import java.util.List;

public interface TransactionService {
    Transaction createTransaction(Order order);
    List<Transaction> getTransactionBySellerId(Seller seller);
    List<Transaction> getAllTransactions();
}
