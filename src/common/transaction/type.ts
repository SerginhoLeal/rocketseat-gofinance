interface Category {
  name: string;
  icon: string;
};

export interface TransactionDataProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
};

export interface TransactionProps {
  data: TransactionDataProps
};

export interface AmountProps {
  type: 'positive' | 'negative';
};