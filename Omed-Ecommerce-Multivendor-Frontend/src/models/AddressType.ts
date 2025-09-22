// Address Model/Entity

export interface Address {
  addressId: number;
  name: string;
  locality: string;
  address: string;      // Matches @Column(name = "address")
  city: string;
  pincode: string;
  state: string;
  country: string;
  mobileNo: string;
}

