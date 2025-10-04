export class ProductEntity {
  id: string;
  name: string;
  price: number;
  sku: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ProductExtendedEntity extends ProductEntity {
  firstLetterOut: string;
}
