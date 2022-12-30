export interface IData {
    categoryN: string;
    icon: React.ReactNode;
    actualData: {
      id: string;
      title: string;
      description: string;
      url: string;
      isCompleted: boolean;
    }[];
  }