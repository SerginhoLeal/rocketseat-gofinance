export interface HighlightProps {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total'
};

export interface StyleProps {
  type: 'up' | 'down' | 'total'
};
