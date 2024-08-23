enum ProductProperty {
    Name = 'name',
    Description = 'description',
    Price = 'price',
    Stock = 'stock'
  }
  
export enum ProductAction {
  Edit = "Modified",
  Delete = "Deleted",
  Add = "Added"
}

  export interface IProduct {
    [ProductProperty.Name]: string;
    [ProductProperty.Description]: string;
    [ProductProperty.Price]: number;
    [ProductProperty.Stock]?: number;
  }
  
  export const ProductProperties = [
    ProductProperty.Name,
    ProductProperty.Description,
    ProductProperty.Price,
    ProductProperty.Stock
  ];
  
  export interface IHistory {
    timeStamp: Date;
    actionType: ProductAction;
    obj: IProduct;
  }