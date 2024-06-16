export interface CreateOrganizationDTO {
  id: string;
  gstNo: string;
  panNo: string;
  legalOrganizationName: string;
  invoiceTemplateId: string;
  shortName: string;
  contactName: string;
  displayName: string;
  email: string;
  addressId: string;
  phone: string;
}

export interface UpdateOrganizationDTO {
  gstNo?: string;
  panNo?: string;
  legalOrganizationName?: string;
  invoiceTemplateId?: string;
  shortName?: string;
  contactName?: string;
  displayName?: string;
  email?: string;
  addressId?: string;
  phone?: string;
}

export interface CreateCustomerDTO {
  id: string;
  organizationId: string;
  msaValidFrom: Date;
  msaValidUpto: Date;
  legalName: string;
  displayName: string;
  email: string;
  addressId: string;
  phone: string;
}

export interface UpdateCustomerDTO {
  organizationId?: string;
  msaValidFrom?: Date;
  msaValidUpto?: Date;
  legalName?: string;
  displayName?: string;
  email?: string;
  addressId?: string;
  phone?: string;
}

export interface CreateInvoiceDTO {
  customerId: string;
  invoiceDate: string;
  totalAmount: number;
  sowId: string;
  status?: string;
}




export interface CreatePaymentDTO {
  id: string;
  invoiceId: string;
  paymentDate: Date;
  paymentAmount: number;
  paymentMethod: string;
  notes: string;
}

export interface UpdatePaymentDTO {
  invoiceId?: string;
  paymentDate?: Date;
  paymentAmount?: number;
  paymentMethod?: string;
  notes?: string;
}

export interface CreateSowDTO {
  invoiceEmailAddresses: string | string[];
  customerId: string;
  customerPONumber: string;
  title: string;
  customerSONumber: number;
  validityPeriod: {
    validFrom: string; // or Date if you prefer
    validUpto: string; // or Date if you prefer
  };
  totalValue: number;
  currency: string;
}


export interface SOWPaymentPlanAttributes {
  id: string;
  sowId: string;
  customerId: string;
  plannedInvoiceDate: Date;
  totalActualAmount: number;
}

export interface UpdateSowDTO {
  organizationId?: string;
  customerId?: string;
  sowAmount?: number;
  sowDate?: Date;
  sowDetails?: string;
}
