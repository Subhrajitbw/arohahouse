export default {
  name: 'afterSalesPolicy',
  type: 'document',
  title: 'After Sales Policy',
  fields: [
    { name: 'structuralWarranty', type: 'array', of: [{ type: 'block' }] },
    { name: 'upholsteryCoverage', type: 'array', of: [{ type: 'block' }] },
    { name: 'deliveryTimelines', type: 'array', of: [{ type: 'block' }] },
    { name: 'installationSupport', type: 'array', of: [{ type: 'block' }] },
    { name: 'returnPolicy', type: 'array', of: [{ type: 'block' }] },
    { name: 'lifetimeSupport', type: 'array', of: [{ type: 'block' }] },
    { name: 'supportEmail', type: 'string' },
    { name: 'supportPhone', type: 'string' },
  ],
}
